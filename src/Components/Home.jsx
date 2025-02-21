import React, { useContext, useEffect, useState } from 'react'
import Nav from "./Nav"
import { Link, useLocation } from 'react-router-dom'
import { ProductContext } from '../utils/Context'
import Loading from './Loading'
import axios from '../utils/axios'
const Home = () => {
  const [products]=useContext(ProductContext);
  const {search}=useLocation();
  const catagory=decodeURIComponent(search.split("=")[1]);
  const [filteredproducts,setfilteredproducts]=useState(null);
  const getproductcategory=async()=>{

     try {
       const {data}=await axios.get(`/products/category/${catagory}`)
       setfilteredproducts(data)
    }
    catch(error){
        console.log(error)
  }
}
  useEffect(()=>{
    if(!filteredproducts||catagory=="undefined") setfilteredproducts(products);
    if(catagory!="undefined") getproductcategory();
  }
  ,[catagory,products]);
  return products ? ( 
  <>
    <Nav/>
    
    <div className='h-full w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto'>
    {filteredproducts&&filteredproducts.map((p,i)=>( <Link  key={p.id} to="/Details/1" className='card mr-3 mb-3 p-3 rounded shadow-lg w-[18%] h-[30vh] flex-col flex justify-center items-center'>
      <div className='w-full hover:scale-110 h-[80%] bg-contain bg-no-repeat bg-center mb-3' 
      style={{
        backgroundImage:`url(${p.image})`,
      }}></div>
      <h1 className='hover:text-blue-300'>{p.title}</h1>
    </Link>))}
  



  </div>
 </>
 ) : (
  <Loading/>
 );
  
  
}

export default Home
