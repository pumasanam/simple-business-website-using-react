import React from 'react';
import './Banner.css';
import bannerimg from "./../img/mainlogo.png";
import {motion} from 'framer-motion';

const bounceTransition ={
       y:{
           duration:2,
           yoyo:Infinity,
          ease:"easeIn"
       }
   }
const Banner = (props) => {
  return (
    <>
      <div className="banner">
        <div className="banner_list">
            <div className="banner_item">
                <h3>{props.title} <br /> <span>{props.span}</span> </h3>
                <p>{props.para}</p>
                <button>{props.button}</button>
            </div>

            <div className="banner_item_img">
                <motion.img transition={bounceTransition} animate={{y:["2%","-2%"]}} src={bannerimg} alt="" />
           
            </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
