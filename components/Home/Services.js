import React, { Component } from "react";
import Link from "next/link";

class Services extends Component {
  render() {
    return (
      <>
        <div className="bg-fcfbfb ptb-100 pb-60">
          <div className="container">
            <div className="section-title">
              <h2>Why Choose AVON Flooring</h2>
              <p>
                AVON flooring is a next generation water resistant, fire-safe
                and eco-friendly engineered indoor flooring, developed to meet
                the demands of green building in commercial and residential
                sectors. With an innovative stone based core, it features the
                latest technology and offers superior performance, ease of
                installation (with four-sided locking system) and low
                maintenance, as well as reduced lifecycle costs.
              </p>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-4 col-sm-6">
                <div className="service-card-one white-bg text-center">
                  <i>
                    <img src="/images/icon-10.jpg" />
                  </i>
                  <h3>
                    <Link href="/">
                      <a>Waterproof</a>
                    </Link>
                  </h3>
                  <p>
                    Perfect for any interior space, from kitchens, bathrooms to
                    laundries even north facing windows. AVON Flooring’s
                    waterproof floors stand up to spills of all sizes.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="service-card-one white-bg text-center">
                  <i>
                    <img src="/images/icon-1.jpg" />
                  </i>
                  <h3>
                    <Link href="/">
                      <a>Acoustic qualities</a>
                    </Link>
                  </h3>
                  <p>
                    AVON Flooring’s premium pre-attached acoustic foam backing
                    reduces noise transfer to rooms below, making it perfect for
                    upstairs bedrooms, playrooms or apartments.
                  </p>
                  <br />
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="service-card-one white-bg text-center">
                  <i>
                    <img src="/images/icon-3.jpg" />
                  </i>
                  <h3>
                    <Link href="/">
                      <a>Fire-retardant</a>
                    </Link>
                  </h3>
                  <p>
                    AVON Flooring is one of the safest flooring on the market
                    having obtained a Bfl-S1 Fire Rating, making it a better
                    choice for you and your family.
                  </p>
                  <br />
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="service-card-one white-bg text-center">
                  <i>
                    <img src="/images/icon-7.jpg" />
                  </i>
                  <h3>
                    <Link href="/">
                      <a>Phthalate free</a>
                    </Link>
                  </h3>
                  <p>
                    AVON Flooring is eco-friendly flooring because it does not
                    contain heavy metals, phthalate, methanol, and other harmful
                    substances.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="service-card-one white-bg text-center">
                  <i>
                    <img src="/images/icon-9.jpg" />
                  </i>
                  <h3>
                    <Link href="/">
                      <a>Stain resistant</a>
                    </Link>
                  </h3>
                  <p>
                    AVON flooring is resistant to staining like porous natural
                    timber floors and ceramic tiles. Even the toughest most
                    common ‘eventing’ stains such as tea, coffee, wine and
                    lipstick.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="service-card-one white-bg text-center">
                  <i>
                    <img src="/images/icon-2.jpg" />
                  </i>
                  <h3>
                    <Link href="/">
                      <a>Durable</a>
                    </Link>
                  </h3>
                  <p>
                    Compared to other flooring alternatives, AVON Flooring gives
                    you the look and feel of natural products but with the
                    durability and resilience of composite flooring.
                  </p>
                  <br />
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="service-card-one white-bg text-center">
                  <i>
                    <img src="/images/icon-5.jpg" />
                  </i>
                  <h3>
                    <Link href="/">
                      <a>Beauty & low maintenance</a>
                    </Link>
                  </h3>
                  <p>
                    All AVON Flooring floors are easy to clean with a sweep and
                    mop. No sanding or staining required.
                  </p>
                  <br />
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="service-card-one white-bg text-center">
                  <i>
                    <img src="/images/icon-8.jpg" />
                  </i>
                  <h3>
                    <Link href="/">
                      <a>Quick and easy to install</a>
                    </Link>
                  </h3>
                  <p>
                    AVON Flooring’s CLICK4U 4 sides click locking system allows
                    the installer to quickly drop and lock planks together,
                    meaning less upheaval and disruption to everyday life.
                  </p>
                  <br />
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="service-card-one white-bg text-center">
                  <i>
                    <img src="/images/icon-4.jpg" />
                  </i>
                  <h3>
                    <Link href="/">
                      <a>Aesthetic quality</a>
                    </Link>
                  </h3>
                  <p>
                    Through the crisp high-resolution print and high panel
                    variation your AVON flooring will have an appearance that is
                    truly close to nature.
                  </p>
                  <br />
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="service-card-one white-bg text-center">
                  <i>
                    <img src="/images/icon-6.jpg" />
                  </i>
                  <h3>
                    <Link href="/">
                      <a>Matte finish</a>
                    </Link>
                  </h3>
                  <p>
                    AVON Flooring has the lowest level of shine and reflection.
                  </p>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Services;
