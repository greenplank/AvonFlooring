import React, { Component } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

class About extends Component {
  state = {
    isOpen: false,
  };
  openModal = () => {
    this.setState({ isOpen: true });
  };

  render() {
    return (
      <>
        <section className="about-area ptb-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="about-content about-content-two">
                  <div className="section-title">
                    <div className="services-details-info">
                      <h2>Modern Flooring For Modern Lifestyles</h2>
                      <p>
                        Our extensive range of floors and tiles ensures that
                        there’s an AVON Flooring’s floor that’s perfect for
                        every room in your home. AVON Flooring give you the
                        freedom to create your dream floor with our variety of
                        finishes and countless possible laying patterns. Whether
                        your style is traditional or contemporary, you’ll be
                        sure to find flooring that matches your tastes, with
                        design, innovative manufacturing, and precise
                        craftsmanship at its heart.
                      </p>
                      
                    </div>
                   
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="about-image">
                  <img
                    src="/images/img-3.jpg"
                    alt="image"
                    className="rounded-10"
                  />
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
