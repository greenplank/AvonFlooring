import React, { Component } from "react";
import Link from "next/link";

class Footer extends Component {
  render() {
    let currentYear = new Date().getFullYear();

    return (
      <>
        <footer className="footer-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-3 col-sm-6">
                <div className="single-footer-widget">
                  <div className="logo">
                    <Link href="/">
                      <a>
                        {/* <img src="/images/ECommerceIN-06.png" alt="image" /> */}
                        <img
                          src="/images/logo.png"
                          alt="image"
                        />
                      </a>
                    </Link>
                  </div>

                  <p>
                    AVON Flooring is a family owned and operated business that
                    has been operating in Sweden and Europe for past 16 years.
                    We have had successful growth by specializing in unique
                    products and exceptional customer service.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-6 col-sm-6">
                <div className="single-footer-widget ml-4 pl-5">
                  <h3>CUSTOMER SERVICE</h3>

                  <ul className="list">
                    <li>
                      <Link href="/">
                        <a>Distributors</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Terms of Sale</a>
                      </Link>
                    </li>

                    <li>
                      <Link href="/">
                        <a>Terms of Use</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Privacy Policy</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Become a distributor</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>FAQs</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-6 col-sm-6">
                <div className="single-footer-widget ml-4">
                  <h3>RESOURCES</h3>

                  <ul className="list">
                    <li>
                      <Link href="/">
                        <a>About Us</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Flooring</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Tiles</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Flooring Accessories</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Installation & Maintenance</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>AVON Rigid Core Vinyl Flooring – SPC Flooring</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>Contact Us</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="single-footer-widget">
                  <h3>CONTACT</h3>

                  <ul className="get-in-touch">
                    <li>
                      <i className="icofont-home"></i> Sadelgatan 9 SE-213 77
                      Malmö SWEDEN
                    </li>
                    <li>
                      <i className="icofont-live-support"></i>
                      <a href="tel:+46 40 450560">+46 40 450560</a>
                    </li>
                    <li>
                      <i className="icofont-envelope"></i>
                      <a href="mailto:info@avonflooring.com">info@avonflooring.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="copyright-area">
            <div className="container">
              <p>
                Copyright &copy; {currentYear} Avon Flooring. All rights
                reserved by Avon Flooring.
              </p>
              <p style={{ right: "4px" }}>
                Developed by{" "}
                <a href="https://ecomin.se" target="_blank">
                  {" "}
                  Ecomin
                </a>
              </p>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
