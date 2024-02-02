import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, editTodo } from './config/redux-config/reducers/todoSlice';

const App = () => {
  const todo = useRef();
  const selector = useSelector(state => state.todos)
  const dispatch = useDispatch();

  const addTodoToStore = () => {
    console.log(todo.current.value);
    dispatch(addTodo({
      title: todo.current.value
    }))
    console.log(selector);
    todo.current.value = ''
  }


  const deleteTodo = (index)=>{
    dispatch(removeTodo({
      index
    }))
  }
  const updateTodo = (index)=>{
    dispatch(editTodo({
      index
    }))
  }
  return (
    <>
      <input type="text" placeholder='todo' ref={todo} />
      <button onClick={addTodoToStore}>submit</button>

      {
        selector.map((item , index) => {
          return <li key={item.id}>
            {item.title}
            <button onClick={() => updateTodo(index)}>Edit</button>
            <button onClick={() => deleteTodo(index)}>delete</button>
          </li>
        })
      }
    </>
  )
}

export default App