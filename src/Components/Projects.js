import React from 'react';
import ProjectBox from './ProjectBox';
import { MdSecurity } from "react-icons/md";
import { FaHospital, FaGamepad, FaBuilding, FaUsers, FaShieldAlt, FaLock } from "react-icons/fa";

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>

        <ProjectBox
          projectName="Shadow-Text"
          projectDesc="Shadow-Text is a cryptography and steganography tool that uses AES encryption to secure messages and hides them inside images. It ensures both strong encryption and stealth by combining cryptographic security with visual concealment."
          projectGithub="https://github.com/Nelema-Jahan/Shadow-Text.git"
          projectIcon={<MdSecurity />}
        />

        <ProjectBox
          projectName="NSTU-Medical-Center "
          projectDesc="The NSTU Medical Center App is a Flutter-based digital healthcare application designed to digitalize and modernize the healthcare services within Noakhali Science and Technology University."
          projectGithub="https://github.com/Nelema-Jahan/NSTU-Medical-Center.git"
          projectIcon={<FaHospital />}
        />

        <ProjectBox
          projectName="Connect 4"
          projectDesc="Connect 4 is a classic strategy board game where players take turns dropping colored pieces into a grid, aiming to be the first to get four pieces in a row horizontally, vertically, or diagonally."
          projectGithub="https://github.com/Nelema-Jahan/Connect--4.git"
          projectIcon={<FaGamepad />}
        />

        <ProjectBox
          projectName="Vnure"
          projectDesc="A venue booking portal that allows users to browse, search, and book event venues."
          projectGithub="https://github.com/Nelema-Jahan/VNUR-.git/"
          projectIcon={<FaBuilding />}
        />

        <ProjectBox
          projectName="SignBridge"
          projectDesc="Real-time sign language communication tool for assistive care."
          projectGithub="https://github.com/Nelema-Jahan/SignBridge.git"
          projectIcon={<FaUsers />}
        />

        <ProjectBox
          projectName="CSRF Protection Demo"
          projectDesc="Interactive educational web application demonstrating CSRF protection mechanisms using Flask backend with token validation, real-time statistics, and responsive Bootstrap UI."
          projectGithub="https://github.com/Nelema-Jahan/CSRF.git"
          projectIcon={<FaShieldAlt />}
        />

        <ProjectBox
          projectName="RBAC System"
          projectDesc="Full-stack Role-Based Access Control application with React + Vite frontend and Node.js/Express backend. Features JWT authentication, SQLite database, and hierarchical role management (Admin, Editor, Viewer)."
          projectGithub="https://github.com/Nelema-Jahan/RBAC.git"
          projectIcon={<FaLock />}
        />

      </div>
    </div>
  );
};

export default Projects;
