import { useState } from "react";

const TimeRangePicker = ({ startTime, setStartTime, endTime, setEndTime }) => {
  const handleStartTimeChange = (event) => {
    setStartTime(event.target.value);
  };

  const handleEndTimeChange = (event) => {
    setEndTime(event.target.value);
  };

  return (
    <div className="d-flex">
      <div className="form-group">
        <label htmlFor="startTime">Start Time:</label>
        <input
          type="time"
          id="startTime"
          value={startTime}
          onChange={handleStartTimeChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="endTime">End Time:</label>
        <input
          type="time"
          id="endTime"
          value={endTime}
          onChange={handleEndTimeChange}
        />
      </div>
    </div>
  );
};

export default TimeRangePicker;
