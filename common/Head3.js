import React from 'react'

const Head3=()=> {
    return (
        <div className="d-flex order-lg-2 ml-auto">
        <div className="dropdown d-none d-md-flex mt-1">
            <a className="nav-link icon full-screen-link">
                <i className="fe fe-maximize floating" id="fullscreen-button"></i>
            </a>
        </div>
        <div className="dropdown mt-1">
            <a href="#" className="nav-link pr-0 leading-none" data-toggle="dropdown">
                <span className="avatar avatar-md brround"><i className="fa fa-user" aria-hidden="true"></i></span>
            </a>

            <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow ">
                <div className="text-center">
                    <div className="dropdown-divider"></div>
                </div>
                {/* <a className="dropdown-item" href="@Url.Action("LogOut", "Login")">
                    <i className="dropdown-icon mdi  mdi-logout-variant text-danger"></i> Sign out
                </a> */}
            </div>
        </div>
    </div>
    )
  }

export default Head3;