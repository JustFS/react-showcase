import React, { Component } from 'react';
import { projectsData } from '../data/projectsData';

class Project extends Component {
  state = {
    project:projectsData
  }
  
  render() {
    let projectNumber = this.props.projectNumber;
    let project = this.state.project[projectNumber];

    let left = Math.floor((Math.random() * 200) + 600) + 'px';
    let top = Math.floor((Math.random() * 200) + 150) + 'px';
    let size = 'scale(' + (Math.random() + 0.7) +')';

    return (
      <div className="project-main">
        <div className="project-content">
          <h1>{project.title}</h1>
          <p>{project.date}</p>
          <ul className="languages">
            {
              project.languages.map((item) => {
                return <li key={item}>{item}</li>
              })
            }
          </ul>
        </div>
        <div className="img-content">
          <div className="img-container">
            <span>
              <h3>{project.title}</h3>
              <p>{project.infos}</p>
            </span>
            <img src={project.img} alt={project.title} className="img" />
          </div>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <div className="button">voir le site</div>
          </a>
        </div>
        <span className="random-circle" style={{left: left, top: top, transform: size }}></span>
      </div>
    );
  }
}

export default Project;