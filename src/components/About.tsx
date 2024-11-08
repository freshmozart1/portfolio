import React from 'react';
import './about.scss';
import profilePicturePath from '../assets/profile_picture.png';

const About = () => {
    return (
        <div className='about'>
            <div className='header text-center'>
                About him
            </div>
            {/* eslint-disable-next-line */}
            <img className='profile' src={profilePicturePath} aria-description='A picture showing Ole Kösters head. He wears a red shirt and a grey jacket.' />
            <div className='skills'>
                <div className='skillNames'>
                    <div className='skillName'>JavaScript</div>
                    <div className="skillName">React</div>
                    <div className="skillName">TypeScript</div>
                    <div className="skillName">AWS</div>
                    <div className="skillName">MongoDB</div>
                </div>
                <div className="skillStars">
                    <div className="skillStarRow">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0.329987L9.79611 5.85785H15.6085L10.9062 9.27426L12.7023 14.8021L8 11.3857L3.29772 14.8021L5.09383 9.27426L0.391548 5.85785H6.20389L8 0.329987Z" fill="#D7B941" />
                        </svg>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0.329987L9.79611 5.85785H15.6085L10.9062 9.27426L12.7023 14.8021L8 11.3857L3.29772 14.8021L5.09383 9.27426L0.391548 5.85785H6.20389L8 0.329987Z" fill="#D7B941" />
                        </svg>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0.329987L9.79611 5.85785H15.6085L10.9062 9.27426L12.7023 14.8021L8 11.3857L3.29772 14.8021L5.09383 9.27426L0.391548 5.85785H6.20389L8 0.329987Z" fill="#D7B941" />
                        </svg>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0.329987L9.79611 5.85785H15.6085L10.9062 9.27426L12.7023 14.8021L8 11.3857L3.29772 14.8021L5.09383 9.27426L0.391548 5.85785H6.20389L8 0.329987Z" fill="#D7B941" />
                        </svg>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0.329987L9.79611 5.85785H15.6085L10.9062 9.27426L12.7023 14.8021L8 11.3857L3.29772 14.8021L5.09383 9.27426L0.391548 5.85785H6.20389L8 0.329987Z" fill="#D7B941" />
                        </svg>
                    </div>
                    <div className="skillStarRow">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0.329987L9.79611 5.85785H15.6085L10.9062 9.27426L12.7023 14.8021L8 11.3857L3.29772 14.8021L5.09383 9.27426L0.391548 5.85785H6.20389L8 0.329987Z" fill="#D7B941" />
                        </svg>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0.329987L9.79611 5.85785H15.6085L10.9062 9.27426L12.7023 14.8021L8 11.3857L3.29772 14.8021L5.09383 9.27426L0.391548 5.85785H6.20389L8 0.329987Z" fill="#D7B941" />
                        </svg>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0.329987L9.79611 5.85785H15.6085L10.9062 9.27426L12.7023 14.8021L8 11.3857L3.29772 14.8021L5.09383 9.27426L0.391548 5.85785H6.20389L8 0.329987Z" fill="#D7B941" />
                        </svg>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 1.139L9.55835 5.9351L9.61448 6.10785H9.79611H14.839L10.7592 9.072L10.6123 9.17877L10.6684 9.35151L12.2268 14.1476L8.14695 11.1835L8 11.0767L7.85305 11.1835L3.77325 14.1476L5.33159 9.35151L5.38772 9.17877L5.24078 9.072L1.16097 6.10785H6.20389H6.38552L6.44165 5.9351L8 1.139Z" fill="#D9D9D9" stroke="black" strokeWidth="0.5" />
                        </svg>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 1.139L9.55835 5.9351L9.61448 6.10785H9.79611H14.839L10.7592 9.072L10.6123 9.17877L10.6684 9.35151L12.2268 14.1476L8.14695 11.1835L8 11.0767L7.85305 11.1835L3.77325 14.1476L5.33159 9.35151L5.38772 9.17877L5.24078 9.072L1.16097 6.10785H6.20389H6.38552L6.44165 5.9351L8 1.139Z" fill="#D9D9D9" stroke="black" strokeWidth="0.5" />
                        </svg>
                    </div>
                    <div className="skillStarRow">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0.329987L9.79611 5.85785H15.6085L10.9062 9.27426L12.7023 14.8021L8 11.3857L3.29772 14.8021L5.09383 9.27426L0.391548 5.85785H6.20389L8 0.329987Z" fill="#D7B941" />
                        </svg>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0.329987L9.79611 5.85785H15.6085L10.9062 9.27426L12.7023 14.8021L8 11.3857L3.29772 14.8021L5.09383 9.27426L0.391548 5.85785H6.20389L8 0.329987Z" fill="#D7B941" />
                        </svg>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0.329987L9.79611 5.85785H15.6085L10.9062 9.27426L12.7023 14.8021L8 11.3857L3.29772 14.8021L5.09383 9.27426L0.391548 5.85785H6.20389L8 0.329987Z" fill="#D7B941" />
                        </svg>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 1.139L9.55835 5.9351L9.61448 6.10785H9.79611H14.839L10.7592 9.072L10.6123 9.17877L10.6684 9.35151L12.2268 14.1476L8.14695 11.1835L8 11.0767L7.85305 11.1835L3.77325 14.1476L5.33159 9.35151L5.38772 9.17877L5.24078 9.072L1.16097 6.10785H6.20389H6.38552L6.44165 5.9351L8 1.139Z" fill="#D9D9D9" stroke="black" strokeWidth="0.5" />
                        </svg>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 1.139L9.55835 5.9351L9.61448 6.10785H9.79611H14.839L10.7592 9.072L10.6123 9.17877L10.6684 9.35151L12.2268 14.1476L8.14695 11.1835L8 11.0767L7.85305 11.1835L3.77325 14.1476L5.33159 9.35151L5.38772 9.17877L5.24078 9.072L1.16097 6.10785H6.20389H6.38552L6.44165 5.9351L8 1.139Z" fill="#D9D9D9" stroke="black" strokeWidth="0.5" />
                        </svg>
                    </div>
                    <div className="skillStarRow">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0.329987L9.79611 5.85785H15.6085L10.9062 9.27426L12.7023 14.8021L8 11.3857L3.29772 14.8021L5.09383 9.27426L0.391548 5.85785H6.20389L8 0.329987Z" fill="#D7B941" />
                        </svg>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0.329987L9.79611 5.85785H15.6085L10.9062 9.27426L12.7023 14.8021L8 11.3857L3.29772 14.8021L5.09383 9.27426L0.391548 5.85785H6.20389L8 0.329987Z" fill="#D7B941" />
                        </svg>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 1.139L9.55835 5.9351L9.61448 6.10785H9.79611H14.839L10.7592 9.072L10.6123 9.17877L10.6684 9.35151L12.2268 14.1476L8.14695 11.1835L8 11.0767L7.85305 11.1835L3.77325 14.1476L5.33159 9.35151L5.38772 9.17877L5.24078 9.072L1.16097 6.10785H6.20389H6.38552L6.44165 5.9351L8 1.139Z" fill="#D9D9D9" stroke="black" strokeWidth="0.5" />
                        </svg>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 1.139L9.55835 5.9351L9.61448 6.10785H9.79611H14.839L10.7592 9.072L10.6123 9.17877L10.6684 9.35151L12.2268 14.1476L8.14695 11.1835L8 11.0767L7.85305 11.1835L3.77325 14.1476L5.33159 9.35151L5.38772 9.17877L5.24078 9.072L1.16097 6.10785H6.20389H6.38552L6.44165 5.9351L8 1.139Z" fill="#D9D9D9" stroke="black" strokeWidth="0.5" />
                        </svg>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 1.139L9.55835 5.9351L9.61448 6.10785H9.79611H14.839L10.7592 9.072L10.6123 9.17877L10.6684 9.35151L12.2268 14.1476L8.14695 11.1835L8 11.0767L7.85305 11.1835L3.77325 14.1476L5.33159 9.35151L5.38772 9.17877L5.24078 9.072L1.16097 6.10785H6.20389H6.38552L6.44165 5.9351L8 1.139Z" fill="#D9D9D9" stroke="black" strokeWidth="0.5" />
                        </svg>
                    </div>
                    <div className="skillStarRow">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0.329987L9.79611 5.85785H15.6085L10.9062 9.27426L12.7023 14.8021L8 11.3857L3.29772 14.8021L5.09383 9.27426L0.391548 5.85785H6.20389L8 0.329987Z" fill="#D7B941" />
                        </svg>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0.329987L9.79611 5.85785H15.6085L10.9062 9.27426L12.7023 14.8021L8 11.3857L3.29772 14.8021L5.09383 9.27426L0.391548 5.85785H6.20389L8 0.329987Z" fill="#D7B941" />
                        </svg>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 1.139L9.55835 5.9351L9.61448 6.10785H9.79611H14.839L10.7592 9.072L10.6123 9.17877L10.6684 9.35151L12.2268 14.1476L8.14695 11.1835L8 11.0767L7.85305 11.1835L3.77325 14.1476L5.33159 9.35151L5.38772 9.17877L5.24078 9.072L1.16097 6.10785H6.20389H6.38552L6.44165 5.9351L8 1.139Z" fill="#D9D9D9" stroke="black" strokeWidth="0.5" />
                        </svg>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 1.139L9.55835 5.9351L9.61448 6.10785H9.79611H14.839L10.7592 9.072L10.6123 9.17877L10.6684 9.35151L12.2268 14.1476L8.14695 11.1835L8 11.0767L7.85305 11.1835L3.77325 14.1476L5.33159 9.35151L5.38772 9.17877L5.24078 9.072L1.16097 6.10785H6.20389H6.38552L6.44165 5.9351L8 1.139Z" fill="#D9D9D9" stroke="black" strokeWidth="0.5" />
                        </svg>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 1.139L9.55835 5.9351L9.61448 6.10785H9.79611H14.839L10.7592 9.072L10.6123 9.17877L10.6684 9.35151L12.2268 14.1476L8.14695 11.1835L8 11.0767L7.85305 11.1835L3.77325 14.1476L5.33159 9.35151L5.38772 9.17877L5.24078 9.072L1.16097 6.10785H6.20389H6.38552L6.44165 5.9351L8 1.139Z" fill="#D9D9D9" stroke="black" strokeWidth="0.5" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className='textContent text-center'>
                &gt; <b>Certified</b> Full-Stack developer<br /><br />
                &gt; Worked as a <b>contractor</b> for a online marketing agency
            </div>
        </div>
    );
};

export default About;
