import {useState} from 'react'

const Stateapp = () => {
    const [items,setItems] = useState([])
    const addItem = (itemName) => {
        setItems([...items,{id: items.length+1,name: itemName}])
    }
    console.log(items);
  return (
    <>
        <button onClick={()=>addItem(prompt('Enter the item'))}>Add Item</button>
        <ul>
           {items.map((item)=>(
            <li key={item.id}>{item.name}</li>
           ))}
        </ul>
    </>
   
  )
}

export default Stateapp