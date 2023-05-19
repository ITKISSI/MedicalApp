import React, { useState, useEffect } from 'react';

const SearchZone = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
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

    let filteredResults = [];

    if (query === '') {
      if (filter === 'Doctor') {
        filteredResults = medecinData.medecinList.map((medecin) => ({ doctor: medecin }));
      } else if (filter === 'Clinic') {
        filteredResults = cabinetData.cabinetList.map((cabinet) => ({ cabinet }));
      } else if (filter === 'Specialite') {
        filteredResults = medecinData.medecinList.map((medecin) => ({ doctor: medecin, specialite: medecin.specialite }));
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
      } else if (filter === 'Specialite') {
        filteredResults = medecinData.medecinList.filter((medecin) =>
          medecin.specialite.toLowerCase().includes(query.toLowerCase())
        ).map((medecin) => ({ doctor: medecin }));
      }
    }

    if (selectedCity) {
      filteredResults = await Promise.all(
        filteredResults.map(async (result) => {
          if (result.cabinet) {
            const cityName = await getCityName(result.cabinet.latitude, result.cabinet.longitude);
            return { ...result, city: cityName };
          }
          return result;
        })
      );

      filteredResults = filteredResults.filter((result) => {
        if (result.cabinet) {
          return result.city === selectedCity;
        }
        return true;
      });
    }

    setResults(filteredResults);
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

  return (
    <div className="hero_map">
      <div id="map_listing"></div>
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
              <button id="doctor" onClick={() => setFilter('Doctor')}>
                <label> Doctor </label>
              </button>
            </li>
            <li>
              <button id="clinic" onClick={() => setFilter('Clinic')}>
                <label> Clinic </label>
              </button>
            </li>
            <li>
              <button id="specialite" onClick={() => setFilter('Specialite')}>
                <label> Specialite </label>
              </button>
            </li>
            <li>
              <select id='select' value={selectedCity} onChange={(event) => setSelectedCity(event.target.value)}>
                <option value="">Select a city</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </li>
          </ul>
          <ul>
            {results.map((result) => (
              <li key={result.doctor ? result.doctor.id : result.cabinet.id}>
                {/* {result.city && <p>{result.city}</p>} */}
                {result.doctor ? (
                  <div>
                    {filter === 'Doctor' && (
                      <p>
                        {result.doctor.firstName} {result.doctor.lastName}
                      </p>
                    )}
                    {filter === 'Specialite' && <p>{result.doctor.specialite}</p>}
                    {filter === 'All' && <p>{result.cabinet.denomination}</p>}
                  </div>
                ) : (
                  <div>
                    <p>{result.cabinet.denomination}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </form>
    </div>
  );
};

export default SearchZone;
