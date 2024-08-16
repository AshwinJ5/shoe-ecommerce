import React from 'react'
import { useParams } from 'react-router-dom'
import dataJson from '../db.json'

function ProductDetails() {
    const {pid}=useParams()


    const product = dataJson.find((item) => item.id === parseInt(pid));
    console.log(product);

  return (
    <>
         <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-5"><img className="card-img-top mb-5 mb-md-0" src={product.imageLink} alt="..." /></div>
                    <div className="col-md-7">
                        <div className="small text-uppercase mb-1">{product.brand}</div>
                        <h1 className="display-5 fw-bolder">{product.name}</h1>
                        <div className="fs-5 mb-5">
                            {/* <span className="text-decoration-line-through">$45.00</span> */}
                            <span className='fw-bold'>$ {product.price}/-</span>
                        </div>
                        <hr />
                        <h5 className="fw-bold">
                            About
                        </h5>
                        <ul>
                            {product.about.one?
                            <li>
                                <p className="fw-normal">{product.about?.one}</p>
                            </li>
                            :null}
                            {product.about.two?
                            <li>
                                <p className="fw-normal">{product.about?.two}</p>
                            </li>
                            :null}
                            {product.about.three?
                            <li>
                                <p className="fw-normal">{product.about?.three}</p>
                            </li>
                            :null}
                            {product.about.four?
                            <li>
                                <p className="fw-normal">{product.about?.four}</p>
                            </li>
                            :null}
                            {product.about.five?
                            <li>
                                <p className="fw-normal">{product.about?.five}</p>
                            </li>
                            :null}
                        </ul>
                        {/* <p className="fw-normal">{product.about?.two}</p>
                        <p className="fw-normal">{product.about?.three}</p>
                        <p className="fw-normal">{product.about?.four}</p>
                        <p className="fw-normal">{product.about?.five}</p> */}
                        <div className="d-flex">
                            {/* <input className="form-control text-center me-3" id="inputQuantity" type="num" defaultValue="1" style={{maxWidth:'3rem'}} /> */}
                            <button className="btn btn-outline-dark flex-shrink-0" type="button">
                                <i className="bi-cart-fill me-1"></i>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}

export default ProductDetails