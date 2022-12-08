import React from "react";
import twitter from '../assets/Twitter-icon.png';
import facebook from '../assets/Facebook-Icon.png';
import instagram from '../assets/Instagram-Icon.png';
import github from '../assets/Github-Icon.png';
export default function Footer() {
    return (
        <footer className="page--footer">
            <img src={twitter} />
            <img src={facebook} />
            <img src={instagram} />
            <img src={github} />
        </footer>
    )
}