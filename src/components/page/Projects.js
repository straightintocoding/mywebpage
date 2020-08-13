import React from "react";
import "../../styles/projects.css";
import Appsgrid from "./Apps/Appsgrid";
import Gamesgrid from "./Apps/Gamesgrid";
import Websitegrid from "./Apps/Websitegrid";
const Projects = () => {
  return (
    <div className="Projects">
      <h1 className="projectstitle">Projects</h1>

      <div className="apps">
        <h3>Apps</h3>
        <Appsgrid />
      </div>

      <div className="apps">
        <h3>Games</h3>
        <Gamesgrid />
      </div>

      <div className="apps p-50">
        <h3>Website</h3>
        <Websitegrid />
      </div>
    </div>
  );
};

export default Projects;
