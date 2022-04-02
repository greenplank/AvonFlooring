import React, { Component } from 'react';
import Link from 'next/link';

class CtaAreaTwo extends Component {
    render() {
        return (
            <div className="cta-area-two ptb-100">
                <div className="container">
                    <div className="cta-content">
                        <span>SÅ VAD ÄR NÄSTA?
                        </span>
                        <h3>Är du redo? Låt oss börja jobba!
                        </h3>
                    </div>

                    <div className="cta-btn-box">
                        <Link href="/Kontakt">
                            <a className="custom-btn">Kontakta oss
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default CtaAreaTwo;