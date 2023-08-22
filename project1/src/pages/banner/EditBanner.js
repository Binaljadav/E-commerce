import React, { useEffect, useState } from 'react'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'
import Sidebar from '../../layout/Sidebar'
import Swal from 'sweetalert2'
import BannerService from '../../service/BannerService'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const EditBanner = (props) => {

    const { id } = useParams();
    const [editBanner, setEditBanner] = useState(null);
    const [updatebanner, setUpdateBanner] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        BannerService.editBanner(id)
            .then((response) => {
                console.log('Response', response.data);
                setEditBanner(response.data.banner.api_image);
            })
            .catch((error) => { console.log('Error :', error); })
    }, [])

    const updateBanner = () => {
        const formData = new FormData();

        formData.append(
            'image',
            updatebanner,
        );
        formData.append("id", id);
        console.log('formdata', formData);
        BannerService.updateBanner(formData)
            .then((response) => {
                Swal.fire('Banner Image Updated Successfully.');
                navigate('/admin/banner/save');
            })
        // .catch((error) => {
        //     Swal.fire('Error : ', error);
        // })
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
                                <h1>Update Banner</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Update Banner</li>
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
                                                <label>Image</label>
                                                <div className="input-group">
                                                    <div className="custom-file">
                                                        <input type="file" className="custom-file-input" id="image"
                                                            onChange={(e) => {
                                                                setUpdateBanner(e.target.files[0]);
                                                            }}
                                                        />
                                                        < label className="custom-file-label" > Choose file</label>
                                                    </div>
                                                    <div className="input-group-append">
                                                        <span className="input-group-text">Upload</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="active"
                                                />
                                                <label className="form-check-label">Is Active ?</label>
                                            </div> */}
                                        </div>


                                        <div className="card-footer">
                                            <button type="button" className="btn btn-info" onClick={() => {
                                                updateBanner();
                                            }}>Update Banner</button>
                                        </div>
                                        <div className='row'>
                                            <div className='col-12 text-center'>
                                                <h3>Old Image</h3>
                                                <img src={editBanner} height='80%' width='80%' />
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

export default EditBanner