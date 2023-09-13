import Navbar from './Content/Navbar.js';
import Home from './Content/Home.js';
import About from './Content/About.js';
import Skills from './Content/Skills.js';
import Project from './Content/Projects.js';
import Contacts from './Content/Contacts.js';
import Footer from './Content/Footer.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
