import { useState } from "react";

const TimeRangePicker = ({ startTime, setStartTime, endTime, setEndTime }) => {
  const handleStartTimeChange = (event) => {
    setStartTime(event.target.value);
  };

  const handleEndTimeChange = (event) => {
    setEndTime(event.target.value);
  };

  return (
    <div>
      <div className="form-group">
        <label>L'heur</label>
      </div>
      <label htmlFor="startTime">Start Time:</label>
      <input
        type="time"
        id="startTime"
        value={startTime}
        onChange={handleStartTimeChange}
      />

      <label htmlFor="endTime">End Time:</label>
      <input
        type="time"
        id="endTime"
        value={endTime}
        onChange={handleEndTimeChange}
      />
    </div>
  );
};

export default TimeRangePicker;
