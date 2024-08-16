import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBIcon,
    MDBNavbarLink,
    MDBBadge,
    MDBInputGroup,
  } from 'mdb-react-ui-kit';
  import React, { useState } from 'react'
import { useSelector } from 'react-redux';


  function Navbar() {

    const wishlist=useSelector((state=>state.wishlistReducer))
    const cart=useSelector((state=>state.cartReducer))


  return (
    <>
    <MDBNavbar light className='navbarMainDiv w-100' style={{zIndex:'2',position:'fixed'}} bgColor='light'>
      <MDBContainer fluid>
      <MDBNavbarBrand href='/' className='fw-bold' >
            <img
              src="https://i.pinimg.com/474x/70/af/e4/70afe40cd2b1245394c9dd5065ae94d0.jpg"
              height='60'
              alt=''
              loading='lazy'
            />
            Shoes Mart
          </MDBNavbarBrand>
       <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
            <MDBNavbarLink href='/cart'>
              <span className='mx-2'>
                <MDBIcon fas icon='shopping-cart'></MDBIcon>
              </span>
              <MDBBadge pill color='success'>{cart.length}</MDBBadge>
            </MDBNavbarLink>
            <MDBNavbarLink href='/cart'>
              <span className='me-2 ms-5'>
                <MDBIcon fas icon='heart'></MDBIcon>
              </span>
              <MDBBadge pill color='danger'>{wishlist.length}</MDBBadge>
            </MDBNavbarLink>
        </MDBInputGroup>
      </MDBContainer>
    </MDBNavbar>
    </>
  )
}

export default Navbar