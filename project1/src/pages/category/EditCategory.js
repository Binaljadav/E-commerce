import React, { useEffect, useState } from 'react'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'
import Sidebar from '../../layout/Sidebar'
import Swal from 'sweetalert2'
import CategoryService from '../../service/CategoryService'
import { useNavigate, useParams } from 'react-router-dom'


const EditCategory = (props) => {
    const { category_id } = useParams();
    const [editCategory, setEditCategory] = useState(null);
    const [updatecategory, setUpdateCategory] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        CategoryService.editCategory(category_id)
            .then((response) => {
                setEditCategory(response.data.category.name);
            })
    }, [])


    const updateCategory = () => {
        const formData = new FormData();

        formData.append("id", category_id);

        formData.append(
            'name',
            updatecategory,
        );

        CategoryService.updateCategory(formData)
            .then((response) => {
                Swal.fire('Category Name Updated Successfully.')
                navigate('/admin/category');
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
                                <h1>Update Category</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Update Category</li>
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
                                                <input type="text" className="form-control" id="name" value={editCategory}
                                                    onChange={(e) => {
                                                        setUpdateCategory(
                                                            e.target.value);
                                                    }} />
                                            </div>
                                        </div>

                                        <div className="card-footer">
                                            <button type="button" className="btn btn-info" onClick={() => {
                                                updateCategory();
                                            }}>Update Category</button>
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

export default EditCategory