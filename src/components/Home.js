import React from "react";
import bkImage from "../images/Path221.svg";
import car from "../images/car.png";
import car2 from "../images/car2.png";
import cardImage1 from "../images/sec1.png";
import cardImage2 from "../images/sec2.png";
import cardImage3 from "../images/sec3.png";
import china from "../images/china@2x.png";
import japan from "../images/JAPAN@2x.png";
import cargreen from "../images/cargreen.png";
import { Navbar } from "react-bootstrap";
import NavBar from "./NavBar";
import Download from "./Download";
import Footer2 from "./Footer2";
function Home() {
  return (
    <>
      <NavBar />
      {/* Heard section start */}
      <div className="container-fluid pt-5 ">
        <div className="row pt-md-5 pt-0">
          <div className="col-md-6 col-12 text-center text-md-start">
            <div className="ms-md-5 ms-0 ps-md-5 ps-0">
              <span className="font-discover fw-medium">
                Discover The Best Car Deals With Uppcar
              </span>
              <p className="fs-5 mt-2 ">
                Uppcar price comparison engine helps you find the Best car deals
                worldwide.
              </p>
              <div className="dropdown mb-2 mt-4 ">
                <a
                  className="country-dropdown btn btn-light py-3 text-start w-100 fs-6 border border-2 dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  country
                </a>

                <ul className="dropdown-menu country-dropdown-item">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="btn-group w-50 ">
                    <button
                      className="btn btn-light border border-2 py-3 text-start dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="true"
                      aria-expanded="false"
                    >
                      Default dropdown
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Menu item
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Menu item
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Menu item
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="btn-group  w-50">
                    <button
                      className="btn btn-light border border-2 py-3 text-start  dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="inside"
                      aria-expanded="false"
                    >
                      Clickable inside
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Menu item
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Menu item
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Menu item
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="dropdown my-2">
                <a
                  className="year-dropdown btn btn-light py-3 text-start w-100 fs-6 border border-2 dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  year
                </a>

                <ul className="dropdown-menu country-dropdown-item">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
              <form className="d-flex justify-content-center" role="search">
                <input
                  className="form-control search-bar py-2 my-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search "
                />
              </form>
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

      {/* Card section start */}
      <div className="container mt-5">
        <div className="row row-last-uppcar-card">
          <h2 className="text-center pt-5 pb-4">How Uppcar works</h2>
          <div className="col-12 d-flex flex-wrap justify-content-center">
            <div className="card me-2 mt-2" style={{ width: "18rem" }}>
              <img src={cardImage1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center">
                  Choose Anywhere Worldwide
                </h5>
                <p className="card-text text-center">
                  Choose a country in which you want to compare the price.
                </p>
              </div>
            </div>
            <div
              className="card me-2 mt-2"
              style={{ width: "18rem", paddingTop: "20px" }}
            >
              <img src={cardImage2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center">
                  Search Your Favorite Car
                </h5>
                <p className="card-text text-center">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div
              className="card me-2 mt-2 last-uppcar-card"
              style={{ width: "18rem" }}
            >
              <img src={cardImage3} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center">Card title</h5>
                <p className="card-text text-center">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Card section end */}

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

      {/* Companies section start */}
      <div className="container  mt-5">
        <div className="row d-flex d-wrap">
          <h2 className="text-center pb-5">Discover Deal By Country</h2>

          <div className="col-8 lovly">
            <img src={china} className="img-fluid " alt="China"></img>
            <h2 className="text-center lovly-text">China </h2>
          </div>
          <div className="col-4 lovly">
            <img src={japan} className="japan-image " alt="China"></img>
            <h2 className="text-center lovly-text">Japan </h2>
          </div>
        </div>
        <div className="row p-0 m-0 d-flex justify-content-start ">
          <div className="col-4 my-2 lovly">
            <img
              src={
                japan
              }
              className="img-fluid "
              alt="China"
            ></img>
            <h2 className="text-center lovly-united-text">
              United Arab Emirates
            </h2>
          </div>
          <div className="col-4 my-2 lovly">
            <img
              src={japan}
              className="img-fluid "
              alt="China"
            ></img>
            <h2 className="text-center lovly-text">Thiland </h2>
          </div>
          <div className="col-4 my-2 lovly">
            <img
              src={
                japan
              }
              className="img-fluid "
              alt="China"
            ></img>
            <h2 className="text-center lovly-Kingdom-text">United Kingdom </h2>
          </div>
          <div className="col-4 lovly">
            <img
              src={
                japan
              }
              className="img-fluid "
              alt="China"
            ></img>
            <h2 className="text-center lovly-Singapore-text">Singapore </h2>
          </div>
          <div className="col-4 lovly">
            <img
              src={japan}
              className="img-fluid "
              alt="China"
            ></img>
            <h2 className="text-center lovly-text">Germany </h2>
          </div>
          <div className="col-4 lovly">
            <img
              src={
                japan
              }
              className="img-fluid "
              alt="China"
            ></img>
            <h2 className="text-center lovly-Kingdom-text">United States </h2>
          </div>
          <a className="text-end pe-5 mt-2 more-countries pb-5">
            Search More Countries
          </a>
        </div>
      </div>
      {/* Companies section end */}

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
            <img src={cargreen} className="cargreen" alt="car"></img>
          </div>
        </div>
      </div>
      {/* Benifits of Comparing section end */}
      <Download />
      <Footer2 />
    </>
  );
}

export default Home;
