import React, { useState } from 'react'

function SearchZone() {

  const [query ,setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [filter, setFilter] = useState("All");
  
  const handleSearch = async (event) => {
    event.preventDefault();

    // Requête à l'API pour récupérer tous les cabinets
    const response = await fetch('http://localhost:8080/api/v1/cabinet');
    const data = await response.json();

    // Filtrer les résultats en fonction de la chaîne de caractères saisie par l'utilisateur et du filtre sélectionné
    let filteredResults = [];
    if (query === "") {

      if (filter === "All") {
        filteredResults = data.cabinetList.flatMap((cabinet) => {
          return cabinet.medecins.map((medecin) => ({ doctor: medecin, cabinet }));
        });
      } else if (filter === "Doctor") {
        filteredResults = data.cabinetList.flatMap((cabinet) => {
          return cabinet.medecins.map((medecin) => ({ doctor: medecin }));
        });
      } else if (filter === "Cabinet") {
        filteredResults = data.cabinetList.map((cabinet) => ({ cabinet }));
      }
    } 
    
    else {
     if (filter === "Doctor") {
      
      filteredResults = data.cabinetList.flatMap((cabinet) => {
        const matchingDoctors = cabinet.medecins.filter((medecin) =>
          medecin.firstName.toLowerCase().includes(query.toLowerCase()) || medecin.lastName.toLowerCase().includes(query.toLowerCase())
        );
        return matchingDoctors.map((doctor) => ({ doctor, cabinet }));
      });
    } else if (filter === "Cabinet") {
      filteredResults = data.cabinetList.filter((cabinet) => {
        const nameMatches = cabinet.denomination.toLowerCase().includes(query.toLowerCase());
        return nameMatches;
      }).map((cabinet) => {
        return { cabinet };
      });
    }
    else if (filter === "All" ) {
      // Filtrer les cabinets en fonction de la chaîne de caractères saisie par l'utilisateur
      filteredResults = data.cabinetList.filter((cabinet) => {
        const nameMatches = cabinet.denomination.toLowerCase().includes(query.toLowerCase());
        const doctorMatches = cabinet.medecins.some(
          (medecin) => medecin.firstName.toLowerCase().includes(query.toLowerCase()) || medecin.lastName.toLowerCase().includes(query.toLowerCase())
        );
        return nameMatches || doctorMatches;
      }).flatMap((cabinet) => {
        // Filtrer les médecins associés à chaque cabinet en fonction de la chaîne de caractères saisie par l'utilisateur
        const matchingDoctors = cabinet.medecins.filter((medecin) =>
          medecin.firstName.toLowerCase().includes(query.toLowerCase()) || medecin.lastName.toLowerCase().includes(query.toLowerCase())
        );
        // Créer un objet pour chaque médecin et cabinet correspondant
        return matchingDoctors.map((doctor) => ({ doctor, cabinet }));
      });
      // Ajouter les cabinets qui ne contiennent pas de médecins correspondant à la chaîne de caractères saisie par l'utilisateur
      const nonMatchingCabinets = data.cabinetList.filter((cabinet) => {
        const nameMatches = cabinet.denomination.toLowerCase().includes(query.toLowerCase());
        const doctorMatches = cabinet.medecins.some(
          (medecin) => medecin.firstName.toLowerCase().includes(query.toLowerCase()) || medecin.lastName.toLowerCase().includes(query.toLowerCase())
        );
        return nameMatches && !doctorMatches;
      }).map((cabinet) => ({ cabinet }));
      filteredResults = filteredResults.concat(nonMatchingCabinets);
    }
        
    }
    
    // Retourner la liste des cabinets filtrée
    setResults(filteredResults);
  };

  return (
    <div className="hero_map">
      <div id="map_listing"></div>
      <form onSubmit={handleSearch} className="search_wp">
        <div id="custom-search-input">
          <div className="input-group">
            <input type="text" className="search-query" 
              placeholder="Ex. Name, Specialization ...." 
              value={query} 
              onChange={(event) => setQuery(event.target.value)}
            />
            <input type="submit" className="btn_search" value="Search"/>
          </div>
          <ul>
            <li>
              <button id="all" onClick={() => setFilter("All")}>
            <label> All </label>
              </button>
            </li>
            <li>
               <button  id="doctor" onClick={() => setFilter("Doctor")}>
              <label>
                Doctor
              </label>
            </button>
            </li>

            <li>
               <button id="clinic" onClick={() => setFilter("Cabinet")}>
              <label>
                Clinic
              </label>
            </button>
            </li>        

          </ul>
            
          
          <ul>
            {results.map((result) => (
              <li key={result.doctor ? result.doctor.id : result.cabinet.id}>
                {result.doctor ? (
                  <div>
                    <p>{result.doctor.firstName} {result.doctor.lastName}</p>
                    {filter === "All" && <parent>{result.cabinet.denomination}</parent>}
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
  )
}

export default SearchZone
