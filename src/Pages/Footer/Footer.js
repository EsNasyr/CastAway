import React from 'react';
import homeImg2 from "../../Images/Frame.svg";

const Footer = () => {
    return (
        <footer>
            <div className="footerWrapper">
                <div className="">
                    <h2>Castaway</h2>
                </div>
                <ul>
                    <li><a href="" className="footerLink">Home</a></li>
                    <li><a href="" className="footerLink">About</a></li>
                    <li><a href="" className="footerLink">Episodes</a></li>
                    <li><a href="" className="footerLink">Contact</a></li>
                </ul>
                <ul>
                    <li className="footerLink">Style Guide</li>
                    <li className="footerLink">Instructions</li>
                    <li className="footerLink">Changelog</li>
                    <li className="footerLink">Credit</li>
                    <li className="footerLink">Powered by WebfLow</li>
                    <li className="footerLink">Licenses</li>
                </ul>
                <img src={homeImg2} alt=""/>
            </div>
        </footer>
    );
};

export default Footer;