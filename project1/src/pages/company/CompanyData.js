import React, { useEffect, useState } from 'react'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'
import Sidebar from '../../layout/Sidebar'
import CompanyService from '../../service/CompanyService'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const CompanyData = (props) => {
    const [companyList, setCompanyList] = useState([]);
    const [deletecompany, setdeletecompany] = useState(false);
    const navigate = useNavigate();

    const DisplayCompany = () => {
        CompanyService.getCompany()
            .then((response) => {
                setCompanyList(response.data.companies);
            })
    }

    useEffect(() => {
        DisplayCompany();
    }, [])

    const editComapny = (updateId) => {
        navigate(`/edit/company/${updateId}`)
    }

    const deleteCompany = (deleteId) => {
        CompanyService.deleteCompany(deleteId)
            .then((response) => {
                setdeletecompany(true);
                Swal.fire('Company deleted successfully.');
                navigate('/admin/company');
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
                                <h1>Company Data</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">New CompanyData</li>
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
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    companyList.map((element, index) => {
                                                        return <>
                                                            <tr key={index}>
                                                                <td width='5%'>{element.id}</td>
                                                                <td width='10%'>{element.name}</td>
                                                                <td width='55%'>
                                                                    <img src={'http://localhost:8000/' + element.image} height='25%' width='25%' />
                                                                </td>
                                                                <td width='30%'>
                                                                    <button type='button' className='badge badge-success' onClick={() => { editComapny(element.id); }}>Edit</button>
                                                                    <button type='button' className='badge badge-danger ml-2' onClick={() => { deleteCompany(element.id); }}>Delete</button>
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
                </section>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default CompanyData