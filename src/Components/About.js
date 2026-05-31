import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Nelema Jahan</b> and I am from <b>Chattogram,Bangladesh</b>.<br /><br />
            <b>Education:</b><br />
            I completed my <b>SSC</b> and <b>HSC</b> from <b>Chattogram Cantonment Public School and College</b>. 
            I am currently pursuing my Bachelor in <b>Software Engineering</b> at Noakhali Science and Technology University and aspiring to become a skilled software engineer.<br /><br />
            I am passionate about learning new technologies and improving my <b>problem-solving skills</b>, and I am eager to broaden my knowledge, work on challenging projects, and gain real-world experience that helps me grow as a developer.<br /><br />
           
          </p>
        </div>

        <div>
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

      <h1 className='SkillsHeading'><b>Tech Stack</b></h1>
      <div className='skills'>
        <Skills skill='C' />
        <Skills skill='C++' />
        <Skills skill='Java' />
        <Skills skill='Python' />
        <Skills skill='PHP' />
        <Skills skill='HTML' />
        <Skills skill='CSS' />
        <Skills skill='JavaScript' />
        <Skills skill='TypeScript' />
        <Skills skill='React' />
        <Skills skill='Flutter' />
        <Skills skill='Bootstrap' />
        <Skills skill='Tailwind CSS' />
        <Skills skill='shadcn/ui' />
        <Skills skill='Docker' />
        <Skills skill='PostgreSQL' />
        <Skills skill='MySQL' />
        <Skills skill='Supabase' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='VSCode' />
        <Skills skill='Vite' />
        <Skills skill='TanStack Router' />
        <Skills skill='TanStack Query' />
        <Skills skill='React Hook Form' />
        <Skills skill='Zod' />
        <Skills skill='Lucide React' />
        <Skills skill='Flask' />
        <Skills skill='OpenCV' />
        <Skills skill='MediaPipe' />
        <Skills skill='pyttsx3' />
      </div>
    </>
  );
};

export default About;
