import React, { useState, useEffect } from 'react';

const Geocoding = () => {
  const [cabinetList, setCabinetList] = useState([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    fetchCabinetList();
  }, []);

  const fetchCabinetList = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/cabinet');
      const data = await response.json();
      if (data.cabinetList && data.cabinetList.length > 0) {
        setCabinetList(data.cabinetList);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération de la liste des cabinets :', error);
    }
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

  const getCabinetDetails = async (cabinet) => {
    const cityName = await getCityName(cabinet.latitude, cabinet.longitude);
    return { ...cabinet, cityName };
  };

  const handleCabinetButtonClick = async () => {
    setShowResults(true);

    const updatedCabinetList = await Promise.all(
      cabinetList.map((cabinet) => getCabinetDetails(cabinet))
    );
    setCabinetList(updatedCabinetList);
  };

  return (
        
      <div>
        <button onClick={handleCabinetButtonClick}>Cabinet</button>
        {showResults && (
          <div>
            <h3>Liste des cabinets :</h3>
            <ul>
              {cabinetList.map((cabinet) => (
                <li key={cabinet.id}>
                  {cabinet.denomination}, Ville : {cabinet.cityName}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    
  );
};

export default Geocoding;
