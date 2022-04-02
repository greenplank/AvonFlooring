import React, { Component } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const ModalVideo = dynamic(() => import("react-modal-video"), {
  ssr: false,
});

class MainBanner extends Component {
  state = {
    isOpen: false,
  };
  openModal = () => {
    this.setState({ isOpen: true });
  };

  render() {
    return (
      <>
        <div className="main-banner item-bg2">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="main-banner-content">
                      <h1 style={{ color: "white" }}>
                      Your Home, Your Haven
                      </h1>
                      <h3 style={{ color: "white" }}>
                      Modern Flooring For Modern Lifestyles
                      </h3>

                      <div>
                        <Link href="/Contact">
                          <a className="btn btn-primary">Contact Us</a>
                        </Link>

                        <Link href="/#play-video">
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                              this.openModal();
                            }}
                            className="btn btn-secondary"
                          >
                            <i className="icofont-ui-play"></i>View Demo
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* If you want to change the video need to update below videoID */}
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId="Hm_nUMXaQyg"
          onClose={() => this.setState({ isOpen: false })}
        />
      </>
    );
  }
}

export default MainBanner;
