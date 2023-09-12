import './About.css';
import Lottie from 'react-lottie';
import animationData from './aboutme.json';
import fbIco from './ico/fbIco.png';
import igIco from './ico/igIco.png';
import linkedIco from './ico/linkedIco.png';

function About(){
    return(
        <div className="about-wrapper">
            <section>
                <div className="about-detail">
                    <div className="about-header">
                        <hr></hr>
                        <h1>About</h1>
                    </div>
                    <div className="about-content">
                        <div className="about-me">
                            <h1>Who am I?</h1>
                            <p>I am currently a 3rd year Computer Science who is aspiring to be a full-stack developer. I thrive on challenges and I constantly seek opportunities to expand my skill set. I'm excited to continue my journey in the world of software development, where I can leverage my knowledge and creativity to build innovative and user-friendly solutions.</p>
                            <div className="socials">
                                <p>Socials</p>
                                <div className="socials-ico">
                                    <a href='https://www.facebook.com/Peppapigmacmac/' target='_blank'><img src={fbIco}/></a>
                                    <a href='https://www.instagram.com/machehehehe/' target='_blank'><img src={igIco}/></a>
                                    <a href='https://www.linkedin.com/in/marc-albert-bautista-33b035268/'  target='_blank'><img src={linkedIco}/></a>
                                </div>
                            </div>
                        </div>
                        <div className="animation-container">
                            <AnimationComponent />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
const AnimationComponent = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
  
    return <Lottie options={defaultOptions} />;
};

export default About