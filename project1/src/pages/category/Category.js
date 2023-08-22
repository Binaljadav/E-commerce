import React, { useState } from 'react'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'
import Sidebar from '../../layout/Sidebar'
import axios from 'axios'
import Swal from 'sweetalert2'
import CategoryService from '../../service/CategoryService'


const Category = (props) => {
    const [categoryData, setCategoryData] = useState({
        name: ''
    });


    const saveCategory = () => {
        CategoryService.categorySave(categoryData)
            .then((response) => {
                Swal.fire('Category ' + categoryData.name + '   save successfully...');
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
                                <h1>Enter New Category</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">New Category</li>
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
                                                <input type="text" className="form-control" value={categoryData.name} id="name" placeholder="Enter Category Name"
                                                    onChange={(e) => {
                                                        setCategoryData({
                                                            'name': e.target.value
                                                        });

                                                    }} />
                                            </div>
                                            {/* <div className="form-group">
                                                <label>Image</label>
                                                <div className="input-group">
                                                    <div className="custom-file">
                                                        <input type="file" className="custom-file-input" id="image"
                                                            onChange={(e) => {
                                                                setCategoryData({
                                                                    ...categoryData,
                                                                    image: e.target.value
                                                                });
                                                            }}
                                                        />
                                                        < label className="custom-file-label" > Choose file</label>
                                                    </div>
                                                    <div className="input-group-append">
                                                        <span className="input-group-text">Upload</span>
                                                    </div>
                                                </div>
                                            </div> */}
                                            {/* <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="active"
                                                    onChange={(e) => {
                                                        setCategoryData({
                                                            ...categoryData,
                                                            active: e.target.checked
                                                        });
                                                    }} />
                                                <label className="form-check-label">Is Active ?</label>
                                            </div> */}
                                        </div>

                                        <div className="card-footer">
                                            <button type="button" className="btn btn-info" onClick={() => {
                                                saveCategory();
                                            }}>Save Category</button>
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

export default Category