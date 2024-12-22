import React, { useEffect } from "react";
import "./skills.scss";
import {
    jsIcon,
    tsIcon,
    htmlIcon,
    cssIcon,
    sassIcon,
    expressIcon,
    restIcon,
    mongoDBIcon,
    mongooseIcon,
    noSqlIcon,
    sqlIcon,
    awsIcon,
    serverlessIcon,
    firebaseIcon,
    reactIcon,
    angularIcon,
    jqueryIcon,
    bootstrapIcon,
    nodejsIcon,
    expoIcon,
    puppeteerIcon,
    jestIcon,
    cucumberIcon,
    bddIcon,
    tddIcon,
    vscodeIcon,
    gitIcon,
    githubIcon
} from "./skillIcons.tsx";

export default function Skills() {
    const skillSections: {
        'Frontend-Developer': { icon: string, name: string }[],
        'Backend-Developer': { icon: string, name: string }[],
        'Framework-Fan': { icon: string, name: string }[],
        'Mobile Developer': { icon: string, name: string }[],
        'Code-Tester': { icon: string, name: string }[],
        'Tool-Guru': { icon: string, name: string }[]
    } = {
        'Frontend-Developer': [
            { icon: jsIcon, name: "JavaScript" },
            { icon: tsIcon, name: "TypeScript" },
            { icon: htmlIcon, name: "HTML" },
            { icon: cssIcon, name: "CSS" },
            { icon: sassIcon, name: "Sass" }
        ],
        'Backend-Developer': [
            { icon: expressIcon, name: "Express.js" },
            { icon: restIcon, name: "RESTful" },
            { icon: mongoDBIcon, name: "MongoDB" },
            { icon: mongooseIcon, name: "Mongoose" },
            { icon: noSqlIcon, name: "noSQL" },
            { icon: sqlIcon, name: "SQL" },
            { icon: awsIcon, name: "AWS" },
            { icon: serverlessIcon, name: "Serverless" },
            { icon: firebaseIcon, name: "Google Firebase" }
        ],
        'Framework-Fan': [
            { icon: reactIcon, name: "React" },
            { icon: angularIcon, name: "Angular" },
            { icon: jqueryIcon, name: "jQuery" },
            { icon: bootstrapIcon, name: "Bootstrap" },
            { icon: nodejsIcon, name: "Node.js" }
        ],
        'Mobile Developer': [
            { icon: reactIcon, name: "React Native" },
            { icon: expoIcon, name: "Expo" }
        ],
        'Code-Tester': [
            { icon: puppeteerIcon, name: "Puppeteer" },
            { icon: jestIcon, name: "Jest" },
            { icon: cucumberIcon, name: "Cucumber/Gherkin" },
            { icon: bddIcon, name: "Behavior-driven Development" },
            { icon: tddIcon, name: "Test-driven Development" }
        ],
        'Tool-Guru': [
            { icon: vscodeIcon, name: "Visual Studio Code" },
            { icon: gitIcon, name: "Git" },
            { icon: githubIcon, name: "GitHub" }
        ]
    };
    useEffect(() => {
        const handleScroll = () => {
            const [skillFigures, skillHeadings, skillListElements, [iamaHeader]] = [
                "ol.skills>li>section>div>figure",
                "ol.skills>li>h2",
                "ol.skills>li",
                "div.skillContainer>h1"
            ].map((selector) => document.querySelectorAll<HTMLElement>(selector));
            const { top } = iamaHeader.getBoundingClientRect();
            iamaHeader.style.fontSize = top < 1 ? "1.5rem" : "2.5rem";
            iamaHeader.style.opacity = skillListElements[skillListElements.length - 1].getBoundingClientRect().top < 61 ? '0' : `${Math.min(1, Math.max(0, (window.innerHeight - top) / (window.innerHeight / 3)))}`;
            for (let skillParts of [skillFigures, skillHeadings, skillListElements]) {
                for (let skillPart of skillParts) {
                    const { top, bottom } = skillPart.getBoundingClientRect();
                    skillPart.style.opacity = `${Math.min(1, Math.max(0, (window.innerHeight - top) / (window.innerHeight / 3)), Math.max(0, bottom / (window.innerHeight / 3)))}`;
                }
            }
            for (let skillListElement of skillListElements) {
                const { top, bottom } = skillListElement.getBoundingClientRect();
                skillListElement.style.transform = `scale(${Math.min(1.05, Math.max(1, (window.innerHeight - top) / (window.innerHeight / 3)), Math.max(1, bottom / (window.innerHeight / 3)))})`;
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="skillContainer">
            <h1>I'm a</h1>
            <ol className="skills" style={{ '--length': 6 } as React.CSSProperties}>
                {(Object.keys(skillSections)).map((skillSectionName, i) => (
                    <li key={skillSectionName} style={{ '--i': i + 1 } as React.CSSProperties}>
                        <h2>{skillSectionName}</h2>
                        <section className="overflowX">
                            <div className="horizontalSkillsList">
                                {skillSections[skillSectionName].map(({ icon, name }) => (
                                    <figure key={name}>
                                        <picture><img src={icon} alt={name + ' icon'} /></picture>
                                        <figcaption>{name}</figcaption>
                                    </figure>
                                ))}
                            </div>
                        </section>
                    </li>
                ))}
            </ol>
        </div>
        //     <div id="education">
        //         <h2>Education</h2>
        //         <span>10/13 - 09/19</span>
        //         <span>Software-System-Development</span>
        //         <span>University of Hamburg</span>
        //     </div>
        //     <div id="languages">
        //         <h2>Languages</h2>
        //         <span>German (native),</span>
        //         <span>English (fluent),</span>
        //         <span>Spanish (basic)</span>
        //     </div>
        // </div>
    );
}