import React from "react";
import footerLogo from "../images/footerLogo.png";

function Footer2() {
  return (
    <div>
      {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
      <div className="container-fluid footer">
        <footer className=" footer text-center text-lg-start text-white">
          {/* <!-- Grid container --> */}
          <div className="container footer p-4">
            <div className="row">
              <div className="col-md-6 col-12 d-flex flex-column align-items-center align-items-md-start text-white">
                <h2 className="d-none d-md-block">Newsletter</h2>
                <p className="text-white">
                  Excusive access to secail offers, promotions, and Coupons
                </p>
              </div>
              <div className="col-md-6 pb-2 p-md-0 col-12 text-white">
                <form className="form-floating">
                  <input
                    type="email"
                    className="form-control text-dark"
                    id="floatingInputValue"
                    placeholder="Email"
                    value=""
                  />
                </form>
              </div>

              <hr className="text-white" />
            </div>
            {/* <!--Grid row--> */}
            <div className="row my-4">
              {/* <!--Grid column--> */}
              <div className="col-md-3 d-none d-md-block col-12">
                <div className="row">
                  <div className="col-md-12 col-6">
                    <img
                      src={footerLogo}
                      alt="footerlogo"
                      className="footerlogo"
                    ></img>
                  </div>

                  <div className="col-md-12 col-6 mt-2 mt-md-0 pt-5 pt-md-0">
                    <p className="text-white ps-4 ps-md-5">Join us on</p>
                    <i className="fa-brands fa-facebook-f font-awesome"></i>
                    <i className="fa-brands fa-twitter font-awesome"></i>
                    <i class="fa-brands fa-instagram font-awesome"></i>
                    <i class="fa-brands fa-youtube font-awesome"></i>
                  </div>
                </div>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div className="col-md-3 d-none d-md-block">
                <ul className="list-unstyled Footer-list">
                  <a href="#!" className="text-white h6 ">
                    Company
                  </a>

                  <li className="mb-2 mt-3">About Us</li>
                  <li className="mb-2">Contact Us</li>
                  <li className="mb-2">Privacy Policy</li>
                  <li className="mb-2">Trems & Conditions</li>
                </ul>
                <ul className="list-unstyled mt-3 Footer-list">
                  <a href="#!" className="text-white h6">
                    Help
                  </a>

                  <li className="mb-2 mt-3">Import Regulation Guide</li>
                  <li className="mb-2">FAQ's</li>
                  <li className="mb-2">Blog</li>
                </ul>
              </div>
              <div className="col-md-3 d-none d-md-block">
                <ul className="list-unstyled Footer-list">
                  <a href="#!" className="text-white h6">
                    Services{" "}
                  </a>

                  <li className="mb-2 mt-3">Cars Compare</li>
                  <li className="mb-2">Parts Compare</li>
                  <li className="mb-2">Vehicle History Check</li>
                </ul>
                <ul className="list-unstyled mt-5 Footer-list">
                  <a href="#!" className="text-white h6">
                    Business
                  </a>

                  <li className="mb-2 mt-3">Get Listed </li>
                  <li className="mb-2 ">Advertise With Us</li>
                </ul>
              </div>
              <div className="col-md-3 d-none d-md-block">
                <ul className="list-unstyled Footer-list">
                  <a href="#!" className="text-white h6">
                    Search by Country
                  </a>
                  <li className="mb-2 mt-3">China</li>
                  <li className="mb-2">Germany</li>
                  <li className="mb-2">United States</li>
                  <li className="mb-2">Japan</li>
                  <li className="mb-2">Thailand</li>{" "}
                  <li className="mb-2">Singapore</li>{" "}
                  <li className="mb-2">United Kingdom</li>
                  <li className="mb-2 footer-style">UAE</li>
                </ul>
              </div>
            </div>

            <div className="row my-4 ">
              {/* <!--Grid column--> */}
              <div className="col-md-3 d-block d-md-none col-12">
                <div className="row">
                  <div className="col-md-12 col-6">
                    <img
                      src={footerLogo}
                      alt="footerlogo"
                      className="footerlogo"
                    ></img>
                  </div>

                  <div className="col-md-12 col-6 mt-2 mt-md-0 pt-5 pt-md-0">
                    <p className="text-white ps-4 ps-md-5">Join us on</p>
                    <i className="fa-brands fa-facebook-f font-awesome"></i>
                    <i className="fa-brands fa-twitter font-awesome"></i>
                    <i class="fa-brands fa-instagram font-awesome"></i>
                    <i class="fa-brands fa-youtube font-awesome"></i>
                  </div>
                </div>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div className="col-md-9 d-flex justify-content-between  d-block d-md-none">
                <div className="col-6">
                  <ul className="list-unstyled Footer-list">
                    <a href="#!" className="text-white h6 ">
                      Company
                    </a>

                    <li className="mb-2 mt-3">About Us</li>
                    <li className="mb-2">Contact Us</li>
                    <li className="mb-2">Privacy Policy</li>
                    <li className="mb-2">Trems & Conditions</li>
                  </ul>
                  <ul className="list-unstyled  Footer-list">
                    <a href="#!" className=" text-white h6">
                      Search by Country
                    </a>
                    <li className="mb-2 mt-3">China</li>
                    <li className="mb-2">Germany</li>
                    <li className="mb-2">United States</li>
                    <li className="mb-2">Japan</li>
                    <li className="mb-2">Thailand</li>{" "}
                    <li className="mb-2">Singapore</li>{" "}
                    <li className="mb-2">United Kingdom</li>
                    <li className="mb-2 footer-style">UAE</li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul className="list-unstyled Footer-list">
                    <a href="#!" className="text-white h6">
                      Services{" "}
                    </a>

                    <li className="mb-2 mt-3">Cars Compare</li>
                    <li className="mb-2">Parts Compare</li>
                    <li className="mb-2">Vehicle History Check</li>
                  </ul>
                  <ul className="list-unstyled mt-5 Footer-list">
                    <a href="#!" className="text-white h6">
                      Help
                    </a>

                    <li className="mb-2 mt-3">Import Regulation Guide</li>
                    <li className="mb-2">FAQ's</li>
                    <li className="mb-2">Blog</li>
                  </ul>
                  <ul className="list-unstyled mt-3 Footer-list">
                    <a href="#!" className="text-white h6">
                      Business
                    </a>

                    <li className="mb-2 mt-3">Get Listed </li>
                    <li className="mb-2 ">Advertise With Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      {/* <!-- End of .container --> */}
    </div>
  );
}

export default Footer2;
