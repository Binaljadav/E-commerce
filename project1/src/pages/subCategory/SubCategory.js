import React, { useEffect, useState } from 'react'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'
import Sidebar from '../../layout/Sidebar'
import SubCategoryService from '../../service/SubCategoryService'
import Swal from 'sweetalert2'
import CategoryService from '../../service/CategoryService'

const SubCategory = (props) => {
    const [subCategory, setSubCategory] = useState({
        name: '',
        category_id: 0,
    });
    const [category, setCategory] = useState([]);

    useEffect(() => {
        CategoryService.getCategory()
            .then((response) => {
                setCategory(response.data.categories);
            })
    }, [])

    const saveSubCategory = () => {
        SubCategoryService.subCategorySave(subCategory)
            .then((response) => {
                Swal.fire('SubCategory ' + subCategory.name + '   save successfully...');
            })
            .catch((error) => {
                Swal.fire('Error : ' + error);
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
                                <h1>Enter New SubCategory</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">New SubCategory</li>
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
                                                            setSubCategory({
                                                                ...subCategory,
                                                                'category_id': e.target.value,
                                                            });
                                                        }}>
                                                        {
                                                            category.map((element, index) => {
                                                                return <>
                                                                    <option key={index}
                                                                        value={element.id}
                                                                    >{element.name}</option>
                                                                </>
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Name</label>
                                                <input type="text" className="form-control" id="name" placeholder="Enter SubCategory Name"
                                                    onChange={(e) => {
                                                        setSubCategory({
                                                            ...subCategory,
                                                            'name': e.target.value,
                                                        });
                                                    }}
                                                />
                                            </div>

                                        </div>

                                        <div className="card-footer">
                                            <button type="button" className="btn btn-info" onClick={() => {
                                                saveSubCategory();
                                            }}>Save SubCategory</button>
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

export default SubCategory