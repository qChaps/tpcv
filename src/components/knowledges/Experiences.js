import React from 'react';

const Experiences = () => {
    return (

        <div className="experience">
            <h3>Expérience</h3>
            <div className="exp-1">
                <h4>Stagiaire Bio-informatique - INRIA </h4>
                <h5>Février 2022 - Juillet 2022</h5>
                <p>Utilisation de la logique temporelle dans la modélisaiton de communautés de micro-organismes</p>
            </div>
            <div className="exp-2">
                <h4>Stagiaire Bio-informatique - INRAE (anciennement INRA)</h4>
                <h5>Avril 2019 - Juin 2019</h5>
                <p> Caractérisation moléculaire de Botryosphaeriaceae,
                    champignons impliqués dans le dépérissement de la vigne </p>
            </div>
            <div className="exp-3">
                <h4>Emploi saisonnier - Espace Paysage Aquitaine</h4>
                <h5>Tous les étés depuis 2019</h5>
                <ul>
                    <li> Travail sur le terrain (débroussaillage, arrosage) </li>
                    <li> Travail en tant qu'assistant administratif (planificaiton, localisation et détourage des zones de chantiers, contrôles du nombre d'heures passées sur les chantiers avec le nombre d'heures facturées</li>
                </ul>
            </div>
        </div>

    );
};

export default Experiences;