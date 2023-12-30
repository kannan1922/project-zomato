import React from 'react'
import './home.css'
import { useNavigate } from "react-router-dom";
import { useState ,useEffect} from 'react';
import LocationComponent from './Location';
function Home() {

        const navigate = useNavigate();
        const [filterParams, setFilterParams] = useState([]);
      
        const handleNavigateHotelName = (city) => {
          let updatedFilterParams = [...filterParams];
          if (city) updatedFilterParams.push(`${city}`);
      
          setFilterParams(updatedFilterParams);
          const filterUrl = `/Coimbatore/${updatedFilterParams.join("/")}`;
          navigate(filterUrl);
        };
        // console.log("1")
  return (
    <div className='l'>
        <LocationComponent/>
        <div className="sc-1mo3ldo-0 sc-OzIbW cuwUeA snipcss-a4GCD">
  <div className="sc-lmuQER bmrcVD">
    <div className="sc-bke1zw-0 fIuLDK">
      <div className="sc-bke1zw-1 bETUyQ">
 
       
          <div
            height="24rem"
            width="100%"
            className="sc-s1isp7-1 grmOkY sc-fXNpEn dyTYUR"
          >
            <div src="" className="sc-s1isp7-3 cVOEqG"></div>
            <img
              alt="Order Online"
              src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around%7C402:360&crop=402:360;*,*"
              loading="lazy"
              className="sc-s1isp7-5 fyZwWD"
            />
          </div>
          <div className="sc-gIGTPO fUnqAU">
            <p className="sc-1hez2tp-0 bBZBLJ title">Order Online</p>
            <p className="sc-1hez2tp-0 bBZBLJ subtitle">
              Stay home and order to your doorstep
            </p>
          </div>
    
      </div>
      <div className="sc-bke1zw-1 ghjurV">
    
          <div
            height="24rem"
            width="100%"
            className="sc-s1isp7-1 grmOkY sc-fXNpEn dyTYUR"
          >
            <div src="" className="sc-s1isp7-3 cVOEqG"></div>
            <img
              alt="Dining"
              src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around%7C402:360&crop=402:360;*,*"
              loading="lazy"
              className="sc-s1isp7-5 fyZwWD"
            />
          </div>
          <div className="sc-gIGTPO fUnqAU">
            <p className="sc-1hez2tp-0 bBZBLJ title">Dining</p>
            <p className="sc-1hez2tp-0 bBZBLJ subtitle">
              View the city's favourite dining venues
            </p>
          </div>
 
      </div>
    </div>
  </div>
  <div className="sc-fbSTYX jDqbKF">
    <div className="sc-hMapFE fMxOMS">
      <h2 className="sc-dln2kl-0 cHkolX title">Collections</h2>
      <div className="desc-see-more-link">
        <h6 className="sc-1gbvc19-0 bPGePZ desc">
          Explore curated lists of top restaurants, cafes, pubs, and bars in
          Coimbatore, based on trends
        </h6>
      
        
          <span
            tabIndex={-1}
            color="#FF7E8B"
            target="_self"
            role="link"
            className="sc-ks3f96-1 cndCgo"
          >
            All collections in Coimbatore
            <i
              className="sc-rbbb40-1 iFnyeo sc-dwIOUI kWCJXF"
              color="#FF7E8B"
              size={12}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FF7E8B"
                width={12}
                height={12}
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
                className="sc-rbbb40-0 ezrcri"
              >
                <title>right-triangle</title>
                <path d="M5 0.42l10 10-10 10v-20z"></path>
              </svg>
            </i>
          </span>

      </div>
    </div>
    <div className="sc-bke1zw-0 fIuLDK cards">
      <div className="sc-bke1zw-1 gyXHqH">
        <section className="sc-eYDgzN fSkWEA">
  
            <div height="32rem" className="sc-s1isp7-1 ibrfpG sc-gqGNZe gTzPhr">
              <img
                src="data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAyADIDASIAAhEBAxEB/8QAHAABAAICAwEAAAAAAAAAAAAAAAMEAgYFBwgB/8QALhAAAQMDAgMGBgMAAAAAAAAAAAECAwQFEQeRBjGBEhMUNFFTFSIjMjNCUmFx/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAIBA//EABkRAQADAQEAAAAAAAAAAAAAAAABESESQf/aAAwDAQACEQMRAD8A9Ugi8TD7jdz6k8S8nt3AkBGs8afum4SeJeT27gSAw71n8kMVqIk5vbuBKCLxMPuN3AHiCm1lvGPnndubDadWbpM1PqOVTrCm02vzpmo6mkxn0O1uFdNqiGmj72B3b/tBVriU9x1JviQdtiuRCC1am3t0rVle7GTneIeDKxlCjIKdVVE9DhLVwlXq1GyUrkX1wZXi8nW2N1HrnQpl6ouDUOI9T7tSucscy4/0Xvha6xqjaeB+xpt54Mv9QvlpF6HW4ceZWV1ivefzO3BrS6e37PlJNgZg9+JaKJOUDNiZlDTt+2NqdCyCBXfRQPTDo2r0MG22lauUibsWwBTdbaVy5WJq9DFbVRrzgZsXgBQ+EUXsM2BfAAAAAAAAAAAAf//Z"
                className="sc-s1isp7-2 dHmqIJ"
              />
              <img
                alt="14 Great Cafes"
                src="https://b.zmtcdn.com/data/collections/61d06b1dc0a478a6216bcf07ff8b2d67_1692344090.jpg?output-format=webp"
                loading="lazy"
                className="sc-s1isp7-5 fyZwWD"
              />
            </div>
            <section className="sc-fZFPbK doNnpP">
              <section className="sc-ikVBsd jyZsWr">
                <p color="#FFFFFF" className="sc-1hez2tp-0 sc-cLrAyg jftOJe">
                  14 Great Cafes
                </p>
                <div className="sc-enOJk gtMrKg">
                  <h6 className="sc-1gbvc19-0 sc-boHNyh bMzoVW">11 Places</h6>
                  <i className="sc-rbbb40-1 iFnyeo" size={10} color="#FFFFFF">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FFFFFF"
                      width={10}
                      height={10}
                      viewBox="0 0 20 20"
                      aria-labelledby="icon-svg-title- icon-svg-desc-"
                      role="img"
                      className="sc-rbbb40-0 gvsUip"
                    >
                      <title>right-triangle</title>
                      <path d="M5 0.42l10 10-10 10v-20z"></path>
                    </svg>
                  </i>
                </div>
              </section>
            </section>
   
        </section>
      </div>
      <div className="sc-bke1zw-1 imUMiD">
        <section className="sc-eYDgzN fSkWEA">
     
            <div height="32rem" className="sc-s1isp7-1 ibrfpG sc-gqGNZe gTzPhr">
              <img
                src="data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAyADIDASIAAhEBAxEB/8QAHAABAAEFAQEAAAAAAAAAAAAAAAQCAwUGBwEI/8QAKhAAAQMCBAQGAwAAAAAAAAAAAQACAwQFBhETIRIUMZEHQVFSYXFCU4H/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQQD/8QAHhEBAAMAAgIDAAAAAAAAAAAAAAECEQMhEiIxQVH/2gAMAwEAAhEDEQA/APqlFa5iI/m3uvRNGejwguIqDNGOrgmtH7wgrRUasfuHdBLGejggrRUarPcEQfHlj8VLvVVAY6Y7/K3CPHt0hlYDIXA/K4/aMD3+nna/lpB/Fvtow/d9eIz07yB6hZOSl53vpsremfHbap8a3mSZvA5waVMqsR359KHwFxICwN8sV54mOpoHADyAWUsMd6EYhmpnb7ZkLPM8lc8fpZms7rGP8QL9E7TlDgR5rM4ZxzXzVHDUSnf5WTrsHzVNE+Qw5SEZ9Fp2HsK3OnvBdNE/TDvRd6ctrw45Dqou9Y4Ah533RWGMla0N0XbDLoivsvX46SLTRjpAzsqhbaUdIWdlMRa2dGNDTkZGJvZeNoKZpzETQfpSkUyBb0I+HLhGStChpwc9Nuf0pKJkGo3JQfrb2RSUVBERAREQEREBERB//9k="
                className="sc-s1isp7-2 dHmqIJ"
              />
              <img
                alt="11 Blissful Breakfast Places"
                src="https://b.zmtcdn.com/data/collections/91657c6e0f9452b3d54b4658e7bc90b9_1692375924.jpg?output-format=webp"
                loading="lazy"
                className="sc-s1isp7-5 fyZwWD"
              />
            </div>
            <section className="sc-fZFPbK doNnpP">
              <section className="sc-ikVBsd jyZsWr">
                <p color="#FFFFFF" className="sc-1hez2tp-0 sc-cLrAyg jftOJe">
                  11 Blissful Breakfast Places
                </p>
                <div className="sc-enOJk gtMrKg">
                  <h6 className="sc-1gbvc19-0 sc-boHNyh bMzoVW">8 Places</h6>
                  <i className="sc-rbbb40-1 iFnyeo" size={10} color="#FFFFFF">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FFFFFF"
                      width={10}
                      height={10}
                      viewBox="0 0 20 20"
                      aria-labelledby="icon-svg-title- icon-svg-desc-"
                      role="img"
                      className="sc-rbbb40-0 gvsUip"
                    >
                      <title>right-triangle</title>
                      <path d="M5 0.42l10 10-10 10v-20z"></path>
                    </svg>
                  </i>
                </div>
              </section>
            </section>
    
        </section>
      </div>
      <div className="sc-bke1zw-1 foDMxx">
        <section className="sc-eYDgzN fSkWEA">
          
            <div height="32rem" className="sc-s1isp7-1 ibrfpG sc-gqGNZe gTzPhr">
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAyADIDASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAAQBAwUCBv/EACMQAAICAgMAAgIDAAAAAAAAAAABAgMEERIhMQUTFEEkM1H/xAAXAQEBAQEAAAAAAAAAAAAAAAABAAID/8QAGhEBAQEAAwEAAAAAAAAAAAAAAAERAiExEv/aAAwDAQACEQMRAD8AwGtnP1tPk10XKr9kWqSWl4RV/ZGdsdLRs4afNaMOqDVqN3E3yWgrfE/lz44zTJ+HyvroaXpVmL+O9i3x9vCLQTw31rvOs34At9gB2cjzldnPpHVkW+kI4trjMfeRFPbRpzkVxg1JbRp41qi0Z7yIy8REMhqXnRem9NrNt5YzEcFt9BZkqeO4tlWJyS3FjIPrWyqJ6AT/ACrl+wLDrzNG+Q/VU7X2U1wjEv8AvVa6M1qZJ2mcI472+yVZC3pLTE78mVvR1iy010axi07LDslDcSlRyMdePRpV3cYIm3MrcOMki2rIyfzbP8YFznRvxAWrCqK7AAIa5j6NVeoAIw3P+szrW9vtgBplRtgAAn//2Q=="
                className="sc-s1isp7-2 dHmqIJ"
              />
              <img
                alt="6 Premium Coffee Shops"
                src="https://b.zmtcdn.com/data/collections/0817dce042a9e83ee7323323f5ee502d_1692376226.jpeg?output-format=webp"
                loading="lazy"
                className="sc-s1isp7-5 fyZwWD"
              />
            </div>
            <section className="sc-fZFPbK doNnpP">
              <section className="sc-ikVBsd jyZsWr">
                <p color="#FFFFFF" className="sc-1hez2tp-0 sc-cLrAyg jftOJe">
                  6 Premium Coffee Shops
                </p>
                <div className="sc-enOJk gtMrKg">
                  <h6 className="sc-1gbvc19-0 sc-boHNyh bMzoVW">5 Places</h6>
                  <i className="sc-rbbb40-1 iFnyeo" size={10} color="#FFFFFF">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FFFFFF"
                      width={10}
                      height={10}
                      viewBox="0 0 20 20"
                      aria-labelledby="icon-svg-title- icon-svg-desc-"
                      role="img"
                      className="sc-rbbb40-0 gvsUip"
                    >
                      <title>right-triangle</title>
                      <path d="M5 0.42l10 10-10 10v-20z"></path>
                    </svg>
                  </i>
                </div>
              </section>
            </section>
       
        </section>
      </div>
      <div className="sc-bke1zw-1 MKgTV">
        <section className="sc-eYDgzN fSkWEA">
          
            <div height="32rem" className="sc-s1isp7-1 ibrfpG sc-gqGNZe gTzPhr">
              <img
                src="data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAyADIDASIAAhEBAxEB/8QAGwABAQACAwEAAAAAAAAAAAAAAAQBAgMFCAb/xAAsEAACAQMBBQcFAQAAAAAAAAAAAQIDBAURBgcSUZETFSExMkFSFCJTcYEj/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAMCAf/EACARAQEAAgEDBQAAAAAAAAAAAAABAhETAwQSFDFBUWL/2gAMAwEAAhEDEQA/APVINO2p/NdQq1N+UkBuDXtIfJGVOL90BkGrnFe6M8UeaAyDXtIfJADyot5WcUdHxotxG8XMVa6jNy0J8ls7fxqRULRtfoss9lb2ThNW7jz8CetxTPrWW+Md7c7dZGlo+JlVlvCveDWSbObF7FyukvqINFN1snG0hKNOk3/CVldueV+JHV1d4GQq10qepRkt4V5ZWPFU1UtD5PK4nJW93rbW8mteR1+Yw+ZyNsouhNP9G+O7jGPc3V3j7LJb2r7if3Pz5g+Mew2Y1f8AhPoDXHPtT1X4eypY+2l50o9DZWNul4U49CkFEXFC3pw9MUjEralL1QTOYASSx1rJ6ulF/wAHd1r+KHQrAEndtr+GHQFYAAAAAAAAAAAD/9k="
                className="sc-s1isp7-2 dHmqIJ"
              />
              <img
                alt="7 Best Luxury Dining Places"
                src="https://b.zmtcdn.com/data/collections/1861a2246de9e8cc96569b5dc4c3405c_1692343610.jpg?output-format=webp"
                loading="lazy"
                className="sc-s1isp7-5 fyZwWD"
              />
            </div>
            <section className="sc-fZFPbK doNnpP">
              <section className="sc-ikVBsd jyZsWr">
                <p color="#FFFFFF" className="sc-1hez2tp-0 sc-cLrAyg jftOJe">
                  7 Best Luxury Dining Places
                </p>
                <div className="sc-enOJk gtMrKg">
                  <h6 className="sc-1gbvc19-0 sc-boHNyh bMzoVW">7 Places</h6>
                  <i className="sc-rbbb40-1 iFnyeo" size={10} color="#FFFFFF">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FFFFFF"
                      width={10}
                      height={10}
                      viewBox="0 0 20 20"
                      aria-labelledby="icon-svg-title- icon-svg-desc-"
                      role="img"
                      className="sc-rbbb40-0 gvsUip"
                    >
                      <title>right-triangle</title>
                      <path d="M5 0.42l10 10-10 10v-20z"></path>
                    </svg>
                  </i>
                </div>
              </section>
            </section>
  
        </section>
      </div>
    </div>
 
      <span
        tabIndex={-1}
        color="#FF7E8B"
        target="_self"
        role="link"
        className="sc-ks3f96-1 cndCgo"
      >
        All collections in Coimbatore
        <i
          className="sc-rbbb40-1 iFnyeo sc-dwIOUI kWCJXF"
          color="#FF7E8B"
          size={12}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#FF7E8B"
            width={12}
            height={12}
            viewBox="0 0 20 20"
            aria-labelledby="icon-svg-title- icon-svg-desc-"
            role="img"
            className="sc-rbbb40-0 ezrcri"
          >
            <title>right-triangle</title>
            <path d="M5 0.42l10 10-10 10v-20z"></path>
          </svg>
        </i>
      </span>
 
  </div>
  <div className="sc-bKYoiv lpkqPT">
    <div className="title">
      <p style={{fontSize:"18px"}}>
        Popular localities in and around Coimbatore

      </p>
    </div>
    <div>
      <div className="sc-bke1zw-0 fIuLDK">
        <div className="sc-bke1zw-1 gLbmAn">
     
            <div className="sc-ckixc eviByX panel" onClick={()=>{handleNavigateHotelName("RS Puram")}}>
              <div className="sc-cbcvrX hzyFiM img-title-box">
                <h5 className="sc-1uh2q3e-0 sc-eYcuFG gSKWYS">RS Puram</h5>
                <p className="sc-1hez2tp-0 bBZBLJ">309 places</p>
              </div>
              <i
                className="sc-rbbb40-1 iFnyeo sc-gyFTku ejIItn"
                size={15}
                color="#1C1C1C"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#1C1C1C"
                  width={15}
                  height={15}
                  viewBox="0 0 20 20"
                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                  role="img"
                  className="sc-rbbb40-0 jKmKoK"
                >
                  <title>chevron-right</title>
                  <path d="M6.98 15.94c-0.3-0.28-0.3-0.76 0-1.060l4.46-4.46-4.46-4.48c-0.3-0.28-0.3-0.76 0-1.060s0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0z"></path>
                </svg>
              </i>
            </div>

        </div>
        <div className="sc-bke1zw-1 gGzIKR">

            <div className="sc-ckixc eviByX panel" onClick={()=>{handleNavigateHotelName("Gandhipuram")}}>
              <div className="sc-cbcvrX hzyFiM img-title-box">
                <h5 className="sc-1uh2q3e-0 sc-eYcuFG gSKWYS">Gandhipuram</h5>
                <p className="sc-1hez2tp-0 bBZBLJ">455 places</p>
              </div>
              <i
                className="sc-rbbb40-1 iFnyeo sc-gyFTku ejIItn"
                size={15}
                color="#1C1C1C"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#1C1C1C"
                  width={15}
                  height={15}
                  viewBox="0 0 20 20"
                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                  role="img"
                  className="sc-rbbb40-0 jKmKoK"
                >
                  <title>chevron-right</title>
                  <path d="M6.98 15.94c-0.3-0.28-0.3-0.76 0-1.060l4.46-4.46-4.46-4.48c-0.3-0.28-0.3-0.76 0-1.060s0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0z"></path>
                </svg>
              </i>
            </div>
      
        </div>
        <div className="sc-bke1zw-1 jdRPl">
         
            <div className="sc-ckixc eviByX panel" onClick={()=>{handleNavigateHotelName("Kuniyamuthur")}}>
              <div className="sc-cbcvrX hzyFiM img-title-box">
                <h5 className="sc-1uh2q3e-0 sc-eYcuFG gSKWYS">Kuniyamuthur</h5>
                <p className="sc-1hez2tp-0 bBZBLJ">87 places</p>
              </div>
              <i
                className="sc-rbbb40-1 iFnyeo sc-gyFTku ejIItn"
                size={15}
                color="#1C1C1C"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#1C1C1C"
                  width={15}
                  height={15}
                  viewBox="0 0 20 20"
                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                  role="img"
                  className="sc-rbbb40-0 jKmKoK"
                >
                  <title>chevron-right</title>
                  <path d="M6.98 15.94c-0.3-0.28-0.3-0.76 0-1.060l4.46-4.46-4.46-4.48c-0.3-0.28-0.3-0.76 0-1.060s0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0z"></path>
                </svg>
              </i>
            </div>
  
        </div>
        <div className="sc-bke1zw-1 gLbmAn" onClick={()=>{handleNavigateHotelName("Saibaba Colony")}}>
     
            <div className="sc-ckixc eviByX panel">
              <div className="sc-cbcvrX hzyFiM img-title-box">
                <h5 className="sc-1uh2q3e-0 sc-eYcuFG gSKWYS">
                  Saibaba Colony
                </h5>
                <p className="sc-1hez2tp-0 bBZBLJ">243 places</p>
              </div>
              <i
                className="sc-rbbb40-1 iFnyeo sc-gyFTku ejIItn"
                size={15}
                color="#1C1C1C"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#1C1C1C"
                  width={15}
                  height={15}
                  viewBox="0 0 20 20"
                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                  role="img"
                  className="sc-rbbb40-0 jKmKoK"
                >
                  <title>chevron-right</title>
                  <path d="M6.98 15.94c-0.3-0.28-0.3-0.76 0-1.060l4.46-4.46-4.46-4.48c-0.3-0.28-0.3-0.76 0-1.060s0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0z"></path>
                </svg>
              </i>
            </div>
 
        </div>
        <div className="sc-bke1zw-1 gGzIKR" onClick={()=>{handleNavigateHotelName("Ukkadam")}}>

            <div className="sc-ckixc eviByX panel">
              <div className="sc-cbcvrX hzyFiM img-title-box">
                <h5 className="sc-1uh2q3e-0 sc-eYcuFG gSKWYS">Ukkadam</h5>
                <p className="sc-1hez2tp-0 bBZBLJ">259 places</p>
              </div>
              <i
                className="sc-rbbb40-1 iFnyeo sc-gyFTku ejIItn"
                size={15}
                color="#1C1C1C"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#1C1C1C"
                  width={15}
                  height={15}
                  viewBox="0 0 20 20"
                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                  role="img"
                  className="sc-rbbb40-0 jKmKoK"
                >
                  <title>chevron-right</title>
                  <path d="M6.98 15.94c-0.3-0.28-0.3-0.76 0-1.060l4.46-4.46-4.46-4.48c-0.3-0.28-0.3-0.76 0-1.060s0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0z"></path>
                </svg>
              </i>
            </div>
                </div>
        <div className="sc-bke1zw-1 jdRPl" onClick={()=>{handleNavigateHotelName("Peelamedu")}}>
            <div className="sc-ckixc eviByX panel">
              <div className="sc-cbcvrX hzyFiM img-title-box">
                <h5 className="sc-1uh2q3e-0 sc-eYcuFG gSKWYS">Peelamedu</h5>
                <p className="sc-1hez2tp-0 bBZBLJ">133 places</p>
              </div>
              <i    
                className="sc-rbbb40-1 iFnyeo sc-gyFTku ejIItn"
                size={15}
                color="#1C1C1C"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#1C1C1C"
                  width={15}
                  height={15}
                  viewBox="0 0 20 20"
                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                  role="img"
                  className="sc-rbbb40-0 jKmKoK"
                >
                  <title>chevron-right</title>
                  <path d="M6.98 15.94c-0.3-0.28-0.3-0.76 0-1.060l4.46-4.46-4.46-4.48c-0.3-0.28-0.3-0.76 0-1.060s0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0z"></path>
                </svg>
              </i>
            </div>
        
        </div>
        <div className="sc-bke1zw-1 gLbmAn">

            <div className="sc-ckixc eviByX panel">
              <div className="sc-cbcvrX hzyFiM img-title-box">
                <h5 className="sc-1uh2q3e-0 sc-eYcuFG gSKWYS">
                  Ramanathapuram
                </h5>
                <p className="sc-1hez2tp-0 bBZBLJ">157 places</p>
              </div>
              <i
                className="sc-rbbb40-1 iFnyeo sc-gyFTku ejIItn"
                size={15}
                color="#1C1C1C"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#1C1C1C"
                  width={15}
                  height={15}
                  viewBox="0 0 20 20"
                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                  role="img"
                  className="sc-rbbb40-0 jKmKoK"
                >
                  <title>chevron-right</title>
                  <path d="M6.98 15.94c-0.3-0.28-0.3-0.76 0-1.060l4.46-4.46-4.46-4.48c-0.3-0.28-0.3-0.76 0-1.060s0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0z"></path>
                </svg>
              </i>
            </div>
      
        </div>
        <div className="sc-bke1zw-1 gGzIKR">

            <div className="sc-ckixc eviByX panel">
              <div className="sc-cbcvrX hzyFiM img-title-box">
                <h5 className="sc-1uh2q3e-0 sc-eYcuFG gSKWYS">Kalapatti</h5>
                <p className="sc-1hez2tp-0 bBZBLJ">78 places</p>
              </div>
              <i
                className="sc-rbbb40-1 iFnyeo sc-gyFTku ejIItn"
                size={15}
                color="#1C1C1C"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#1C1C1C"
                  width={15}
                  height={15}
                  viewBox="0 0 20 20"
                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                  role="img"
                  className="sc-rbbb40-0 jKmKoK"
                >
                  <title>chevron-right</title>
                  <path d="M6.98 15.94c-0.3-0.28-0.3-0.76 0-1.060l4.46-4.46-4.46-4.48c-0.3-0.28-0.3-0.76 0-1.060s0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0z"></path>
                </svg>
              </i>
            </div>
       
        </div>
        <div className="sc-bke1zw-1 jdRPl">
          <div tabIndex={0} className="sc-lSeQO jozhro">
            <div className="sc-bHSUBy hNutwB">see more</div>
            <i className="sc-rbbb40-1 iFnyeo" size={18} color="#1C1C1C">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#1C1C1C"
                width={18}
                height={18}
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
                className="sc-rbbb40-0 iwHbVQ"
              >
                <title>chevron-down</title>
                <path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path>
              </svg>
            </i>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Home