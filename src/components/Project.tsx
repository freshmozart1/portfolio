import React from 'react';
import PropTypes from 'prop-types';
import './project.scss';

type ProjectProps = {
    className: string;
    projectName: string;
    projectImagePath: string;
    children: React.ReactNode;
};

const Project = ({ className, projectName, projectImagePath, children }: ProjectProps) => {
    return (
        <div className={className + ' project'}>
            <div className='header text-center'>
                {projectName}
            </div>
            <img className='project_image' src={projectImagePath} aria-description='A image showing the project' />
            <div className='textContent text-center'>
                {children}
            </div>
            <div className='navigation'>
                <div className='ellipse_filled'></div>
                <div className="ellipse"></div>
                <div className="ellipse"></div>
                <div className="ellipse"></div>
            </div>
        </div>
    );
};

Project.propTypes = {
    className: PropTypes.string.isRequired,
    projectName: PropTypes.string.isRequired,
    projectImagePath: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Project;
