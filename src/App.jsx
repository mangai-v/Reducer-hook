
// import Stateapp from './Stateapp'
// import Todos from './Todos'

import { useState } from "react"
import Fetch from "./Fetch"
import Reducer from "./Reducer"
import ChildCounter from "./ChildCounter"

// import { useState } from "react"

// import ReducerApp from "./ReducerApp"

const App = () => {
  const [totalCount,setTotalCount] = useState(0)
  const handleTotalIncrement = ()=>{
    setTotalCount(totalCount+1)
  }
  return (
    <>
    {/* <Todos></Todos> */}
    {/* <Stateapp/> */}
    {/* <ReducerApp/> */}
    <h1>Counter</h1>
    <ChildCounter onIncrement={handleTotalIncrement}/>
    <Reducer/>
    <Fetch/>
    </>
  )
}

export default App