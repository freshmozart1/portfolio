import React, { useRef, useEffect } from "react";
import "./experience.scss";

export default function Experience() {
    const header = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (header.current) {
                if ((header.current.getBoundingClientRect()).top < 1) {
                    header.current.style.fontSize = "1.5rem";
                } else {
                    header.current.style.fontSize = "3rem";
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (<div className="experienceContainer">
        <h1 ref={header}>Experience</h1>
        <section className="jobContainer">
            <h2>CareerFoundry</h2>
            <p>05/24 - Present</p>
            <p>online</p>
            <p>Full-Stack Web Development Course</p>
        </section>
        <section className="jobContainer">
            <h2>MOIA Operations Germany GmbH</h2>
            <p>10/19 - 02/24</p>
            <p>Hamburg</p>
            <p>Bus driver with up to 40 different customers per day (kids, elderlies, handicapped)</p>
        </section>
        <section className="jobContainer">
            <h2>webförsterei</h2>
            <p>11/18 - 06/19</p>
            <p>Hamburg</p>
            <p>Frontend-Developer as part of small teams with customers ranging from small local companies to big international companies</p>
        </section>
    </div>);
}