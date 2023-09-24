import React, { useState } from 'react';

function DOBDropdown() {
  const daysInMonth = {
    '01': 31,
    '02': 28,
    '03': 31,
    '04': 30,
    '05': 31,
    '06': 30,
    '07': 31,
    '08': 31,
    '09': 30,
    '10': 31,
    '11': 30,
    '12': 31,
  };

  const [dob, setDOB] = useState({
    day: '',
    month: '',
    year: '',
  });

  const handleSelectDay = (event) => {
    setDOB({ ...dob, day: event.target.value });
  };

  const handleSelectMonth = (event) => {
    setDOB({ ...dob, month: event.target.value });
  };

  const handleSelectYear = (event) => {
    setDOB({ ...dob, year: event.target.value });
  };

  const generateDayOptions = () => {
    const month = dob.month;
    const days = daysInMonth[month];
    const options = [];
    for (let i = 1; i <= days; i++) {
      const day = i < 10 ? '0' + i : i;
      options.push(<option key={day} value={day}>{day}</option>);
    }
    return options;
  };

  const generateMonthOptions = () => {
    const options = [];
    for (let i = 1; i <= 12; i++) {
      const month = i < 10 ? '0' + i : i;
      options.push(<option key={month} value={month}>{month}</option>);
    }
    return options;
  };

  const generateYearOptions = () => {
    const options = [];
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= currentYear - 100; i--) {
      options.push(<option key={i} value={i}>{i}</option>);
    }
    return options;
  };

  return (
    <div>
      <h2>Date of Birth</h2>
      <select value={dob.day} onChange={handleSelectDay}>
        <option value="">-- Day --</option>
        {dob.month && generateDayOptions()}
      </select>
      <select value={dob.month} onChange={handleSelectMonth}>
        <option value="">-- Month --</option>
        {generateMonthOptions()}
      </select>
      <select value={dob.year} onChange={handleSelectYear}>
        <option value="">-- Year --</option>
        {generateYearOptions()}
      </select>
      {dob.day && dob.month && dob.year && (
        <p>Your date of birth is {dob.day}/{dob.month}/{dob.year}.</p>
      )}
    </div>
  );
}

export default DOBDropdown;
