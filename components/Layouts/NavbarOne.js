import React, { Component } from 'react';
import Link from '../../utils/ActiveLink';

class NavbarOne extends Component {
    // Navbar 
    _isMounted = false;
    state = {
        display: false,
        collapsed: true
    };
    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {

        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        return (
            <>
                <div id="navbar" className="navbar-area navbar-style-2">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <div className="container-fluid">
                            <Link href="/">
                                <a className="navbar-brand">
                                    <img src="/images/ECommerceIN copy-01.png" className="black-logo" alt="logo" />
                                    <img src="/images/ECommerceIN copy-02.png" className="white-logo" alt="logo" />
                                </a>
                            </Link>

                            {/* Toggle navigation */}
                            <button
                                onClick={this.toggleNavbar}
                                className={classTwo}
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    {/* <li className="nav-item">
                                        <Link href="/">
                                            <a className="nav-link" activeClassName="active">
                                                Home
                                            </a>
                                        </Link>
                                    </li> */}
                                    <li className="nav-item">
                                        <Link href="#">
                                            <a className="nav-link" onClick={e => e.preventDefault()}>
                                                Lösningar
                                                <i className="icofont-thin-down"></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/WordpressAllinOne" activeClassName="active">
                                                    <a className="nav-link">Wordpress-Allt-i-ett
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/CustomContentAllinOne" activeClassName="active">
                                                    <a className="nav-link">Custom+Content Boost allt-i-ett
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/Plattformsmigrering" activeClassName="active">
                                                    <a className="nav-link">Plattformsmigrering</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/CloudHosting" activeClassName="active">
                                                    <a className="nav-link">Cloud Hosting</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/Cybersakerhet" activeClassName="active">
                                                    <a className="nav-link">Cybersäkerhet
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/SoftwareQATestning" activeClassName="active">
                                                    <a className="nav-link">QA-testning av programvara
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="#">
                                            <a className="nav-link" onClick={e => e.preventDefault()}>
                                                Webbplatsutveckling
                                                <i className="icofont-thin-down"></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/webbutveckling" activeClassName="active">
                                                    <a className="nav-link">Webbutveckling
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/Reagera-Nasta-Utveckling" activeClassName="active">
                                                    <a className="nav-link">React&NextJs utveckling
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/ux-ui-design" activeClassName="active">
                                                    <a className="nav-link">UX/UI-design
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="#">
                                            <a className="nav-link" onClick={e => e.preventDefault()}>
                                                E-handel
                                                <i className="icofont-thin-down"></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/Magento-utveckling" activeClassName="active">
                                                    <a className="nav-link">Magento utveckling
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/WooCommerce" activeClassName="active">
                                                    <a className="nav-link">WooCommerce</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/Shopify" activeClassName="active">
                                                    <a className="nav-link">Shopify</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/BigCommerce" activeClassName="active">
                                                    <a className="nav-link">BigCommerce</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="#" onClick={e => e.preventDefault()}>
                                            <a className="nav-link">
                                                Digital marknadsföring
                                                <i className="icofont-thin-down"></i>
                                            </a>
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/Sokmotoroptimering" activeClassName="active">
                                                    <a className="nav-link">SEO-tjänster
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/Social-Media-Marknadsforing" activeClassName="active">
                                                    <a className="nav-link">Marknadsföring i sociala medier</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/Webbplats-revision-rapport" activeClassName="active">
                                                    <a className="nav-link">Rapportering av webbplatsrevision</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/Betald-marknadsforing" activeClassName="active">
                                                    <a className="nav-link">Betald marknadsföring-PPC</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/Innehallsstrategi" activeClassName="active">
                                                    <a className="nav-link">Innehållsstrategi och skrivande</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/App-utveckling">
                                            <a className="nav-link">
                                                Apputveckling
                                            </a>
                                        </Link>
                                    </li>
                       
                                </ul>

                                <div className="others-options">
                                    <Link href="/Kontakt">
                                        <a className="btn btn-primary">
                                            Få ett citat
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </>
        );
    }
}

export default NavbarOne;