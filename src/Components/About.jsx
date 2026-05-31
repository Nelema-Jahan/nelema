import React from 'react';
import Lottie from 'lottie-react';
import coder from '../LottieFiles/coder.json';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './About.css';

const About = () => {
  const scrollToProjects = () => {
    const projectsSection = document.querySelector('.ProjectPage');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='AboutPageContainer'>
      {/* Main Split Layout */}
      <div className='AboutMainSection'>
        {/* Left Column - Avatar & Social */}
        <div className='AboutLeftColumn'>
          <div className='AvatarContainer'>
            <Lottie
              animationData={coder}
              loop={true}
              className='AvatarAnimation'
            />
          </div>
          
          <h2 className='AboutName'>Nelema Jahan</h2>
          
          <div className='LocationInfo'>
            <FaMapMarkerAlt className='LocationIcon' />
            <span>Chattogram, Bangladesh</span>
          </div>

          <div className='SocialLinks'>
            <a 
              href='https://github.com/Nelema-Jahan' 
              target='_blank' 
              rel='noopener noreferrer'
              className='SocialButton'
              aria-label='GitHub'
            >
              <FaGithub />
            </a>
            <a 
              href='https://linkedin.com/in/nelema-jahan' 
              target='_blank' 
              rel='noopener noreferrer'
              className='SocialButton'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </a>
            <a 
              href='mailto:your.email@example.com'
              className='SocialButton'
              aria-label='Email'
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Right Column - Bio & Button */}
        <div className='AboutRightColumn'>
          <h1 className='AboutHeading'>
            Get to know me!
          </h1>

          <p className='AboutBio'>
            Hi, my name is Nelema Jahan and I am from Chattogram, Bangladesh. 
            I am currently pursuing my Bachelor in Software Engineering at 
            Noakhali Science and Technology University and aspiring to become 
            a skilled software engineer. I am passionate about learning new 
            technologies and improving my problem-solving skills, and I am 
            eager to broaden my knowledge, work on challenging projects, and 
            gain real-world experience that helps me grow as a developer.
          </p>

          <button className='btn btn-primary' onClick={scrollToProjects}>
            View My Projects
          </button>
        </div>
      </div>

      {/* Education Timeline */}
      <div className='EducationSection'>
        <h2 className='SectionTitle'>Education</h2>
        <div className='TimelineContainer'>
          {/* Card 1 - SSC & HSC */}
          <div className='TimelineCard'>
            <div className='TimelineIcon'>🏫</div>
            <div className='TimelineContent'>
              <h3>SSC & HSC</h3>
              <p className='TimelineSchool'>Chattogram Cantonment Public School and College</p>
              <span className='TimelineStatus'>Completed</span>
            </div>
          </div>

          {/* Timeline Connector */}
          <div className='TimelineConnector'></div>

          {/* Card 2 - B.Sc. */}
          <div className='TimelineCard'>
            <div className='TimelineIcon'>🎓</div>
            <div className='TimelineContent'>
              <h3>B.Sc. Software Engineering</h3>
              <p className='TimelineSchool'>Noakhali Science and Technology University</p>
              <div className='TimelineProgress'>
                <span className='TimelineYear'>2021 – Present</span>
                <span className='OngoingBadge'>Ongoing</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className='QuickStatsSection'>
        <h2 className='SectionTitle'>Quick Facts</h2>
        <div className='StatsGrid'>
          <div className='StatCard'>
            <div className='StatIcon'>📍</div>
            <h3>Based in Bangladesh</h3>
            <p>Chattogram</p>
          </div>

          <div className='StatCard'>
            <div className='StatIcon'>🎓</div>
            <h3>Software Engineering Student</h3>
            <p>NSTU</p>
          </div>

          <div className='StatCard'>
            <div className='StatIcon'>💻</div>
            <h3>5+ Projects Built</h3>
            <p>Full Stack</p>
          </div>

          <div className='StatCard'>
            <div className='StatIcon'>🚀</div>
            <h3>Open to Opportunities</h3>
            <p>Let's connect!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
