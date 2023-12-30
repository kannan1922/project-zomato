import React from "react";
import "./form3.css";
import { useState, useEffect } from "react";
import axios from "axios";
function Form3() {
  const [image, setImage] = useState("");
  const [showProfileEdit, setProfileEdit] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>("");
  const [selectedImage1, setSelectedImage1] = useState<any>("");
  const [selectedImage2, setSelectedImage2] = useState<any>("");
  const [userName, setUserName] = useState("");
  const [id, setId] = useState("");
  const handleImageChange = (event: any) => {
    setSelectedImage(event?.target?.files[0]);
    console.log(selectedImage);

  };
  const handleImageChange1 = (event: any) => {
    setSelectedImage1(event?.target?.files[0]);
    console.log(selectedImage1);
  };

  const handleImageChange2 = (event: any) => {
    setSelectedImage2(event?.target?.files[0]);
    console.log(selectedImage2);
  };

  const handleSUbmit = async () => {
    try {
      const formData = new FormData();
      formData.append("Name", userName);
      formData.append("profile", selectedImage);
      const response = await axios.post(
        `http://localhost:4000/user/${id}/edit`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log(response.data.updatedUser);
    } catch (error: any) {
      console.log("Error:", error.response?.data.error);
    }
  };

  return (
    <div className="fro">
      <div className="sc-frDJqD WeojD snipcss0-0-0-1 snipcss-Yomx6">
        <div className="bke1zw-0 cMipmx snipcss0-1-1-2">
          <div className="bke1zw-1 gxEyBQ snipcss0-2-2-3">
            <div style={{ fontSize: "28px" }}>Upload images</div>
          </div>
        </div>
        <div className="sc-kvZOFW eiPhbT snipcss0-1-1-7">
          <div className="sc-jqCOkK goacbn snipcss0-2-7-8">
            <div
              className="bke1zw-0 cMipmx snipcss0-3-8-9 style-6PJoE"
              id="style-6PJoE"
            >
              <div className="bke1zw-1 dgZBBf snipcss0-4-9-10">
                <div className="sc-uJMKN gNzEyA snipcss0-5-10-11">
                  Menu images
                </div>
              </div>
              <div className="bke1zw-1 sc-hdPSEv hYxBvJ snipcss0-4-9-12">
                <div className="sc-fHSTwm bdfiBP snipcss0-5-12-13">
                  <i
                    className="rbbb40-1 MxLSp snipcss0-6-13-14"
                    color="#9C9C9C"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#9C9C9C"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      aria-labelledby="icon-svg-title- icon-svg-desc-"
                      role="img"
                      className="rbbb40-0 kIxlGM snipcss0-7-14-15"
                    >
                      <linearGradient
                        id="clqp1lfzw00rp2v6gqzh5rmz1"
                        x1={0}
                        x2="100%"
                        y1={0}
                        y2={0}
                        className="snipcss0-8-15-16"
                      >
                        <stop
                          offset={0}
                          stopColor="#9C9C9C"
                          className="snipcss0-9-16-17"
                        ></stop>
                        <stop
                          offset="100%"
                          stopColor="#9C9C9C"
                          className="snipcss0-9-16-18"
                        ></stop>
                      </linearGradient>
                      <title
                        id="icon-svg-title-"
                        className="snipcss0-8-15-19"
                      ></title>
                      <desc id="icon-svg-desc-" className="snipcss0-8-15-20">
                        It is an icon with title
                      </desc>
                      <title className="snipcss0-8-15-21">chevron-up</title>
                      <path
                        d="M15.54 13.44c-0.3 0.3-0.78 0.3-1.060 0l-4.48-4.46-4.46 4.46c-0.3 0.3-0.78 0.3-1.060 0s-0.3-0.76 0-1.060l5-5c0.28-0.28 0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060z"
                        fill="url(#clqp1lfzw00rp2v6gqzh5rmz1)"
                      ></path>
                    </svg>
                  </i>
                </div>
              </div>
            </div>
            <div className="sc-bbmXgH cfFHce snipcss0-3-8-22">
              <div className="bke1zw-0 cMipmx snipcss0-4-22-23">
                <div className="bke1zw-1 sc-ivVeuv fCKKkK snipcss0-5-23-24">
                  Your menu will be directly visible to customers on Zomato
                </div>
              </div>
            </div>
            <div className="sc-gGBfsJ UenWV snipcss0-3-8-25">
              <div className="sc-ktHwxA dASGSt snipcss0-4-25-26">
                <section className="sc-dhVevo cEWJMv snipcss0-5-26-27">
                  <header className="sc-fqCOlO dfXnsL snipcss0-6-27-28">
                    <label className="snipcss0-7-28-29"></label>
                  </header>
                  <article className="sc-kyCyAI kbnxWN snipcss0-6-27-30">
                    <div className="drop-target snipcss0-7-30-31"></div>
                    <div
                      id="image-uploader-container"
                      className="sc-jLrYHE kFFNyT snipcss0-7-30-32"
                    >
                      <section className="sc-kbdWBx fePyhL snipcss0-8-32-33">
                        <div className="btn-wrapper-url-view snipcss0-9-33-34">
                          Drag &amp; Drop to upload or
                          <span className="sc-iNovjJ bDIRbX snipcss0-10-34-35">
                            Browse
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleImageChange}
                              name="profile"
                              className="sc-eVrGFk TEbQz snipcss0-11-35-36"
                            />
                          </span>
                        </div>
                        <section className="sc-ctwKVn iOCmdk snipcss0-9-33-37">
                          <span className="sc-iNovjJ bDIRbX snipcss0-10-37-38">
                            <img
                              src="https://www.zomato.com/partner-with-us/static/media/AddPhotoIcon.5a2162d5.svg"
                              className="sc-dCaJBF sc-cXHFlN fCwxlj snipcss0-11-38-39"
                            />
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleImageChange}
                              name="profile"
                              className="sc-eVrGFk ixBRpR snipcss0-11-38-40"
                            />
                          </span>
                        </section>
                      </section>
                    </div>
                  </article>
                </section>
              </div>
            </div>
          </div>
          <div className="sc-jqCOkK goacbn snipcss0-2-7-41">
            <div
              className="bke1zw-0 cMipmx snipcss0-3-41-42 style-sEhYa"
              id="style-sEhYa"
            >
              <div className="bke1zw-1 dgZBBf snipcss0-4-42-43">
                <div className="sc-uJMKN gNzEyA snipcss0-5-43-44">
                  Restaurant images
                </div>
              </div>
              <div className="bke1zw-1 sc-hdPSEv hYxBvJ snipcss0-4-42-45">
                <div className="sc-fHSTwm bdfiBP snipcss0-5-45-46">
                  <i
                    className="rbbb40-1 MxLSp snipcss0-6-46-47"
                    color="#9C9C9C"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#9C9C9C"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      aria-labelledby="icon-svg-title- icon-svg-desc-"
                      role="img"
                      className="rbbb40-0 kIxlGM snipcss0-7-47-48"
                    >
                      <linearGradient
                        id="clqp1lfzz00rq2v6gjq8afzew"
                        x1={0}
                        x2="100%"
                        y1={0}
                        y2={0}
                        className="snipcss0-8-48-49"
                      >
                        <stop
                          offset={0}
                          stopColor="#9C9C9C"
                          className="snipcss0-9-49-50"
                        ></stop>
                        <stop
                          offset="100%"
                          stopColor="#9C9C9C"
                          className="snipcss0-9-49-51"
                        ></stop>
                      </linearGradient>
                      <title
                        id="icon-svg-title-"
                        className="snipcss0-8-48-52"
                      ></title>
                      <desc id="icon-svg-desc-" className="snipcss0-8-48-53">
                        It is an icon with title
                      </desc>
                      <title className="snipcss0-8-48-54">chevron-up</title>
                      <path
                        d="M15.54 13.44c-0.3 0.3-0.78 0.3-1.060 0l-4.48-4.46-4.46 4.46c-0.3 0.3-0.78 0.3-1.060 0s-0.3-0.76 0-1.060l5-5c0.28-0.28 0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060z"
                        fill="url(#clqp1lfzz00rq2v6gjq8afzew)"
                      ></path>
                    </svg>
                  </i>
                </div>
              </div>
            </div>
            <div className="sc-bbmXgH cfFHce snipcss0-3-41-55">
              <div className="bke1zw-0 cMipmx snipcss0-4-55-56">
                <div className="bke1zw-1 sc-ivVeuv fCKKkK snipcss0-5-56-57">
                  Please upload atleast one facade shot (picture of the
                  restaurant front)
                </div>
              </div>
            </div>
            <div className="sc-gGBfsJ UenWV snipcss0-3-41-58">
              <div className="sc-ktHwxA dASGSt snipcss0-4-58-59">
                <section className="sc-dhVevo cEWJMv snipcss0-5-59-60">
                  <header className="sc-fqCOlO dfXnsL snipcss0-6-60-61">
                    <label className="snipcss0-7-61-62"></label>
                  </header>
                  <article className="sc-kyCyAI kbnxWN snipcss0-6-60-63">
                    <div className="drop-target snipcss0-7-63-64"></div>
                    <div
                      id="image-uploader-container"
                      className="sc-jLrYHE kFFNyT snipcss0-7-63-65"
                    >
                      <section className="sc-kbdWBx fePyhL snipcss0-8-65-66">
                        <div className="btn-wrapper-url-view snipcss0-9-66-67">
                          Drag &amp; Drop to upload or
                          <span className="sc-iNovjJ bDIRbX snipcss0-10-67-68">
                            Browse
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleImageChange1}
                              name="profile"
                              className="sc-eVrGFk TEbQz snipcss0-11-68-69"
                            />
                          </span>
                        </div>
                        <section className="sc-ctwKVn iOCmdk snipcss0-9-66-70">
                          <span className="sc-iNovjJ bDIRbX snipcss0-10-70-71">
                            <img
                              src="https://www.zomato.com/partner-with-us/static/media/AddPhotoIcon.5a2162d5.svg"
                              className="sc-dCaJBF sc-cXHFlN fCwxlj snipcss0-11-71-72"
                            />
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleImageChange1}
                              name="profile"
                              className="sc-eVrGFk ixBRpR snipcss0-11-71-73"
                            />
                          </span>
                        </section>
                      </section>
                    </div>
                  </article>
                </section>
              </div>
            </div>
          </div>
          <div className="sc-jqCOkK goacbn snipcss0-2-7-74">
            <div
              className="bke1zw-0 cMipmx snipcss0-3-74-75 style-S9kJt"
              id="style-S9kJt"
            >
              <div className="bke1zw-1 dgZBBf snipcss0-4-75-76">
                <div className="sc-uJMKN gNzEyA snipcss0-5-76-77">
                  Food images
                </div>
              </div>
              <div className="bke1zw-1 sc-hdPSEv hYxBvJ snipcss0-4-75-78">
                <div className="sc-fHSTwm bdfiBP snipcss0-5-78-79">
                  <i
                    className="rbbb40-1 MxLSp snipcss0-6-79-80"
                    color="#9C9C9C"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#9C9C9C"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      aria-labelledby="icon-svg-title- icon-svg-desc-"
                      role="img"
                      className="rbbb40-0 kIxlGM snipcss0-7-80-81"
                    >
                      <linearGradient
                        id="clqp1lg0000rr2v6gxvjfv2hr"
                        x1={0}
                        x2="100%"
                        y1={0}
                        y2={0}
                        className="snipcss0-8-81-82"
                      >
                        <stop
                          offset={0}
                          stopColor="#9C9C9C"
                          className="snipcss0-9-82-83"
                        ></stop>
                        <stop
                          offset="100%"
                          stopColor="#9C9C9C"
                          className="snipcss0-9-82-84"
                        ></stop>
                      </linearGradient>
                      <title
                        id="icon-svg-title-"
                        className="snipcss0-8-81-85"
                      ></title>
                      <desc id="icon-svg-desc-" className="snipcss0-8-81-86">
                        It is an icon with title
                      </desc>
                      <title className="snipcss0-8-81-87">chevron-up</title>
                      <path
                        d="M15.54 13.44c-0.3 0.3-0.78 0.3-1.060 0l-4.48-4.46-4.46 4.46c-0.3 0.3-0.78 0.3-1.060 0s-0.3-0.76 0-1.060l5-5c0.28-0.28 0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060z"
                        fill="url(#clqp1lg0000rr2v6gxvjfv2hr)"
                      ></path>
                    </svg>
                  </i>
                </div>
              </div>
            </div>
            <div className="sc-bbmXgH cfFHce snipcss0-3-74-88">
              <div className="bke1zw-0 cMipmx snipcss0-4-88-89">
                <div className="bke1zw-1 sc-ivVeuv fCKKkK snipcss0-5-89-90">
                  Please do not put images of raw ingredients
                </div>
              </div>
            </div>
            <div className="sc-gGBfsJ UenWV snipcss0-3-74-91">
              <div className="sc-ktHwxA dASGSt snipcss0-4-91-92">
                <section className="sc-dhVevo cEWJMv snipcss0-5-92-93">
                  <header className="sc-fqCOlO dfXnsL snipcss0-6-93-94">
                    <label className="snipcss0-7-94-95"></label>
                  </header>
                  <article className="sc-kyCyAI kbnxWN snipcss0-6-93-96">
                    <div className="drop-target snipcss0-7-96-97"></div>
                    <div
                      id="image-uploader-container"
                      className="sc-jLrYHE kFFNyT snipcss0-7-96-98"
                    >
                      <section className="sc-kbdWBx fePyhL snipcss0-8-98-99">
                        <div className="btn-wrapper-url-view snipcss0-9-99-100">
                          Drag &amp; Drop to upload or
                          <span className="sc-iNovjJ bDIRbX snipcss0-10-100-101">
                            Browse
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleImageChange2}
                              name="profile"
                              className="sc-eVrGFk TEbQz snipcss0-11-101-102"
                            />
                          </span>
                        </div>
                        <section className="sc-ctwKVn iOCmdk snipcss0-9-99-103">
                          <span className="sc-iNovjJ bDIRbX snipcss0-10-103-104">
                            <img
                              src="https://www.zomato.com/partner-with-us/static/media/AddPhotoIcon.5a2162d5.svg"
                              className="sc-dCaJBF sc-cXHFlN fCwxlj snipcss0-11-104-105"
                            />
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleImageChange2}
                              name="profile"
                              className="sc-eVrGFk ixBRpR snipcss0-11-104-106"
                            />
                          </span>
                        </section>
                      </section>
                    </div>
                  </article>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form3;
