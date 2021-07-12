import React from 'react'
import './showcase.css'
import dentistImage from '../assets/jonathan-borba-Yui-VjmS8AA-unsplash.jpg'

const ShowCase = () => {


    return (
        <div className="slider-bg">

            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="dentist-image">
                                <img  src={dentistImage} alt="Dentist with patient" width="500" height="600"/>
                            </div>
                            <div className="slider-info">
                                <h1>Modern technologies ensure safety</h1>
                                <p>Our clinic is equipped with the highest quality medical and dental equipment, <br />
                                    which allows for quick and effective treatment of the patient.</p>
                                <button>About our clinic</button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="dentist-image">
                                <img  src={dentistImage} alt="Dentist with patient" width="500" height="600"/>
                            </div>
                            <div className="slider-info">
                                <h1>Modern technologies ensure safety</h1>
                                <p>Our clinic is equipped with the highest quality medical and dental equipment, <br />
                                    which allows for quick and effective treatment of the patient.</p>
                                <button>About our clinic</button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="dentist-image">
                                <img  src={dentistImage} alt="Dentist with patient" width="500" height="600"/>
                            </div>
                            <div className="slider-info">
                                <h1>Modern technologies ensure safety</h1>
                                <p>Our clinic is equipped with the highest quality medical and dental equipment, <br />
                                    which allows for quick and effective treatment of the patient.</p>
                                <button>About our clinic</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>

    )
}

export default ShowCase
