import React, { useEffect, useState } from 'react'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'
import Sidebar from '../../layout/Sidebar'
import axios from 'axios'
import Swal from 'sweetalert2'
import CategoryService from '../../service/CategoryService'
import SubCategoryService from '../../service/SubCategoryService'
import CompanyService from '../../service/CompanyService'
import ProductService from '../../service/ProductService'
import { Form } from 'react-router-dom'


const Product = (props) => {
    const [product, setProduct] = useState({
        name: '',
        image: null,
        categoryid: 0,
        subcategoryid: 0,
        companyid: 0,
        price: 0,
        description: '',
    });

    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [company, setCompany] = useState([]);

    useEffect(() => {
        CategoryService.getCategory()
            .then((response) => {
                setCategory(response.data.categories);
            });
        SubCategoryService.getSubCategory()
            .then((response) => {
                setSubCategory(response.data.subCategories);
            });
        CompanyService.getCompany()
            .then((response) => {
                setCompany(response.data.companies);
            });
    }, [])


    const saveProduct = () => {
        const formData = new FormData();

        formData.append('name', product.name);
        formData.append('image', product.image);
        formData.append('categoryid', product.categoryid);
        formData.append('subcategoryid', product.subcategoryid);
        formData.append('companyid', product.companyid);
        formData.append('price', product.price);
        formData.append('description', product.description);

        console.log(product);

        ProductService.saveProduct(formData)
            .then((response) => {
                console.log(response.data);
                Swal.fire('Product Saved Successfully.');
            })
            .catch((error) => {
                Swal.fire('Error : ' + error);
            })
    }

    return (
        <div className="wrapper">
            <Header></Header>
            <Sidebar></Sidebar>
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Enter New Product</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">New Product</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card card-primary">
                                    <form>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label>Name</label>
                                                <input type="text" className="form-control border-dark" id="name" placeholder="Enter Product Name"
                                                    onChange={(e) => {
                                                        setProduct({
                                                            ...product,
                                                            'name': e.target.value
                                                        });
                                                    }} />
                                            </div>
                                            <div className="form-group">
                                                <label>Image</label>
                                                <div className="input-group">
                                                    <div className="custom-file">
                                                        <input type="file" className="custom-file-input" id="image"
                                                            onChange={(e) => {
                                                                setProduct({
                                                                    ...product,
                                                                    'image': e.target.files[0],
                                                                });
                                                            }}
                                                        />
                                                        <label className="custom-file-label">Choose file</label>
                                                    </div>
                                                    <div className="input-group-append">
                                                        <span className="input-group-text">Upload</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='form-group'>
                                                <div className='row'>
                                                    <div className='col-6'>
                                                        <label>Select Category :</label>
                                                    </div>
                                                    <div className='col-6'>
                                                        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example"
                                                            onChange={(e) => {
                                                                setProduct({
                                                                    ...product,
                                                                    'categoryid': e.target.value,
                                                                });
                                                            }}>
                                                            {
                                                                category.map((element, index) => {
                                                                    return <>
                                                                        <option value={element.id} key={index}>{element.name}</option>
                                                                    </>
                                                                })
                                                            }
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='form-group'>
                                                <div className='row'>
                                                    <div className='col-6'>
                                                        <label>Select SubCategory :</label>
                                                    </div>
                                                    <div className='col-6'>
                                                        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example"
                                                            onChange={(e) => {
                                                                setProduct({
                                                                    ...product,
                                                                    'subcategoryid': e.target.value,
                                                                });
                                                            }}>
                                                            {
                                                                subCategory.map((element, index) => {
                                                                    return <>
                                                                        <option value={element.id} key={index}>{element.name}</option>
                                                                    </>
                                                                })
                                                            }
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='form-group'>
                                                <div className='row'>
                                                    <div className='col-6'>
                                                        <label>Select Company :</label>
                                                    </div>
                                                    <div className='col-6'>
                                                        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example"
                                                            onChange={(e) => {
                                                                setProduct({
                                                                    ...product,
                                                                    'companyid': e.target.value,
                                                                });
                                                            }}>
                                                            {
                                                                company.map((element, index) => {
                                                                    return <>
                                                                        <option value={element.id} key={index}>{element.name}</option>
                                                                    </>
                                                                })
                                                            }

                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mb-3">
                                                <div className='row'>
                                                    <div className='col-6'>
                                                        <label className="form-label">Price :</label>
                                                    </div>
                                                    <div className='col-6'>
                                                        <input type="text" className="form-control border-dark" id="price" onChange={(e) => {
                                                            setProduct({
                                                                ...product,
                                                                'price': e.target.value,
                                                            });
                                                        }} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label>Description</label>
                                                <textarea className="form-control rounded-0 border-dark" id="description" rows="3" onChange={(e) => {
                                                    setProduct({
                                                        ...product,
                                                        'description': e.target.value,
                                                    });
                                                }}></textarea>
                                            </div>
                                        </div>

                                        <div className="card-footer">
                                            <button type="button" className="btn btn-info" onClick={() => {
                                                saveProduct();
                                            }}>Save Product</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
            </div >
            <Footer></Footer>
        </div >
    )
}

export default Product