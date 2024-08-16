import React from 'react'
import AllProducts from './AllProducts'
import { MDBBadge, MDBIcon, MDBNavbarLink } from 'mdb-react-ui-kit'
import { useSelector } from 'react-redux'

function Items({selectedOption,setSelectedOption}) {

const handleBrandChange=(event)=>{
  setSelectedOption({...selectedOption,brand:event.target.value})
}

const cart=useSelector((state=>state.cartReducer))
console.log(cart);

  return (
    <>
        <div className="itemsMain  w-100">
          <div className="d-flex justify-content-end me-5">

        <MDBNavbarLink href='/cart'>
              <span className='mx-2 '>
                <MDBIcon fas icon='shopping-cart'></MDBIcon>
              </span>
              <MDBBadge pill color='success'>{cart.length}</MDBBadge>
            </MDBNavbarLink>
            <MDBNavbarLink href='/cart'>
              <span className='me-2 ms-5'>
                <MDBIcon fas icon='heart'></MDBIcon>
              </span>
              <MDBBadge pill color='danger'>0</MDBBadge>
            </MDBNavbarLink>
          </div>
            <div className="recomendations">
                <div className="recomendationsHeading">
                    Brands Recomendations
                    <span className='fw-normal ms-3'>
                    <input type="radio" onChange={handleBrandChange} value={'adidas'} name='recomendations'  id='Adidas' />
                    <label htmlFor="Adidas">Adidas</label>
                    <input type="radio" onChange={handleBrandChange} value={'reebok'} name='recomendations'  id='Reebok' />
                    <label htmlFor="Reebok">Reebok</label>
                    <input type="radio" onChange={handleBrandChange} value={'puma'} name='recomendations'  id='Puma' />
                    <label htmlFor="Puma">Puma</label>
                    <input type="radio" onChange={handleBrandChange} value={'nike'} name='recomendations'  id='Nike' />
                    <label htmlFor="Nike">Nike</label>
                    </span>
                </div>
            </div>
            <AllProducts  selectedOption={selectedOption}/>
        </div>
        
    </>
  )
}

export default Items