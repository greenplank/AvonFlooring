import React, { Component } from 'react';

class WorkProcess extends Component {
    render() {
        return (
            <>
                <section className="work-process-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <h2>Vår arbetsprocess
                            </h2>
                        </div>

                        <div className="work-process">
                            <img src="/images/man-with-mobiles.webp" alt="logo" />
                            <div className="work-process-list">
                                <div className="single-work-process">
                                    <div className="icon">
                                        <i className="pe-7s-display1"></i>
                                    </div>
                                    <h3>Planen
                                    </h3>
                                    <span>Visuell design
                                    </span>
                                </div>

                                <div className="single-work-process">
                                    <div className="icon">
                                        <i className="pe-7s-display2"></i>
                                    </div>
                                    <h3>Definiera</h3>
                                    <span>Trådramar
                                    </span>
                                </div>

                                <div className="single-work-process">
                                    <div className="icon">
                                        <i className="pe-7s-airplay"></i>
                                    </div>
                                    <h3>Design</h3>
                                    <span>Skärmflöde
                                    </span>
                                </div>

                                <div className="single-work-process">
                                    <div className="icon">
                                        <i className="pe-7s-note2"></i>
                                    </div>
                                    <h3>Byggnad
                                    </h3>
                                    <span>genomförande
                                    </span>
                                </div>

                                <div className="single-work-process">
                                    <div className="icon">
                                        <i className="pe-7s-light"></i>
                                    </div>
                                    <h3>Testning
                                    </h3>
                                    <span>Användarundersökning</span>
                                </div>

                                <div className="single-work-process">
                                    <div className="icon">
                                        <i className="pe-7s-sun"></i>
                                    </div>
                                    <h3>Spridning
                                    </h3>
                                    <span>Lunch / analysera
                                    </span>
                                </div>
                            </div>

                            <img src="/images/circle.png" className="rotateme circle-image" alt="image" />
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default WorkProcess;