import React, { useEffect, useRef } from "react";
import "./skills.scss";

export default function Skills() {
    const header = useRef<HTMLHeadingElement>(null);
    useEffect(() => {
        const handleScroll = () => {
            if (header.current) {
                if ((header.current.getBoundingClientRect()).top < 1) {
                    header.current.style.fontSize = "1.5rem";
                } else {
                    header.current.style.fontSize = "2.5rem";
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className="skillsContainer">
            <h1 ref={header}>What I offer</h1>
            <h2>Frontend-Development</h2>
            <span>JavaScript,</span>
            <span>TypeScript,</span>
            <span>HTM,L</span>
            <span>CSS,</span>
            <span>SASS</span>
            <h2>Backend-Development</h2>
            <span>Express.js,</span>
            <span>RESTful,</span>
            <span>MongoDB,</span>
            <span>Mongoose,</span>
            <span>NoSQL,</span>
            <span>SQL,</span>
            <span>Amazon Web Services,</span>
            <span>Serverless,</span>
            <span>Google Firebase</span>
            <h2>Frameworks/Libraries</h2>
            <span>React,</span>
            <span>Angular,</span>
            <span>jQuery,</span>
            <span>Bootstrap</span>
            <h2>Mobile Development</h2>
            <span>React Native,</span>
            <span>Expo</span>
            <h2>Testing</h2>
            <span>Puppeteer,</span>
            <span>Jest,</span>
            <span>Cucumber/Gherkin,</span>
            <span>Behavior-/Test-driven Development</span>
            <h2>Tools</h2>
            <span>Visual Studio Code,</span>
            <span>Git,</span>
            <span>GitHub,</span>
            <span>GitHub Copilot,</span>
            <span>Postman,</span>
            <span>Node.js,</span>
            <span>Chrome Developer Tools</span>
            <div id="education">
                <h2>Education</h2>
                <span>10/13 - 09/19</span>
                <span>Software-System-Development</span>
                <span>University of Hamburg</span>
            </div>
            <div id="languages">
                <h2>Languages</h2>
                <span>German (native),</span>
                <span>English (fluent),</span>
                <span>Spanish (basic)</span>
            </div>
        </div>
    );
}