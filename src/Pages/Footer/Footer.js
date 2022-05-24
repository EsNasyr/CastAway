import React from 'react';
import homeImg2 from "../../Images/Frame.svg";
import frame from "../../Images/Frame1.png"
const Footer = () => {
    return (
        <footer>
            <div className="footerWrapper">
                <div className="">
                    <h2 className="footerTitle">Castaway</h2>
                    <img src={frame} alt=""/>
                </div>
                <ul>
                    <li><a href="#home" className="footerLink">Home</a></li>
                    <li><a href="#about" className="footerLink">About</a></li>
                    <li><a href="#episodes" className="footerLink">Episodes</a></li>
                    <li><a href="#contact" className="footerLink">Contact</a></li>
                </ul>
                <ul>
                    <li className="footerLink">Style Guide</li>
                    <li className="footerLink">Instructions</li>
                    <li className="footerLink">Changelog</li>
                    <li className="footerLink">Credit</li>
                    <li className="footerLink">Powered by WebfLow</li>
                    <li className="footerLink">Licenses</li>
                </ul>
                <img src={homeImg2} className="footerImg" alt=""/>
            </div>
        </footer>
    );
};

export default Footer;