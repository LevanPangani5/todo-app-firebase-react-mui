import {useState ,useEffect} from 'react'
import './App.css';
import Todo from './Todo'
import {todosCollectionRef}from './firebase';
import { getDocs,addDoc} from 'firebase/firestore';
import {Button, InputLabel , FormControl ,Input} from "@mui/material";


function App() {

  const[todos,setTodos] =useState([]);
  const[input,setInput] =useState('');
 // const todosCollectionRef =collection(db ,'todos');
  //getting data from firebase 
  useEffect(()=>{
    const getTodos = async()=>{
      const data =await getDocs(todosCollectionRef);
      setTodos(data.docs.map((doc)=>({
        ...doc.data(), id:doc.id
      })))
      
    }
    getTodos();
  });

  const addTodo =async ()=>{
     await addDoc(todosCollectionRef, {
      todo:input,
    });
     setInput('');
  }

  return (
    
    <div className="App">
      {/*<input  value={input} onChange={e =>setInput(e.target.value)}/>
      <button type='submit' onClick={addTodo}  disabled={!input} >add todo</button>
      <br/>*/}

      <form>
        <FormControl>
          <InputLabel>✅ write a todo </InputLabel>
          <Input value={input} onChange={e =>setInput(e.target.value)}/>
        </FormControl>
        { /* <input value={input} onChange={e =>setinput(e.target.value)}/>*/}
        <Button type='submit' onClick={addTodo} variant='contained' disabled={!input} >Add Todo</Button> 

      </form>
      <ul style={{listStyleType:'none'}}>
      {todos.map((todo ,index)=>
        <li>
          {<Todo todo={todo.todo} id={todo.id} index={index+1}/>}
        </li>
      
      )}
      </ul>
        </div>
        )
}

export default App;
