import React, { Component } from "react";
import Card from "@material-ui/core/Card";

class ChooseEcomin extends Component {
  render() {
    return (
      <>
        <section className="about-area ptb-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-12">
                <Card className="ptb-80">
                  <div className="about-content about-content-two">
                    <div className="section-title">
                      <div className="info-head">
                        <h3 className="title">Your Floor Your Way</h3>
                        <p>
                          Whether you’re searching for style, comfort, or
                          durability, AVON Flooring offers a range of quality
                          flooring products to suit every room in your home or
                          workplace.
                        </p>
                        <p>
                          AVON Flooring features 12 beautifully authentic wood
                          designs and 6 natural stone designs that are inspired
                          by natural hardwoods and stones.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="col-lg-4 col-md-12">
                <Card className="ptb-40">
                  <div className="about-content about-content-two">
                    <div className="section-title">
                      <div className="info-head">
                        <h3 className="title">
                          A wide range of textures and colors
                        </h3>
                        <p>
                          AVON Flooring boasts rich patterns, colors and even
                          textures. AVON Flooring mimics your favourite wood,
                          tile or stone textures to create stylish appeal for
                          homes and commercial spaces. These patterns are made
                          with meticulous attention to detail and are available
                          in a variety of formats including classic black and
                          white squares, rustic timber floorboards and modern
                          bathroom tiles with authentic grooves and grouting.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="col-lg-4 col-md-12">
                <Card className="ptb-35">
                  <div className="about-content about-content-two">
                    <div className="section-title">
                      <div className="info-head">
                        <h3 className="title">
                          We draw strength from our past & build for the future
                        </h3>
                        <p>
                          AVON flooring combines the durability and strength of
                          laminate and the soft and appealing look of natural
                          hardwood floors. It is a fantastic floating floor
                          which is perfect for your home or commercial space and
                          because it is 99% VOC and formaldehyde-free, you can
                          have this amazing flooring installed in any room you
                          choose.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default ChooseEcomin;
