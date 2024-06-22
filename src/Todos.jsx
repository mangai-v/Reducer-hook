import {useReducer} from 'react'
const initialState = [
  {id:1,name:'Reading'},
  {id:2,name:'Walking'}
]
const TODOS_ACTION = {
  ADD_LIST : "ADD_LIST",
  REMOVE_LIST : "REMOVE_LIST"
}
function reducer(state,action) {
  switch(action.type){
    case TODOS_ACTION.ADD_LIST:
      return [...state,{id: state.length+1,name: action.payload}]
      case TODOS_ACTION.REMOVE_LIST:
        return state.filter((item)=>item.id!==action.payload)
    default :
      return state
  }
}

const Todos = () => {
  const [todos,dispatch] = useReducer(reducer,initialState)
  const addList = (e) => {
    if(e.key==="Enter") {
    dispatch({type: TODOS_ACTION.ADD_LIST,payload: e.target.value})
    }
  }
  return (
    <>
      <h1>TODO TASK</h1>
      <label htmlFor="task">Enter Task</label>
      <input type="text" id='task' onKeyDown={(e)=>addList(e)}/>
      <ul>
        {todos.map((todo)=>(
          <li key={todo.id}>
            {todo.name} <button onClick={()=>dispatch({type: TODOS_ACTION.REMOVE_LIST,payload: todo.id})}>DELETE</button>
            </li>
        ))}
      </ul>
    </>
   
  )
}

export default Todos