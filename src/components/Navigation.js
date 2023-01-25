import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return (
        <div className='sidebar'>
            <div className='id'>
                <div className='idContent'>
                    <img src='./media/photoCvtempo.jpg' alt='profil-pic' />
                    <h3>Quentin CHAPUZET</h3>
                </div>
            </div>


            <div className='navigation'>
                <ul>
                    <li>
                        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            <i className='fas fa-home'></i>
                            <span>Acceuil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/competences" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            <i className='fas fa-mountain'></i>
                            <span>Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            <i className='fas fa-address-book'></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            <i className='fas fa-images'></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className='socialNetwork'>
                <ul>
                    <li><a href="https://www.linkedin.com/in/quentin-chapuzet-807516222/" target="_blank" rel="noopener noreferrer"><i className='fab fa-linkedin'></i></a></li>
                    <li><a href="https://github.com/qChaps" target="_blank" rel="noopener noreferrer"><i className='fab fa-github'></i></a></li>
                </ul>


                <div className='signature'>
                    <span>QuentinCHAPUZET - 2022</span>
                </div>
            </div>
        </div >
    );
};

export default Navigation;