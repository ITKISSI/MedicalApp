import React, { useState } from 'react';

function SearchZone() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [filter, setFilter] = useState('All');


  // useEffect(() => {
  //   Geocode.setApiKey('AIzaSyC-2H5_BTMVElmn0c-sgYcqc1CEx7jrbCs');
  // }, []);



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
      } else if (filter === 'Specialite') {
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
      <form onSubmit={handleSearch} className="search_wp" >
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

          </ul>
          <ul>
            {results.map((result) => (
              <li key={result.doctor ? result.doctor.id : result.cabinet.id}>
                {result.city && <p>{result.city}</p>}
                {result.doctor ? (
                  <div>
                    {filter === 'Doctor' && <p>{result.doctor.firstName} {result.doctor.lastName}</p>}
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
}

export default SearchZone;