import React, { useState, ChangeEvent, useEffect, useRef } from 'react';
import './navbar.css';
import Search from './Search';
import axios from 'axios';
import { promises } from 'dns';
interface Hotel {
  _id: string;
  Name: string;
  Location: string;
  Cuisine: string[];
  Rating: number;
  Dishes: string[],
}

interface Results {
  hotels: Hotel[];
}

function Navbar() {
  const [isInitialRender, setIsInitialRender] = useState(true);
  const [profile, setShowProfile] = useState(false);
  const [numberExist, setnumberExist] = useState(false);
  const [auth,setshowauth] = useState(true);
  const [showOverlayLogout,setShowOverlayLogout] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const[exist,setExist]=useState(false)
  const [showOverlay, setShowOverlay] = useState(false);
  const [showSignUp, setshowSignUp] = useState(false);
  const [showOtp, setshowOtp] = useState(false);
  const [showLogin, setshowLogin] = useState(false);
  const [showOtpError, setshowOtpError] = useState(false);
  const [showOtpMobile, setshowOtpMobile ]= useState(false);
  const [results, setResults] = useState<Results>({ hotels: [] });
  const [inputs, setInputs] = useState<string>('');
  const [otp, setOtp] = useState<string>('');
  const [mobileOtp, setMobileOtp] = useState<string>('');
  const [timer, setTimer] = useState(30);
  const [loading, setLoading] = useState(false);
const [emailcheck,setEmailcheck]=useState(false)
const [namecheck,setNamecheck]=useState(false);
const [phoneNumber,setPhoneNumber]=useState<string>('');
const [numberCheck,setNumbercheck]=useState(false)
const [nameError, setNameError] = useState('');
const [emailError, setEmailError] = useState('');
  const searchRef = useRef<HTMLDivElement>(null);
const [userName,setUserName]=useState<string>('');
const [email,setEmail]=useState<string>('');
const [userNameSign,setUserNamesign]=useState<string>('');
useEffect(() => {
  let interval:any;
  if (loading) {
    interval = setInterval(() => {
      setLoading((prevLoading) => !prevLoading);
    }, 500);
  } else {
    clearInterval(interval);
  }
  return () => {
    clearInterval(interval);
  };
}, [loading]);


  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs(e.target.value);
  };
  const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
    const newUserName = e.target.value;
    setUserName(newUserName);
    const isValidName = newUserName.length >= 3 && !/\d/.test(newUserName);
    setNamecheck(isValidName);
  };

  const handlePhoneNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const newNumber:string= e.target.value;
    setPhoneNumber(newNumber);
    const isValidName = /^\d{10}$/.test(newNumber);
    setNumbercheck(isValidName);
  };
  
  
  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  
    const isValidEmail = newEmail.includes('@') && newEmail.includes('.') ;
    setEmailcheck(isValidEmail);
  };
  
  const handleOtpDigit = (e: ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
  };

    
  const handleOtpMobilePhone = (e: ChangeEvent<HTMLInputElement>) => {
    setMobileOtp(e.target.value);
  };
  const handleSignup = () => {
    // setshowLogin(false)
  setshowSignUp(true)

  };

  const handleLogin = () => {
    setshowLogin(true)
    };
  const [agreeChecked, setAgreeChecked] = useState(false);
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAgreeChecked(e.target.checked);
  };

  const handleExit=()=>{
    console.log('Exiting login form1');
    setPhoneNumber('')
      setshowSignUp(false);
      setUserName('');
      setEmail('');
      setAgreeChecked(false);
      setNamecheck(false);
      setEmailcheck(false);
      setEmailError('');
      setNameError('');
      setshowLogin(false)
      console.log('Exiting login form9');
  }
  const handleOtperror=()=>{
    setshowOtpError(false);
    setExist(false)
    setshowOtp(false)
    setshowSignUp(true);
    setUserName('');
      setEmail('');
      setAgreeChecked(false);
      setNamecheck(false);
      setEmailcheck(false);
      setEmailError('');
      setNameError('')
  }
  const handleErrorSkip=()=>{
    
    setshowOtpError(false);
    setExist(false)
    setshowOtp(false)
    setshowSignUp(false);
    setUserName('');
      setEmail('');
      setAgreeChecked(false);
      setNamecheck(false);
      setEmailcheck(false);
      setEmailError('');
      setNameError('')
  }
  const handleLogout=()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    localStorage.removeItem('email');
  handleExit();
  setShowProfile(false);
  setshowauth(true);
  setShowOverlayLogout(false)
  }

  const handleLogoutShow=()=>{
  setShowOverlayLogout(!showOverlayLogout)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedToken = localStorage.getItem('token');
        console.log('Stored Token:', storedToken);
  
        const postToken = {
          Token: storedToken,
        };
  
        const response = await axios.post('https://zomato-nuit.onrender.com/onload', postToken);
        console.log('API Response:', response.data.user.Name);
        
        if(response.data.user.Name){
        setUserNamesign(response.data.user.Name)
        setShowProfile(true);
        setUserNamesign(response.data.user.Name);
        setshowauth(false);
        setshowOtp(false);
        }
        else
        {
          setShowProfile(false);
          setshowauth(true);
      setshowOtp(false);
        }

      } catch (error:any) {
        console.log('Error:', error.response?.data.error);
      }
    };
  
    fetchData();
  
    const storedToken = localStorage.getItem('token');
    const storedUserName = localStorage.getItem('userName');
    const storedEmail = localStorage.getItem('email');
    console.log('Stored Token (Outside fetchData):', storedToken);
  
    if (storedToken && storedUserName && storedEmail) {
      setshowauth(false);
      setshowOtp(false);
      setShowProfile(true);
      setUserNamesign(storedUserName);
    }
  }, []);
  

  useEffect(() => {
    const fetchData1 = async () => {
    try {
      const response = await fetch('https://zomato-nuit.onrender.com/signup/response/temp');
      const data = await response.json();
      console.log('Response:', data);
    } catch (error) {
      console.log('Error111:', error);
    }
  }
  fetchData1();
  },[])








  const handleOtp = async () => {
    try {
      const postData = {
        Name: userName,
        Email: email,
        otp:otp,
      };
      const response = await axios.post('https://zomato-nuit.onrender.com/signup/verify', postData);
      console.log(response.data.message)
      let temp:string=response.data.message;


      if(temp=='Signup successful'){
      setshowauth(false);
      setshowOtp(false)
      setShowProfile(true)
      }


      const token = response.data.token;
      localStorage.setItem('token', token);
      localStorage.setItem('userName', userName);
      localStorage.setItem('email', email);
      console.log('data:', response.data);
      console.log('data :', response.data.user.Name);
      setUserNamesign( response.data.user.Name)
    } catch (error:any) {
      console.log('Error:', error.response?.data.error);
      
    }
  };



  const handleOtpMobile = async () => {
    try {
      const postNumber = {
        MobileNo:`+91${phoneNumber}`,
        otp:mobileOtp
      };
      const response = await axios.post('https://zomato-nuit.onrender.com/login/verify', postNumber);
      console.log(response.data)
      const token = response.data.token;
      localStorage.setItem('token', token);
      console.log('Token:', token);

    } catch (error:any) {
      console.log('Error1:', error);
      if(error.response.data.msg==='please sign up')
      {
        setnumberExist(true)
        setshowLogin(false)
        setshowOtpMobile(false)
        handleExit();
      }
      
    }
  };



  const handleLogingoogle = async () => {
    try {
     const temp= window.location.assign("https://zomato-nuit.onrender.com/signup/google");    
     console.log('data',temp)
      }
    
     catch (error:any) {
      console.log('Error:', error);
    
    }
  };

  // http://localhost:3000/?code=4%2F0AfJohXmjBJojGOc95jBxQvXPf8AZLuSw5VGI3JwY48hSYhwgmCFUWrqP49gSnpBxhInh4w&scope=email+profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+openid&authuser=0&hd=codingmart.com&prompt=consent#

  // const handleLogingoogle = async () => {
  //   try {
  //     const response = await axios.get('https://zomato-nuit.onrender.com/signup/google',{
  //       params: {
  //         response_type: 'code',
  //         redirect_uri: 'https://zomato-nuit.onrender.com/signup/google/redirect',
  //         scope: 'profile email',
  //         client_id: '602927526483-729hetb1iu3ejamt0pgime5dutm3vpd2.apps.googleusercontent.com',
  //       },
  //       headers: {
  //         'Access-Control-Allow-Origin': 'http://localhost:3000',
  //         'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  //       },
  //     });
  //     console.log(response.data)
  //     }
    
  //    catch (error:any) {
  //     console.log('Error:', error.response?.data.error);
  //   }
  // };
  
  const handlePostRequest = async () => {
    setTimeout(() => {
      setshowSignUp(false)
      setLoading(true); 
      
    }, 500);

 
    setTimeout(() => {
      setLoading(false);
    }, 500)

    if (exist === false) {
      const delay = 1000; 
      setTimeout(() => {
        setshowOtp(true);
      }, delay);
    }
    try {
      const postData = {
        Name: userName,
        Email: email,
      };
      const response = await axios.post('https://zomato-nuit.onrender.com/signup', postData);
      console.log(response.data.error)
    } catch (error:any) {
      const responseDataFromServer = error.response.data.error;
      setResponseData(responseDataFromServer);
      console.log('Error:',responseDataFromServer );
      setExist(true);
      // setshowOtp(true)
    }
  };

  const handlePostRequestLogin = async () => {
    setTimeout(() => {
      setshowLogin(false)
      setLoading(true); 
    }, 500);

 
    setTimeout(() => {
      setLoading(false);
    }, 500)

    if (exist === false) {
      const delay = 1000; 
      setTimeout(() => {
        setshowOtp(true);
      }, delay);
    }
    try {
      const postData = {
        Email: email,
        MobileNo:`+91${phoneNumber}`
      };
      const response = await axios.post('https://zomato-nuit.onrender.com/signup', postData);
      console.log(response.data.error)
    } catch (error:any) {
      const responseDataFromServer = error.response.data.error;
      setResponseData(responseDataFromServer);
      console.log('Error:',responseDataFromServer );
      setExist(true);
      // setshowOtp(true)
    }
  };


  const handleOtpPhone = async () => {

    setshowLogin(false)
    setshowOtpMobile(true)
    // setshowSignUp(false)
    
    // if (exist === false) {
    //   const delay = 500; 
    //   setTimeout(() => {
    //     setshowOtp(true);
    //   }, delay);
    // }
    try {
      const postNumber = {
        MobileNo:`+91${phoneNumber}`
      };
      const response = await axios.post('https://zomato-nuit.onrender.com/login', postNumber);
      console.log(response.data)
    } catch (error:any) {
      // const responseDataFromServer = error.response.data.error;
      // setResponseData(responseDataFromServer);
      // console.log('Error:',responseDataFromServer );
      // setExist(true);
      console.log('Error:',error);
    }
  };
  




  const handleResend = async () => {
    try {
      const postData = {
        Name: userName,
        Email: email,
      };
      const response = await axios.post('https://zomato-nuit.onrender.com/signup', postData);
      console.log(response.data)
    } catch (error) {
      console.error('Error:', error);
    }
    setTimer(10)
  };



  const handleOtpMobileResend = async () => {
    try {
      const postNumber = {
        MobileNo:`+91${phoneNumber}`
      };
      const response = await axios.post('https://zomato-nuit.onrender.com/login', postNumber);
      console.log(response.data)
    } catch (error:any) {
      // const responseDataFromServer = error.response.data.error;
      // setResponseData(responseDataFromServer);
      // console.log('Error:',responseDataFromServer );
      // setExist(true);
      console.log('Error:',error);
    }
    setTimer(10)
  };


  const fetchData = async (value: string) => {
    try {
      const response = await fetch(`https://zomato-nuit.onrender.com/searchHotels?startsWithLetter=${value}`);
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json.hotels)
      setResults(json);
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  };
  
  useEffect(() => {
    if (inputs.length > 0) {
      fetchData(inputs);
    
     setShowOverlay(true);
    }
    else
    setShowOverlay(inputs.length>0)
    setResults({ hotels: [temp] });

  }, [inputs]);
  
  const temp: Hotel = {
    Cuisine: [],
    Location: "",
    Name: "",
    Rating: 0,
    _id: "",
    Dishes:[]
  };
  
  
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowOverlay(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
  
    if (showOtp) {
      setTimer(10);
      interval = setInterval(() => {
        setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
      }, 1000);
    }
  
    return () => {
      clearInterval(interval);
    };
  }, [showOtp]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
  
    if (showOtpMobile) {
      setTimer(10);
      interval = setInterval(() => {
        setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
      }, 1000);
    }
  
    return () => {
      clearInterval(interval);
    };
  }, [showOtpMobile]);
  
  const handleBlur1 = (field: string) => {
    const newEmail = field;
    const isValidEmail = newEmail.includes('@') && newEmail.includes('.');
    if (isValidEmail) {
      setEmailError('');
    } else {
      setEmailError('Invalid email address');
    }
    if (field === 'userName') {
      setNameError(namecheck ? '' : 'Invalid username (at least 3 characters)');
    }
    if (field === 'email') {
      setEmailError(emailcheck ? '' : 'Invalid email address');
    }
  }
  const handleBlur = (field: string) => { 
   
    if (field.length >= 3) {
      setNameError('');
    } else {
      setNamecheck(false);
      setNameError('Invalid username (at least 3 characters)');}
    if (field === 'userName') {
      setNameError(namecheck ? '' : 'Invalid username (at least 3 characters)');
    }
    if (field === 'email') {
      setEmailError(emailcheck ? '' : 'Invalid email address');
    }
  };

  const handleFocus = (field: string) => {
   
    if (field === 'userName') {
      setNameError('');
    }
    if (field === 'email') {
      setEmailError('');
    }
  };

  return (
    <div className='zomato-navbar'>
        
      <div className='logo-container'>
        <img className='zomato-logo' src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="Zomato Logo" />
      </div>
      <div className='search-wrap'>
        <div className='location-search'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20">
            <path d="M10.2 0.42c-4.5 0-8.2 3.7-8.2 8.3 0 6.2 7.5 11.3 7.8 11.6 0.2 0.1 0.3 0.1 0.4 0.1s0.3 0 0.4-0.1c0.3-0.2 7.8-5.3 7.8-11.6 0.1-4.6-3.6-8.3-8.2-8.3zM10.2 11.42c-1.7 0-3-1.3-3-3s1.3-3 3-3c1.7 0 3 1.3 3 3s-1.3 3-3 3z" fill="red"></path>
          </svg>
          <input type="text" placeholder='Sitra, Nehru Nagar' />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="15" height="15">
          <path d="M20 5.42l-10 10-10-10h20z"></path>
          </svg>
        </div>
        <div className='restaurant-search'>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20">
            <title>Search</title>
            <path d="M19.78 19.12l-3.88-3.9c1.28-1.6 2.080-3.6 2.080-5.8 0-5-3.98-9-8.98-9s-9 4-9 9c0 5 4 9 9 9 2.2 0 4.2-0.8 5.8-2.1l3.88 3.9c0.1 0.1 0.3 0.2 0.5 0.2s0.4-0.1 0.5-0.2c0.4-0.3 0.4-0.8 0.1-1.1zM1.5 9.42c0-4.1 3.4-7.5 7.5-7.5s7.48 3.4 7.48 7.5-3.38 7.5-7.48 7.5c-4.1 0-7.5-3.4-7.5-7.5z"></path>
          </svg>


          <input type="text" placeholder='Search for restaurant, Cuisine or a dish' onChange={handleInput}/>

{/* <div>{inputs}</div> */}
        </div>
      </div>
       <div className='auth-section'>
       {auth &&
       <>
        <span onClick={handleLogin}>
          Login
        </span>
        <span onClick={handleSignup}>
          SignUp
        </span>
        </>
      }

      {profile&&
      <>
      <div className='profile'>
       
          <div>
          <img  className='profileImage' src="https://b.zmtcdn.com/web/assets/2267aec184e096c98c46a1565a5563661664945464.png?fit=around%7C100%3A100&amp;crop=100%3A100%3B%2A%2C%2A" />
          </div>
          <div onClick={handleLogoutShow} className='profileName'>
            <div>
              <span>{userNameSign}</span>
            </div>
            
          </div>
          <div onClick={handleLogoutShow} >
            <svg xmlns="http://www.w3.org/2000/svg"  width="18" height="18" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" ><title>chevron-down</title><path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path></svg>
            </div>
        </div>
 
      </>
      }
     </div>  


      {showOverlay&&
      <div className='overlay' ><Search results={results.hotels}/></div>
      }

{showOverlayLogout&&
      <div className='overlayLogout'>
        <div className='overlayLogoutflex'>
        <div className='logout'>Profile</div>
        <div className='logout'>Notification</div>
        <div className='logout'>BookMark</div>
        <div className='logout'>Review</div>
        <div className='logout'>Network</div>
        <div onClick={handleLogout}className='logout'>Logout</div>
        
        </div>
      </div>
      }


      {showSignUp&&
      <div className='overlay1' >
        <div className='signUp'>
         <div className='signupLogo'> Sign Up</div>
         <div className='exitSignup' onClick={handleExit}> <svg xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="24" height="24" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" ><title>cross</title><path d="M11.42 10.42l3.54-3.54c0.38-0.4 0.38-1.040 0-1.42s-1.020-0.4-1.42 0l-3.54 3.54-3.54-3.54c-0.4-0.4-1.020-0.4-1.42 0s-0.38 1.020 0 1.42l3.54 3.54-3.54 3.54c-0.38 0.38-0.38 1.020 0 1.42 0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28l3.54-3.56 3.54 3.56c0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28c0.38-0.4 0.38-1.040 0-1.42l-3.54-3.54z"></path></svg></div>
          </div>
          <div className="inputContainer">
      <input
        type="text"
        className={`customInput ${nameError && 'error'}`}
        placeholder="Full Name"
        value={userName}
        onChange={handleUsername}
        onBlur={() => handleBlur('userName')}
        onFocus={() => handleFocus('userName')}
      />
      {nameError && <div className="error-message">{nameError}</div>}
      <input
        type="text"
        className={`customInput ${emailError && 'error'}`}
        placeholder="Email"
        value={email}
        onChange={handleEmail}
        onBlur={() => handleBlur1('email')}
        onFocus={() => handleFocus('email')}
      />
      {emailError && <div className="error-message">{emailError}</div>}
    </div>

  <div className="checkbox-container">
            <input type="checkbox" className="custom-checkbox" id="agreeCheckbox" onChange={handleCheckboxChange}/>
            <label htmlFor="agreeCheckbox" className="checkbox-label">
              I agree to Zomato's <span>Terms of Service, Privacy Policy</span> and <span>Content Policies</span>
            </label>
          </div>
          <div>
        {loading ? (
          <div className='loginCreateAccount'>
          <div className="loader-container">
            <div className="loader-dot">.</div>
            <div className="loader-dot">.</div>
            <div className="loader-dot">.</div>
          </div>
          </div>
        ) : (
          <button
            onClick={() => {
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
                
              }, 500);

     
                handlePostRequest()
           
            }}
            className={`loginCreateAccount ${(!namecheck || !emailcheck || !agreeChecked) ? 'disabled' : ''}`}
            disabled={!namecheck || !emailcheck || !agreeChecked}
          >
            Create Account
          </button>
        )}
      </div>
          <div>
            <button className='loginGoogle'  onClick={handleLogingoogle}>
          <div> <svg width="24" height="24" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.87566 13.2946L4.10987 16.1534L1.31093 16.2126C0.474461 14.6611 0 12.886 0 10.9997C0 9.17565 0.443609 7.45552 1.22994 5.94092H1.23054L3.72238 6.39776L4.81396 8.87465C4.5855 9.54071 4.46097 10.2557 4.46097 10.9997C4.46106 11.8072 4.60732 12.5808 4.87566 13.2946Z" fill="#FBBB00"></path><path d="M21.8082 8.94507C21.9345 9.61048 22.0004 10.2977 22.0004 11C22.0004 11.7875 21.9176 12.5557 21.7598 13.2967C21.2243 15.8183 19.8252 18.0201 17.8869 19.5782L17.8863 19.5776L14.7477 19.4175L14.3035 16.6445C15.5896 15.8902 16.5947 14.7098 17.1242 13.2967H11.2422V8.94507H17.21H21.8082Z" fill="#518EF8"></path><path d="M17.8865 19.5778L17.8871 19.5784C16.002 21.0937 13.6073 22.0002 11.0006 22.0002C6.81152 22.0002 3.16945 19.6588 1.31152 16.2132L4.87625 13.2952C5.8052 15.7744 8.19679 17.5392 11.0006 17.5392C12.2057 17.5392 13.3348 17.2134 14.3036 16.6447L17.8865 19.5778Z" fill="#28B446"></path><path d="M18.0208 2.53241L14.4573 5.44981C13.4546 4.82307 12.2694 4.46102 10.9996 4.46102C8.13229 4.46102 5.69596 6.30682 4.81356 8.87494L1.23009 5.9412H1.22949C3.06022 2.41154 6.74823 0 10.9996 0C13.6686 0 16.1158 0.950726 18.0208 2.53241Z" fill="#F14336"></path></svg>  </div> 
             <div className='loginGoogletext'>Continue with Google</div>  
            </button>
          </div>
      </div>
      }




