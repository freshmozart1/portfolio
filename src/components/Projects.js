import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="projects-section bg-light text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-black mb-4">Projects</h2>
            <p className="text-black-50">
              Here are some of the projects I have worked on:
            </p>
            <ul className="list-unstyled">
              <li className="mb-3">
                <h4 className="text-black">Project 1</h4>
                <p className="text-black-50">Description of project 1.</p>
              </li>
              <li className="mb-3">
                <h4 className="text-black">Project 2</h4>
                <p className="text-black-50">Description of project 2.</p>
              </li>
              <li className="mb-3">
                <h4 className="text-black">Project 3</h4>
                <p className="text-black-50">Description of project 3.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
