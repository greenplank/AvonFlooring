import React, { Component } from 'react';
import Link from 'next/link';

class CtaArea extends Component {
    render() {
        return (
            <div className="cta-area bg-gradient">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-8">
                            <div className="cta-content">
                                <h3>Har du ett projekt i åtanke?
                                </h3>
                                <p>Låt oss börja jobba
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-4">
                            <div className="cta-btn-box">
                                <Link href="/Kontakt">
                                    <a className="btn btn-primary">Kontakta oss
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CtaArea;