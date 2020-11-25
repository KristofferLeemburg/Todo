import React from 'react';
import {Helmet} from "react-helmet";
import Calendar from "./components/calendar"
import './App.css';

function App() {
  return (
    <div className="main-container">
      <Helmet>
                <title>ToDo List</title>
      </Helmet>
     <Calendar />
    </div> 
  )}

export default App;

