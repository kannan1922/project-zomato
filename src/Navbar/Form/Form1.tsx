/// <reference types="@types/googlemaps" />
import React, { useState, useEffect } from "react";
import "./form.css";
import axios from "axios";
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
interface Form1Props {
  onSubmit: () => void;
}

function Form1({ onSubmit }: Form1Props) {
  const [state, setState] = useState("");
  const [lat, setLong] = useState("");
  const [long, setLat] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPin] = useState("");
  const [city, setCity] = useState("");
  const [verifyName, setVerify] = useState("Verify");
  const [verifyName1, setVerify1] = useState("Verify");
  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantNameOwner, setRestaurantNameOwner] = useState("");
  const [restaurantOwnerEmail, setRestaurantOwnerEmail] = useState("");
  const [restaurantLocation, setRestaurantLocation] = useState("");
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [selectedLocation, setSelectedLocation] =
    useState<google.maps.LatLngLiteral | null>(null);
  const [number, setNumber] = useState();
  const [showOtp, setshowOtp] = useState(false);
  const [showOtp1, setshowOtp2] = useState(false);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDsklSLoF3zhP6Dif-NGQEQwiBkvwEwD74&libraries=places`;
    script.onload = initMap;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const initMap = () => {
    const mapElement = document.getElementById("map");

    if (mapElement) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          const mapInstance = new window.google.maps.Map(mapElement, {
            center: userLocation,
            zoom: 15,
          });

          setMap(mapInstance);

          const marker = new window.google.maps.Marker({
            map: mapInstance,
            position: userLocation,
            draggable: true,
          });

          const da = async () => {
            try {
              const geocodeResponse = await fetch(
                `https://maps.googleapis.com/maps/api/geocode/json?latlng=${userLocation.lat},${userLocation.lng}&key=AIzaSyDsklSLoF3zhP6Dif-NGQEQwiBkvwEwD74`
              );

              if (geocodeResponse.ok) {
                const geocodeData = await geocodeResponse.json();

                const addressComponents =
                  geocodeData.results[0]?.address_components || [];

                // Extract address components and update state
                addressComponents.forEach((component: any) => {
                  component.types.forEach((type: any) => {
                    switch (type) {
                      case "locality":
                        setCity(component.long_name || "");
                        break;
                      case "administrative_area_level_1":
                        setState(component.long_name || "");
                        break;
                      case "postal_code":
                        setPin(component.long_name || "");
                        break;
                      case "country":
                        setCountry(component.long_name || "");
                        break;
                      // Add more cases for other types if needed
                    }
                  });
                });
              } else {
                console.error(
                  "Failed to fetch location details during initialization"
                );
              }
            } catch (error) {
              console.error(
                "Error fetching location details during initialization:",
                error
              );
            }
          };
          da();
          window.google.maps.event.addListener(marker, "dragend", () => {
            const newPosition = marker.getPosition();

            if (newPosition) {
              setSelectedLocation({
                lat: newPosition.lat(),
                lng: newPosition.lng(),
              });
            }
          });

          const input = document.getElementById(
            "pac-input"
          ) as HTMLInputElement;
          const searchBox = new window.google.maps.places.SearchBox(input);
          mapInstance.addListener("bounds_changed", () => {
            searchBox.setBounds(
              mapInstance.getBounds() as google.maps.LatLngBounds
            );
          });

          searchBox.addListener("places_changed", () => {
            const places = searchBox.getPlaces();

            if (places.length === 0) {
              return;
            }

            const bounds = new window.google.maps.LatLngBounds();
            places.forEach((place) => {
              if (!place.geometry) {
                console.log("Returned place contains no geometry");
                return;
              }

              if (place.geometry.viewport) {
                bounds.union(place.geometry.viewport);
              } else {
                bounds.extend(place.geometry.location);
              }
            });

            mapInstance.fitBounds(bounds);
            const newCenter = mapInstance.getCenter();
            setSelectedLocation({
              lat: newCenter.lat(),
              lng: newCenter.lng(),
            });

            const marker = new window.google.maps.Marker({
              map: mapInstance,
              position: newCenter,
              draggable: true,
            });

            window.google.maps.event.addListener(marker, "dragend", () => {
              const newPosition = marker.getPosition();

              if (newPosition) {
                setSelectedLocation({
                  lat: newPosition.lat(),
                  lng: newPosition.lng(),
                });
              }
            });
          });
        },
        (error) => {
          console.error("Error getting user's location:", error);
          const defaultLocation = { lat: 0, lng: 0 };
          const mapInstance = new window.google.maps.Map(mapElement, {
            center: defaultLocation,
            zoom: 10,
          });

          setMap(mapInstance);
        }
      );
    } else {
      console.error("Map container element not found");
    }
  };

  const handleLocationChange = async () => {
    console.log("Selected Location:", selectedLocation);

    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${selectedLocation?.lat},${selectedLocation?.lng}&key=AIzaSyDsklSLoF3zhP6Dif-NGQEQwiBkvwEwD74`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch location details");
      }
      setLat(String(selectedLocation?.lat));
      setLong(String(selectedLocation?.lng));
      const data = await response.json();
      console.log("Geocoding API response:", data);

      const addressComponents = data.results[0]?.address_components || [];
      console.log(addressComponents);
      const addressInfo: Record<string, string> = {};

      addressComponents.forEach((component: any) => {
        component.types.forEach((type: any) => {
          switch (type) {
            case "locality":
              addressInfo.city = component.long_name;
              break;
            case "administrative_area_level_1":
              addressInfo.state = component.long_name;
              break;
            case "postal_code":
              addressInfo.pincode = component.long_name;
              break;
            case "country":
              addressInfo.country = component.long_name;
              break;
          }
        });
      });

      setCity(addressInfo.city || "");
      setState(addressInfo.state || "");
      setPin(addressInfo.pincode || "");
      setCountry(addressInfo.country || "");

      console.log(city);
      console.log(pincode);
      console.log(state);
      console.log(country);
    } catch (error) {
      console.error("Error fetching location details:", error);
    }
  };
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

  const handlePhoneNumber1 = (e: any) => {
    const input = e.target.value;
    const numericInput = input.replace(/\D/g, "").slice(0, 10);
    if (input.length < 0) setVerify("Verify");
    setNumber1(numericInput);

    if (input.length < 10) setIsChecked(false);
  };
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [otp1, setOtp1] = useState(["", "", "", ""]);
  const [activeInputIndex, setActiveInputIndex] = useState<number | null>(null);
  const [activeInputIndex1, setActiveInputIndex1] = useState<number | null>(
    null
  );

  const handleOTPChange1 = (index: number, value: string) => {
    const newOtp = [...otp1];
    newOtp[index] = value;

    if (index < newOtp.length - 1 && value !== "") {
      const nextInput = document.getElementById(
        `otp1-input-${index + 1}`
      ) as HTMLInputElement;
      if (nextInput) {
        nextInput.focus();
      }
    }

    setOtp1(newOtp);
  };

  const handleVerifyName = () => {
    if (timer === 0) {
      setTimer(30);
    }
    setVerify(`Resend OTP`);
    handlePostRequestLogin();
  };
  //send number for otp
  const handlePostRequestLogin = async () => {
    try {
      const postData = {
        MobileNo: `+91${number}`,
      };
      const response = await axios.post(
        "http://localhost:4000/res_owner/sendotp",
        postData
      );
      console.log(response.data);
      if (response.data) setshowOtp(true);
    } catch (error: any) {
      console.log("Error:", error);
    }
  };


  const handleVerifyName1 = () => {
    if (timer1 === 0) {
      setTimer1(30);
    }
    setVerify1(`Resend OTP`);
    handlePostRequestLogin1();
  };
  //send number for otp
  const handlePostRequestLogin1 = async () => {
    try {
      const postData = {
        MobileNo: `+91${number1}`,
      };
      const response = await axios.post(
        "http://localhost:4000/res_owner/sendotp",
        postData
      );
      console.log(response.data);
      if (response.data) 
      setshowOtp2(true);
    } catch (error: any) {
      console.log("Error:", error);
    }
  };

  const handleOTPChange = (index: number, value: string) => {
    setOtp((prevOtp) => {
      const newOtp = [...prevOtp];
      newOtp[index] = value;

      if (index < newOtp.length - 1 && value !== "") {
        const nextInput = document.getElementById(
          `otp-input-${index + 1}`
        ) as HTMLInputElement;
        if (nextInput) {
          nextInput.focus();
        }
      }

      // if (newOtp.every((digit) => digit !== "")) {
      //   handleOTPSubmit(newOtp);
      // }

      return newOtp;
    });
  };

  const handleOTPSubmit = async () => {
    try {
      const postData = {
        otp: String(otp.join("")),
        MobileNo: `+91${number}`,
      };
      const response = await axios.post(
        "http://localhost:4000/res_owner/verifyotp",
        postData
      );
      console.log(response.data.msg);
      if (response.data.msg) setVerify("verified");
      setTimer(0);
    } catch (error: any) {
      console.log("Error:", error);
    }
  };

  const handleOTPSubmit1 = async () => {
    try {
      const postData = {
        otp: String(otp1.join("")),
        MobileNo: `+91${number1}`,
      };
      const response = await axios.post(
        "http://localhost:4000/res_owner/verifyotp",
        postData
      );
      console.log(response.data.msg);
      if (response.data.msg) {setVerify1("verified");
    setshowOtp2(false)
    }
      setTimer1(0);
    } catch (error: any) {
      console.log("Error:", error);
    }
  };

  const handleInputFocus = (index: number) => {
    setActiveInputIndex(index);
  };
  const handleInputFocus1 = (index: number) => {
    setActiveInputIndex1(index);
  };
  const [timer, setTimer] = useState<number>(0);
  const [timer1, setTimer1] = useState<number>(0);
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (verifyName.length > 0) {
      setTimer(10);
      interval = setInterval(() => {
        setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [verifyName]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (verifyName.length > 0) {
      setTimer1(10);
      interval = setInterval(() => {
        setTimer1((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [verifyName1]);

  const [isChecked, setIsChecked] = useState(false);
  const [number1, setNumber1] = useState();
  const handleRadioButtonChange = () => {
    setIsChecked(!isChecked);
    if (!isChecked) 
    setNumber1(number);
  if(verifyName=="verified")
  setVerify1(verifyName)
  };
  useEffect(() => {
    if(String(number).length<10)
    setVerify("Verify")
    if(String(number1).length<10)
    setVerify1("Verify")
    
   }, [number,number1]);
 
  //   ResName: string,
  //   Address: iaddress,
  //   ContactNo: string,
  //   Owner: iowner,
  // interface iaddress extends Document{
  // Latitude:string,
  // Longitude:string,
  // Country:string,
  // Sub_Location:string,
  // Pincode:string,
  // Location:string,
  // State:string,
  // }
  // interface iowner{
  // _id:string,
  // Name:string,
  // Email:string,
  // Contact:string,
  // Restaurants:string[],
  // }

  const handleFinalClick = () => {
    const handlePost = async () => {
      const iaddress = {
        Latitude: lat,
        Longitude: long,
        Country: country,
        Sub_Location: restaurantLocation,
        Pincode: pincode,
        Location: city,
        State: state,
      };
      const id = localStorage.getItem("id");
      const iowner = {
        _id: id,
        Name: restaurantNameOwner,
        Email: restaurantOwnerEmail,
        ContactNo: number,
      };
      const postData = {
        ResName: restaurantName,
        Address: iaddress,
        ContactNo: number,
        Owner: iowner,
      };
      console.log(postData);
      try {
        const postData = {
          ResName: restaurantName,
          Address: iaddress,
          ContactNo: number1,
          Owner: iowner,
        };
        const response = await axios.post(
          "http://localhost:4000/partner-with-us/create-your-res/1",
          postData
        );
        console.log(response.data);
        if(response.data)
        {
          const token = response.data.id;
          localStorage.setItem("tokenid", token);
        }
        onSubmit()
      } catch (error: any) {
        console.log("Error:", error);
      }
    };
    handlePost();
  };
  return (
    <div className={`resInformation ${isSticky ? "sticky" : ""}`}>
      <div className="resInfoHeading">Restaurant Information</div>

      <div className="resInformationDetails">
        <div>
          <div>Restaurant details</div>
          <div className="lightColor">Name, address and location</div>

          <div className="formContainer">
            <div className={`inputWrapper ${restaurantName && "active"}`}>
              <input
                type="text"
                value={restaurantName}
                placeholder=""
                onChange={(e) => setRestaurantName(e.target.value)}
              />
              <label>Restaurant Name</label>
            </div>

            <div className={`inputWrapper ${restaurantLocation && "active"}`}>
              <input
                type="text"
                value={restaurantLocation}
                placeholder=""
                onChange={(e) => setRestaurantLocation(e.target.value)}
              />
              <label>Restaurant Location</label>
            </div>
          </div>
          <div>
            Please place the pin accurately at your outlet’s location on the map
          </div>
          <div>
            This will help your customers and Zomato riders to locate your store
          </div>
          <div>
            <input
              id="pac-input"
              className="controls"
              type="text"
              placeholder="Search Location"
            />
          </div>

          <div className="resMap">
            <div id="map" style={{ height: "400px", width: "100%" }}></div>
            <button onClick={handleLocationChange}>Save Location</button>

            <div>Restaurant address details</div>
            <div>
              Address details are basis the restaurant location mentioned above
            </div>
            <div className="validWrap">
              <div>
                <div className="resAuto">{country}</div>
                <div className="resAuto">{city}</div>
              </div>
              <div>
                <div className="resAuto">{pincode}</div>
                <div className="resAuto">{state}</div>
              </div>
            </div>
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
            <button
              className="verifyButton"
              onClick={handleVerifyName}
              disabled={
                (timer > 0 && verifyName !== "Verify") ||
                verifyName === "verified"
              }
              style={{
                backgroundColor:
                  verifyName === "verified"
                    ? "green"
                    : timer > 0 && verifyName !== "Verify"
                    ? "grey"
                    : "blue",
              }}
            >
              {`${verifyName}${
                timer > 0 &&
                verifyName !== "Verify" &&
                verifyName !== "verified"
                  ? `(${timer})`
                  : ""
              }`}
            </button>
          </div>
        </div>
        {showOtp && verifyName !== "verified" && (
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

            <div><button onClick={handleOTPSubmit}>submit</button></div>
          </div>
        )}
      </div>

      <div className="resContainer2">
        <div>Restaurant owner details</div>
        <div>These will be used to share revenue related communications</div>
        <label>
          <input
            type="checkBox"
            value="option1"
            onChange={handleRadioButtonChange}
            checked={isChecked}
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
              value={number1}
            />
          </div>
          <div>
          <button
              className="verifyButton"
              onClick={handleVerifyName1}
              disabled={
                (timer1 > 0 && verifyName1 !== "Verify") ||
                verifyName1 === "verified"
              }
              style={{
                backgroundColor:
                  verifyName1 === "verified"
                    ? "green"
                    : timer1 > 0 && verifyName1 !== "Verify"
                    ? "grey"
                    : "blue",
              }}
            >
              {`${verifyName1}${
                timer1 > 0 &&
                verifyName1 !== "Verify" &&
                verifyName1 !== "verified"
                  ? `(${timer1})`
                  : ""
              }`}
            </button>
          </div>
        </div>
        {showOtp1 && (
          <div style={{ display: "flex" }}>
            {otp1.map((digit, index) => (
              <div key={index} style={{ marginRight: "5px" }}>
                <input
                  type="text"
                  onFocus={() => handleInputFocus1(index)}
                  id={`otp1-input-${index}`}
                  value={digit}
                  onChange={(e) => handleOTPChange1(index, e.target.value)}
                  maxLength={1}
                  style={{
                    width: "30px",
                    textAlign: "center",
                    border: `2px solid ${
                      index === activeInputIndex1 ? "green" : "black"
                    }`,
                  }}
                />
              </div>
            ))}
           <div><button onClick={handleOTPSubmit1}>submit</button></div>
        

          </div>
        )}
       
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
        <button onClick={handleFinalClick}>Next</button>
      </div>
    </div>
  );
}

export default Form1;
