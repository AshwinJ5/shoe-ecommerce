import { MDBBadge, MDBIcon, MDBNavbarLink } from 'mdb-react-ui-kit';
import React from 'react';
import { useSelector } from 'react-redux';

function Cart() {

  const cartArray = useSelector((state=>state.cartReducer))

  console.log(cartArray);

  return (
    <>
    <div className="d-flex justify-content-end me-5">

<MDBNavbarLink href='/cart'>
      <span className='mx-2 '>
        <MDBIcon fas icon='shopping-cart'></MDBIcon>
      </span>
      <MDBBadge pill color='success'>{cartArray.length}</MDBBadge>
    </MDBNavbarLink>
    <MDBNavbarLink href='/cart'>
      <span className='me-2 ms-5'>
        <MDBIcon fas icon='heart'></MDBIcon>
      </span>
      <MDBBadge pill color='danger'>0</MDBBadge>
    </MDBNavbarLink>
  </div>
      <section className=" h-custom" style={{ backgroundColor: "#eee"}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card mt-5">
                <div className="card-body p-4">
                  <div className="row">
                    {
                      cartArray.length>0?

                    <div className="col">
                      <h5 className="mb-3"><a href="#!" className="text-body"><i className="fas fa-long-arrow-alt-left me-2"></i>Continue shopping</a></h5>
                      <hr />
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p className="mb-1">Shopping cart</p>
                          <p className="mb-0">You have 4 items in your cart</p>
                        </div>
                      </div>

                      {cartArray.map((item, index) => (
                        <div className="card mb-3" key={index}>
                          <div className="card-body">
                            <div className="d-flex justify-content-between">
                              <div className="d-flex flex-row align-items-center">
                                <div>
                                  <img src={item.imageLink} className="img-fluid rounded-3" alt="Shopping item" style={{ width: "65px" }} />
                                </div>
                                <div className="ms-3">
                                  <h5>{item.name}</h5>
                                  <p className="small mb-0">{item.description}</p>
                                </div>
                              </div>
                              <div className="d-flex flex-row align-items-center">
                                {/* <div style={{ width: "50px" }}>
                                  <h5 className="fw-normal mb-0">{item.quantity}</h5>
                                </div> */}
                                <div style={{ width: "80px" }}>
                                  <h5 className="mb-0">${item.price}</h5>
                                </div>
                                <a href="#!" style={{ color: "#cecece" }}><i className="fas fa-trash-alt"></i></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    :
                    <span className='text-center'>

                    <img src="https://hareenafoods.com/assets/images/product_not_found2.png" style={{width: 400}} alt="" />
                  </span>
}
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