{showOtp && !exist &&
  <div className='overlayOtp'>
    <div className='signUp'>
      <div className='signupLogo'> Enter OTP</div>
      <div className='exitSignup' onClick={() => {
        setshowOtp(false);
        handleExit();
      }}> <svg xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="24" height="24" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img"><title>cross</title><path d="M11.42 10.42l3.54-3.54c0.38-0.4 0.38-1.040 0-1.42s-1.020-0.4-1.42 0l-3.54 3.54-3.54-3.54c-0.4-0.4-1.020-0.4-1.42 0s-0.38 1.020 0 1.42l3.54 3.54-3.54 3.54c-0.38 0.38-0.38 1.020 0 1.42 0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28l3.54-3.56 3.54 3.56c0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28c0.38-0.4 0.38-1.040 0-1.42l-3.54-3.54z"></path></svg></div>
    </div>
    <div className='otpText'>
      Verification code has been sent to your email, a*****a@gmail.com, please enter the same here to complete the signup. Valid for 10 minutes.
    </div>
    <div className="inputContainerOtp">
      <input type="text" className="customInput" placeholder='OTP' onChange={handleOtpDigit} />
    </div>
    <div>
      <button onClick={handleOtp} className='otpProceed'>
        Proceed
      </button>
      <div className='timer'>
  {timer > 0
    ? `${Math.floor(timer / 60) < 10 ? '0' : ''}${Math.floor(timer / 60)}:${timer % 60 < 10 ? '0' : ''}${timer % 60}`
    : '00:00'}
</div>

<div className='resendOtp'>
  Didn't receive OTP?
  <span
    style={{ color: timer === 0 ? 'red' : 'rgba(.0 , .0, .0, 0.5)', cursor: timer === 0 ? 'pointer' : 'inherit' }}
    onClick={timer === 0 ? handleResend : undefined}
  >
    Resend Now
  </span>
</div>

    </div>
  </div>
}


