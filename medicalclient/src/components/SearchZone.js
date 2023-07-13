import React, { useState } from 'react';

const SearchZone = ({onSearchResults }) => {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All');
  const [selectedCity, setSelectedCity] = useState('');
  const cities = ['Casablanca', 'Rabat', 'Marrakech', 'Oujda','Tata'];
  

  const handleSearch = async (event) => {
    event.preventDefault();

    const [cabinetResponse, medecinResponse] = await Promise.all([
      fetch('http://localhost:8080/api/v1/cabinet'),
      fetch('http://localhost:8080/api/v1/medcin'),
    ]);

    const cabinetData = await cabinetResponse.json();
    const medecinData = await medecinResponse.json();

    for (const cabinet of cabinetData.cabinetList) {
      const cityName = await getCityName(cabinet.latitude, cabinet.longitude);
      cabinet.city = cityName;
    }

    let filteredResults = [];

    if (query === '') {
      if (filter === 'Doctor') {
        filteredResults = medecinData.medecinList.map((medecin) => ({ doctor: medecin }));
      } else if (filter === 'Clinic') {
        filteredResults = cabinetData.cabinetList.map((cabinet) => ({ cabinet }));
      } 
    } else {
      if (filter === 'Doctor') {
        filteredResults = medecinData.medecinList.filter((medecin) =>
          medecin.firstName.toLowerCase().includes(query.toLowerCase()) || medecin.lastName.toLowerCase().includes(query.toLowerCase())
        ).map((medecin) => ({ doctor: medecin }));
      } else if (filter === 'Clinic') {
        filteredResults = cabinetData.cabinetList.filter((cabinet) =>
          cabinet.denomination.toLowerCase().includes(query.toLowerCase())
        ).map((cabinet) => ({ cabinet }));
      } 
    }
   
    if (selectedCity) {
      // Ajouter les noms de ville aux cabinets
      for (const result of filteredResults) {
        if (result.cabinet) {
          const cityName = await getCityName(result.cabinet.latitude, result.cabinet.longitude);
          result.cabinet.city = cityName;
        }
      }
    
      // Filtrer les résultats par ville
      filteredResults = filteredResults.filter((result) => {
        if (result.cabinet) {
          return result.cabinet.city === selectedCity;
        }
        return true;
      });
    }
    
    onSearchResults(filteredResults); // Appel à la fonction onSearchResults avec les résultats filtrés
    
  };

  const getCityName = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyATeoALYkOOyyAcXF0gqTgZH1zxUgAdpnU`
      );
      const data = await response.json();
      if (data.status === 'OK') {
        const cityName = data.results[0].address_components.find(
          (component) =>
            component.types.includes('locality') ||
            component.types.includes('sublocality') ||
            component.types.includes('administrative_area_level_1')
        ).long_name;
        return cityName;
      } else {
        return 'Aucune ville trouvée';
      }
    } catch (error) {
      console.error('Erreur lors de la conversion :', error);
      return 'Erreur lors de la conversion';
    }
  };
  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
    setQuery('');
  
    if (selectedFilter === 'Speciality') {
      handleSearch(new Event('submit'));
    }
  };

  const handleCityChange = (selectedCity) => {
    setSelectedCity(selectedCity);
    setQuery(''); // Réinitialiser la requête
    handleSearch(new Event('submit')); // Appeler la fonction handleSearch avec une nouvelle soumission de formulaire
  };
  
  const imageUrl = '../img/image2.jpeg';

  return (
    <div className="hero_map">
      <div id="map_listing" style={{backgroundImage: `url(${imageUrl})`}}></div>
      <form onSubmit={handleSearch} className="search_wp">
        <div id="custom-search-input">
          <div className="input-group">
            <input
              type="text"
              className="search-query"
              placeholder="Ex. Name, Specialization ...."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <input type="submit" className="btn_search" value="Search" />
          </div>
          <ul>
            <li>
              <button id="doctor" onClick={() => handleFilterChange('Doctor')}
              >
                <label> Doctor </label>
              </button>
            </li>
            <li>
              <button id="clinic" onClick={() => handleFilterChange('Clinic')}>
                <label> Clinic </label>
              </button>
            </li>
            
            <li>
            <select id="select" value={selectedCity} onChange={(event) => handleCityChange(event.target.value)}>
                <option value="">Select a city</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
            </select>
            </li>
          </ul>
         
        </div>
      </form>
    </div>
  );
};

export default SearchZone;