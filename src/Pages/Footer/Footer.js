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
                    <li><a href="" className="footerLink"></a></li>
                    <li><a href="" className="footerLink"></a></li>
                    <li><a href="" className="footerLink"></a></li>
                    <li><a href="" className="footerLink"></a></li>
                </ul>
                <ul>
                    <li className="footerLink"></li>
                    <li className="footerLink"></li>
                    <li className="footerLink"></li>
                    <li className="footerLink"></li>
                    <li className="footerLink"></li>
                    <li className="footerLink"></li>
                </ul>
                <img src={homeImg2} alt=""/>
            </div>
        </footer>
    );
};

export default Footer;