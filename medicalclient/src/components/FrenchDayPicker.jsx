import { useState } from "react";

const FrenchDayPicker = ({ selectedDays, setSelectedDays }) => {
  const handleDayClick = (dayName) => {
    setSelectedDays(dayName === selectedDays ? null : dayName);
  };

  const daysOfWeek = [
    { id: 1, name: "Lundi" },
    { id: 2, name: "Mardi" },
    { id: 3, name: "Mercredi" },
    { id: 4, name: "Jeudi" },
    { id: 5, name: "Vendredi" },
    { id: 6, name: "Samedi" },
    { id: 7, name: "Dimanche" },
  ];

  return (
    <div>
      <div className="form-group">
        <label>Jours</label>
      </div>
      <ul className="list-unstyled">
        {daysOfWeek.map((day) => (
          <li key={day.id}>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id={`day${day.id}`}
                checked={day.name === selectedDays}
                onChange={() => handleDayClick(day.name)}
              />
              <label className="form-check-label p-0" htmlFor={`day${day.id}`}>
                {day.name}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FrenchDayPicker;
