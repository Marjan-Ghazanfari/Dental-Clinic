import React from 'react';
import aboutUsPic from '../assets/Room-15.jpg';

const AboutUs = () => {
    return (
        <div className="aboutUs">
            <div className="aboutSide">
                <div className="aboutSide-top">
                    <p>Dental<span className="blueText">Clinic</span> is a modern<br></br>medical and dental clinic</p>
                </div>
                <div className="aboutSide-center">
                    <p>The DentialClinic Center located in the city of Stockholm is one of the most modern dentistry centers in Sweden. It was created for demanding patients who expect the highest quality of services combined with comfort and a pleasant atmosphere.
                        The highest-class dental equipment possessed by the DentialClinic Center enables complicated procedures to be carried out. In our dental practice we combine passion, technology and quality. We strive to fulfill your dreams of a wonderful smile.
                    </p>
                </div>
                <div className="aboutSide-bottom">
                    <div className="aboutSide-bottomItems">
                        <p className="blueText number">9850</p>
                        <p className="belowText">Happy patients</p>
                    </div>
                    <div className="aboutSide-bottomItems">
                        <p className="blueText number">12 890</p>
                        <p className="belowText">Performed treatments</p>
                    </div>
                    <div className="aboutSide-bottomItems">
                        <p className="blueText number">24/7</p>
                        <p className="belowText">Open clinic</p>
                    </div>
                </div>
            </div>
            <div className="picSide">
                <img src={aboutUsPic} alt="About Our Dental Clinic" />
            </div>
        </div>
    )
}

export default AboutUs
