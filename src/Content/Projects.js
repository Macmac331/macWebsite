import './Projects.css';
import project01 from './image/project01.png';

function Projects(){
    return(
        <div className='projects'>
                <div className='projects-wrapper'>
                    <section>
                        <div className='projects-header'>
                            <hr></hr>
                            <h1>Projects</h1>
                            <hr></hr>
                        </div>
                        <div className='project'>
                            <div className='project-desc'>
                                <h1>WeBank Inc.</h1>
                                <h3>Make transactions fast and easy</h3>
                                <p>WeBank Inc. is a desktop application that I developed using C# and integrated with a MySQL database. This project, which I completed during my second year, exemplifies my proficiency in both programming languages and database management. By creating WeBank, I sought to gain some knowledge how banking technology works. This endeavor not only allowed me to apply my technical skills but also provided me with a deeper understanding of using databases, software security, and also Object-oriented Programming. </p>
                            </div>
                            <div className='project-image'>
                                <img src={project01}/>
                            </div>
                        </div>
                    </section>
            </div>
        </div>
    );
}

export default Projects