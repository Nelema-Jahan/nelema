import React from 'react';
import { FaGithub } from "react-icons/fa";

const ProjectBox = ({ projectName, projectDesc, projectGithub, projectIcon }) => {
  return (
    <div className='projectBox'>
      <div className='projectIcon'>
        {projectIcon}
      </div>
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {projectDesc}
        <br />
        {projectGithub && (
          <a href={projectGithub} target='_blank' rel="noreferrer">
            <button className='projectbtn'><FaGithub /> Github</button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectBox;
