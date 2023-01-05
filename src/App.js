
import './App.css';
import { useDispatch , useSelector } from 'react-redux';
import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import { filterTodo } from './redux/action/Action';
import { Button } from 'react-bootstrap';

function App() {
  const  allTodos= useSelector (state=>state.TodoReducer.todoS)
  const todoFiltred = useSelector(state=> state.TodoReducer.filter)
  const dispatch = useDispatch()
  
  return (
    <div className="App">
    
    
      <header className='.App-header'> 
      <AddTodo/>
        <div>
          <Button className='fil'  variant="info" onClick={()=>dispatch(filterTodo('All'))} > All </Button >
          <Button className='fil' variant="secondary" onClick={()=>dispatch(filterTodo(true))} > Done </Button >
          <Button className='fil' variant="warning" onClick={()=>dispatch(filterTodo(false))} > notDone </Button >
        </div>
        <div>
        <TodoList allTodos={ todoFiltred ===  'All' ? allTodos : allTodos.filter(el => el.isDone === todoFiltred )}/>
        </div>

      </header>
    </div>
  );
}

export default App;
//{allTasks.map((elm,i) =>(<p key={i}>{elm.description} {elm.isDone? <i class="fa fa-check-circle-o" aria-hidden="true"></i>:<i class="fa fa-circle-o" aria-hidden="true"></i>}</p>))}
