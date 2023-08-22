import React, { useState } from 'react'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'
import Sidebar from '../../layout/Sidebar'
import axios from 'axios'
import Swal from 'sweetalert2'
import BannerService from '../../service/BannerService'

const Banner = (props) => {
    const [banner, setBanner] = useState(null);

    const saveBanner = () => {
        const formData = new FormData();

        formData.append(
            "image",
            banner,
        );

        BannerService.saveBanner(formData)
            .then((response) => {
                Swal.fire('Image Uploaded Successfully ...');

            })
            .catch((error) => {
                Swal.fire('Errror :' + error);
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
                                <h1>Enter New Banner</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">New Banner</li>
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
                                                                setBanner(e.target.files[0]);
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
                                                saveBanner();
                                            }}>Save Banner</button>
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

export default Banner