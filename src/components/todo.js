import React from "react";

const Todo  = ({ todo, todoItem, todos, setTodos}) => {  
   
 const deleteToDo = (e) => {
    e.preventDefault(); // prevent default actions..???
   setTodos (todos.filter((e) => e.name !== todo.name));
  }
    return( 
        <div className="todo">
            <li className="theList"> {todoItem}
            </li>
            <button className="delete" onClick={deleteToDo}>x</button>
        </div>
    );
};
export default Todo;
