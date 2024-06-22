import { useReducer } from "react"
const initialState = [
    {id:1,name:"Book"},
    {id:2,name:"Pen"}
]
function reducer(state,action){
    switch(action.type){
        case "ADD_ITEM":
            return [...state,{id:state.length+1,name:action.payload}]
        case "DELETE_ITEM":
        return state.filter((item)=>item.id!==action.payload)
        case "UPDATE_ITEM":
        return state.map((item)=>(item.id===action.payload.id?{...item,name:action.payload.newName}:item))
        default:
        return state
    }
}

const ReducerApp = () => {
    const [items,dispatch] = useReducer(reducer,initialState)
    console.log(items);
  return (
    <div>
        <h3>Product List</h3>
        <button onClick={()=>dispatch({type:"ADD_ITEM",payload:prompt("Enter the item")})}>Add Item</button>
        <ul>
            {items.map((item)=>(
                <li key={item.id}>
                    {item.name}
                    <button onClick={()=>dispatch({type:"UPDATE_ITEM",payload:{id:item.id,newName:prompt("Enter the item",item.name)}})}>Update</button>
                    <button onClick={()=>dispatch({type:"DELETE_ITEM",payload:item.id})}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ReducerApp