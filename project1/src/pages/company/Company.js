import React, { useState } from 'react'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'
import Sidebar from '../../layout/Sidebar'
import Swal from 'sweetalert2'
import CompanyService from '../../service/CompanyService'
import axios from 'axios'

const Company = (props) => {

    const [companyData, setCompanyData] = useState({
        name: '',
        image: null
    });

    const saveCompany = () => {
        const formData = new FormData();

        formData.append('name', companyData.name);
        formData.append('image', companyData.image);
        console.log(formData);
        CompanyService.companySave(formData)
            .then((response) => {
                console.log('response', response.data);
                Swal.fire('Company Saved Successfully.');
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
                                <h1>Enter New Company</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">New Company</li>
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
                                                <input type="text" className="form-control" id="name" placeholder="Enter Company Name"
                                                    onChange={(e) => {
                                                        setCompanyData({
                                                            ...companyData,
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
                                                                setCompanyData({
                                                                    ...companyData,
                                                                    'image': e.target.files[0]
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
                                        </div>

                                        <div className="card-footer">
                                            <button type="button" className="btn btn-info" onClick={() => {
                                                saveCompany();
                                            }}>Save Company</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Company