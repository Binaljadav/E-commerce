import React, { useEffect, useState } from 'react'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'
import Sidebar from '../../layout/Sidebar'
import Swal from 'sweetalert2'
import ProductService from '../../service/ProductService'
import { useNavigate } from 'react-router-dom'

const ProductData = (props) => {

    const [productList, setproductList] = useState([]);
    const [deleteproduct, setDeleteproduct] = useState(false);
    const navigate = useNavigate();

    const DisplayProduct = () => {
        ProductService.getProduct()
            .then((response) => {
                setproductList(response.data.products);
            })
    }

    useEffect(() => {
        DisplayProduct();
    }, []);

    const editProduct = (updateId) => {
        navigate(`/edit/product/${updateId}`);
    }

    const deleteProduct = (deleteId) => {
        ProductService.deleteProduct(deleteId)
            .then((response) => {
                setDeleteproduct(true);
                Swal.fire('Product Deleted Successfully.');
                DisplayProduct();
            })
            .catch((error) => {
                Swal.fire('Error :' + error);
            })
    }


    return (
        <div className='wrapper'>
            <Header></Header>
            <Sidebar></Sidebar>
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Product Data</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">New ProductData</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <table id="example1" className="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Name</th>
                                                    <th>Image</th>
                                                    <th>Category</th>
                                                    <th>SubCategory</th>
                                                    <th>Company</th>
                                                    <th>Price</th>
                                                    <th>Description</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    productList.map((element, index) => {
                                                        return <>
                                                            <tr key={index}>
                                                                <td>{element.id}</td>
                                                                <td>{element.name}</td>
                                                                <td>
                                                                    <img src={'http://localhost:8000/' + element.image} height='50%' width='50%' />
                                                                </td>
                                                                <td>{element.categoryid}</td>
                                                                <td>{element.subcategoryid}</td>
                                                                <td>{element.companyid}</td>
                                                                <td>{element.price}</td>
                                                                <td>{element.description}</td>
                                                                <td>
                                                                    <button type='button' className='badge badge-success' onClick={() => { editProduct(element.id); }}>Edit</button>
                                                                    <button type='button' className='badge badge-danger ml-2' onClick={() => { deleteProduct(element.id); }}>Delete</button>
                                                                </td>
                                                            </tr>
                                                        </>
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
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

export default ProductData


// get api
// update api
// old image and updated image 