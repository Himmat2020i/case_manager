import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="mb-3">
      <nav className="navbar-expand main-navbar navbar-top">
        <div className="container-fluid   ms-2 me-2 p-3">
          <div className="collapse navbar-collapse">
            <a href="/">
              <h4>{/* <b>Case Manager</b> */}</h4>
            </a>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                {/* <Link to="/login" className="btn btn-primary">
                    <i className="pi pi-arrow-circle-right"></i>
                    &nbsp; Login
                  </Link> */}
              </li>

              <>
                <li className="nav-item">
                  <div className="dropdown">
                    <button
                      className="btn btn-primary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      <i className="pi pi-user "></i>
                      &nbsp; Account
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <Link to="/profile" className="dropdown-item">
                          <i className="pi pi-user "></i>
                          &nbsp; Profile
                        </Link>
                      </li>
                      <li>
                        <Link to="/change-password" className="dropdown-item">
                          <i className="pi pi-key"></i>
                          &nbsp; Change Password
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" onClick={() => {}} to={""}>
                          <i className="pi pi-sign-out"></i>
                          &nbsp; Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