{showOtpMobile && 
  <div className='overlayOtp'>
    <div className='signUp'>
      <div className='signupLogo'> Enter OTP</div>
      <div className='exitSignup' onClick={() => {
        setshowOtp(false);
        handleExit();
        setshowOtpMobile(false)
        setPhoneNumber('')
      }}> <svg xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="24" height="24" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img"><title>cross</title><path d="M11.42 10.42l3.54-3.54c0.38-0.4 0.38-1.040 0-1.42s-1.020-0.4-1.42 0l-3.54 3.54-3.54-3.54c-0.4-0.4-1.020-0.4-1.42 0s-0.38 1.020 0 1.42l3.54 3.54-3.54 3.54c-0.38 0.38-0.38 1.020 0 1.42 0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28l3.54-3.56 3.54 3.56c0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28c0.38-0.4 0.38-1.040 0-1.42l-3.54-3.54z"></path></svg></div>
    </div>
    <div className='otpText'>
      Verification code has been sent to your email, a*****a@gmail.com, please enter the same here to complete the signup. Valid for 10 minutes.
    </div>
    <div className="inputContainerOtp">
      <input type="text" className="customInput" placeholder='OTP' onChange={handleOtpMobilePhone} />
    </div>
    <div>
      <button onClick={handleOtpMobile} className='otpProceed'>
        Proceed
      </button>
      <div className='timer'>
  {timer > 0
    ? `${Math.floor(timer / 60) < 10 ? '0' : ''}${Math.floor(timer / 60)}:${timer % 60 < 10 ? '0' : ''}${timer % 60}`
    : '00:00'}
</div>

<div className='resendOtp'>
  Didn't receive OTP?
  <span
    style={{ color: timer === 0 ? 'red' : 'rgba(.0 , .0, .0, 0.5)', cursor: timer === 0 ? 'pointer' : 'inherit' }}
    onClick={timer === 0 ? handleOtpMobileResend : undefined}
  >
    Resend Now
  </span>
</div>

    </div>
  </div>
}



