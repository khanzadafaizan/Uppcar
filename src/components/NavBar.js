import React from "react";
import mainLogo from "../images/mainlogo.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col-md-12 d-flex py-3 border-bottom ">
          <nav className="navbar navbar-expand-lg  ">
            <div className="container-fluid  gap-5  ">
              <button
                className="navbar-toggler order-md-5 "
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasTop"
                aria-controls="offcanvasTop"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <Link to={"/"} className="navbar-brand" href="#">
                <img src={mainLogo} className=" ms-4 order-md-0" alt="MainLogo"></img>
              </Link>

              <div
                className="collapse navbar-collapse gap-5 "
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav gap-5  ">
                  <li className="nav-item nav-li ">
                  
                    <Link to={"/"}
                      className="nav-link active bg-light navbar-li  fw-medium"
                      aria-current="page"
                      href="#"
                    >
                      <i className="fa-solid fa-car pe-1">
                    
                    </i>
                      Cars
                    </Link>
                  </li>
                  <li className="nav-item  nav-li">
                    <Link to={"/parts"}
                      className="nav-link active bg-light  fw-medium li-font"
                      aria-current="page"
                      href="#"
                    >
                      <i className="fa-sharp fa-solid fa-gear pe-1"></i>
                      Parts
                    </Link>
                  </li>
                  <li className="nav-item  nav-li">
                    <Link to={"/vincheck"}
                      className="nav-link active bg-light  fw-medium li-font"
                      aria-current="page"
                      href="#"
                    >
                      VIN Check
                    </Link>
                  </li>
                  <li className="nav-item  nav-li">
                    <Link to={"/compare"}
                      className="nav-link active  fw-medium li-font"
                      aria-current="page"
                      href="#"
                    >
                      <i className="fa-sharp fa-light fa-file pe-1"></i>
                      Compare
                    </Link>
                  </li>
                  <li className="nav-item  nav-li">
                    <a
                      className="nav-link active  fw-medium li-font"
                      aria-current="page"
                      href="#"
                    >
                      Help
                    </a>
                  </li>
                  <li className="nav-item dropdown nav-li ">
                    <a
                      className="nav-link dropdown-toggle active fw-medium li-font"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Payment Method
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          USD
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          BIT
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown nav-li">
                    <a
                      className="nav-link dropdown-toggle active fw-medium li-font"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Language
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          English
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Urdu
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <button
                  type="button"
                  className="btn btn-success px-5 py-2 nav-button fw-medium"
                > <Link to={"/login"} className="text-white nav-button_link">
                  Login

                </Link>
                </button>
              </div>
            </div>
          </nav>

          <div
            className="offcanvas offcanvas-top w-50   h-100"
            tabindex="-1"
            id="offcanvasTop"
            aria-labelledby="offcanvasTopLabel"
          >
            <div className="offcanvas-header pe-5">
              <h5 className="offcanvas-title" id="offcanvasTopLabel">
                <Link to={"/"} className="navbar-brand" href="#">
                  <img
                    src={mainLogo}
                    className="img-fluid ms-4 "
                    alt="MainLogo"
                  ></img>
                </Link>
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body ms-4">
              <Link to={"/login"} type="button" className="fs-3 text-success">
                Login
              </Link>
              <div className="dropdown me-1 ">
                <button
                  type="button"
                  className="btn ps-0 nav-dropbtn dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-offset="10,20"
                >
                  Language
                </button>
                <ul className="dropdown-menu ">
                  <li>
                    <a className="dropdown-item nav-drop" href="#">
                      English
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item nav-drop" href="#">
                      Urdu
                    </a>
                  </li>
                </ul>
              </div>
              <div className="dropdown mt-2 me-1">
                <button
                  type="button"
                  className="btn ps-0 nav-dropbtn dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-offset="10,20"
                >
                  Payment Method
                </button>
                <ul className="dropdown-menu ">
                  <li>
                    <a className="dropdown-item nav-drop" href="#">
                      USD
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item nav-drop" href="#">
                      BIT
                    </a>
                  </li>
                </ul>
              </div>

              <hr />
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to={"/"}
                    className="nav-link active fsize"
                    aria-current="page"
                    href="#"
                  >
                    Cars
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/parts"} className="nav-link fsize" href="#">
                    Parts
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/vincheck"} className="nav-link disabled fsize" aria-disabled="true">
                    VIN
                  </Link>
                </li>
              </ul>
              <hr />
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link active fsize"
                    aria-current="page"
                    href="#"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fsize" href="#">
                    Important Regulations
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fsize" href="#">
                    FAQs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled fsize" aria-disabled="true">
                    How uppercar work
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled fsize" aria-disabled="true">
                    Get Listed
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled fsize" aria-disabled="true">
                    Advertise With Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled fsize" aria-disabled="true">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled fsize" aria-disabled="true">
                    Privacy Policy
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled fsize" aria-disabled="true">
                    Trems & Conditions
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled fsize" aria-disabled="true">
                    Blogs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
