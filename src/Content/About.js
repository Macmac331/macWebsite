import './Design/About.css';
import Lottie from 'react-lottie';
import animationData from './image/aboutme.json';

function About(){
    return(
        <div className='about'>
            <div className="about-wrapper">
                <section className='container'>
                    <div className="about-detail">
                        <div className="about-header">
                            <hr></hr>
                            <h1>About</h1>
                        </div>
                        <div className="about-content">
                            <div className="animation-container">
                                <AnimationComponent/>
                            </div>
                            <div className="about-me">
                                <h1>Who am I?</h1>
                                <p>I am currently a 3rd year Computer Science student who is aspiring to be a full-stack developer. I thrive on challenges and I constantly seek opportunities to expand my skill set. I'm excited to continue my journey in the world of software development, where I can leverage my knowledge and creativity to build innovative and user-friendly solutions.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
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