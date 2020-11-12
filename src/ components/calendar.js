import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../App.css';
import '../../node_modules/react-calendar/dist/Calendar.css';

function Calendar2() {
    
  const [value, onChange] = useState(new Date());
  //Use onChange prop for getting new values.
  //onChange  Function called when the user clicks an item (day on month view, month on year view and so on) on the most detailed view available.	n/a	(value, event) => alert('New date is: ', value)
  //value	Calendar value. Can be either one value or an array of two values.
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

export default Calendar2;
