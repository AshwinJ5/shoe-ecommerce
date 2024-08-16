import React from 'react'
import {
  MDBCard,
  MDBCardBody,
} from 'mdb-react-ui-kit';
import dataJson from '../db.json'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../Redux/slice/wishlistSlice';
import { addToCart } from '../Redux/slice/cartSlice';

function AllProducts({selectedOption}) {

  const dispatch=useDispatch()
  
  const filteredDatas = (products) => {
    return products.filter(product =>
      (selectedOption.category === "all" || product.type === selectedOption.category) &&
      (selectedOption.price === "all" || product.priced === selectedOption.price) &&
      (selectedOption.color === "all" || product.color === selectedOption.color) &&
      (selectedOption.brand === "all" || product.brand === selectedOption.brand)
    );
  };

  const filteredProducts = filteredDatas(dataJson);

  return (
    <>
    <div className="allProductsMain pt-4 w-100">
        <h3>Our Products</h3>
        <div className='row w-100'>

          {filteredProducts.length>0? filteredProducts.map(shoe=>
          <div className="col-lg-3 p-3" key={shoe.id}>
            {/* <Link to={`product/${shoe.id}`}> */}
          <MDBCard className='card'>
            <a href={`product/${shoe.id}`}>
            <img src={shoe.imageLink} position='top' alt='...' />
            </a>
            <MDBCardBody  className='cardBody'>
              <h5>{shoe.name.slice(0,30)}...</h5>
              <p className='text-end'> $: <span className=' fw-bold'>{shoe.price}</span>/-</p>
              <div className="d-flex">
              <button onClick={()=>dispatch(addToWishlist(shoe))} className='btn me-auto btn-light rounded-pill'><i className="fa-solid fa-heart text-danger"></i></button>
              <button onClick={()=>dispatch(addToCart(shoe))}  className='btn ms-auto btn-light rounded-pill'><i className="fa-solid fa-cart-shopping text-success"></i></button>

              </div>
            </MDBCardBody>
          </MDBCard>
          {/* </Link> */}
          </div>):
          <span className='text-center'>

            <img src="https://hareenafoods.com/assets/images/product_not_found2.png" style={{width: 400}} alt="" />
            <h5>Please sort the products differently</h5>
          </span>
          }
          
        </div>
       
    </div> 

    </>
  )
}

export default AllProducts