{showLogin&&

      <div className='overlay1' >
        <div className='signUp'>
         <div className='signupLogo'>Login</div>
         <div className='exitSignup' onClick={handleExit}> <svg xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="24" height="24" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" ><title>cross</title><path d="M11.42 10.42l3.54-3.54c0.38-0.4 0.38-1.040 0-1.42s-1.020-0.4-1.42 0l-3.54 3.54-3.54-3.54c-0.4-0.4-1.020-0.4-1.42 0s-0.38 1.020 0 1.42l3.54 3.54-3.54 3.54c-0.38 0.38-0.38 1.020 0 1.42 0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28l3.54-3.56 3.54 3.56c0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28c0.38-0.4 0.38-1.040 0-1.42l-3.54-3.54z"></path></svg></div>
          </div>
          <div className="inputContainer">
          <input
  type="text"
  className={`customInput ${!numberCheck && 'error'}`}
  placeholder="Phone Number"
  value={phoneNumber}
  onChange={handlePhoneNumber}
  // onBlur={() => handleBlur('userName')}
  // onFocus={() => handleFocus('userName')}
  onInput={(e:any) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, ''); // Allow only numeric characters
  }}
/>
    </div>
          <div>
          <button
  onClick={handleOtpPhone}
  className={`loginCreateAccount ${(!numberCheck) ? 'disabled' : ''}`}
  // disabled={!numberCheck}
