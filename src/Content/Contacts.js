import './Design/Contacts.css';
import github from './ico/github.png';
import fb from './ico/fbIco.png';
import ig from './ico/igIco.png';
import linked from './ico/linkedIco.png';
import discord from './ico/discord.png';

function Contacts(){
    return(
        <div className='contacts'>
            <div className='contacts-wrapper'>
                <div className='contacts-header'>
                    <hr></hr>
                    <h1>Contacts</h1>
                    <hr></hr>
                </div>
                <section>
                    <div className='contacts-visit'>
                        <h1>You can visit or message me via:</h1>
                        <div className='contacts-ico'>
                            <a href='https://www.facebook.com/Peppapigmacmac' target="_blank"><img src={fb}/></a>
                            <a href='https://www.instagram.com/machehehehe/' target="_blank"><img src={ig}/></a>
                            <a href='https://github.com/Macmac331'  target="_blank"><img src={github}/></a>
                            <a href='https://www.linkedin.com/in/marc-albert-bautista-33b035268/'  target="_blank"><img src={linked}/></a>
                            <a href='https://discordapp.com/users/748521965437845547' target='_blank'><img src={discord}/></a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Contacts