import { CloudCog } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const DataApi = () => {

  let [finalData, setFinalData] = useState(null);

  useEffect(()=>{
    const fetchData = async ()=> {
    let fetchMethod = fetch('https://dummyjson.com/recipes')
    let res = await fetchMethod;
    let data = await res.json()
      setFinalData(data.recipes)
    }
    fetchData()
  }, [])
  console.log(finalData)




  return (
    <>
      
      <main style={{ display: "flex", flexWrap:"wrap", justifyContent:"space-evenly" , alignItems:"center",rowGap:"50px", marginTop:"50px"}}>
      {
        finalData?.map((data, index) => {
          console.log(data)

          return (<>
            <section style={{ height: "350px", width: "400px", borderRadius: "20px", border: "solid 1px", padding: "20px 25px", background:"linear-Gradient(to right, red, yellow)" }}>
              
              <h1>{data.name.slice(0,15)}</h1>
              <h2>Price: ${data.prepTimeMinutes}</h2>
              <br />
              <img src={data.image} alt="" height="60%" width="100%" style={{ borderRadius: "20px" }} />
              
              <br />
              <h3>Rating: {data.rating }</h3>
           </section>
          </>)
        })
        }
        </main>
    </>
  )
}

export default DataApi