import React, { useState } from 'react'
import './product.css'
import Sidebar from './Sidebar'
import Items from './Items'

function Products() {

  const [selectedOption,setSelectedOption]=useState({
    category:"all",
    price:"all",
    color:"all",
    brand:"all"
  })



  return (
    <>
       <Sidebar selectedOption={selectedOption} setSelectedOption={setSelectedOption}/> 
       <Items selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
    </>
  )
}

export default Products