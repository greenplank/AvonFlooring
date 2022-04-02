import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    items: 1,
    navText: [
        "<i class='pe-7s-angle-left'></i>",
        "<i class='pe-7s-angle-right'></i>"
    ],
}

class Feedback extends Component {

    _isMounted = false;
    state = {
        display: false
    }
    componentDidMount() {
        this._isMounted = true;
        this.setState({ display: true })
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <section className="feedback-area ptb-100">
                <div className="container">
                    <div className="feedback-list">
                        <div className="quotes-icon">
                            <img src="/images/left-quote-white.png" alt="icon" />
                        </div>

                        {this.state.display ? <OwlCarousel
                            className="feedback-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="single-feedback">
                                <p>Sammantaget hade jag en fantastisk upplevelse. Kommunikationen var fläckig några gånger, men jag inser att mycket berodde på det

                                </p>

                                <div className="bar"></div>

                                <h3>eritsuno
                                </h3>
                            </div>

                            <div className="single-feedback">
                                <p>Utmärkt arbete för våra sociala medier. Kreativ och professionell.
                                </p>

                                <div className="bar"></div>

                                <h3>vongee</h3>
                            </div>

                            <div className="single-feedback">
                                <p>Utmärkt jobb och ett riktigt proffs. Hon levererade bättre värde än vi kommit överens om och innan deadline. jag förstår
                                </p>

                                <div className="bar"></div>

                                <h3>danielnst</h3>
                                {/* <span>Angular JS Specialist</span> */}
                            </div>
                            <div className="single-feedback">
                                <p>utmärkt service, mycket värdefull och hjälpsam revision. Jag förväntar mig att rekommendationerna kommer att ge ett positivt resultat. jag skulle
                                </p>

                                <div className="bar"></div>

                                <h3>jimhall</h3>
                                {/* <span>Angular JS Specialist</span> */}
                            </div>
                        </OwlCarousel> : ''}
                    </div>
                </div>

            </section>
        );
    }
}

export default Feedback;