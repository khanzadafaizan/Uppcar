import React from "react";
import NavBar from "./components/NavBar";
import Download from "./components/Download";
import Footer2 from './components/Footer2'
import car from "./images/car.png";
import car_speed from "./images/car-speedometer-12855@2x.png";
import car_insurance from "./images/car-insurance-12856@2x.png";
import car_wash from "./images/car-wash-12835@2x.png";
import car_key from "./images/car-key-12850@2x.png";
import car_search from "./images/car-search-12848@2x.png";
import new_car from "./images/new-car-12851@2x.png";
import black_car from "./images/black_car.png";

function VinCheck() {
  return (
    <>
      <NavBar />
      {/* Heard section start */}
      <div className="container-fluid pt-5 ">
        <div className="row pt-md-5 pt-0">
          <div className="col-md-6 col-12 text-center text-md-start">
            <div className="ms-md-5 ms-0 ps-md-5 ps-0">
              <span className="font-discover fw-medium">
                Always Check Your Vehicle Before You Buy
              </span>
              <p className="fs-5 mt-2 ">
                Uppcar price comparison engine helps you find the Best car deals
                worldwide.
              </p>
              <div className="row">
                <div className="col-12 d-flex justify-content-around ">
                <div className="">

                <button type="button" className="btn text-white vin-button">Europeon</button>
                <button type="button" className="btn mx-2 text-white vin-button">American</button>
                <button type="button" className="btn text-white vin-button">Japanes</button>
                <form className="input-form " role="search">
                    <input
                      className="form-control vin-input ps-5 text-dark search-bar   "
                      type="search"
                      placeholder="Find Parts and Accessories"
                      aria-label="Search "
                    />
                  </form>
                  </div>
                </div>
                {/* <div className="col-12 ">
               
                </div> */}
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
      {/* Uppcar Work section start */}
      <div className="container pt-5">
        <div className="row">
          <h1 className="text-center pb-3 ">How Uppcar Works</h1>

          <div className="col-6 col-md-4 pb-3">
            <div className="card">
              <img
                src={car_speed}
                className="card-img-top car-Uppcar-works "
                alt="..."
              />
              <div className="card-body px-lg-5 px-0 text-center ">
                <h5 className="card-title">Odometer reading</h5>
                <p className="card-text car-Uppcar-works-text">
                  Odometer reading is an integral component of the history
                  report. The Odometer reading tells the conditon of the vehicle
                  and if any kind of Odometer rollback is present.
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 pb-3">
            <div className="card">
              <img
                src={car_insurance}
                className="card-img-top car-Uppcar-works "
                alt="..."
              />
              <div className="card-body px-lg-5 px-0 text-center ">
                <h5 className="card-title">Theft and recovery check</h5>
                <p className="card-text car-Uppcar-works-text">
                  Odometer reading is an integral component of the history
                  report. The Odometer reading tells the conditon of the vehicle
                  and if any kind of Odometer rollback is present.
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 pb-3">
            <div className="card">
              <img
                src={new_car}
                className="card-img-top car-Uppcar-works "
                alt="..."
              />
              <div className="card-body px-lg-5 px-0 text-center ">
                <h5 className="card-title">Previous sales records</h5>
                <p className="card-text pb-4 pb-md-0 car-Uppcar-works-text">
                  Odometer reading is an integral component of the history
                  report. The Odometer reading tells the conditon of the vehicle
                  and if any kind of Odometer rollback is present.
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 pb-3">
            <div className="card">
              <img
                src={car_key}
                className="card-img-top car-Uppcar-works "
                alt="..."
              />
              <div className="card-body px-lg-5 px-0 text-center ">
                <h5 className="card-title">
                  Vehicle title and owner information
                </h5>
                <p className="card-text car-Uppcar-works-text">
                  Odometer reading is an integral component of the history
                  report. The Odometer reading tells the conditon of the vehicle
                  and if any kind of Odometer rollback is present.
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 pb-3">
            <div className="card">
              <img
                src={car_search}
                className="card-img-top car-Uppcar-works "
                alt="..."
              />
              <div className="card-body px-lg-5 px-0 text-center ">
                <h5 className="card-title">Technical data and specificate</h5>
                <p className="card-text pb-4 pb-md-0 car-Uppcar-works-text">
                  Odometer reading is an integral component of the history
                  report. The Odometer reading tells the conditon of the vehicle
                  and if any kind of Odometer rollback is present.
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 pb-3">
            <div className="card">
              <img
                src={car_wash}
                className="card-img-top car-Uppcar-works "
                alt="..."
              />
              <div className="card-body px-lg-5 px-0 text-center ">
                <h5 className="card-title">
                  Hidden damages and accidental records
                </h5>
                <p className="card-text car-Uppcar-works-text">
                  Odometer reading is an integral component of the history
                  report. The Odometer reading tells the conditon of the vehicle
                  and if any kind of Odometer rollback is present.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Uppcar Work section end */}
       {/* Benifits of Comparing details section strat */}
       <div className="container mt-3">
        <div className="row">
          <h1 className="text-center pb-5 ">
            Benifits of Comparing Car Details{" "}
          </h1>
          <div className="col-md-6  col-12 text-center text-md-start">
            <div className="card w-100 mb-3">
              <div className="card-body">
                <p className="card-text fw-medium">
                  Uppcar only work with verified and trusted dealers. All the
                  car deals available on our website are from Certified and
                  trustwortly car dealers.
                </p>
              </div>
            </div>

            <div className="card w-100 mb-3">
              <div className="card-body">
                <p className="card-text fw-medium">
                  Uppcar only work with verified and trusted dealers. All the
                  car deals available on our website are from Certified and
                  trustwortly car dealers.
                </p>
              </div>
            </div>

            <div className="card w-100 mb-3">
              <div className="card-body">
                <p className="card-text fw-medium">
                  Uppcar only work with verified and trusted dealers.
                </p>
              </div>
            </div>
          </div> 
          <div className="col-md-6 d-none d-lg-block ">
            <img src={black_car} className="cargreen" alt="car"></img>
          </div>
        </div>
      </div>
      {/* Benifits of Comparing section end */}
      <Download/>
      <Footer2/>
    </>
  );
}

export default VinCheck;
