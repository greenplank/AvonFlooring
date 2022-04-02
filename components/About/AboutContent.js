import React, { Component } from 'react';
import dynamic from 'next/dynamic';


class About extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({ isOpen: true })
    }

    render() {
        return (
            <>
                <section className="about-area pt-100">
                    <div className="container">
                        <div className="row align-items-center">
                       
                            <div className="col-lg-12 col-md-12">
                                <div className="about-content about-content-two">
                                    <div className="services-details-info">
                                        <h2>We don’t only make flooring beautiful. We make it work great as well.

                                        </h2>
                                        <p>AVON Floorng range boasts rich patterns, colors and even textures. AVON Flooring mimics your favourite wood or marble textures to create stylish appeal for homes and commercial spaces. These patterns are made with meticulous attention to detail and are available in a variety of formats including classic black and white squares, rustic timber floorboards and modern bathroom tiles with authentic grooves and grouting.
                                        </p>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                
            </>
        );
    }
}

export default About;