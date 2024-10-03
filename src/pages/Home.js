import axios from 'axios'
import { useQuery } from 'react-query'

export default function Home() {
     const {data , isLoading , isError ,refetch} = useQuery(["cat"], ()=>{
        return axios.get('https://catfact.ninja/fact/').then((res)=> res.data)
     })

     if(isLoading){
       return <h2>Loading...</h2>
      }
     if(isError){
      return <h2>sory where was an error</h2>
     }
  return (
    <>
        <div>
          <button onClick={refetch}>Refetch</button>
          <h1>{data?.fact}</h1>
        </div>
    </>
  )
}
