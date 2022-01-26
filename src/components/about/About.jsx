import React from 'react';
import "./about.css"

const About = () => {
  return <div className='a'>
      <div className="a-left">
          <div className="a-bg"></div>
          <div className="a-card">
              <img src="https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?cs=srgb&dl=pexels-tranmautritam-326501.jpg&fm=jpg" 
              alt="" 
              className='a-img' />
          </div>
      </div>
      <div className="a-right">
          <h2 className="a-title">A Propos de moi </h2>
          <p className="a-sub">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quae nisi magnam officiis necessitatibus? Nemo harum possimus
          </p>

          <p className="a-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quae nisi magnam officiis necessitatibus? Nemo harum possimus dolore doloremque soluta minima facere
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quae nisi magnam officiis necessitatibus? Nemo harum possimus dolore doloremque soluta minima facere  
          </p>
          <div className="a-btn">
              <a href=""> Telechager cv</a>
          </div> 
      </div>
  </div>;
};

export default About;
