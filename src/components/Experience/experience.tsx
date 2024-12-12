import React from "react";
import "./experience.scss";

export default function Experience() {
    return (<div className="experienceContainer">
        <h1>Experience</h1>
        <table>
            <tbody>
                <tr>
                    <td>05/24 - Present</td>
                    <td>
                        <b>CareerFoundry, online</b><br />
                        Full-Stack Web Development Course
                    </td>
                </tr>
                <tr>
                    <td>10/19 - 02/24</td>
                    <td>
                        <b>MOIA Operations Germany GmbH, Hamburg</b><br />
                        Bus driver with up to 40 different customers per day (kids, elderlies, handicapped)
                    </td>
                </tr>
                <tr>
                    <td>11/18 - 06/19</td>
                    <td>
                        <b>webförsterei, Hamburg</b><br />
                        Frontend-Developer as part of small teams with customers ranging from small local companies to big international companies
                    </td>
                </tr>
            </tbody>
        </table>
    </div>);
}