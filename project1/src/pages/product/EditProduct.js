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
import { Form, useNavigate, useParams } from 'react-router-dom'


const EditProduct = (props) => {

    const { product_id } = useParams();
    const [editProduct, setEditProduct] = useState({
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
    const navigate = useNavigate();

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
        ProductService.editProduct(product_id)
            .then((response) => {
                setEditProduct(response.data.product);
            });
    }, [])


    const updateProduct = () => {
        const formData = new FormData();

        formData.append("id", product_id);
        formData.append('name', editProduct.name);
        formData.append('image', editProduct.image);
        formData.append('categoryid', editProduct.categoryid);
        formData.append('subcategoryid', editProduct.subcategoryid);
        formData.append('companyid', editProduct.companyid);
        formData.append('price', editProduct.price);
        formData.append('description', editProduct.description);

        console.log(editProduct);

        ProductService.updateProduct(formData)
            .then((response) => {
                Swal.fire('Product Updated Successully.');
                navigate('/admin/product/save');
            })
            .catch((error) => {
                Swal.fire('Error :' + error);
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
                                <h1>Update Product</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Update Product</li>
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
                                                <input type="text" className="form-control border-dark" id="name" value={editProduct.name} placeholder="Enter Product Name"
                                                    onChange={(e) => {
                                                        setEditProduct({
                                                            ...editProduct,
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
                                                                setEditProduct({
                                                                    ...editProduct,
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
                                                                setEditProduct({
                                                                    ...editProduct,
                                                                    'categoryid': e.target.value,
                                                                });
                                                            }}>
                                                            {
                                                                category.map((element, index) => {
                                                                    return <>
                                                                        <option value={element.id} key={index}
                                                                            selected={element.id == editProduct.categoryid}
                                                                        >{element.name}</option>
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
                                                                setEditProduct({
                                                                    ...editProduct,
                                                                    'subcategoryid': e.target.value,
                                                                });
                                                            }}>
                                                            {
                                                                subCategory.map((element, index) => {
                                                                    return <>
                                                                        <option value={element.id} key={index}
                                                                            selected={element.id == editProduct.subcategoryid}
                                                                        >{element.name}</option>
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
                                                                setEditProduct({
                                                                    ...editProduct,
                                                                    'companyid': e.target.value,
                                                                });
                                                            }}>
                                                            {
                                                                company.map((element, index) => {
                                                                    return <>
                                                                        <option value={element.id} key={index}
                                                                            selected={element.id == editProduct.companyid}
                                                                        >{element.name}</option>
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
                                                        <input type="text" className="form-control border-dark" id="price" value={editProduct.price} onChange={(e) => {
                                                            setEditProduct({
                                                                ...editProduct,
                                                                'price': e.target.value,
                                                            });
                                                        }} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label>Description</label>
                                                <textarea className="form-control rounded-0 border-dark" id="description" value={editProduct.description} rows="3" onChange={(e) => {
                                                    setEditProduct({
                                                        ...editProduct,
                                                        'description': e.target.value,
                                                    });
                                                }}></textarea>
                                            </div>
                                        </div>

                                        <div className="card-footer">
                                            <button type="button" className="btn btn-info" onClick={() => {
                                                updateProduct();
                                            }}>Update Product</button>
                                        </div>
                                        <div className='row'>
                                            <div className='col-12 text-center'>
                                                <h3>Old Image</h3>
                                                <img src={'http://localhost:8000/' + editProduct.image} height='70%' width='50%' />
                                            </div>
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

export default EditProduct