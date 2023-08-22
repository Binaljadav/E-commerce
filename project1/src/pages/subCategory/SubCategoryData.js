import React, { useEffect, useState } from 'react'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'
import Sidebar from '../../layout/Sidebar'
import SubCategoryService from '../../service/SubCategoryService'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const SubCategoryData = (props) => {
    const [subcategoryList, setsubcategoryList] = useState([]);
    const [deletesubCategory, setdeleteSubCategory] = useState(false);
    const navigate = useNavigate();

    const DisplaySubCategory = () => {
        SubCategoryService.getSubCategory()
            .then((response) => {
                setsubcategoryList(response.data.subCategories);
            })
            .catch((error) => {
                console.log('error', error);
            })
    }

    useEffect(() => {
        DisplaySubCategory();
    }, []);

    const deleteSubCategory = (id) => {
        SubCategoryService.deleteSubCategory(id)
            .then((response) => {
                setdeleteSubCategory(true);
                Swal.fire('SubCategory Deleted Successfully.');
                DisplaySubCategory();
            })
    }

    const editSubCategory = (updateId) => {
        navigate(`/edit/subcategory/${updateId}`);
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
                                <h1>SubCategory Data</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">New SubCategoryData</li>
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
                                                    <th>Category</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    subcategoryList.map((element, index) => {
                                                        return <>
                                                            <tr key={index}>
                                                                <td>{element.id}</td>
                                                                <td>{element.name}</td>
                                                                <td>{element.category_id}</td>
                                                                <td>
                                                                    <button type='button' className='badge badge-success' onClick={() => { editSubCategory(element.id); }}>Edit</button>
                                                                    <button type='button' className='badge badge-danger ml-2' onClick={() => { deleteSubCategory(element.id); }}>Delete</button>
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

export default SubCategoryData