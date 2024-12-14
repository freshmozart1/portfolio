import React, { useRef, useEffect } from "react";
import "./me.scss";

export default function Me() {
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

    return (<div className="meContainer">
        <h1 ref={header}>Hello, I'm Ole,</h1>
        <span>I’m seeking opportunities to grow as a Full-Stack developer, particularly in the finance industry, where I can contribute to secure, user-focused solutions. I’m open to roles across sectors, eager to join a collaborative, forward-thinking team committed to creating impactful, high-quality applications.</span>
    </div>);
}