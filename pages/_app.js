import "../styles/bootstrap.min.css";
import "animate.css";
import "../styles/icofont.min.css";
import "../styles/pe-icon-7-stroke.css";
import "../node_modules/react-modal-video/css/modal-video.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "react-image-lightbox/style.css";
import "../styles/style.css";
import "../styles/responsive.css";
import Script from "next/script";
import App from "next/app";

import NavbarTwo from "../components/Layouts/NavbarTwo";
import Footer from '../components/Layouts/Footer';

import Head from "next/head";
import Loader from "../components/Shared/Loader";
import GoTop from "../components/Shared/GoTop";

// const lang = [
//   {
//     name: "English",
//     flag: "https://cdn.countryflags.com/thumbs/united-states-of-america/flag-400.png",
//   },
//   // {
//   //   name: "Dutch",
//   //   flag:
//   //     "https://cdn.countryflags.com/thumbs/united-states-of-america/flag-400.png",
//   // },
//   // {
//   //   name: "Danish",
//   //   flag:
//   //     "https://cdn.countryflags.com/thumbs/united-states-of-america/flag-400.png",
//   // },
//   {
//     name: "Swedish",
//     flag: "https://cdn.countryflags.com/thumbs/united-states-of-america/flag-400.png",
//   },
//   {
//     name: "German",
//     flag: "https://cdn.countryflags.com/thumbs/united-states-of-america/flag-400.png",
//   },
// ];

export default class MyApp extends App {
  // Preloader
  state = {
    loading: true,
  };
  componentDidMount() {
    this.timerHandle = setTimeout(
      () => this.setState({ loading: false }),
      2000
    );
  }
  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }

//   state = {
//     selected_language: "English",
//   };

//   set_lang = (lang) => {
//     this.setState({ selected_language: lang });
//   };

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=UA-211768101-1"
        />

        <Script strategy="lazyOnload">
          {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'UA-211768101-1');
                        `}
        </Script>
{/*
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>Avon Flooring</title>
        </Head>

        <NavbarTwo />
        <Component {...pageProps} />
        <Footer />

        <Loader loading={this.state.loading} />

       
        <GoTop />
        
        */}
      </>
    );
  }
}
