import React, { Component } from 'react';
import Link from 'next/link';

class FunFactsTwo extends Component {
    render() {
        return (
            <section className="funfacts-area ptb-100 bg-fcfbfb">
                <div className="container">
                    <div className="section-title">
                        <h2>Vi försöker alltid förstå användarnas förväntningar
                        </h2>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-4 col-sm-6">
                            <div className="funfact">
                                <i className="icofont-checked"></i>
                                <h3>22+</h3>
                                <p>Färdiga projekt
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-4 col-sm-6">
                            <div className="funfact">
                                <i className="icofont-ui-love"></i>
                                <h3>8+</h3>
                                <p>Nöjda kunder
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-4 col-sm-6">
                            <div className="funfact">
                                <i className="icofont-tasks"></i>
                                <h3>5+</h3>
                                <p>Pågående projekt
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-cta-box">
                        <h3>Har du några frågor om oss?
                        </h3>
                        <p>Tveka inte att kontakta oss
                        </p>

                        <Link href="/Kontakt">
                            <a className="btn btn-primary">Kontakta oss
                            </a>
                        </Link>
                    </div>

                    <div className="map-bg">
                        <img src="/images/map.png" alt="map" />
                    </div>
                </div>
            </section>
        );
    }
}

export default FunFactsTwo;