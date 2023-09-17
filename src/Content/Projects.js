import './Design/Projects.css';
import project01 from './image/project01.png';
import csharp from './ico/csharp.png';
import sql from './ico/mysql.png';
import {useEffect} from 'react';
import { useInView } from 'react-intersection-observer';
function Projects(){
    const {ref:myRef, inView:myElementIsVisible} = useInView({
        threshold: 0.2
    });
    useEffect(() =>{
        if(myElementIsVisible){
            document.querySelector('.animate-proj').classList.add('active');
        }
    }, [myElementIsVisible]);
    return(
        <div className='projects'>
            <div className='container'>
                <div className='projects-wrapper'>
                    <section>
                        <div className='projects-header'>
                            <hr></hr>
                            <h1>Projects</h1>
                            <hr></hr>
                        </div>
                        <div ref={myRef} className='project animate-proj'>
                            <div className='project-desc'>
                                <h1>WeBank Inc.</h1>
                                <h3>Make transactions fast and easy</h3>
                                <p>WeBank Inc. is a desktop application that I developed and completed during my second year, it exemplifies my proficiency in both programming languages and database management. By creating WeBank, I sought to gain some knowledge how banking technology works. </p>
                                <div className='icon'>
                                    <img src={csharp}/>
                                    <img src={sql}/>
                                </div>
                            </div>
                            <div className='project-image'>
                                <img src={project01}/>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Projects