import React,{useState,useEffect}from 'react'
import GetItem from '../Components/Sabana/GetItem'

function Base() {
  const [data,setData] = useState([])
  
  useEffect(()=>{
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=2")
    .then((res)=>res.json())
    .then((res)=>setData(res.results))
  },[])

  return (
    <div>
      {
        data.map((item)=>{
          return(
            <GetItem nombre={item.name} url={item.url}/>
          )
        })
      }
    </div>
  )
}

export default Base
