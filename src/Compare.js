import React from "react";
import NavBar from "./components/NavBar";
import Footer2 from "./components/Footer2";

function Compare() {
  return (
    <>
      <NavBar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center pb-3 ">My Compare List</h1>
            <a className="text-end pe-5 mt-2 fs-1 more-countries pb-5">
              Compare Cars
            </a>
            <h4 className="text-center fs-3 py-2 mt-3 border text-secondary">
              Please Login First
            </h4>
            <div className="card text-bg-dark mt-5">
              <img src="..." className="card-img" alt="..." />
              <div className="card-img">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small>Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </>
  );
}

export default Compare;
