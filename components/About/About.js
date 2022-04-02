import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

class About extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({ isOpen: true })
    }

    render() {
        return (
            <>
                <section className="about-area bg-fcfbfb ptb-100">
                    <div className="container">
                        <div className="row align-items-center">


                            <div className="col-lg-7 col-md-12">
                                <div className="about-content about-content-two">
                                    <div className="section-title">
                                        <h2>Hur arbetar vi?

                                        </h2>
                                        <p>Team av WordPress-utvecklare som analyserar nytt projekt

                                        </p>
                                    </div>


                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="about-text mb-30">
                                                <ul>
                                                    <li>
                                                        <h4>1. Analys
</h4>
                                                        <p>Låt oss träffas: online eller personligen och diskutera dina idéer och behov.
<br />Deadline markerad i en kalender
</p>
                                                    </li>
                                                    <li>
                                                    <h4>2. Uppskattning</h4>
                                                    <p>Baserat på all insamlad information kommer vi att utarbeta en detaljerad tidslinje för projektet. Du kommer att veta kostnaderna direkt.
 <br /> Anpassad WordPress-temakod som visas på en skärm
</p>
                                                    </li>
                                                    <li>
                                                    <h4>3. Utveckling
</h4>
                                                    <p>Vårt arbete börjar. Våra utvecklare förvandlar din design och din vision till kvalitetskod.
 <br/> Testa din webbplats på olika enheter
</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="about-text mb-30">
                                                <ul>
                                                    <li>
                                                        <h4>4. Kvalitetssäkring
</h4>
                                                        <p>Ett av de sista stegen i processen. Vi ser till att din kod är helt felfri.
<br /> Race start
</p>
                                                    </li>
                                                    <li>
                                                        <h4>5. Genomförande
</h4>
                                                        <p>Vi installerar produkten på servrar som du väljer. Behöver du värdtjänster? Vi har dig täckt.
 </p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-12">
                                <div className="about-image">
                                    <img src="/images/about-img5.jpg" alt="image" className="rounded-10" />

                                    <div className="video-box">
                                        <div
                                            onClick={e => { e.preventDefault(); this.openModal() }}
                                            className="video-btn"
                                        >
                                            <i className="pe-7s-play"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* If you want to change the video need to update below videoID */}
                    <ModalVideo
                        channel='youtube'
                        isOpen={this.state.isOpen}
                        videoId='s58osmryoMY'
                        onClose={() => this.setState({ isOpen: false })}
                    />
                </section>
            </>
        );
    }
}

export default About;