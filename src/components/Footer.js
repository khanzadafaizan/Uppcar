import React from "react";
import footerLogo from "../images/footerLogo.png";
function Footer() {
  return (
    <div className="container-fluid  footer ">
      <div className="container pt-md-5 pt-2">
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
                className="form-control"
                id="floatingInputValue"
                placeholder="name@example.com"
                value="test@example.com"
              />
            </form>
          </div>

          <hr className="text-white" />
        </div>
        <div className="row">
          <div className="col-md-4 col-12">
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
          <div className="col-md-8 col-12 pt-5 mt-5 d-flex flex-wrap text-white ">
            <ul className="footer-ul">
              <u className="">Company</u>
              <li className="mt-3">About</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li className="pb-4">Trems & Conditions</li>
              <u className="">Help</u>
              <li className="mt-3">Import Regulation Guide</li>
              <li>FAQ's</li>
              <li>Blog</li>
            </ul>
            <ul className="footer-ul">
              <u className="">Services</u>
              <li className="mt-3">Cars Compare</li>
              <li>Parts Compare</li>
              <li className="pb-4">Vehicle History Check</li>
              <u className="">Business</u>
              <li className="mt-3">Get Listed</li>
              <li>Advertise With Us</li>
            </ul>
            <ul className="footer-ul">
              <u className="">Search by Country</u>
              <li className="mt-3">China</li>
              <li>Germany</li>
              <li>United States</li>
              <li>Japan</li>
              <li>Thailand</li>
              <li>Singapore</li>
              <li>United Kingdom</li>
              <li>UAE</li>
            </ul>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
