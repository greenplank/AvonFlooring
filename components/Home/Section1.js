import React, { Component } from "react";

class Section1 extends Component {
  render() {
    return (
      <section className="funfacts-area ptb-100 bg-fcfbfb">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <img
                src="/images/img-2.jpg"
                alt="image"
                className="rounded-10"
              />
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="section-title">
              
                <p>
                  AVON Flooring is revolutionizing the hardwood flooring
                  industry by offering retailers and consumers a floor with
                  unique features and performance benefits that are simply not
                  available from other flooring products. With a 25 year
                  residential and 10 year commercial warranty, AVON Flooring
                  offers highest utilization Class 34, it is very durable, stain
                  resistant, dust and dirt repellent, high plank stability with
                  low expansion and “CLICK4U”, 4-sides locking system and an
                  attached underlay with IXPE noise reduction technology.
                </p>
              </div>
            </div>
          </div>
        </div>
    
      </section>
    );
  }
}

export default Section1;
