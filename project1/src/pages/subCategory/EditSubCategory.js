import React, { useEffect, useState } from 'react'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'
import Sidebar from '../../layout/Sidebar'
import SubCategoryService from '../../service/SubCategoryService'
import Swal from 'sweetalert2'
import CategoryService from '../../service/CategoryService'
import { useNavigate, useParams } from 'react-router-dom'

const EditSubCategory = (props) => {
    const { subcategory_id } = useParams();
    const [editSubCategory, setEditSubCategory] = useState({
        name: '',
        category_id: 0
    });
    const [category, setCategory] = useState([]);

    useEffect(() => {
        SubCategoryService.editSubCategory(subcategory_id)
            .then((response) => {
                console.log('response', response.data);
                setEditSubCategory(response.data.subcategory);
            })
    }, [])


    useEffect(() => {
        CategoryService.getCategory()
            .then((response) => {
                setCategory(response.data.categories);
            })
    }, [])


    const navigate = useNavigate();

    const updateSubCategory = () => {
        const formData = new FormData();

        formData.append("id", subcategory_id);

        formData.append(
            'name',
            editSubCategory.name,
        );
        formData.append('category_id', editSubCategory.category_id);


        SubCategoryService.updateSubCategory(formData)
            .then((response) => {
                Swal.fire('SubCategory Updated Successfully.')
                navigate('/admin/sub_category');
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
                                <h1>Update SubCategory</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Update SubCategory</li>
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
                                                <label>Category</label>
                                                <div className='col-6'>
                                                    <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example"
                                                        onChange={(e) => {
                                                            setEditSubCategory({
                                                                ...editSubCategory,
                                                                'category_id': e.target.value
                                                            });
                                                        }}>
                                                        {
                                                            category.map((element, index) => {
                                                                return <>
                                                                    <option key={index}
                                                                        value={element.id}

                                                                        selected={element.id == editSubCategory.category_id}

                                                                    >{element.name}</option>
                                                                </>
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Name</label>
                                                <input type="text" className="form-control" id="name" value={editSubCategory.name}
                                                    onChange={(e) => {
                                                        setEditSubCategory({
                                                            ...editSubCategory,
                                                            name: e.target.value
                                                        });
                                                    }}
                                                />
                                            </div>

                                        </div>

                                        <div className="card-footer">
                                            <button type="button" className="btn btn-info" onClick={() => {
                                                updateSubCategory();
                                            }}>Update SubCategory</button>
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

export default EditSubCategory