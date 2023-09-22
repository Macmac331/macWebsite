import './Design/Navbar.css';
import { Link, animateScroll as scroll} from 'react-scroll';
import {useState} from 'react';
import { useInView } from 'react-intersection-observer';
function NavBar(){
    return(
        <nav>
            <ul>
                <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
                <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
                <li><Link to="contacts" smooth={true} duration={500}>Contacts</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar