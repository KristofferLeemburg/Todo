import React, { useState } from 'react';
import Calendar from 'react-calendar';
import ToDoList from "./todolist"
import '../App.css';
import '../../node_modules/react-calendar/dist/Calendar.css';
import Vacation from "../data/vacation.json";
import Dates from "../data/dates.json"

const vacation = Vacation;
const Calendar2 = () => {
  const [on, setOn] = useState(false);
  const [first , setFirst] = useState(new Date());
  const onChange = date => {
    setFirst(date);
  }
  const Check = (date) =>{
    if(`${date.getMonth()+1}-${date.getDate()}-${date.getFullYear()}` === 
    `${first.getMonth()+1}-${first.getDate()}-${first.getFullYear()}`){ 
      setOn(on => !on)
        }}
  return (
    <div>
      <Calendar
        onChange={onChange}
        value={first}
        tileClassName={({ date }) => {
        for (let i = 0; i < vacation.length; i++) {
          if(vacation[i].date === `${date.getMonth()+1}-${date.getDate()}-${date.getFullYear()}` ){
            return "color";  
           }}
        for (let i = 0; i < Dates.length; i++) {
          if(Dates[i].date === `${date.getMonth()+1}-${date.getDate()}-${date.getFullYear()}` ){
            return "color-todo"           
            }}
          }}
         tileContent={({ date }) => {
          for (let i = 0; i < vacation.length; i++) {
          if(`${date.getMonth()+1}-${date.getDate()}-${date.getFullYear()}` === vacation[i].date){
            return "\n" + vacation[i].name.substring(0,1);
           }}
          //  console.log(vacation[0].date)
         }}
          onClickDay={Check}   
      />
      <div>{on ? <ToDoList ShowToDoList={on} first={first} vacation={vacation[0].date} Dates={Dates} /> : null}</div>
    </div>
  );
}
export default Calendar2;
