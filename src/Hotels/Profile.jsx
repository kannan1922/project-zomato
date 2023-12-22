import React from "react";
import "./profile.css";
import img from "../Assets/download.jpeg";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Cookies from "js-cookie";
import { useUserContext } from "../Context";
function Profile() {
  const [image,setImage] = useState("");
  const { userName1, updateUserName,userPic,updateUserPic } = useUserContext();
 const[showProfileEdit,setProfileEdit]=useState(false)
 const [selectedImage, setSelectedImage] = useState('');
 const [selectedImage1, setSelectedImage1] = useState('');
 const [userName, setUserName] = useState('');
 const[id,setId]=useState("")
  useEffect(() => {
    const fetchData1 = async () => {
      const cookieValue = Cookies.get("token1");
      console.log("cookie", cookieValue);
      const postData = {
        Token: cookieValue,
      };
      try {
        const response = await axios.post(
          "http://localhost:4000/onload",
          postData
        );
        console.log("name", response.data);
        if (response.data.user.Name) {
          updateUserName(response.data.user.Name);
          setImage(response.data.user.ProfilePic);
          setId(response.data.user._id)
     updateUserPic(response.data.user.ProfilePic)
          // localStorage.setItem('email', email);
        }
      } catch (error) {
        console.log("e", error);
      }
    };
    fetchData1();
  }, []);

  useEffect(() => {
   
    const fetchData1 = async () => {
      const storedToken = localStorage.getItem("token");
   
      const postData = {
        Token: storedToken,
      };
      try {
        const response = await axios.post(
          "http://localhost:4000/onload",
          postData
        );
        console.log("name", response.data);
        if (response.data.user.Name) {
          updateUserName(response.data.user.Name);
          setImage(response.data.user.ProfilePic);
          setId(response.data.user._id)
     updateUserPic(response.data.user.ProfilePic)
          // localStorage.setItem('email', email);
        }
      } catch (error) {
        console.log("e", error);
      }
    };
    fetchData1();
  }, []);
  

  const handleImageChange = (event) => {

      setSelectedImage(event?.target?.files[0]);
      const file = event.target.files[0];
  
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          setSelectedImage1(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };
  
    


  const handleSUbmit=async ()=>{
    try {
      const formData = new FormData();
      formData.append('Name', userName);
      formData.append('profile', selectedImage);
      const response = await axios.post(`http://localhost:4000/user/${id}/edit`,formData,
      {
        headers:{"Content-Type":"multipart/form-data"},
      });
      console.log(response.data.updatedUser)
      console.log(response.data.updatedUser.ProfilePic)
      updateUserName(response.data.updatedUser.Name)
      setImage(response.data.updatedUser.ProfilePic)
      updateUserPic(response.data.updatedUser.ProfilePic)
    } catch (error) {
      console.log('Error:', error.response?.data.error);
      
    }
  }
  return (
    <>
      <div>
        <div className="profile">
          <div className="sc">
            
          
{image ? (
        <img className='proImage1' src={image} />
      ) : (
        <img
          className='proImage'
          src="https://b.zmtcdn.com/web/assets/2267aec184e096c98c46a1565a5563661664945464.png?fit=around%7C100%3A100&amp;crop=100%3A100%3B%2A%2C%2A"
          alt="Default Image"
        />
      )}
            <div className="sg">
              <div color="#FFFFFF" className="sf">
                {userName1}
              </div>
              <div className="sf">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="red"
                    width="17"
                    height="17"
                    viewBox="0 0 20 20"
                    aria-labelledby="icon-svg-title- icon-svg-desc-"
                    role="img"
                    class="sc-rbbb40-0 kyPUnV"
                  >
                    <title>location-fill</title>
                    <path d="M10.2 0.42c-4.5 0-8.2 3.7-8.2 8.3 0 6.2 7.5 11.3 7.8 11.6 0.2 0.1 0.3 0.1 0.4 0.1s0.3 0 0.4-0.1c0.3-0.2 7.8-5.3 7.8-11.6 0.1-4.6-3.6-8.3-8.2-8.3zM10.2 11.42c-1.7 0-3-1.3-3-3s1.3-3 3-3c1.7 0 3 1.3 3 3s-1.3 3-3 3z"></path>
                  </svg>
                </div>{" "}
                <div>Erode</div>
              </div>
            </div>

            <div className="txtmove">
              <button
                className="sc-1kx5g6g-1 dXXDbl sc-iXXMxu hLYnGi"
                role="button"
                tabIndex={0}
                aria-disabled="false"
              >
                <button onClick={()=>setProfileEdit(true)} style={{cursor:"pointer"}}className="btn">Edit profile</button>
              </button>
              <div className="proFlex">
                <div className="sc1">
                  <p> 0 </p>

                  <p>Reviews</p>
                </div>
                <div className="sc1">
                  <p> 0 </p>

                  <p>photos</p>
                </div>
                <div className="sc1">
                  <p> 0 </p>

                  <p>Followers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="kk">
        <div></div>

        <div className="sc-bke1zw-0 fIuLDK snipcss0-1-1-26">
          <div className="sc-bke1zw-1 iLYyNU snipcss0-2-26-27">
            <div className="sc-ivORUo kliALV snipcss0-3-27-28">
              <ul className="sc-QNSiu hHBwyQ snipcss0-4-28-29">
                <h4 className="sc-1hp8d8a-0 sc-jxVmiN gwNJzZ snipcss0-5-29-30">
                  Activity
                </h4>
                <div className="sc-kXPWkl glUnOx snipcss0-5-29-31">
                  <div className="sc-eLVolr dEGyFn snipcss0-6-31-32"></div>
                  <h2
                    selected
                    className="sc-dln2kl-0 sc-dibpSh fSZIls snipcss0-7-33-34"
                  >
                    Reviews
                  </h2>

                  <h2 className="sc-dln2kl-0 sc-dibpSh bXURgK snipcss0-7-35-36">
                    Photos
                  </h2>

                  <h2 className="sc-dln2kl-0 sc-dibpSh bXURgK snipcss0-7-37-38">
                    Followers
                  </h2>

                  <h2 className="sc-dln2kl-0 sc-dibpSh bXURgK snipcss0-7-39-40">
                    Recently Viewed
                  </h2>

                  <h2 className="sc-dln2kl-0 sc-dibpSh bXURgK snipcss0-7-41-42">
                    Bookmarks
                  </h2>

                  <h2 className="sc-dln2kl-0 sc-dibpSh bXURgK snipcss0-7-43-44">
                    Blog Posts
                  </h2>
                </div>
              </ul>
            </div>
            <div className="sc-ivORUo kliALV snipcss0-3-27-45">
              <ul className="sc-QNSiu hHBwyQ snipcss0-4-45-46">
                <h4 className="sc-1hp8d8a-0 sc-jxVmiN gwNJzZ snipcss0-5-46-47">
                  Online Ordering
                </h4>
                <div className="sc-kXPWkl glUnOx snipcss0-5-46-48">
                  <div className="sc-eLVolr hzwCHO snipcss0-6-48-49"></div>

                  <h2 className="sc-dln2kl-0 sc-dibpSh bXURgK snipcss0-7-50-51">
                    Order History
                  </h2>

                  <h2 className="sc-dln2kl-0 sc-dibpSh bXURgK snipcss0-7-52-53">
                    My addresses
                  </h2>

                  <h2 className="sc-dln2kl-0 sc-dibpSh bXURgK snipcss0-7-54-55">
                    Favorite Orders
                  </h2>
                </div>
              </ul>
            </div>
            <div className="sc-ivORUo kliALV snipcss0-3-27-56">
              <ul className="sc-QNSiu hHBwyQ snipcss0-4-56-57">
                <h4 className="sc-1hp8d8a-0 sc-jxVmiN gwNJzZ snipcss0-5-57-58">
                  Payments
                </h4>
                <div className="sc-kXPWkl glUnOx snipcss0-5-57-59">
                  <div className="sc-eLVolr hzwCHO snipcss0-6-59-60"></div>
                  <h2 className="sc-dln2kl-0 sc-dibpSh bXURgK snipcss0-7-61-62">
                    Zomato Credits
                  </h2>

                  <h2 className="sc-dln2kl-0 sc-dibpSh bXURgK snipcss0-7-63-64">
                    Manage Wallets
                  </h2>

                  <h2 className="sc-dln2kl-0 sc-dibpSh bXURgK snipcss0-7-65-66">
                    Manage Cards
                  </h2>
                </div>
              </ul>
            </div>
            <div className="sc-ivORUo kliALV snipcss0-3-27-67">
              <ul className="sc-QNSiu hHBwyQ snipcss0-4-67-68">
                <h4 className="sc-1hp8d8a-0 sc-jxVmiN gwNJzZ snipcss0-5-68-69">
                  Table Booking
                </h4>
                <div className="sc-kXPWkl glUnOx snipcss0-5-68-70">
                  <div className="sc-eLVolr hzwCHO snipcss0-6-70-71"></div>

                  <h2 className="sc-dln2kl-0 sc-dibpSh bXURgK snipcss0-7-72-73">
                    Your Bookings
                  </h2>
                </div>
              </ul>
            </div>
            <div className="sc-ivORUo kliALV snipcss0-3-27-74">
              <ul className="sc-QNSiu hHBwyQ snipcss0-4-74-75">
                <h4 className="sc-1hp8d8a-0 sc-jxVmiN gwNJzZ snipcss0-5-75-76">
                  Suggested foodies to follow
                </h4>
                <div id={759171} className="sc-hrfIRY rzUcN snipcss0-5-75-77">
                  <div className="sc-fhQQiQ foUyPu snipcss0-6-77-78">
                    <div
                      height="4rem"
                      width="4rem"
                      className="sc-s1isp7-1 hemoIU sc-gVymBn ikTpsT snipcss0-7-78-79"
                    >
                      <div
                        src
                        className="sc-s1isp7-3 dqJnoA snipcss0-8-79-80"
                      ></div>
                      <img
                        alt="image"
                        src="https://www.zomato.com/users/kannandd-183148208/reviews"
                        loading="lazy"
                        className="sc-s1isp7-5 cqxheR snipcss0-8-79-81"
                      />
                    </div>
                    <div className="snipcss0-7-78-82">
                      <a className="sc-dhgczC cNQCTz snipcss0-8-82-83">
                        Immanuel Selvam
                      </a>
                      <div className="sc-byXIWe fqAonz snipcss0-8-82-84">
                        <span className="sc-iiYTAY fYVMRU snipcss0-9-84-85">
                          50 Reviews
                        </span>
                        <span className="snipcss0-9-84-86">444 Followers</span>
                      </div>
                    </div>
                  </div>
                  <div className="sc-DKcSU iOMOOw snipcss0-6-77-87">
                    <i
                      className="sc-rbbb40-1 iFnyeo snipcss0-7-87-88"
                      size={24}
                      color="#EF4F5F"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#EF4F5F"
                        width={24}
                        height={24}
                        viewBox="0 0 20 20"
                        aria-labelledby="icon-svg-title- icon-svg-desc-"
                        role="img"
                        className="sc-rbbb40-0 fmIpur snipcss0-8-88-89"
                      >
                        <g clipPath="url(#clip0)" className="snipcss0-9-89-90">
                          <path d="M14.375 14.1667C14.596 14.1667 14.8079 14.0789 14.9642 13.9226C15.1205 13.7663 15.2083 13.5543 15.2083 13.3333C15.2083 11.4417 13.7416 9.76667 11.675 9C12.0527 8.68202 12.3521 8.28135 12.5501 7.82903C12.7481 7.37671 12.8393 6.88489 12.8166 6.39167C12.8166 3.71667 11.3166 2.5 9.16663 2.5C7.01663 2.5 5.51663 3.71667 5.51663 6.39167C5.49499 6.88557 5.58748 7.37782 5.78692 7.83018C5.98637 8.28254 6.2874 8.68284 6.66663 9C4.59997 9.76667 3.1333 11.4417 3.1333 13.3333C3.1333 13.5543 3.2211 13.7663 3.37738 13.9226C3.53366 14.0789 3.74562 14.1667 3.96663 14.1667C4.18765 14.1667 4.39961 14.0789 4.55589 13.9226C4.71217 13.7663 4.79997 13.5543 4.79997 13.3333C4.79997 11.6667 6.84163 10.2083 9.17497 10.2083C11.5083 10.2083 13.5416 11.6667 13.5416 13.3333C13.5416 13.5543 13.6294 13.7663 13.7857 13.9226C13.942 14.0789 14.154 14.1667 14.375 14.1667ZM9.16663 4.16667C10.575 4.16667 11.15 4.80833 11.15 6.39167C11.15 6.81667 11.15 8.125 9.16663 8.125C7.1833 8.125 7.1833 6.81667 7.1833 6.39167C7.1833 4.80833 7.7583 4.16667 9.16663 4.16667Z"></path>
                          <path d="M11.6667 16.875H4.16667C3.50363 16.875 2.86774 16.6116 2.3989 16.1428C1.93006 15.6739 1.66667 15.038 1.66667 14.375V4.16667C1.66667 3.50363 1.93006 2.86774 2.3989 2.3989C2.86774 1.93006 3.50363 1.66667 4.16667 1.66667H14.375C15.038 1.66667 15.6739 1.93006 16.1428 2.3989C16.6116 2.86774 16.875 3.50363 16.875 4.16667V11.6667C16.875 11.8877 16.9628 12.0996 17.1191 12.2559C17.2754 12.4122 17.4873 12.5 17.7083 12.5C17.9293 12.5 18.1413 12.4122 18.2976 12.2559C18.4539 12.0996 18.5417 11.8877 18.5417 11.6667V4.16667C18.5417 3.0616 18.1027 2.00179 17.3213 1.22039C16.5399 0.438987 15.4801 0 14.375 0L4.16667 0C3.0616 0 2.00179 0.438987 1.22039 1.22039C0.438987 2.00179 0 3.0616 0 4.16667L0 14.375C0 15.4801 0.438987 16.5399 1.22039 17.3213C2.00179 18.1027 3.0616 18.5417 4.16667 18.5417H11.6667C11.8877 18.5417 12.0996 18.4539 12.2559 18.2976C12.4122 18.1413 12.5 17.9293 12.5 17.7083C12.5 17.4873 12.4122 17.2754 12.2559 17.1191C12.0996 16.9628 11.8877 16.875 11.6667 16.875Z"></path>
                          <path d="M19.1668 15.625H17.5002V13.9583C17.5002 13.7373 17.4124 13.5254 17.2561 13.3691C17.0998 13.2128 16.8878 13.125 16.6668 13.125C16.4458 13.125 16.2339 13.2128 16.0776 13.3691C15.9213 13.5254 15.8335 13.7373 15.8335 13.9583V15.625H14.1668C13.9458 15.625 13.7339 15.7128 13.5776 15.8691C13.4213 16.0254 13.3335 16.2373 13.3335 16.4583C13.3335 16.6793 13.4213 16.8913 13.5776 17.0476C13.7339 17.2039 13.9458 17.2917 14.1668 17.2917H15.8335V18.9583C15.8335 19.1793 15.9213 19.3913 16.0776 19.5476C16.2339 19.7039 16.4458 19.7917 16.6668 19.7917C16.8878 19.7917 17.0998 19.7039 17.2561 19.5476C17.4124 19.3913 17.5002 19.1793 17.5002 18.9583V17.2917H19.1668C19.3878 17.2917 19.5998 17.2039 19.7561 17.0476C19.9124 16.8913 20.0002 16.6793 20.0002 16.4583C20.0002 16.2373 19.9124 16.0254 19.7561 15.8691C19.5998 15.7128 19.3878 15.625 19.1668 15.625Z"></path>
                        </g>
                        <defs className="snipcss0-9-89-91">
                          <clipPath id="clip0" className="snipcss0-10-91-92">
                            <rect width={20} height={20}></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </i>
                  </div>
                </div>
                <div id={815193} className="sc-hrfIRY rzUcN snipcss0-5-75-93">
                  <div className="sc-fhQQiQ foUyPu snipcss0-6-93-94">
                    <div
                      height="4rem"
                      width="4rem"
                      className="sc-s1isp7-1 hemoIU sc-gVymBn ikTpsT snipcss0-7-94-95"
                    >
                      <div
                        src
                        className="sc-s1isp7-3 dqJnoA snipcss0-8-95-96"
                      ></div>
                      <img
                        alt="image"
                        src="https://www.zomato.com/users/kannandd-183148208/reviews"
                        loading="lazy"
                        className="sc-s1isp7-5 cqxheR snipcss0-8-95-97"
                      />
                    </div>
                    <div className="snipcss0-7-94-98">
                      <a className="sc-dhgczC cNQCTz snipcss0-8-98-99">
                        Hari Krishna
                      </a>
                      <div className="sc-byXIWe fqAonz snipcss0-8-98-100">
                        <span className="sc-iiYTAY fYVMRU snipcss0-9-100-101">
                          38 Reviews
                        </span>
                        <span className="snipcss0-9-100-102">
                          174 Followers
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="sc-DKcSU iOMOOw snipcss0-6-93-103">
                    <i
                      className="sc-rbbb40-1 iFnyeo snipcss0-7-103-104"
                      size={24}
                      color="#EF4F5F"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#EF4F5F"
                        width={24}
                        height={24}
                        viewBox="0 0 20 20"
                        aria-labelledby="icon-svg-title- icon-svg-desc-"
                        role="img"
                        className="sc-rbbb40-0 fmIpur snipcss0-8-104-105"
                      >
                        <g
                          clipPath="url(#clip0)"
                          className="snipcss0-9-105-106"
                        >
                          <path d="M14.375 14.1667C14.596 14.1667 14.8079 14.0789 14.9642 13.9226C15.1205 13.7663 15.2083 13.5543 15.2083 13.3333C15.2083 11.4417 13.7416 9.76667 11.675 9C12.0527 8.68202 12.3521 8.28135 12.5501 7.82903C12.7481 7.37671 12.8393 6.88489 12.8166 6.39167C12.8166 3.71667 11.3166 2.5 9.16663 2.5C7.01663 2.5 5.51663 3.71667 5.51663 6.39167C5.49499 6.88557 5.58748 7.37782 5.78692 7.83018C5.98637 8.28254 6.2874 8.68284 6.66663 9C4.59997 9.76667 3.1333 11.4417 3.1333 13.3333C3.1333 13.5543 3.2211 13.7663 3.37738 13.9226C3.53366 14.0789 3.74562 14.1667 3.96663 14.1667C4.18765 14.1667 4.39961 14.0789 4.55589 13.9226C4.71217 13.7663 4.79997 13.5543 4.79997 13.3333C4.79997 11.6667 6.84163 10.2083 9.17497 10.2083C11.5083 10.2083 13.5416 11.6667 13.5416 13.3333C13.5416 13.5543 13.6294 13.7663 13.7857 13.9226C13.942 14.0789 14.154 14.1667 14.375 14.1667ZM9.16663 4.16667C10.575 4.16667 11.15 4.80833 11.15 6.39167C11.15 6.81667 11.15 8.125 9.16663 8.125C7.1833 8.125 7.1833 6.81667 7.1833 6.39167C7.1833 4.80833 7.7583 4.16667 9.16663 4.16667Z"></path>
                          <path d="M11.6667 16.875H4.16667C3.50363 16.875 2.86774 16.6116 2.3989 16.1428C1.93006 15.6739 1.66667 15.038 1.66667 14.375V4.16667C1.66667 3.50363 1.93006 2.86774 2.3989 2.3989C2.86774 1.93006 3.50363 1.66667 4.16667 1.66667H14.375C15.038 1.66667 15.6739 1.93006 16.1428 2.3989C16.6116 2.86774 16.875 3.50363 16.875 4.16667V11.6667C16.875 11.8877 16.9628 12.0996 17.1191 12.2559C17.2754 12.4122 17.4873 12.5 17.7083 12.5C17.9293 12.5 18.1413 12.4122 18.2976 12.2559C18.4539 12.0996 18.5417 11.8877 18.5417 11.6667V4.16667C18.5417 3.0616 18.1027 2.00179 17.3213 1.22039C16.5399 0.438987 15.4801 0 14.375 0L4.16667 0C3.0616 0 2.00179 0.438987 1.22039 1.22039C0.438987 2.00179 0 3.0616 0 4.16667L0 14.375C0 15.4801 0.438987 16.5399 1.22039 17.3213C2.00179 18.1027 3.0616 18.5417 4.16667 18.5417H11.6667C11.8877 18.5417 12.0996 18.4539 12.2559 18.2976C12.4122 18.1413 12.5 17.9293 12.5 17.7083C12.5 17.4873 12.4122 17.2754 12.2559 17.1191C12.0996 16.9628 11.8877 16.875 11.6667 16.875Z"></path>
                          <path d="M19.1668 15.625H17.5002V13.9583C17.5002 13.7373 17.4124 13.5254 17.2561 13.3691C17.0998 13.2128 16.8878 13.125 16.6668 13.125C16.4458 13.125 16.2339 13.2128 16.0776 13.3691C15.9213 13.5254 15.8335 13.7373 15.8335 13.9583V15.625H14.1668C13.9458 15.625 13.7339 15.7128 13.5776 15.8691C13.4213 16.0254 13.3335 16.2373 13.3335 16.4583C13.3335 16.6793 13.4213 16.8913 13.5776 17.0476C13.7339 17.2039 13.9458 17.2917 14.1668 17.2917H15.8335V18.9583C15.8335 19.1793 15.9213 19.3913 16.0776 19.5476C16.2339 19.7039 16.4458 19.7917 16.6668 19.7917C16.8878 19.7917 17.0998 19.7039 17.2561 19.5476C17.4124 19.3913 17.5002 19.1793 17.5002 18.9583V17.2917H19.1668C19.3878 17.2917 19.5998 17.2039 19.7561 17.0476C19.9124 16.8913 20.0002 16.6793 20.0002 16.4583C20.0002 16.2373 19.9124 16.0254 19.7561 15.8691C19.5998 15.7128 19.3878 15.625 19.1668 15.625Z"></path>
                        </g>
                        <defs className="snipcss0-9-105-107">
                          <clipPath id="clip0" className="snipcss0-10-107-108">
                            <rect width={20} height={20}></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </i>
                  </div>
                </div>

                <div id={1673453} className="sc-hrfIRY rzUcN snipcss0-5-75-221">
                  <div className="sc-fhQQiQ foUyPu snipcss0-6-221-222">
                    <div
                      height="4rem"
                      width="4rem"
                      className="sc-s1isp7-1 hemoIU sc-gVymBn ikTpsT snipcss0-7-222-223"
                    >
                      <div
                        src
                        className="sc-s1isp7-3 dqJnoA snipcss0-8-223-224"
                      ></div>
                      <img
                        alt="image"
                        src="https://www.zomato.com/users/kannandd-183148208/reviews"
                        loading="lazy"
                        className="sc-s1isp7-5 cqxheR snipcss0-8-223-225"
                      />
                    </div>
                    <div className="snipcss0-7-222-226">
                      <a className="sc-dhgczC cNQCTz snipcss0-8-226-227">
                        Gowtham Daas
                      </a>
                      <div className="sc-byXIWe fqAonz snipcss0-8-226-228">
                        <span className="sc-iiYTAY fYVMRU snipcss0-9-228-229">
                          60 Reviews
                        </span>
                        <span className="snipcss0-9-228-230">
                          1.0K Followers
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="sc-DKcSU iOMOOw snipcss0-6-221-231">
                    <i
                      className="sc-rbbb40-1 iFnyeo snipcss0-7-231-232"
                      size={24}
                      color="#EF4F5F"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#EF4F5F"
                        width={24}
                        height={24}
                        viewBox="0 0 20 20"
                        aria-labelledby="icon-svg-title- icon-svg-desc-"
                        role="img"
                        className="sc-rbbb40-0 fmIpur snipcss0-8-232-233"
                      >
                        <g
                          clipPath="url(#clip0)"
                          className="snipcss0-9-233-234"
                        >
                          <path d="M14.375 14.1667C14.596 14.1667 14.8079 14.0789 14.9642 13.9226C15.1205 13.7663 15.2083 13.5543 15.2083 13.3333C15.2083 11.4417 13.7416 9.76667 11.675 9C12.0527 8.68202 12.3521 8.28135 12.5501 7.82903C12.7481 7.37671 12.8393 6.88489 12.8166 6.39167C12.8166 3.71667 11.3166 2.5 9.16663 2.5C7.01663 2.5 5.51663 3.71667 5.51663 6.39167C5.49499 6.88557 5.58748 7.37782 5.78692 7.83018C5.98637 8.28254 6.2874 8.68284 6.66663 9C4.59997 9.76667 3.1333 11.4417 3.1333 13.3333C3.1333 13.5543 3.2211 13.7663 3.37738 13.9226C3.53366 14.0789 3.74562 14.1667 3.96663 14.1667C4.18765 14.1667 4.39961 14.0789 4.55589 13.9226C4.71217 13.7663 4.79997 13.5543 4.79997 13.3333C4.79997 11.6667 6.84163 10.2083 9.17497 10.2083C11.5083 10.2083 13.5416 11.6667 13.5416 13.3333C13.5416 13.5543 13.6294 13.7663 13.7857 13.9226C13.942 14.0789 14.154 14.1667 14.375 14.1667ZM9.16663 4.16667C10.575 4.16667 11.15 4.80833 11.15 6.39167C11.15 6.81667 11.15 8.125 9.16663 8.125C7.1833 8.125 7.1833 6.81667 7.1833 6.39167C7.1833 4.80833 7.7583 4.16667 9.16663 4.16667Z"></path>
                          <path d="M11.6667 16.875H4.16667C3.50363 16.875 2.86774 16.6116 2.3989 16.1428C1.93006 15.6739 1.66667 15.038 1.66667 14.375V4.16667C1.66667 3.50363 1.93006 2.86774 2.3989 2.3989C2.86774 1.93006 3.50363 1.66667 4.16667 1.66667H14.375C15.038 1.66667 15.6739 1.93006 16.1428 2.3989C16.6116 2.86774 16.875 3.50363 16.875 4.16667V11.6667C16.875 11.8877 16.9628 12.0996 17.1191 12.2559C17.2754 12.4122 17.4873 12.5 17.7083 12.5C17.9293 12.5 18.1413 12.4122 18.2976 12.2559C18.4539 12.0996 18.5417 11.8877 18.5417 11.6667V4.16667C18.5417 3.0616 18.1027 2.00179 17.3213 1.22039C16.5399 0.438987 15.4801 0 14.375 0L4.16667 0C3.0616 0 2.00179 0.438987 1.22039 1.22039C0.438987 2.00179 0 3.0616 0 4.16667L0 14.375C0 15.4801 0.438987 16.5399 1.22039 17.3213C2.00179 18.1027 3.0616 18.5417 4.16667 18.5417H11.6667C11.8877 18.5417 12.0996 18.4539 12.2559 18.2976C12.4122 18.1413 12.5 17.9293 12.5 17.7083C12.5 17.4873 12.4122 17.2754 12.2559 17.1191C12.0996 16.9628 11.8877 16.875 11.6667 16.875Z"></path>
                          <path d="M19.1668 15.625H17.5002V13.9583C17.5002 13.7373 17.4124 13.5254 17.2561 13.3691C17.0998 13.2128 16.8878 13.125 16.6668 13.125C16.4458 13.125 16.2339 13.2128 16.0776 13.3691C15.9213 13.5254 15.8335 13.7373 15.8335 13.9583V15.625H14.1668C13.9458 15.625 13.7339 15.7128 13.5776 15.8691C13.4213 16.0254 13.3335 16.2373 13.3335 16.4583C13.3335 16.6793 13.4213 16.8913 13.5776 17.0476C13.7339 17.2039 13.9458 17.2917 14.1668 17.2917H15.8335V18.9583C15.8335 19.1793 15.9213 19.3913 16.0776 19.5476C16.2339 19.7039 16.4458 19.7917 16.6668 19.7917C16.8878 19.7917 17.0998 19.7039 17.2561 19.5476C17.4124 19.3913 17.5002 19.1793 17.5002 18.9583V17.2917H19.1668C19.3878 17.2917 19.5998 17.2039 19.7561 17.0476C19.9124 16.8913 20.0002 16.6793 20.0002 16.4583C20.0002 16.2373 19.9124 16.0254 19.7561 15.8691C19.5998 15.7128 19.3878 15.625 19.1668 15.625Z"></path>
                        </g>
                        <defs className="snipcss0-9-233-235">
                          <clipPath id="clip0" className="snipcss0-10-235-236">
                            <rect width={20} height={20}></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </i>
                  </div>
                </div>
              </ul>
            </div>
            <div className="sc-ivORUo kliALV snipcss0-3-27-237">
              <ul className="sc-QNSiu hHBwyQ snipcss0-4-237-238">
                <h4 className="sc-1hp8d8a-0 sc-jxVmiN gwNJzZ snipcss0-5-238-239">
                  Zomato profile widget
                </h4>
                <p className="sc-iLQbDB SnVOS snipcss0-5-238-240">
                  Showcase your Zomato profile on your blog.
                </p>
                <div
                  height="25rem"
                  width="26rem"
                  className="sc-s1isp7-1 tTYdW sc-kpIUip dXuPxG snipcss0-5-238-241"
                >
                  <div
                    src
                    className="sc-s1isp7-3 dqJnoA snipcss0-6-241-242"
                  ></div>
                  <img
                    alt="user widget"
                    src="https://www.zomato.com/users/kannandd-183148208/reviews"
                    loading="lazy"
                    className="sc-s1isp7-5 cqxheR snipcss0-6-241-243"
                  />
                </div>
                <button
                  className="sc-1kx5g6g-1 dXXDbl sc-flVYRD jzlqei snipcss0-5-238-244"
                  role="button"
                  tabIndex={0}
                  aria-disabled="false"
                >
                  <span
                    tabIndex={-1}
                    className="sc-1kx5g6g-2 bwVPvR snipcss0-6-244-245"
                  >
                    <span className="sc-1kx5g6g-3 dkwpEa snipcss0-7-245-246">
                      Get this widget
                    </span>
                    <i
                      className="sc-rbbb40-1 iFnyeo sc-1kx5g6g-0 dstZGm snipcss0-7-245-247"
                      color="#EF4F5F"
                      size={10}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#EF4F5F"
                        width={10}
                        height={10}
                        viewBox="0 0 20 20"
                        aria-labelledby="icon-svg-title- icon-svg-desc-"
                        role="img"
                        className="sc-rbbb40-0 gvsUip snipcss0-8-247-248"
                      >
                        <title className="snipcss0-9-248-249">
                          right-triangle
                        </title>
                        <path d="M5 0.42l10 10-10 10v-20z"></path>
                      </svg>
                    </i>
                  </span>
                </button>
              </ul>
            </div>
          </div>
          <div className="sc-bke1zw-1 ftUicW snipcss0-2-26-250">
            <section className="sc-fXeiAy kVMetT snipcss0-3-250-251">
              <h1 className="sc-7kepeu-0 sc-genRuD mTmkc snipcss0-4-251-252">
                Reviews
              </h1>
              <div className="sc-tdkdT ljmYIt snipcss0-4-251-253">
                <div
                  height="20rem"
                  width="18rem"
                  className="sc-s1isp7-1 liHcnY sc-krlBKp dDSEll snipcss0-5-253-254"
                >
                  <div
                    src
                    className="sc-s1isp7-3 cVOEqG snipcss0-6-254-255"
                  ></div>
                  <img
                    alt="No Reviews"
                    src="https://b.zmtcdn.com/webFrontend/691ad4ad27a5804a3033977d45390c811584432410.png"
                    loading="lazy"
                    className="sc-s1isp7-5 jQwYOW snipcss0-6-254-256"
                  />
                </div>
                <p className="sc-1hez2tp-0 sc-cDxcTd hJqPTK snipcss0-5-253-257">
                  Nothing here yet
                </p>
              </div>
              <div className="sc-iAUvrw jrEbzA snipcss0-4-251-258">
                <div className="sc-kXoVnq fGMnhb snipcss0-5-258-259"></div>
              </div>
            </section>
          </div>
        </div>
      </div>



      {showProfileEdit &&
      <>
  <div className='overlayProfile'>
    <div className='signUp'>
      <div className='profileLogo'> Edit Profile</div>
      <div className='exitSignup' onClick={() => {
       setProfileEdit(false)
      }}> 
      <svg xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="24" height="24" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img"><title>cross</title><path d="M11.42 10.42l3.54-3.54c0.38-0.4 0.38-1.040 0-1.42s-1.020-0.4-1.42 0l-3.54 3.54-3.54-3.54c-0.4-0.4-1.020-0.4-1.42 0s-0.38 1.020 0 1.42l3.54 3.54-3.54 3.54c-0.38 0.38-0.38 1.020 0 1.42 0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28l3.54-3.56 3.54 3.56c0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28c0.38-0.4 0.38-1.040 0-1.42l-3.54-3.54z"></path></svg></div>
</div>
<div>
      
      {selectedImage && (
        <div>
          
          {/* <img src={selectedImage} alt="Selected" style={{ maxWidth: '100%' }} /> */}
        </div>
      )}
    </div>
<div className="profilePosition">
<div>
  <img className="imges"src="https://b.zmtcdn.com/data/cover_images/7dc92ec243c19684b2eaefd0050d656e1548144012.jpeg" alt="" />
</div>
<div  className="imges1">
{selectedImage && (
      
          <img className="imges1" src={selectedImage1} alt="Selected"  />
   
      )}
        {!selectedImage && (
        <img  className="imges1" src={image} alt="" />

      )}
</div>
<div className="profileUserPic">
{/* <form method="post" action = '/upload' encType="multipart/form-data" > */}
      <label className="custom-file-input">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: 'none' }}
          name="profile"
        />
        <svg className="profileUserPic" viewBox="0 0 20 20" fill="currentColor">
          <path d="M15.82 4.76h-1.08l-0.86-1.72c-0.4-0.88-1.28-1.48-2.3-1.5v0h-3.36c-1.1 0.04-2.04 0.74-2.4 1.72v0.02l-0.6 1.48h-1.18c-2.24 0-4.04 1.8-4.04 4.04v6.3c0 2.3 1.88 4.18 4.2 4.18v0h11.62c2.3 0 4.18-1.88 4.18-4.18v-6.12c0 0 0-0.02 0-0.02 0-2.32-1.88-4.2-4.18-4.2v0zM10 15.84c-0.02 0-0.04 0-0.04 0-2.32 0-4.2-1.86-4.24-4.18v0c0.04-2.3 1.92-4.16 4.22-4.16 0.02 0 0.04 0 0.06 0v0c0.02 0 0.04 0 0.06 0 2.32 0 4.18 1.86 4.22 4.16v0c-0.04 2.32-1.92 4.18-4.24 4.18 0 0-0.02 0-0.04 0v0zM16.2 9.64c-0.54 0-0.96-0.42-0.96-0.94s0.42-0.96 0.96-0.96c0.52 0 0.94 0.42 0.94 0.96v0c0 0.52-0.42 0.94-0.94 0.94v0zM12.86 11.66c0 1.52-1.28 2.74-2.86 2.74s-2.86-1.22-2.86-2.74c0-1.52 1.28-2.74 2.86-2.74s2.86 1.22 2.86 2.74z"></path>
        </svg>
      </label>
    {/* </form> */}

</div>
</div>
<div className="profileNamez">
<input
        type="text"
        className={`customInput`}
        placeholder="Full Name"
        value={userName}
        onChange={(e)=>setUserName(e.target.value)}
      />
      </div>



      <div className="profileNamez1">
<button className="profileName12" onClick={()=>{handleSUbmit()
setProfileEdit(false)
}}>Submit</button>
      </div>
    </div>
  

    </>
}

      {/* </div> */}
    </>
  );
}

export default Profile;
