import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className='contact'>
            <Navigation />
            <div className="contactContent">
                <div className="header"></div>
                <div className="contactBox">
                    <h1>Contactez-moi</h1>
                    <ul>
                        <li>
                            <i className='fas fa-map-marker-alt'></i>
                            <span>Bordeaux</span>
                        </li>
                        <li>
                            <i className="fas fa-mobile-alt"></i>
                            <CopyToClipboard text="0661472844">
                                <span className="clickInput" onClick={() => { alert('Téléphone copié !') }}>06 61 47 28 44</span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className="far fa-envelope"></i>
                            <CopyToClipboard text="quentinchapuzet@orange.fr">
                                <span className="clickInput" onClick={() => { alert('Mail copié !') }}>quentinchapuzet@orange.fr</span>
                            </CopyToClipboard>
                        </li>

                    </ul>
                </div>
                <div className='socialNetwork'>
                    <ul>
                        <a href="https://www.linkedin.com/in/quentin-chapuzet-807516222/" target="_blank" rel="noopener noreferrer">
                            <h4>Linkedin</h4>
                            <i className='fab fa-linkedin'></i></a>
                        <a href="https://github.com/qChaps" target="_blank" rel="noopener noreferrer">
                            <h4>Github</h4>
                            <i className='fab fa-github'></i></a>
                    </ul>
                </div >
            </div>

        </div>
    );
};

export default Contact;