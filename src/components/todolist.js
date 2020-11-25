import React, { useState } from "react";
import Todo from "./todo";
import Dates from "../data/dates.json"
import Vacation from "../data/vacation.json";

const newArray = Vacation.concat(Dates);

const ToDoList = ({first}) => {
    const [value, setValue] = useState("");
    const [todos, setTodos] = useState(newArray);
    const formattedDate = `${first.getMonth()+1}-${first.getDate()}-${first.getFullYear()}`;
   
    const handleNewTodoChange = (e) => {
        e.preventDefault();
        setValue(e.target.value);
            }
    const submitTodo = (e) => {
        e.preventDefault();
        const formattedDate = `${first.getMonth()+1}-${first.getDate()}-${first.getFullYear()}`;
        setTodos([...todos, { date: formattedDate, name: value }]);
        setValue("");    
        console.log(JSON.stringify(todos)) 
    };
   
    return (
        <div className="todoListMain">
            <div className="header">
                <input onChange={handleNewTodoChange} value={value} className="todo-input" type="text" />
                <button onClick={submitTodo} type="submit">add</button>
                <div className="todolist">
           
                    {todos.filter((e) => e.date === formattedDate )
                    .map((todo) => (
                        <Todo 
                        formattedDate={formattedDate}
                        key={todo.name}
                        first={first}
                        todos={todos} 
                        setTodos={setTodos} 
                        todoItem={todo.name} 
                        todo={todo}/>
                    ))
                    }
                </div>
            </div>
        </div>
    );
};
export default ToDoList;