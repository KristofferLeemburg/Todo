import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './App.css';
import 'react-calendar/dist/Calendar.css';

function App() {
  const [value, onChange] = useState(new Date());
  return (
    <div className="calender">
    <Calendar
      onChange={onChange}
      value={value}
      className={['c1','c2']}
    />
  </div>
  );
}

export default App;