>
Send OTP
</button>

          </div>
          <div>
            <button className='loginGoogle'  onClick={handleLogingoogle}>
          <div> <svg width="24" height="24" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.87566 13.2946L4.10987 16.1534L1.31093 16.2126C0.474461 14.6611 0 12.886 0 10.9997C0 9.17565 0.443609 7.45552 1.22994 5.94092H1.23054L3.72238 6.39776L4.81396 8.87465C4.5855 9.54071 4.46097 10.2557 4.46097 10.9997C4.46106 11.8072 4.60732 12.5808 4.87566 13.2946Z" fill="#FBBB00"></path><path d="M21.8082 8.94507C21.9345 9.61048 22.0004 10.2977 22.0004 11C22.0004 11.7875 21.9176 12.5557 21.7598 13.2967C21.2243 15.8183 19.8252 18.0201 17.8869 19.5782L17.8863 19.5776L14.7477 19.4175L14.3035 16.6445C15.5896 15.8902 16.5947 14.7098 17.1242 13.2967H11.2422V8.94507H17.21H21.8082Z" fill="#518EF8"></path><path d="M17.8865 19.5778L17.8871 19.5784C16.002 21.0937 13.6073 22.0002 11.0006 22.0002C6.81152 22.0002 3.16945 19.6588 1.31152 16.2132L4.87625 13.2952C5.8052 15.7744 8.19679 17.5392 11.0006 17.5392C12.2057 17.5392 13.3348 17.2134 14.3036 16.6447L17.8865 19.5778Z" fill="#28B446"></path><path d="M18.0208 2.53241L14.4573 5.44981C13.4546 4.82307 12.2694 4.46102 10.9996 4.46102C8.13229 4.46102 5.69596 6.30682 4.81356 8.87494L1.23009 5.9412H1.22949C3.06022 2.41154 6.74823 0 10.9996 0C13.6686 0 16.1158 0.950726 18.0208 2.53241Z" fill="#F14336"></path></svg>  </div> 
             <div className='loginGoogletext'>Continue with Google</div>  
            </button>
          </div>
      </div>
      }


