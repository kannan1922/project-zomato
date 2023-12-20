import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
// import Sliders from './Slider/Slider';
import Sliders from './Slider/Slider';
import HotelList from './Mock/HotelList';
import Filters from './Mock/Filters';
import FilterNavbar from './Mock/filterNavbar';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import HotelHome from './Hotels/HotelHome';
import { Menu, Photos} from './Hotels/Review';
import Reviews from './Hotels/Review1';
// import Test from './Test';
import Test from './Test';
import './test.css'
import Profile from './Hotels/Profile';
import Footer from './Hotels/Footer';

//
import { UserContextProvider } from './Context';

//


function App() {
  return (

    <div>
{/*      
       <Navbar />
       <Sliders/>  */}
{/* <Profile/> */}
{/* <Footer/> */}
<UserContextProvider>
  {/* <Navbar /> */}
{/* <Profile/> */}

      <Routes>
      
      <Route path="/" element={<Test/>}></Route>
        <Route path="/Coimbatore" element={<FilterNavbar/>}></Route>

        <Route path="/:city/:area/:hotel/*" element={<HotelHome />} /> 
        <Route path="/" element={<Menu/>} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="photos" element={<Photos />} /> 
        <Route path="profile" element={<Profile />} />
        <Route path="/:city/:area/:hotel" element={<HotelHome/>} ></Route>
        <Route path="/" element={<Sliders/>}> </Route>
        <Route path="/" element={ <HotelList />}>
        </Route>
      </Routes> 
      </UserContextProvider>
     {/* <HotelHome/>  */}
    </div>

  );

}
export default App;
