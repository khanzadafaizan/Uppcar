import React from "react";
import NavBar from "./components/NavBar";
import car from "./images/car.png";
import car2 from "./images/car2.png";
import Brands from "./images/pngwing.com.png";
import Brandsres from "./images/res.png";

import Download from "./components/Download";
import Footer2 from "./components/Footer2";
function Parts() {
  return (
    <>
      <NavBar />
      {/* Heard section start */}
      <div className="container-fluid pt-5 ">
        <div className="row pt-md-5 pt-0">
          <div className="col-md-6 col-12 text-center text-md-start">
            <div className="ms-md-5 ms-0 ps-md-5 ps-0">
              <span className="font-discover fw-medium">
                Find Best Deals of Car Parts and Accessories
              </span>
              <p className="fs-5 mt-2 ">
                Uppcar price comparison engine helps you find the Best car deals
                worldwide.
              </p>
              <div className="d-none d-md-block">
                <div className="input-group  input-parts-first">
                  <label className="input-group-text " for="inputGroupSelect01">
                    <i className="fa-regular fa-circle ps-3 font-parts"></i>
                  </label>
                  <select
                    className="form-select select-save"
                    id="inputGroupSelect01"
                  >
                    <option selected>Save + Coupon</option>
                  </select>
                </div>
                <div className="d-flex justify-content-start w-100 ">
                  <div className="input-group input-parts-first w-100">
                    <label
                      className="input-group-text"
                      for="inputGroupSelect01"
                    >
                      <i class="fa-solid fa-location-dot font-parts ps-4"></i>
                    </label>
                    <select
                      className="form-select input-parts-first"
                      id="inputGroupSelect01"
                    >
                      <option selected>country</option>
                    </select>
                  </div>

                  <div className="w-100">
                    <form className="input-form " role="search">
                      <input
                        className="form-control search-bar input-parts-first w-100   "
                        type="search"
                        placeholder="Find Parts and Accessories"
                        aria-label="Search "
                      />
                    </form>
                  </div>
                </div>
              </div>
              <div className="row d-block d-md-none">
                <div className="col-12">
                  <div class="input-group mb-3">
                    <label class="input-group-text" for="inputGroupSelect01">
                      <i class="fa-solid fa-location-dot font-parts ps-4"></i>
                    </label>
                    <select class="form-select" id="inputGroupSelect01">
                      <option selected> Select Country</option>
                    </select>
                  </div>
                </div>
                <div className="col-12">
                  <div class="input-group mb-3">
                    <label class="input-group-text" for="inputGroupSelect01">
                      <i className="fa-regular fa-circle ps-3 font-parts"></i>
                    </label>
                    <select class="form-select" id="inputGroupSelect01">
                      <option selected>Save + Coupon</option>
                    </select>
                  </div>
                </div>
                <div className="col-12">
                  <form className="input-form " role="search">
                    <input
                      className="form-control ps-5 text-dark search-bar   "
                      type="search"
                      placeholder="Find Parts and Accessories"
                      aria-label="Search "
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-none d-lg-block bkImage">
            <img
              src={car}
              className="img-car"
              alt="mainLogo"
              style={{
                position: "absolute",
                top: "30px",
                right: "0px",
                width: "75%",
              }}
            ></img>
          </div>
        </div>
      </div>
      {/* Header section end */}
      {/* Detail section start */}
      <div className="container mt-5">
        <div className="row">
          <h1 className="text-center pb-5 ">Why Choose Uppcar?</h1>
          <div className="col-lg-5  d-none d-lg-block d-lg-flex align-items-center">
            <img src={car2} className="" alt="car2"></img>
          </div>
          <div className="col-1"></div>
          <div className="col-lg-6 d-lg-block flex-column d-flex justify-content-center align-items-center">
            <div className="card w-100 mb-3">
              <div className="card-body">
                <h5 className="card-title">Certified Dealers</h5>
                <p className="card-text">
                  Uppcar only work with verified and trusted dealers. All the
                  car deals available on our website are from Certified and
                  trustwortly car dealers.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-11 d-lg-block flex-column d-flex justify-content-center align-items-center">
                <div className="card w-100 mb-3">
                  <div className="card-body">
                    <h5 className="card-title">Certified Dealers</h5>
                    <p className="card-text">
                      Uppcar only work with verified and trusted dealers. All
                      the car deals available on our website are from Certified
                      and trustwortly car dealers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-10 d-lg-block flex-column d-flex justify-content-center align-items-center">
                <div className="card w-100 mb-3">
                  <div className="card-body">
                    <h5 className="card-title">Certified Dealers</h5>
                    <p className="card-text">
                      Uppcar only work with verified and trusted dealers. All
                      the car deals available on our website are from Certified
                      and trustwortly car dealers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-11 d-lg-block flex-column d-flex justify-content-center align-items-center">
                <div className="card w-100 mb-3">
                  <div className="card-body">
                    <h5 className="card-title">Certified Dealers</h5>
                    <p className="card-text">
                      Uppcar only work with verified and trusted dealers. All
                      the car deals available on our website are from Certified
                      and trustwortly car dealers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 d-lg-block flex-column d-flex justify-content-center align-items-center">
                <div className="card w-100 mb-3">
                  <div className="card-body">
                    <h5 className="card-title">Certified Dealers</h5>
                    <p className="card-text">
                      Uppcar only work with verified and trusted dealers. All
                      the car deals available on our website are from Certified
                      and trustwortly car dealers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Detail section end */}
      {/* Top brands section start */}
      <div className="container mt-5">
        <h1 className="text-center ">Top Brands</h1>
        <p className="text-center pb-5 ">
          Now Our Users Can Search And compare Car Parts And Accessories From
          Over 50 Brands
        </p>
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center  ">
            <img
              src={Brands}
              className="d-none d-md-block img-fluid"
              alt="Brands pictures"
            ></img>
            <img
              src={Brandsres}
              className="d-block d-md-none Brandsres"
              alt="Brands pictures"
            ></img>
          </div>
          <a className="text-end pe-5 mt-2 more-countries pb-5">Search Now</a>
        </div>
      </div>
      {/* Top brands section end */}
      <Download />
      <Footer2 />
    </>
  );
}

export default Parts;
