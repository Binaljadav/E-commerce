import React, { useEffect, useState } from 'react'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'
import Sidebar from '../../layout/Sidebar'
import CategoryService from '../../service/CategoryService'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const CategoryData = (props) => {
    const [categoryList, setCategoryList] = useState([]);
    const [deletecategory, setDeleteCategory] = useState(false);
    const navigate = useNavigate();

    const DisplayCategory = () => {
        CategoryService.getCategory()
            .then((response) => {
                setCategoryList(response.data.categories);
            })
            .catch((error) => {
                console.log('error', error);
            })
    }

    useEffect(() => {
        DisplayCategory();
    }, []);

    const deleteCategory = (recordId) => {
        CategoryService.deleteCategory(recordId)
            .then((response) => {
                setDeleteCategory(true);
                Swal.fire('Category Deleted Successfully');
                DisplayCategory();
            })
    }

    const editCategory = (updateId) => {
        console.log('updateid', updateId);
        navigate(`/edit/category/${updateId}`)
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
                                <h1>Category Data</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">New CategoryData</li>
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
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    categoryList.map((element, index) => {
                                                        return <>
                                                            <tr key={index}>
                                                                <td>{element.id}</td>
                                                                <td>{element.name}</td>
                                                                <td>
                                                                    <button type='button' className='badge badge-success' onClick={() => { editCategory(element.id); }}>Edit</button>
                                                                    <button type='button' className='badge badge-danger ml-2' onClick={() => { deleteCategory(element.id); }}>Delete</button>
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

export default CategoryData