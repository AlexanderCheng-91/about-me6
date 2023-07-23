import React, {Component} from 'react';
import '../App.css';


import Dynamic from '../assets/icons/dynamic.svg';
import Fast from '../assets/icons/fast.svg';
import Intuitive from '../assets/icons/intuitive.svg';
import Responsive from '../assets/icons/responsive.svg';

// import alexHeroImage from '../pictures/alexpicSmallResized180by180.png';
// Is this the correct image?
// Still need CSS
import alexHeroImage from '../assets/alexCardPictures/alexpicSmallResized180by180.png';

import { Row } from 'reactstrap';

export class OldAboutMe extends Component {
   render() {
      return (
         <div className="about-me">
            <div className="about">ABOUT</div>
            <div className="demarcation-padding">
               <div className="demarcation"></div>
            </div>

            {/* first row */}

            <Row className="about-me-Rows" style={{ padding: 0, margin: 0 }} lg={4} sm={2}>
               {/* <Col className="about-me-Column" style={{ padding: 0, margin: 0 }}> */}

               <div className="fast-card">
                  <div className="fast-image">
                     <img src={Fast} className="icon" alt="lightning bolt"></img>
                  </div>
                  <div className="fast-title">
                     <p>Fast</p>
                  </div>
                  <div className="fast-text">
                     <p>
                        slow = yuck
                        <br />
                        fast loading times.{' '}
                     </p>
                  </div>
               </div>

               <div className="intuitive-card">
                  <div className="fast-intuitive">
                     <img src={Intuitive} className="icon" alt="phone in front of a monitor"></img>
                  </div>
                  <div className="intuitive-title">
                     <p>Intuitive</p>
                  </div>
                  <div className="intuitive-text">
                     <p>If I have to explain how to use my websites I'm not doing it right</p>
                  </div>
               </div>

               <div className="responsive-card">
                  <div>
                     <img src={Responsive} className="icon" alt="lightning bolt"></img>
                  </div>
                  <div className="responsive-title">
                     <p>Responsive</p>
                  </div>
                  <div className="responsive-text">
                     <p>Website renders well on any device</p>
                  </div>
               </div>

               <div className="dynamic-card">
                  <div>
                     <img src={Dynamic} className="icon" alt="phone in front of a monitor"></img>
                  </div>
                  <div className="dynamic-title">
                     <p>Dynamic</p>
                  </div>
                  <div className="dynamic-text">
                     <p>I love making pages come alive</p>
                  </div>
               </div>
            </Row>

            <Row style={{ padding: 0, margin: 0, justifyContent: 'center' }} lg={2}>
               <div className="AlexCard">
                  <div className="alex-hero-image chart-slide-in-right">
                     <img src={alexHeroImage} className="alexPicture" alt="Alexander Cheng"></img>
                     <div className="alexCard-title">
                        <p>Who am I?</p>
                     </div>
                     <div className="alexCard-body">
                        <p>
                           I'm a full stack developer located in <br />
                           Los Angeles, CA. I love putting websites together <br />
                           from the front end to the back end. <br />
                           My stack is React.js, C#, and SQL.
                           <br />
                           Feel free to reach out!
                           {/* link this "feel free to reach out" to contact page */}
                        </p>
                     </div>
                  </div>
               </div>

               <div className="graph">
                  <div className="bar">
                     <p>
                        HTML<span></span>
                        <span className="progress"></span>
                        <span></span>
                     </p>
                  </div>
                  <div className="bar">
                     <p>
                        CSS <span></span>
                        <span className="progress"></span>
                        <span></span>
                     </p>
                  </div>
                  <div className="bar">
                     <p>
                        React.js <span></span>
                        <span className="progress"></span>
                        <span></span>
                     </p>
                  </div>
                  <div className="bar">
                     <p>
                        JavaScript <span></span>
                        <span className="progress"></span>
                        <span></span>
                     </p>
                  </div>
                  <div className="bar">
                     <p>
                        UI Design <span></span>
                        <span className="progress"></span>
                        <span></span>
                     </p>
                  </div>
                  <div className="bar">
                     <p>
                        Gimp <span></span>
                        <span className="progress"></span>
                        <span></span>
                     </p>
                  </div>
                  <div className="bar">
                     <p>
                        C# <span></span>
                        <span className="progress"></span>
                        <span></span>
                     </p>
                  </div>
                  <div className="bar">
                     <p>
                        SQL <span></span>
                        <span className="progress"></span>
                        <span></span>
                     </p>
                  </div>
               </div>
            </Row>
         </div>
      );
   }
}