{numberExist&&
      <div className='overlay1' >
      <div className='signUp'>
       <div className='signupLogo'> Sign up</div>
       <div className='exitSignup' onClick={()=>{handleExit(); setnumberExist(false)}}> <svg xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="24" height="24" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" ><title>cross</title><path d="M11.42 10.42l3.54-3.54c0.38-0.4 0.38-1.040 0-1.42s-1.020-0.4-1.42 0l-3.54 3.54-3.54-3.54c-0.4-0.4-1.020-0.4-1.42 0s-0.38 1.020 0 1.42l3.54 3.54-3.54 3.54c-0.38 0.38-0.38 1.020 0 1.42 0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28l3.54-3.56 3.54 3.56c0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28c0.38-0.4 0.38-1.040 0-1.42l-3.54-3.54z"></path></svg></div>
        </div>
        <div className="inputContainer">
    <input
      type="text"
      className={`customInput ${nameError && 'error'}`}
      placeholder="Full Name"
      value={userName}
      onChange={handleUsername}
      onBlur={() => handleBlur('userName')}
      onFocus={() => handleFocus('userName')}
    />
    {nameError && <div className="error-message">{nameError}</div>}
    <input
      type="text"
      className={`customInput ${emailError && 'error'}`}
      placeholder="Email"
      value={email}
      onChange={handleEmail}
      onBlur={() => handleBlur1('email')}
      onFocus={() => handleFocus('email')}
    />
    {emailError && <div className="error-message">{emailError}</div>}
  </div>

<div className="checkbox-container">
          <input type="checkbox" className="custom-checkbox" id="agreeCheckbox" onChange={handleCheckboxChange}/>
          <label htmlFor="agreeCheckbox" className="checkbox-label">
            I agree to Zomato's <span>Terms of Service, Privacy Policy</span> and <span>Content Policies</span>
          </label>
        </div>
        <div>
      {loading ? (
        <div className='loginCreateAccount'>
        <div className="loader-container">
          <div className="loader-dot">.</div>
          <div className="loader-dot">.</div>
          <div className="loader-dot">.</div>
        </div>
        </div>
      ) : (
        <button
          onClick={() => {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);         
            }, 500);
              handlePostRequestLogin()
         
          }}
          className={`loginCreateAccount ${(!namecheck || !emailcheck || !agreeChecked) ? 'disabled' : ''}`}
          disabled={!namecheck || !emailcheck || !agreeChecked}
        >
          Create Account
        </button>
      )}
    </div>
    </div>
}

{exist &&
  <div className='overlayOtperror'>
    <div className='signUp'>
      <div className='signupLogo'>Signup Failed </div>
      <div className='exitSignup' onClick={() => {
        setshowOtp(false);
        setExist(false)
        handleExit();
      }}> <svg xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="24" height="24" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img"><title>cross</title><path d="M11.42 10.42l3.54-3.54c0.38-0.4 0.38-1.040 0-1.42s-1.020-0.4-1.42 0l-3.54 3.54-3.54-3.54c-0.4-0.4-1.020-0.4-1.42 0s-0.38 1.020 0 1.42l3.54 3.54-3.54 3.54c-0.38 0.38-0.38 1.020 0 1.42 0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28l3.54-3.56 3.54 3.56c0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28c0.38-0.4 0.38-1.040 0-1.42l-3.54-3.54z"></path></svg></div>
    </div>
    <div className='responseError'> 
{responseData}
    </div>
    <button onClick={handleOtperror} className='otpProceed'>
       Try using other methods
      </button>
      <p className='responseErrorSkip' onClick={handleErrorSkip}>skip for now</p>
</div>
}
    </div>
    
  );
}

export default Navbar;
