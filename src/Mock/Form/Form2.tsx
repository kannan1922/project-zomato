/// <reference types="@types/googlemaps" />
import React, { useState, useEffect } from "react";
// import Navbar from "../Navbar";
import "./form.css";

function Form2() {
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPin] = useState("");
  const [city, setCity] = useState("");
  const [verifyName, setVerify] = useState("Verify");
  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantNameOwner, setRestaurantNameOwner] = useState("");
  const [restaurantOwnerEmail, setRestaurantOwnerEmail] = useState("");
  const [restaurantLocation, setRestaurantLocation] = useState("");
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [selectedLocation, setSelectedLocation] =
    useState<google.maps.LatLngLiteral | null>(null);
  const [number, setNumber] = useState();

  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handlePhoneNumber = (e: any) => {
    const input = e.target.value;
    const numericInput = input.replace(/\D/g, "").slice(0, 10);
    if (input.length < 0) setVerify("Verify");
    setNumber(numericInput);
  };

  const handlePhoneNumber1 = (e: any) => {};
  const [otp, setOtp] = useState(["", "", "", ""]); // Array to store OTP digits
  const [activeInputIndex, setActiveInputIndex] = useState<number | null>(null);

  const handleOTPChange = (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value;

    if (index < newOtp.length - 1 && value !== "") {
      const nextInput = document.getElementById(
        `otp-input-${index + 1}`
      ) as HTMLInputElement;
      if (nextInput) {
        nextInput.focus();
      }
    }

    setOtp(newOtp);
  };

  const handleVerifyName = () => {
    setVerify(`Resend OTP`);
  };


  const handleInputFocus = (index: number) => {
    setActiveInputIndex(index);
  };
  const [timer, setTimer] = useState(30);
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (verifyName.length > 0) {
      setTimer(30);
      interval = setInterval(() => {
        setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [verifyName]);

  const [selectedOption, setSelectedOption] = useState(null);

  const handleRadioButtonChange = (option: any) => {
    setSelectedOption(option);
  };

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCheckboxChange = (category: string) => {
    // Check if the category is already selected
    if (selectedCategories.includes(category)) {
      // If selected, remove it
      setSelectedCategories((prevCategories) =>
        prevCategories.filter((item) => item !== category)
      );
    } else {
      // If not selected, add it
      setSelectedCategories((prevCategories) => [...prevCategories, category]);
    }
  };

  return (
    <div className={`resInformation ${isSticky ? "sticky" : ""}`}>
      <div className="resInfoHeading">Restaurant Type & Timings</div>

      <div className="resInformationDetails">
        <div>
          <div>Establishment type</div>
          <div className="lightColor">
            Select most relevant category for your restaurant type
          </div>
          <div className="">
            <div>
              <label>
                <input
                  type="radio"
                  value="both"
                  checked={selectedOption === "both"}
                  onChange={() => handleRadioButtonChange("both")}
                />
                Both, delivery and dine-in available
              </label>
            </div>

            <div>
              {" "}
              <label>
                <input
                  type="radio"
                  value="dineIn"
                  checked={selectedOption === "dineIn"}
                  onChange={() => handleRadioButtonChange("dineIn")}
                />
                Dine-in only
              </label>
            </div>

            <div>
              {" "}
              <label>
                <input
                  type="radio"
                  value="delivery"
                  checked={selectedOption === "delivery"}
                  onChange={() => handleRadioButtonChange("delivery")}
                />
                Delivery only
              </label>
            </div>
          </div>

          <div className="divWithLabels">
            <div className="labelContainer">
              <div>
                <label className="resLabel">
                  <input
                    type="checkbox"
                    value="Beverages"
                    checked={selectedCategories.includes("Beverages")}
                    onChange={() => handleCheckboxChange("Beverages")}
                  />
                  Beverages
                </label>

                <label className="resLabel">
                  <input
                    type="checkbox"
                    value="Biryani"
                    checked={selectedCategories.includes("Biryani")}
                    onChange={() => handleCheckboxChange("Biryani")}
                  />
                  Biryani
                </label>

                <label className="resLabel">
                  <input
                    type="checkbox"
                    value="North Indian"
                    checked={selectedCategories.includes("North Indian")}
                    onChange={() => handleCheckboxChange("North Indian")}
                  />
                  North Indian
                </label>
              </div>

              <div>
                {" "}
                <label className="resLabel">
                  <input
                    type="checkbox"
                    value="Fast Food"
                    checked={selectedCategories.includes("Fast Food")}
                    onChange={() => handleCheckboxChange("Fast Food")}
                  />
                  Fast Food
                </label>
                <label className="resLabel">
                  <input
                    type="checkbox"
                    value="South Indian"
                    checked={selectedCategories.includes("South Indian")}
                    onChange={() => handleCheckboxChange("South Indian")}
                  />
                  South Indian
                </label>
                <label className="resLabel">
                  <input
                    type="checkbox"
                    value="Desserts"
                    checked={selectedCategories.includes("Desserts")}
                    onChange={() => handleCheckboxChange("Desserts")}
                  />
                  Desserts
                </label>
              </div>

              <div>
                <label className="resLabel">
                  <input
                    type="checkbox"
                    value="Street Food"
                    checked={selectedCategories.includes("Street Food")}
                    onChange={() => handleCheckboxChange("Street Food")}
                  />
                  Street Food
                </label>

                <label className="resLabel">
                  <input
                    type="checkbox"
                    value="Chinese"
                    checked={selectedCategories.includes("Chinese")}
                    onChange={() => handleCheckboxChange("Chinese")}
                  />
                  Chinese
                </label>
              </div>

              {/* <div>
              <p>
                Selected categories:{" "}
                {selectedCategories.length > 0
                  ? selectedCategories.join(", ")
                  : "None selected"}
              </p>
            </div> */}
            </div>
          </div>
          <div>
            Please place the pin accurately at your outlet’s location on the map
          </div>
          <div>
            This will help your customers and Zomato riders to locate your store
          </div>
        </div>
      </div>
      <div className="resContainer2">
        <div>Contact number at restaurant</div>
        <div>Your customers will call on this number for general enquiries</div>
        <div className="flexx">
          <div>
            <input
              type="text"
              onChange={handlePhoneNumber}
              inputMode="numeric"
              maxLength={10}
              placeholder="Phone Number"
              value={number}
            />
          </div>
          <div>
            <button className="verifyButton" onClick={handleVerifyName}>
              {`${verifyName}${verifyName != "Verify" ? `(${timer})` : ""}`}
            </button>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          {otp.map((digit, index) => (
            <div key={index} style={{ marginRight: "5px" }}>
              <input
                type="text"
                onFocus={() => handleInputFocus(index)}
                id={`otp-input-${index}`}
                value={digit}
                onChange={(e) => handleOTPChange(index, e.target.value)}
                maxLength={1}
                style={{
                  width: "30px",
                  textAlign: "center",
                  border: `2px solid ${
                    index === activeInputIndex ? "green" : "black"
                  }`,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="resContainer2">
        <div>Restaurant owner details</div>
        <div>These will be used to share revenue related communications</div>
        <label>
          <input
            type="checkBox"
            value="option1"
            onChange={handleRadioButtonChange}
            // checked={isChecked}
          />
          Option 1
        </label>
        <div className="flexx">
          <div>
            <input
              type="text"
              onChange={handlePhoneNumber1}
              inputMode="numeric"
              maxLength={10}
              placeholder="Phone Number"
              //   value={number1}
            />
          </div>
          <div>
            <button className="verifyButton" onClick={handleVerifyName}>
              {`${verifyName}${verifyName != "Verify" ? `(${timer})` : ""}`}
            </button>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          {otp.map((digit, index) => (
            <div key={index} style={{ marginRight: "5px" }}>
              <input
                type="text"
                onFocus={() => handleInputFocus(index)}
                id={`otp-input-${index}`}
                value={digit}
                onChange={(e) => handleOTPChange(index, e.target.value)}
                maxLength={1}
                style={{
                  width: "30px",
                  textAlign: "center",
                  border: `2px solid ${
                    index === activeInputIndex ? "green" : "black"
                  }`,
                }}
              />
            </div>
          ))}
        </div>
        <div>
          <label>
            <input
              type="checkBox"
              value="option1"
              // onChange={handleRadioButtonChange}
              // checked={isChecked}
            />
            Yes, I would like to receive important updates and notifications
            from Zomato on my{" "}
            <img
              style={{ height: "15px" }}
              src="data:image/png;base64,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"
              alt=""
            />
          </label>
        </div>
        <div>
          <div className={`inputWrapper ${restaurantNameOwner && "active"}`}>
            <input
              type="text"
              value={restaurantNameOwner}
              placeholder=""
              onChange={(e) => setRestaurantNameOwner(e.target.value)}
            />
            <label>Restaurant Owner Full Name</label>
          </div>
          <div className={`inputWrapper ${restaurantOwnerEmail && "active"}`}>
            <input
              type="text"
              onChange={(e) => setRestaurantOwnerEmail(e.target.value)}
              value={restaurantOwnerEmail}
              placeholder=""
            />
            <label>Restaurant Owner Email Address</label>
          </div>
        </div>
      </div>
      <div>
        Zomato may disclose the information provided by you, including but not
        limited to the contact number and email address of the authorised
        persons, with third party service providers for provision of Zomato
        services
      </div>
      <div>
        <button>Next</button>
      </div>
    </div>
  );
}

export default Form2;
