import React, { useEffect, useRef } from "react";
import ViewSDKClient from "./viewSDKClient.ts";
//@ts-expect-error
import caseStudy from '../../assets/case_study_chat_app.pdf';
import "./twe.scss";

export default function Twe() {
    const tweContainer = useRef<HTMLDivElement>(null);
    function openCaseStudy() {
        const viewSDKClient = new ViewSDKClient();
        viewSDKClient.ready().then(() => {
            console.log(caseStudy);
            viewSDKClient.previewFile(caseStudy, 'case_study_chat_app.pdf');
        });
    }
    return (
        <div ref={tweContainer} className="tweContainer">
            <h1>Talk with Everyone</h1>
            <button onClick={openCaseStudy}>Case Study</button>
        </div>
    );
}