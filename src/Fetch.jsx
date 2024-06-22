import  {  useState } from 'react'

const Fetch = () => {
    const [data,setData]=useState(null)
    const [loading,setLoading]=useState(true)
    // useEffect(()=>{
    //     const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    //     fetch(apiUrl).then(response=>{
    //         if(!response.ok){
    //             throw new Error('Network response was not ok')
    //         }
    //         return response.json()
    //     }).then(data=>{
    //         setData(data)
    //         setLoading(false)
    //     }).catch(error=>{
    //         console.error('There was a problem fetching the data',error)
    //         setLoading(false)
    //     })
    // },[])
    const fetchData = async()=>{
        try{
            const api_url = 'https://jsonplaceholder.typicode.com/posts'
            const response = await fetch(api_url)
            const data = await response.json()
            setData(data)
            setLoading(false)
        } catch(error){
            console.error('There was a problem fetching data',error)
            setLoading(false)
        }
    }
    fetchData()
  return (
    <>{loading? (<p>Loading...</p>):(
        <ul>{data.map(item=>(
            <li key={item.id}>{item.title}</li>
        ))}</ul>
    )}</>
  )
}

export default Fetch
/**fetch()--->fetch() in js is a modern,promise based API used for making HTTP requests.It provides an easy and flexible way to request resources such as data,files,new page from the server.This method returns a promise.This allows for clean and concise asynchronous code using .then() and .catch().It typically calls fetch() with url and handles the response.The response object has methods like.json(),.text(),.blob() to handle the different types of reponse data */

/**async and await are the modern js keywords that make working with promises easier and readable.This allows us to write asynchronous code that looks more like synchronous code which makes it understandable and maintainable.
 * async --> this keyword is to declare a async function.when the function is declared with async ,it automatically returns promise.If the function explicitly returns a value the promise is resolved with that value.If the function throws error, the promise is rejected with that error
 */
/**await --->this keyword is used only inside the async function.It pauses the execution of the function,waits for the promise to resolve and resumes the execution with that resolved value.If the promise is rejected ,it throws the rejected value  */

/**axios-->axios is a popular javascript library for making HTTP req from both browser and node.js env .This simplifies the process of sending http requests to rest endpoints and handling their responses.
 * it is promise based can be compatible with the javascript features with async and await
 * axios can be used with browser and node.js making it versatile tool for both and frontend and backend developments.
 * axios automatically converts response data to JSON format
 * axios allows to intercept and modify the req and res before they are handled by then and catch.This is useful for handling headers,logging,handling authentication tokens.
 */