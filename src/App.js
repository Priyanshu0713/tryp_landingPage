import './App.css';
import Lottie from 'react-lottie';
import lottie_3 from './lottie/main_lottie.json';
import { FaUserAlt } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { AiFillFacebook } from 'react-icons/ai';
import { BsTiktok } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import React from 'react';
import ReactDOM from 'react-dom';

// ....  Images  ....

import tryp from './images/tryp.JPG';

function App() {
  const lottieStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
  };

  return (
    <>
      <Lottie options={{ animationData: lottie_3 }} isClickToPauseDisabled style={lottieStyle} />
      <div className='main'>
        <nav className='navbar'>
          <ul className='nav'>
            <li>
              <img src={tryp} alt='' />
            </li>
            <li>
            </li>
            <li>
              <a>Anytime</a>
            </li>
            <li>
              <a>Anywhere</a>
            </li>
            <li>
              <a>Traveler</a>
            </li>
            <li><div className='img-wrapper'>
              <a ><FaUserAlt className='img' /></a></div>
            </li>
          </ul>
        </nav>
        <div className='card1-icons'>
          <div className='card1'>
            <h1>TRYP.COM</h1>
            <p>"Adventure awaits, go find it"</p>
            <button>
              Expolre More
            </button>
          </div>
          <div className='card1_icons'>

          </div>
          <div className='icons'>
            <a href="https://www.instagram.com/trypcom/" target="_blank" className="icon icon--instagram">
              <FaInstagram />
            </a>
            <a href="mailto:info@tryp.com" target="_blank" className="icon icon--email">
              <MdEmail />
            </a>
            <a href="https://www.facebook.com/trypcom" target="_blank" className="icon icon--facebook">
              <AiFillFacebook />
            </a>
            <a href="https://www.tiktok.com/@tryp.com" target="_blank" className="icon icon--tik-tok">
              <BsTiktok />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
