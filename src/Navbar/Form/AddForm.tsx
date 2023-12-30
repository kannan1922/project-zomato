/// <reference types="@types/googlemaps" />
import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import "./form.css";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
declare global {
  interface Window {
    google: typeof google;
  }
}

interface SelectedLocationDetails {
  state: string;
  district: string;
  country: string;
  pincode: string;
}

function AddForm() {
  const [showForm1, setShowForm1] = useState(true);
  const [showForm2, setShowForm2] = useState(false);
  const [showForm3, setShowForm3] = useState(false);


  const handleFormSubmission1=()=>{
    setShowForm1(false)
    setShowForm2(true)
    setShowForm3(false)
  }
  const handleFormSubmission2=()=>{
    setShowForm1(false)
    setShowForm2(false)
    setShowForm3(true)
  }
  return (
    <div>
      <Navbar />
      <div
        style={{ borderTop: "2px solid rgb(232, 232, 232)", marginTop: "10px" }}
      ></div>
      <div className="validWrap">
        <div className={`validDetails`}>
          <div>1. Create your restaurant page</div>
          <div className="parentContainer"></div>
          <div className="flexInfo">
            <div className="resLine"></div>
            <div className="resPadding">
              <div className="resNumber">1</div>
            </div>

            <div className="resPadding">
              <div className="resHeading">Restaurant Information</div>
              <div className="resContent">
                Restaurant name, address, contact no., owner details
              </div>
            </div>
          </div>

          <div className="flexInfo">
            <div className="resLine"></div>
            <div className="resPadding">
              <div className="resNumber">2</div>
            </div>

            <div className="resPadding">
              <div className="resHeading">Restaurant Type & Timings</div>
              <div className="resContent">
                Establishment & cuisine type, opening hours
              </div>
            </div>
          </div>

          <div className="flexInfo">
            <div className="resLine1"></div>
            <div className="resPadding">
              <div className="resNumber">3</div>
            </div>

            <div className="resPadding">
              <div className="resHeading">Upload Images</div>
              <div className="resContent">Menu, restaurant, food images</div>
            </div>
          </div>
        </div>
        {/* {showForm1 && <Form1 onSubmit={handleFormSubmission1} />}
  
        {showForm2 && <Form2 onSubmit={handleFormSubmission2} />}
        {showForm3 && <Form3 />} */}
        <Form3/>
      </div>
    </div>
  );
}

export default AddForm;
