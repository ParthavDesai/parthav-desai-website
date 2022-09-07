import React from "react";
import { AiOutlineFolder } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
const project = ({ name, url, description }) => {
  return (
    <div className="projectCard">
      <div className="projectInnerContainer">
        <div className="projCard-heading">
          <AiOutlineFolder className="project-folder" />
          <a href={url}>
            <BsGithub className="project-git" />
          </a>
        </div>
        <h3 className="project-h3">{name}</h3>
        <div className="proj-description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default project;
