import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import BannerService from '../service/BannerService';
import CategoryService from '../service/CategoryService';
import SubCategoryService from '../service/SubCategoryService';



const Sidebar = () => {
    const [banner, setBanner] = useState([]);
    const [category, setCategory] = useState([]);
    const [subcategory, setSubcategory] = useState([]);


    useEffect(() => {
        BannerService.getBanner()
            .then((response) => {
                setBanner(response.data.banners.data);
            })
    }, [])

    useEffect(() => {
        CategoryService.getUserCategory()
            .then((response) => {
                setCategory(response.data.categories.data);
            })
    }, [])

    useEffect(() => {
        SubCategoryService.getUserSubCategory()
            .then((response) => {
                setSubcategory(response.data.subCategories.data);
            })
    }, [])


    return (
        <div className="container-fluid mb-5">
            <div className="row border-top px-xl-5">
                <div className="col-lg-3 d-none d-lg-block">
                    {/* <a className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" data-toggle="collapse" href="#navbar-vertical" style={{ height: '65px', marginTop: '-1px', padding: '0 30px' }}> */}
                    <Link to='/category' className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" style={{ height: '65px', marginTop: '-1px', padding: '0 30px' }}>
                        <h6 className="m-0">Categories</h6>
                        <i className="fa fa-arrow-circle-right  text-dark"></i>
                    </Link>
                    {/* </a> */}
                    <nav className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0" id="navbar-vertical">
                        <div class="navbar-nav w-100 overflow-hidden">
                            <div class="nav-item dropdown">

                                {
                                    category.map((element, index) => {
                                        return <>
                                            <div key={index} class="nav-item dropdown">
                                                <a key={element.id} href="#" class="nav-link" data-toggle="dropdown">{element.name} <i
                                                    class="fa fa-angle-down float-right mt-1"></i>
                                                    {
                                                        subcategory.map((record, index) => {
                                                            if (element.id > 1) {
                                                                return <>
                                                                    <a href="" class="dropdown-item">{record.name}</a>
                                                                </>
                                                            }

                                                        })
                                                    }
                                                </a>
                                            </div>
                                        </>
                                    })
                                }
                                {/* <div class="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                                    {
                                        subcategory.map((element, index) => {
                                            return <>
                                                <a href="" class="dropdown-item">{element.name}</a>
                                            </>
                                        })
                                    }
                                </div> */}
                            </div>
                        </div>
                    </nav>
                    <Link to='/offer' className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" style={{ height: '65px', marginTop: '-1px', padding: '0 30px' }}>
                        <h6 className="m-0">Offer</h6>
                        <i className="fa fa-arrow-circle-right  text-dark"></i>
                    </Link>
                    <Link to='/feature' className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" style={{ height: '65px', marginTop: '-1px', padding: '0 30px' }}>
                        <h6 className="m-0">Features</h6>
                        <i className="fa fa-arrow-circle-right  text-dark"></i>
                    </Link>
                    <Link to='/just_arrive_product' className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" style={{ height: '65px', marginTop: '-1px', padding: '0 30px' }}>
                        <h6 className="m-0">Just Arrived Product</h6>
                        <i className="fa fa-arrow-circle-right  text-dark"></i>
                    </Link>
                    <Link to='/trendy_product' className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" style={{ height: '65px', marginTop: '-1px', padding: '0 30px' }}>
                        <h6 className="m-0">Trendy Product</h6>
                        <i className="fa fa-arrow-circle-right  text-dark"></i>
                    </Link>
                    <Link to='/subscribe' className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" style={{ height: '65px', marginTop: '-1px', padding: '0 30px' }}>
                        <h6 className="m-0">Subscribe</h6>
                        <i className="fa fa-arrow-circle-right  text-dark"></i>
                    </Link>
                    <Link to='/vendor' className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" style={{ height: '65px', marginTop: '-1px', padding: '0 30px' }}>
                        <h6 className="m-0">Vendor</h6>
                        <i className="fa fa-arrow-circle-right  text-dark"></i>
                    </Link>
                    <Link to='/details' className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" style={{ height: '65px', marginTop: '-1px', padding: '0 30px' }}>
                        <h6 className="m-0">Details</h6>
                        <i className="fa fa-arrow-circle-right  text-dark"></i>
                    </Link>
                    <Link to='/contact' className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" style={{ height: '65px', marginTop: '-1px', padding: '0 30px' }}>
                        <h6 className="m-0">Contact</h6>
                        <i className="fa fa-arrow-circle-right  text-dark"></i>
                    </Link>
                    <Link to='/cart' className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" style={{ height: '65px', marginTop: '-1px', padding: '0 30px' }}>
                        <h6 className="m-0">Cart</h6>
                        <i className="fa fa-arrow-circle-right  text-dark"></i>
                    </Link>
                    <Link to='/shop' className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" style={{ height: '65px', marginTop: '-1px', padding: '0 30px' }}>
                        <h6 className="m-0">Shop</h6>
                        <i className="fa fa-arrow-circle-right  text-dark"></i>
                    </Link>
                    <Link to='/checkout' className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" style={{ height: '65px', marginTop: '-1px', padding: '0 30px' }}>
                        <h6 className="m-0">Check Out</h6>
                        <i className="fa fa-arrow-circle-right  text-dark"></i>
                    </Link>
                </div>
                <div className="col-lg-9">
                    <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                        <a href="" className="text-decoration-none d-block d-lg-none">
                            <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
                        </a>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav mr-auto py-0">
                                <a href="index.html" className="nav-item nav-link active">Home</a>
                                <a href="shop.html" className="nav-item nav-link">Shop</a>
                                <a href="detail.html" className="nav-item nav-link">Shop Detail</a>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                                    <div className="dropdown-menu rounded-0 m-0">
                                        <a href="cart.html" className="dropdown-item">Shopping Cart</a>
                                        <a href="checkout.html" className="dropdown-item">Checkout</a>
                                    </div>
                                </div>
                                <a href="contact.html" className="nav-item nav-link">Contact</a>
                            </div>
                            <div className="navbar-nav ml-auto py-0">
                                <a href="" className="nav-item nav-link">Login</a>
                                <a href="" className="nav-item nav-link">Register</a>
                            </div>
                        </div>
                    </nav>
                    <div id="header-carousel" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            {
                                banner.map((element, index) => {
                                    if (index == 0) {
                                        return <>
                                            <div class="carousel-item active" style={{ 'height': '410px' }}>
                                                <img class="img-fluid" src={element.api_image} alt="Image" />
                                            </div>
                                        </>

                                    }
                                    else {
                                        return <>
                                            <div class="carousel-item" style={{ 'height': '410px' }}>
                                                <img class="img-fluid" src={element.api_image} alt="Image" />
                                            </div>
                                        </>

                                    }

                                })
                            }
                        </div >
                        <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
                            <div className="btn btn-dark" style={{ width: '45px', height: '45px' }}>
                                <span className="carousel-control-prev-icon mb-n2"></span>
                            </div>
                        </a>
                        <a className="carousel-control-next" href="#header-carousel" data-slide="next">
                            <div className="btn btn-dark" style={{ width: '45px', height: '45px' }}>
                                <span className="carousel-control-next-icon mb-n2"></span>
                            </div>
                        </a>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Sidebar