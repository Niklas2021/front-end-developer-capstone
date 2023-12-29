import React, {useReducer, useState} from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import SuccessModal from './components/mod';

// Components
import Main from './components/main';
import Nav from './components/nav';
import Booking from './components/booking';
import Footer from './components/footer'


const App = () => {

  // Functions
  const seedRandom = function(seed){
    var m = 2**35 -32;
    var a = 185738;
    var s = seed%m;
    return function(){
      return (s = s * a % m) / m;
    }
  }

  const fetchAPI = function(date){
    let result = [];
    let random = seedRandom(date.getDate());
    for (let i = 16; i <= 23; i++){
      if(random() <= 0.5){
        result.push(i + `:00`);
      }
      if(random() > 0.5){
        result.push(i + ':30');
      }
    }
    return result;
  }

  const submitAPI = function(formData){
      return true;
  }

  
  const initialState = {availableTimes: fetchAPI(new Date())};
  const [state, dispatch] = useReducer(updateTimes, initialState);
  const [text, setText] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  
  function updateTimes(state, date){
    return fetchAPI(new Date());
  }

  function submitForm(formData){
    if(submitAPI(formData)){
      setShowSuccessModal(true);
      setText("The reservation was succesfull.")
    }
  }

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
  };

  const buysucces = () => {
    setShowSuccessModal(true);
    setText("The order has been added to your basket.")
    // do more to add it to the basket
  };


  return (
    <>
     <SuccessModal show={showSuccessModal} handleClose={handleSuccessModalClose} text={text}/>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Main show={buysucces}/>} />
          <Route path="/about" element={About} />
          <Route path="/menu" element={Menu} />
          <Route path="/booking" element={<Booking availableTimes={state} dispatch={dispatch} submitForm={submitForm}/>} />
          <Route path="/order" element={OrderOnline} />
          <Route path="/login" element={Login} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

// components for the pages

const About = () => {
  return <h1>About Page</h1>;
};

const Menu = () => {
  return <h1>Menu Page</h1>;
};

const OrderOnline = () => {
  return <h1>Order Online Page</h1>;
};

const Login = () => {
  return <h1>Login Page</h1>;
};

export default App;
