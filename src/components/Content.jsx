import React from "react";
import emailLogo from '../assets/Icon.png';
import linkedinLogo from '../assets/linkedin.png';
export default function Content() {
    return (
        <div className="content--body">
            <h1 className="profile--name">Laura Smith</h1>
            <p className="profile--designation">Frontend Developer</p>
            <p className="profile--website">laurasmith.website</p>
            < div className="button--div">
            <button className="button--email">
                <h1 className="email--text">Email</h1>
                <img src={emailLogo } className = "email--logo"/>
            </button>
            <button className="button--linkedin">
                <h1 className="linked--text">LinkedIn</h1>
                <img src={linkedinLogo} className="linked--logo"/> 
                </button>
                </div>
            <div className="about--interest">
                <h1>About</h1>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <div className="space"></div>
                <h1>Interests</h1>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </div>
    )
}