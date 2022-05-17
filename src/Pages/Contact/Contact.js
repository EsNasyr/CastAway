import React from 'react';
import contactLogo from "../../Images/IMAGE-contact.svg";

const Contact = () => {
    return (
        <section id="contact">
            <div className="contactWrapper">
                <div className="episodesBlock">
                    <div className="epiMargin">
                        <div className="contactBlock">
                            <p className="episodesNumber">Email Newsletter</p>
                            <h2 className="epiTitle">Subscribe for updates</h2>
                        </div>
                        <div className="contactBlock2">
                            <input type="text" placeholder="Name" className="contactInput" required/>
                            <input type="email" placeholder="Email" className="contactInput" required/>
                            <button className="contactBtn">Submit</button>
                        </div>
                    </div>
                    <img src={contactLogo} alt="" className="contactLogo"/>
                </div>
            </div>
        </section>
    );
};

export default Contact;