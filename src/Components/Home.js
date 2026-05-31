import React from 'react';
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Home = () => {
  return (
    <div>
      <div className='HomePage'>
        <div className='HomeText'>
          <h1>Hi,</h1>
          <h1>I'M <b>NELEMA JAHAN</b></h1>
          <Typed />
        </div>

        <Lottie
          className="illustration"
          animationData={SpaceBoy}
          loop={true}
        />
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>
            Brief <b>Introduction</b>
          </h1>

          <p>
            I am currently pursuing my Bachelor in <b>Software Engineering</b> at{" "}
            <b>Noakhali Science and Technology University</b>

            I am passionate about learning new technologies and improving my
            <b> problem-solving skills</b>, and I am eager to broaden my
            knowledge, work on challenging projects, and gain real-world
            experience that helps me grow as a developer.
          </p>
        </div>

        <Tilt>
          <DotLottieReact
            src="https://lottie.host/f05b5891-c58f-4fcf-86e8-bbc6f3a3e671/S4ze2HMhd9.lottie"
            loop
            autoplay
            className="illustration"
          />
        </Tilt>
      </div>
    </div>
  );
};

export default Home;