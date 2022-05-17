import React from 'react';
import epiImg from '../../Images/IMAGE.png'
import epiImg1 from '../../Images/IMAGE (1).png'
import epiImg2 from '../../Images/IMAGE (2).png'
const Episodes = () => {
    return (
        <section id="episodes">
            <h2 className="homeTitle">Latest episodes</h2>
            <div className="episodesBlock">
                <div className="epiMargin">
                    <img src={epiImg} alt=""/>
                    <div className="epiContentBlock">
                        <p className="episodesType">Gear</p>
                        <p className="episodesNumber">Episode 3</p>
                        <h2 className="epiTitle">Should you get outboard audio gear?</h2>
                        <p className="episodesDesc">Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here’s our reasons on why you might want to consider picking something up.</p>
                        <button className="episodesBtn2">View Episode Details</button>
                    </div>
                </div>
            </div>
            <div className="episodesBlock">
                <div className="epiMargin">
                    <img src={epiImg1} alt=""/>
                    <div className="epiContentBlock">
                        <p className="episodesType2">Tips & Tricks</p>
                        <p className="episodesNumber">Episode 2</p>
                        <h2 className="epiTitle">Mic tricks to take you to the next level</h2>
                        <p className="episodesDesc">Stop rolling with those default settings on your mic. These small tweaks will take you from sounding good to great.</p>
                        <button className="episodesBtn">View Episode Details</button>
                    </div>
                </div>
            </div>
            <div className="episodesBlock">
                <div className="epiMargin">
                    <img src={epiImg2} alt=""/>
                    <div className="epiContentBlock">
                        <p className="episodesType">Gear</p>
                        <p className="episodesNumber">Episode 1</p>
                        <h2 className="epiTitle">The best microphone under $200</h2>
                        <p className="episodesDesc">With so many microphones on the market, how are you supposed to know what’s the best? Take a look at our top picks.</p>
                        <button className="episodesBtn">View Episode Details</button>
                    </div>
                </div>
        </div>

        </section>
    );
};

export default Episodes;