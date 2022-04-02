import React, { Component } from 'react';
import Link from 'next/link';

class Partner extends Component {
    render() {
        return (
            <section className="partner-area pt-100 pb-60">
                <div className="container">
                    <div className="section-title">
                        <h2>Betrodd av
                        </h2>
                    </div>

                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-2 col-6 col-sm-4">
                            <Link href="https://www.greenplank.se/" target="_blank">
                                <div className="single-partner">
                                    <img src="/images/partners/partner-11.webp" alt="image" />
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-2 col-6 col-sm-4">
                            <Link href="http://byggochfix.se/" target="_blank">
                                <div className="single-partner">
                                    <img src="/images/partners/partner-12.webp" alt="image" />
                                </div>
                            </Link>
                        </div>

                        <div className="col-lg-2 col-6 col-sm-4">
                            <Link href="http://ebygghandel.se/" target="_blank">
                                <div className="single-partner">
                                    <img src="/images/partners/partner-13.webp" alt="image" />
                                </div>
                            </Link>
                        </div>

                        <div className="col-lg-2 col-6 col-sm-4">
                            <Link href="http://wpcholz.de/" target="_blank">
                                <div className="single-partner">
                                    <img src="/images/partners/partner-14.webp" alt="image" />
                                </div>
                            </Link>
                        </div>

                        <div className="col-lg-2 col-6 col-sm-4">
                            <Link href="http://estorexl.se/" target="_blank">
                                <div className="single-partner">
                                    <img src="/images/partners/partner-15.webp" alt="image" />
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-2 col-6 col-sm-4">
                            <Link href="https://eshop24.nu/" target="_blank">
                                <div className="single-partner">
                                    <img src="/images/partners/partner-16.webp" alt="image" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Partner;