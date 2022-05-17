import React from 'react';
import homeImg from '../../Images/IMAGEhome.png'
import homeLogo from '../../Images/IMAGE.svg'
import homeImg2 from '../../Images/Frame.svg'
import homeLogo2 from '../../Images/Vector (1).svg'
const Home = () => {
    return (
        <section className="home" id="home">
            <div className="homeFirstBlock">
                <img src={homeLogo} alt="" className="homeLogo"/>
                <img src={homeImg} alt="" className="homeImg"/>
            </div>
            <div className="homeSecondBlock">
                <h1 className="homeTitle">Take your <br/> podcast to the <br/> next <strong>level</strong> </h1>
                <img src={homeLogo2} alt="" className="homeLogo2"/>
                <p>Listen on</p>
                <img src={homeImg2} alt=""/>
            </div>
        </section>
    );
};

export default Home;