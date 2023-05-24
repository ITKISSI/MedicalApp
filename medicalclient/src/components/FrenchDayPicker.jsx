import { useState, useEffect } from "react";

const FrenchDayPicker = ({ selectedDays, setSelectedDays,setTimeRanges,timeRanges}) => {

  const handleDayClick = (dayName) => {
    if (selectedDays.includes(dayName)) {
      setSelectedDays(selectedDays.filter((day) => day !== dayName));
      setTimeRanges((prevTimeRanges) => {
        const { [dayName]: removed, ...restTimeRanges } = prevTimeRanges;
        return restTimeRanges;
      });
    } else {
      setSelectedDays([...selectedDays, dayName]);
    }
  };

  const handleTimeChange = (dayName, startOrEnd, time) => {
    setTimeRanges((prevTimeRanges) => ({
      ...prevTimeRanges,
      [dayName]: {
        ...prevTimeRanges[dayName],
        [startOrEnd]: time,
      },
    }));
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
      <ul className="list-unstyled flex-column">
        {daysOfWeek.map((day) => (
          <li key={day.id}>
            <div className="form-check d-flex align-item-center justify-content-between">
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={`day${day.id}`}
                  checked={selectedDays.includes(day.name)}
                  onChange={() => handleDayClick(day.name)}
                />
                <label
                  className="form-check-label p-0"
                  htmlFor={`day${day.id}`}
                >
                  {day.name}
                </label>
              </div>
              {selectedDays.includes(day.name) && (
                <div className="d-flex">
                  <div className="form-group">
                    <label htmlFor="startTime">Start Time:</label>
                    <input
                      type="time"
                      id="startTime"
                      value={timeRanges[day.name]?.startTime || ''}
                      onChange={(e) => handleTimeChange(day.name, 'startTime', e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="endTime">End Time:</label>
                    <input
                      type="time"
                      id="endTime"
                      value={timeRanges[day.name]?.endTime || ''}
                      onChange={(e) => handleTimeChange(day.name, 'endTime', e.target.value)}
                    />
                  </div>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FrenchDayPicker;
