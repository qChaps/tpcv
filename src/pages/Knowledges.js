import React from 'react';
import Experiences from '../components/knowledges/Experiences';
import Hobbies from '../components/knowledges/Hobbies';
import Languages from '../components/knowledges/Languages';
import Formation from '../components/knowledges/Formation';
import Navigation from '../components/Navigation';
import Softskill from '../components/knowledges/Softskill';
const Knowledges = () => {
    return (
        <div className='knowledges'>
            <Navigation />
            <div className="knowledgesContent">
                <Experiences />
                <Formation />
                <Hobbies />
                <Languages />
                <Softskill />
            </div>

        </div>
    );
};

export default Knowledges;