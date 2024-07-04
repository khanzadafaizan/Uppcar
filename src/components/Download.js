import React from "react";
import playStore from "../images/playstore.png";
import mobile from "../images/mobile.png";
function Download() {
  return (
    <div className="container-fluid pt-5 ">
      <div className="container download">
        <div className="row">
          <div className="col-2 order-3 order-md-1"></div>
          <div className="col-4 order-2 order-md-2 mobile-div">
            <img src={mobile} className=" mobile" alt="mobile"></img>
          </div>
          <div className="col-6 order-1 order-md-3 download-div">
            <h1 className=" fw-medium">Download the free Upper App</h1>
            <p>
              Download the free Uppcar app to compare millions of cars from
              thousands of dealers worldwide.{" "}
            </p>
            <span>
              <img src={playStore} className="playstore" alt="playstore"></img>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Download;
