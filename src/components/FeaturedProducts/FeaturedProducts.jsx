import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import "./FeaturedProducts.scss"
import axios, { Axios } from "axios"

const FeaturedProducts = ({type}) => {
  

    const [data , setData] = useState([]);

    const [loading , setLoading] = useState(false);

    const [error , setError] = useState(false); 

    useEffect (()=> {
      const fetchData = async () => {
       
        try{
          const res = await axios.get(import.meta.env.VITE_REACT_APP_API_URL +`/products?populate=*&filters[type][$eqi]=${type}` , {
            headers:{
              Authorization:"bearer" + import.meta.env.VITE_REACT_APP_API_TOKEN,
            }, 
          });
          setData(res.data.data)
        }

        catch(err){
          console.log(err)
        }
      }
      fetchData();
    }, [])
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Elevate your everyday style with our curated collection of minimalist fashion essentials. Crafted from high-quality materials and designed with clean lines and understated details, these pieces will seamlessly transition from work to weekend.
        </p>
      </div>
      <div className="bottom">
            { error ? " Something went wrong" : loading ? "loading" : data.map(item => (
                <Card item= {item} key={item.id}/>
            ))}
        </div>

    </div>
  )
}

export default FeaturedProducts






