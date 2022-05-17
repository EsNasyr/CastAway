import React from 'react';
import aboutImg from '../../Images/IMAGE-about.png'
import aboutLogo from '../../Images/Frame-about.svg'


const About = () => {
    return (
        <section id="about">
            <div className="aboutWrapper">
                <div className="aboutBlock">
                    <img src={aboutLogo} alt="" className="aboutLogo"/>
                    <p className="episodesNumber">Meet your host</p>
                    <h2 className="epiTitle">Jacob Paulaner</h2>
                    <p className="aboutDesc">Jacob has a background in audio engineering, and has <br/> been podcasting since the early days.</p>
                    <p className="aboutDesc">He’s here to help you level up your game by sharing <br/> everything he’s learned along the way.</p>
                </div>
                <div className="aboutBlock2">
                    <img src={aboutImg} alt="" className="aboutImg"/>
                </div>
            </div>
        </section>
    );
};

export default About;