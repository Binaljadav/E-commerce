import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = (props) => {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* <a href="../../index3.html" className="brand-link">
                <img src="../../dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: .8 }} />
                <span className="brand-text font-weight-light">AdminLTE 3</span>
            </a> */}

            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src="../../dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                    </div>
                    <div className="info">
                        <a href="#" className="d-block">Alexander Pierce</a>
                    </div>
                </div>


                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="nav-icon fas fa-building"></i>
                                <p>
                                    Banner
                                    <i className="fas fa-angle-left right"></i>
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <Link to='/admin/banner' className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>New</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/admin/banner/save' className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Data</p>
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="nav-icon fas fa-building"></i>
                                <p>
                                    Product
                                    <i className="fas fa-angle-left right"></i>
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <Link to='/admin/product' className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>New</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/admin/product/save' className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Data</p>
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="nav-icon fas fa-building"></i>
                                <p>
                                    Company
                                    <i className="fas fa-angle-left right"></i>
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <Link to='/admin/company/create' className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>New</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/admin/company' className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Data</p>
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="nav-icon fas fa-plus-square"></i>
                                <p>
                                    Category
                                    <i className="fas fa-angle-left right"></i>
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <Link to='/admin/category/create' className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>New</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/admin/category' className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Data</p>
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="nav-icon fas fa-tasks"></i>
                                <p>
                                    Sub-Category
                                    <i className="fas fa-angle-left right"></i>
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <Link to='/admin/sub_category/create' className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>New</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/admin/sub_category' className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Data</p>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    )
}

export default Sidebar