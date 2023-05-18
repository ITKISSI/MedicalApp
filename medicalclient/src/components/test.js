import React, { useState, useEffect } from 'react';
import OpenCageGeocoder from 'opencage-api-client';

const geocoder = new OpenCageGeocoder({ key: 'YOUR_API_KEY' });

const getCabinetCity = async (cabinet) => {
  try {
    const response = await geocoder.reverse({ q: `${cabinet.latitude},${cabinet.longitude}` });
    const city = response.results[0].components.city;
    return city;
  } catch (error) {
    console.error(error);
  }
};

const SearchZone = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [filter, setFilter] = useState('All');
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/v1/cities');
        const data = await response.json();
        setCities(data.cities);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCities();
  }, []);

  const handleCitySelect = async (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    const response = await fetch(`http://localhost:8080/api/v1/cabinets?city=${city}`);
    const data = await response.json();
    const cabinetList = data.cabinets;
    const cabinetWithCity = await Promise.all(cabinetList.map(async (cabinet) => {
      const city = await getCabinetCity(cabinet);
      return { ...cabinet, city };
    }));
    setResults(cabinetWithCity);
  };

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
      }
      else if (filter === 'Specialite') {
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
      }else if (filter === 'Specialite') {
        filteredResults = medecinData.medecinList.filter((medecin) =>
        medecin.specialite.toLowerCase().includes(query.toLowerCase()) 
      ).map((medecin) => ({ doctor: medecin }));
      } 

   
    }
    setResults(filteredResults);
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
              <select value={selectedCity} onChange={handleCitySelect}>
                <option value="">Select a city</option>
                {cities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </li>
          </ul>
          <ul>
            {results.map((result) => (
              <li key={result.id}>
                {result.city && <p>{result.city}</p>}
                {result.doctor && (
                  <div>
                    {filter === 'Doctor' && <p>{result.doctor.firstName} {result.doctor.lastName}</p>}
                    {filter === 'Specialite' && <p>{result.doctor.specialite}</p>}
                    {filter === 'All' && <p>{result.denomination}</p>}
                  </div>
                )}
                {result.cabinet && (
                  <div>
                    <p>{result.denomination}</p>
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








import React, { useState, useEffect } from 'react';

const SearchZone = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [filter, setFilter] = useState('All');
  const [cities, setCities] = useState(['City 1', 'City 2', 'City 3']);
  const [selectedCity, setSelectedCity] = useState('');

  const handleCitySelect = async (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    const response = await fetch(`http://localhost:8080/api/v1/cabinets?city=${city}`);
    const data = await response.json();
    setResults(data.cabinetList);
  };

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
      } else if (filter === 'All') {
        filteredResults = [...cabinetData.cabinetList, ...medecinData.medecinList];
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
      } else if (filter === 'All') {
        const filteredCabinets = cabinetData.cabinetList.filter((cabinet) =>
          cabinet.denomination.toLowerCase().includes(query.toLowerCase())
        ).map((cabinet) => ({ cabinet }));
        const filteredDoctors = medecinData.medecinList.filter((medecin) =>
          medecin.firstName.toLowerCase().includes(query.toLowerCase()) || medecin.lastName.toLowerCase().includes(query.toLowerCase())
        ).map((medecin) => ({ doctor: medecin }));
        filteredResults = [...filteredCabinets, ...filteredDoctors];
      }
    }
    setResults(filteredResults);
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
              <button id="all" onClick={() => setFilter('All')}>
                <label> All </label>
              </button>
            </li>
            <li>
              <select value={selectedCity} onChange={handleCitySelect}>
                <option value="">Select a city</option>
                {cities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </li>
          </ul>
          <ul>
            {results.map((result) => (
              <li key={result.id}>
                {result.doctor && (
                  <div>
                    {filter === 'Doctor' && <p>{result.doctor.firstName} {result.doctor.lastName}</p>}
                    {filter === 'All' && <p>{result.doctor.firstName} {result.doctor.lastName} ({result.doctor.specialite})</p>}
                  </div>
                )}
                {result.cabinet && (
                  <div>
                    {filter === 'Clinic' && <p>{result.cabinet.denomination}</p>}
                    {filter === 'All' && <p>{result.cabinet.denomination}</p>}
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





import React, { useState, useEffect } from 'react';
import Geocode from 'react-geocode';

const SearchZone = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [filter, setFilter] = useState('All');
  const [cities, setCities] = useState(['City 1', 'City 2', 'City3']);
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    Geocode.setApiKey('AIzaSyC-2H5_BTMVElmn0c-sgYcqc1CEx7jrbCs');
  }, []);

  const handleCitySelect = async (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    const response = await fetch(`http://localhost:8080/api/v1/cabinet`);
    const data = await response.json();
    const filteredCabinets = data.cabinetList.filter(async (cabinet) => {
      const { lat, lng } = cabinet.location;
      const geocodeResponse = await Geocode.fromLatLng(lat, lng);
      const address = geocodeResponse.results[0].formatted_address;
      const city = address.split(',').slice(-2, -1)[0].trim();
      return city === selectedCity;
    }).map((cabinet) => ({ cabinet }));
    setResults(filteredCabinets);
  };

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
      } else if (filter === 'All') {
        filteredResults = [...cabinetData.cabinetList, ...medecinData.medecinList];
      }
    } else {
      if (filter === 'Doctor') {
        filteredResults = medecinData.medecinList.filter((medecin) =>
          medecin.firstName.toLowerCase().includes(query.toLowerCase()) || medecin.lastName.toLowerCase().includes(query.toLowerCase())
        ).map((medecin) => ({ doctor: medecin }));
      } else if (filter === 'Clinic') {
        const filteredCabinets = cabinetData.cabinetList.filter(async (cabinet) => {
          const { lat, lng } = cabinet.location;
          const geocodeResponse = await Geocode.fromLatLng(lat, lng);
          const address = geocodeResponse.results[0].formatted_address;
          const city = address.split(',').slice(-2, -1)[0].trim();
          return city === selectedCity && cabinet.denomination.toLowerCase().includes(query.toLowerCase());
        }).map((cabinet) => ({ cabinet }));
        filteredResults = filteredCabinets;
      } else if (filter === 'All') {
        const filteredCabinets = cabinetData.cabinetList.filter(async (cabinet) => {
          const { lat, lng } = cabinet.location;
          const geocodeResponse = await Geocode.fromLatLng(lat, lng);
          const address = geocodeResponse.results[0].formatted_address;
          const city = address.split(',').slice(-2, -1)[0].trim();
          return city === selectedCity && cabinet.denomination.toLowerCase().includes(query.toLowerCase());
        }).map((cabinet) => ({ cabinet }));
        const filteredDoctors = medecinData.medecinList.filter((medecin) =>
          medecin.firstName.toLowerCase().includes(query.toLowerCase()) || medecin.lastName.toLowerCase().includes(query.toLowerCase())
        ).map((medecin) => ({ doctor: medecin }));
        filteredResults = [...filteredCabinets, ...filteredDoctors];
      }
    }
    setResults(filteredResults);
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
              <button id="all" onClick={() => setFilter('All')}>
                <label> All </label>
              </button>
            </li>
            <li>
              <select value={selectedCity} onChange={handleCitySelect}>
                <option value="">Select a city</option>
                {cities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </li>
          </ul>
          <ul>
            {results.map((result) => (
              <li key={result.id}>
                {result.doctor && (
                  <div>
                    {filter === 'Doctor' && <p>{result.doctor.firstName} {result.doctor.lastName}</p>}
                    {filter === 'All' && <p>{result.doctor.firstName} {result.doctor.lastName} ({result.doctor.specialite})</p>}
                  </div>
                )}
                {result.cabinet && (
                  <div>
                    {filter === 'Clinic' && <p>{result.cabinet.denomination}</p>}
                    {filter === 'All' && <p>{result.cabinet.denomination}</p>}
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
