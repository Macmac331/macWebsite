import './Design/Skills.css';
import Lottie from 'react-lottie';
import techStack from './image/tech-stack.json'; 
import java from './ico/java.png';
import mysql from './ico/mysql.png';
import python from './ico/python.png';
import html from './ico/html.png';
import css from './ico/css.png';
import react from './ico/react.png';
import csharp from './ico/csharp.png';
import {useEffect} from 'react';
import { useInView } from 'react-intersection-observer';
function Skills(){
    const { ref:myRef, inView:myElementIsVisible} = useInView({
        threshold: 0.2
    });
    useEffect(() => {
        if(myElementIsVisible){
            document.querySelector('.animate-skill').classList.add('active');
            
        }
    }, [myElementIsVisible]);
    return(
        <div className='skills'>
            <div className='container'>
                <div className='skills-wrapper'>
                    <div className='skills-header'>
                        <hr></hr>
                        <h1>Skills</h1>
                    </div>
                    <section>
                        <div ref={myRef} className='skills-container animate-skill'>
                            <div className='skills-bg'>
                                <div className='bg'>SKILLS</div>
                            </div>
                            <div className='skills-content'>
                                <h1>What I am capable of?</h1>
                                <p>
                                I possess a robust foundation in programming, encompassing a diverse array of languages and tools that I've honed over the years. For now, I am proficient in a small range of programming languages.
                                </p>
                                <div className='skills-ico'>
                                    <p>Skills:</p>
                                    <div className='ico-container'>
                                        <div className='skill'><img src={java}/><span>Java</span></div>
                                        <div className='skill'><img src={python}/><span>Python</span></div>
                                        <div className='skill'><img src={html}/><span>HTML</span></div>
                                        <div className='skill'><img src={css}/><span>CSS</span></div>
                                        <div className='skill'><img src={mysql}/><span>MySQL</span></div>
                                        <div className='skill'><img src={react}/><span>React</span></div>
                                        <div className='skill'><img src={csharp}/><span>C#</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className='animation-container2'>
                                <AnimationComponent/>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
const AnimationComponent = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: techStack,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      },
    };
    return <Lottie options={defaultOptions} />;
};

export default Skills