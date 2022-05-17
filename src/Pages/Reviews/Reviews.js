import React from 'react';
import star from '../../Images/star.svg'

const Reviews = () => {
    return (
        <section id="reviews">
            <div className="reviewsWrapper">
                <div className="reviewsBlock">
                    <img src={star} alt="" className="reviewsImg"/>
                    <img src={star} alt="" className="reviewsImg"/>
                    <img src={star} alt="" className="reviewsImg"/>
                    <h3 className="reviewsTitle">I can’t recommend this podcast enough</h3>
                    <p className="reviewsDesc">Betty Lacey</p>
                </div>
                <div className="reviewsBlock">
                    <img src={star} alt="" className="reviewsImg"/>
                    <img src={star} alt="" className="reviewsImg"/>
                    <img src={star} alt="" className="reviewsImg"/>
                    <img src={star} alt="" className="reviewsImg"/>
                    <h3 className="reviewsTitle">Jacob is the best in the business</h3>
                    <p className="reviewsDesc">Adam Driver</p>
                </div>
                <div className="reviewsBlock">
                    <img src={star} alt="" className="reviewsImg"/>
                    <img src={star} alt="" className="reviewsImg"/>
                    <img src={star} alt="" className="reviewsImg"/>
                    <img src={star} alt="" className="reviewsImg"/>
                    <h3 className="reviewsTitle">A wealth of audio knowledge</h3>
                    <p className="reviewsDesc">Marcus Brown</p>
                </div>
                <div className="reviewsBlock">
                    <img src={star} alt="" className="reviewsImg"/>
                    <img src={star} alt="" className="reviewsImg"/>
                    <img src={star} alt="" className="reviewsImg"/>
                    <img src={star} alt="" className="reviewsImg"/>
                    <img src={star} alt="" className="reviewsImg"/>
                    <h3 className="reviewsTitle">Every episode is a gem!</h3>
                    <p className="reviewsDesc">Jessica Knowl</p>
                </div>
                <div className="reviewsBlock">
                    <img src={star} alt="" className="reviewsImg"/>
                    <img src={star} alt="" className="reviewsImg"/>
                    <img src={star} alt="" className="reviewsImg"/>
                    <img src={star} alt="" className="reviewsImg"/>
                    <img src={star} alt="" className="reviewsImg"/>
                    <h3 className="reviewsTitle">Whoa whoa, let me take some notes!</h3>
                    <p className="reviewsDesc">Scott Adams</p>
                </div>
                <div className="reviewsBlock">
                    <img src={star} alt="" className="reviewsImg"/>
                    <img src={star} alt="" className="reviewsImg"/>
                    <img src={star} alt="" className="reviewsImg"/>
                    <img src={star} alt="" className="reviewsImg"/>
                    <img src={star} alt="" className="reviewsImg"/>
                    <h3 className="reviewsTitle">I’ve upped my game considerably since I started listening</h3>
                    <p className="reviewsDesc">Steven Blast</p>
                </div>
            </div>
        </section>
    );
};

export default Reviews;