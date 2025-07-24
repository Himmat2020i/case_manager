const THEME_KEY = "theme";
import { Button } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";
import SideBarMenu from "../../components/sideBarMenu/sideBarMenu";

const AdminLayout = () => {
  const [theme, setTheme] = useState("");
  const [sidebarActive, setSidebarActive] = useState(true);
  const [showBackdrop, setshowBackdrop] = useState(false);

  const handleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  useEffect(() => {
    setshowBackdrop(window.outerWidth <= 1200 && sidebarActive);
  }, [sidebarActive]);

  useEffect(() => {
    if (window.outerWidth <= 1200) {
      setSidebarActive(false);
    }
  }, [location.pathname]);

  const toggleDarkTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);

    const localStorageUser = JSON.parse(localStorage.getItem("user") || "{}");
    localStorageUser.themeMode = newTheme;
    localStorage.setItem("user", JSON.stringify(localStorageUser));

    localStorage.setItem(THEME_KEY, newTheme);
  };

  const menuList = () => {
    return (
      <ul
        aria-labelledby="dropdownMenuButton"
        className="dropdown-menu dropdown-menu-end"
        style={{ minWidth: "11rem" }}>
        <li>
          <h6 className="dropdown-header">Hello!</h6>
        </li>
        <li>
          <Link className="dropdown-item" to="/profile">
            <i className="icon-mid pi pi-user me-2"></i> My Profile
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/change-password">
            <i className="icon-mid pi pi-key me-2"></i> Change Password
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <Link className="dropdown-item" onClick={() => {}} to={""}>
            <i className="icon-mid pi pi-arrow-left me-2"></i>
            Logout
          </Link>
        </li>
      </ul>
    );
  };

  return (
    <>
      <div id="app">
        <div id="sidebar" className={sidebarActive ? "active" : "inactive"}>
          <div className="sidebar-wrapper active ">
            <div className="sidebar-header position-relative">
              <div className="d-flex justify-content-between align-items-center">
                <Link to="/admin">Case manager</Link>
              </div>
            </div>
            <SideBarMenu />
          </div>
        </div>
        <div id="main" className="layout-navbar navbar-fixed">
          <header>
            <nav className="navbar navbar-expand navbar-light navbar-top">
              <div className="container-fluid">
                <Button className="burger-btn d-block" onClick={handleSidebar}>
                  <i className="pi pi-align-justify fs-3"></i>
                </Button>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-lg-0">
                    <li className="nav-item dropdown me-3">
                      <Link
                        style={{ display: "none" }}
                        className="nav-link active dropdown-toggle text-gray-600"
                        to="/admin"
                        data-bs-toggle="dropdown"
                        data-bs-display="static"
                        aria-expanded="false">
                        <i className="bi bi-bell bi-sub fs-4"></i>
                        <span className="position-absolute translate-middle badge rounded-pill bg-danger">
                          1
                        </span>
                      </Link>
                      <ul
                        className="dropdown-menu dropdown-menu-end notification-dropdown"
                        aria-labelledby="dropdownMenuButton">
                        <li className="dropdown-header">
                          <h6>Notifications</h6>
                        </li>
                        <li className="dropdown-item notification-item">
                          <Link className="d-flex align-items-center" to={""}>
                            <div className="notification-icon bg-primary">
                              <i className="bi bi-cart-check"></i>
                            </div>
                            <div className="notification-text ms-4">
                              <p className="notification-title font-bold">Successfully check out</p>
                              <p className="notification-subtitle font-thin text-sm">
                                Order ID #256
                              </p>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <div className="mode">
                    <div className="theme-toggle d-flex gap-2 align-items-center mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--system-uicons"
                        width={20}
                        height={20}
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 21 21">
                        <g
                          fill="none"
                          fillRule="evenodd"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <path
                            d="M10.5 14.5c2.219 0 4-1.763 4-3.982a4.003 4.003 0 0 0-4-4.018c-2.219 0-4 1.781-4 4c0 2.219 1.781 4 4 4zM4.136 4.136L5.55 5.55m9.9 9.9l1.414 1.414M1.5 10.5h2m14 0h2M4.135 16.863L5.55 15.45m9.899-9.9l1.414-1.415M10.5 19.5v-2m0-14v-2"
                            opacity=".3"></path>
                          <g transform="translate(-210 -1)">
                            <path d="M220.5 2.5v2m6.5.5l-1.5 1.5"></path>
                            <circle cx="220.5" cy="11.5" r="4"></circle>
                            <path d="m214 5l1.5 1.5m5 14v-2m6.5-.5l-1.5-1.5M214 18l1.5-1.5m-4-5h2m14 0h2"></path>
                          </g>
                        </g>
                      </svg>
                      <div className="form-check form-switch fs-6">
                        <input
                          className="form-check-input me-0"
                          type="checkbox"
                          id="toggle-dark"
                          style={{ cursor: "pointer" }}
                          checked={theme === "dark"}
                          onChange={toggleDarkTheme}
                        />
                        <label className="form-check-label"></label>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--mdi"
                        width={20}
                        height={20}
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="m17.75 4.09l-2.53 1.94l.91 3.06l-2.63-1.81l-2.63 1.81l.91-3.06l-2.53-1.94L12.44 4l1.06-3l1.06 3l3.19.09m3.5 6.91l-1.64 1.25l.59 1.98l-1.7-1.17l-1.7 1.17l.59-1.98L15.75 11l2.06-.05L18.5 9l.69 1.95l2.06.05m-2.28 4.95c.83-.08 1.72 1.1 1.19 1.85c-.32.45-.66.87-1.08 1.27C15.17 23 8.84 23 4.94 19.07c-3.91-3.9-3.91-10.24 0-14.14c.4-.4.82-.76 1.27-1.08c.75-.53 1.93.36 1.85 1.19c-.27 2.86.69 5.83 2.89 8.02a9.96 9.96 0 0 0 8.02 2.89m-1.64 2.02a12.08 12.08 0 0 1-7.8-3.47c-2.17-2.19-3.33-5-3.49-7.82c-2.81 3.14-2.7 7.96.31 10.98c3.02 3.01 7.84 3.12 10.98.31Z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="dropdown">
                    <a href="/admin" data-bs-toggle="dropdown" aria-expanded="false">
                      <div className="user-menu d-flex">
                        <div className="user-name text-end me-3">
                          <h6 className="mb-0 text-gray-600">{}</h6>
                          <p className="mb-0 text-sm text-gray-600">Admin</p>
                        </div>
                        <div className="user-img align-items-center text-gray-600">
                          <i className="pi pi-user fs-4"></i>
                        </div>
                      </div>
                    </a>
                    {menuList()}
                  </div>
                </div>
              </div>
            </nav>
          </header>
          <div id="main-content">
            <Outlet />
          </div>
          <footer></footer>
        </div>
      </div>
      <div
        className="sidebar-backdrop"
        style={{ display: showBackdrop ? "block" : "none" }}
        onClick={handleSidebar}></div>
    </>
  );
};

export default AdminLayout;
