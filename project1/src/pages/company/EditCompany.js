import React, { useEffect, useState } from 'react'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'
import Sidebar from '../../layout/Sidebar'
import CompanyService from '../../service/CompanyService'
import Swal from 'sweetalert2'
import { useNavigate, useParams } from 'react-router-dom'

const EditCompany = (props) => {
    const { company_id } = useParams();
    const [editCompany, setEditCompany] = useState({
        name: '',
        image: null
    });
    const navigate = useNavigate();

    useEffect(() => {
        CompanyService.editCompany(company_id)
            .then((response) => {
                setEditCompany(response.data.company);
            })
            .catch((error) => {
                console.log('Error :' + error);
            })
    }, [])


    const updateCompany = () => {
        const formData = new FormData();

        formData.append('id', company_id);
        formData.append('name', editCompany.name);
        formData.append('image', editCompany.image);

        CompanyService.updateCompany(formData)
            .then((response) => {
                Swal.fire('Company Updated Successfully');
                navigate('/admin/company');
            })
            .catch((error) => {
                Swal.fire('Error :' + error);
            })
    };

    return (
        <div className="wrapper">
            <Header></Header>
            <Sidebar></Sidebar>
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Update Company</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Update Company</li>
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
                                                <input type="text" className="form-control" id="name" value={editCompany.name}
                                                    onChange={(e) => {
                                                        setEditCompany({
                                                            ...editCompany,
                                                            name: e.target.value
                                                        });
                                                    }}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Image</label>
                                                <div className="input-group">
                                                    <div className="custom-file">
                                                        <input type="file" className="custom-file-input" id="image"
                                                            onChange={(e) => {
                                                                setEditCompany({
                                                                    ...editCompany,
                                                                    image: e.target.files[0]
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
                                                updateCompany();
                                            }}>Update Company</button>
                                        </div>
                                        <div className='row'>
                                            <div className='col-12 text-center'>
                                                <h3>Old Image</h3>
                                                <img src={'http://localhost:8000/' + editCompany.image} width='50%' height='50%' />
                                            </div>
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

export default EditCompany