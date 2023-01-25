import React from 'react';
// import Cursor from '../components/Cursor';
import Navigation from '../components/Navigation';



const Home = () => {

    return (

        < div className='home'>

            <Navigation />
            <div className="homeContent" >
                <div className="content">
                    <h1>Quentin CHAPUZET</h1>
                    <h2>Ingénieur en Bio-informatique</h2>
                    <div className="pdf">
                        <a href="./media/CVfinalQuentin.pdf" target="_blank">Télécharger CV</a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Home;