import  { useReducer } from 'react'

const Reducer = () => {
    function reducer(state,action){
        switch(action.type){
            case 'INCREMENT':
                return {count:state.count+1}
            case 'DECREMENT':
                return {count:state.count-1}
            case 'RESET':
                return {count:0}
            default:
                throw new Error()
        }
    }
    const [state,dispatch]=useReducer(reducer,{count:0})
  return (
    <>
        <p>Count-${state.count}</p>
        <button onClick={()=>dispatch({type:'INCREMENT'})}>Increment</button>
        <button onClick={()=>dispatch({type:'DECREMENT'})}>Decrement</button>
        <button onClick={()=>dispatch({type:'RESET'})}>Reset</button>
    </>
  )
}

export default Reducer
/**usereducer-->it is a react hook which is useful for managing more complex stateful logic in a func compo.It is an alternative to useState() and is especially useful when we have state transition that depends on the prev state or we have a multiple values in a state that are inter-related 
 * 
 * It takes 2 arg ,reducer function and initial state value.the reducer takes 2 arg state value and action object,it returns the new state based on the action obj.
 * it returns an array with current state and dispatch function .this dispatch takes action of obj as an arg passed to the reducer function along with the current state and it returns the new state based on the action obj
*/