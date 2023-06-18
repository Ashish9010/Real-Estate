import React from "react";
import "./Hero.css";
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from "react-countup";
import {motion} from "framer-motion"
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerwidth flexCenter hero-container">
        {/* left - side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle"/>
            <motion.h1
            initial={{y:"2rem",opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{
              duration:2,
              type:"spring"
            }}
            >
            Discover <br />Most Suitable <br />Property
            </motion.h1>
          </div>
          <div className="flexColStart hero-desc">
            <span>Find a variety of properties that suit you very easilty</span>
            <span>Forget all difficulties in finding a residence for you</span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25}/>
            <input type="text" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
                <sapn>
                    <CountUp start={8800} end={9000} duration={4}/>
                    <span>+</span>
                </sapn>
                <sapn className="secondaryText">Premium Products</sapn>
            </div>
            <div className="flexColCenter stat">
                <sapn>
                    <CountUp start={2200} end={2500} duration={4}/>
                    <span>+</span>
                </sapn>
                <sapn className="secondaryText">Happy Customers</sapn>
            </div>
            <div className="flexColCenter stat">
                <sapn>
                    <CountUp end={41} />
                    <span>+</span>
                </sapn>
                <sapn className="secondaryText">Award Winning</sapn>
            </div>
          </div>
        </div>
        {/* right - side */}
        <div className="flexCenter hero-right">
          <motion.div
          initial={{x:"7rem",opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{
            duration:2,
            type:"spring"
          }}
           className="image-container">
            <img src="./hero-image.png" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
