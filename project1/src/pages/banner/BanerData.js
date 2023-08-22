import React, { useEffect, useState } from 'react'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'
import Sidebar from '../../layout/Sidebar'
import BannerService from '../../service/BannerService'
import Swal from 'sweetalert2'
import { Navigate, useNavigate } from 'react-router-dom'
import EditBanner from './EditBanner'

const BannerData = (props) => {
    const [bannerList, setBannerList] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);
    const [isEdited, setIsEdited] = useState(false);

    const DisplayBanner = () => {
        BannerService.getBanner()
            .then((response) => {
                setBannerList(response.data.banners);
            })
            .catch((error) => {
                Swal.fire('Error :' + error);
            })
    }

    useEffect(() => {
        DisplayBanner();
    }
        , [])

    const navigate = useNavigate();

    const handleDelete = (recordId) => {
        BannerService.deleteBanner(recordId)
            .then(response => {
                setIsDeleted(true);
                Swal.fire('Banner Image Deleted Successfully ...');
                DisplayBanner();
            })
    }

    const handleEdit = (updateId) => {
        navigate(`/edit/banner/${updateId}`);
        // localStorage.setItem('Id', updateId);
    }

    // const EditBanner = (recordId) => {
    //     BannerService.updateBanner(recordId)
    //         .then((response) => {
    //             setIsEdited(true);
    //             // Swal.fire('Banner Updated');
    //             console.log('Response' + response.data);
    //             DisplayBanner();
    //         })
    //         .catch((error) => {
    //             console.log('Error : ' + error);
    //         })
    // }

    return (
        <div className='wrapper'>
            <Header></Header>
            <Sidebar></Sidebar>
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Banner Data</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">New BannerData</li>
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
                                                    <th width='70%'>Image</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    bannerList.map((element, index) => {
                                                        return <>
                                                            <tr key={index}>
                                                                <td>{element.id}</td>
                                                                <td>
                                                                    <img src={element.api_image} style={{ 'width': '25%', 'height': '25%' }} />
                                                                    {/* {element.api_image} */}
                                                                </td>
                                                                <td>
                                                                    <button type='button' className='badge badge-success' onClick={() => { handleEdit(element.id); }}>Edit</button>
                                                                    <button type='button' className='badge badge-danger' onClick={() => {
                                                                        handleDelete(element.id);
                                                                    }}> Delete</button></td >
                                                            </tr >
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

export default BannerData


// get api
// update api
// old image and updated image 