import React, { Component } from 'react';
import './EggStory.css';
import { Container } from 'reactstrap';

export default class EggStory extends Component {
    render(){
        return (
            <Container className='container-EggStory'>
                <div className='eggStory-content'>
                    <h1 className='titleSecret'>L’étrange histoire de Egg Wilder</h1>
                    <p className='EggStory-firstP'>'Curieux destin que le mien'. Ainsi commence l'étrange histoire de Egg Wilder, cet œuf qui naquit à Marseille. De la même teinte que le soleil, il ignore d’où lui vient ce joli teint, lui qui ne sort jamais de sa coquille, il sait juste qu’il vient de sa mère, à moins que ce ne soit elle qui vienne de lui.</p>
                    <p>Cela fait déjà plusieurs jours qu’il s’est enfui de chez lui, loin de la douceur des plumes et de la chaleur familiale, désespérant de s’éloigner du conflit opposant les œufs et leurs cousins en chocolat, les seconds jalousant profondément la chance qu’ont les premiers de grandir et d’acquérir ces si douces plumes en devenant des poules.</p>
                    <p>Malgré leurs efforts communs depuis des années, leur désir de fusionner se solde toujours par un échec, interrompant leur développement, et, ne trouvant pas de résolution le conflit explosa, éloignant, apparemment définitivement, les œufs jaunes et les œufs en chocolat.</p>
                    <p>Au début, Egg n’ose pas se rebeller contre sa famille lorsque celle-ci se mit à lui interdire de rendre visite à son ami Egger Kind, pourtant la grande fête des chocolats approche et il n’a qu’une hâte : observer les humains fouiller chaque endroit à la recherche de ses cousins et aider Egger à échapper aux mains avides.</p>
                    <p>Un jour terrible tant les pertes sont grandes parmi les chocolatés, mais finalement fort drôle et joyeux pour les deux jeunes œufs qui voient en tout cela un grand jeu. Alors, juste avant le weekend de la fête des chocolats, Egg s’échappe et se met en tête de retrouver son ami Egger Kind dans les rues marseillaises. </p>
                    <p>C’est ainsi qu’ils arrivent sur une place où se trouve une grande porte aux teintes bleues. Ils se faufilent, émerveillés de retrouver au centre d’une cour intérieure un magnifique arbre, et plusieurs humains attablés. Ils sont étonnés, car sur les vitres est écrit « Wild Code School », et ils pensaient qu’une école ne serait occupée qu’en journée.</p>
                    <p>Pourtant, la pleine lune est haute dans le ciel obscur alors qu’ils se glissent par l’interstice d’une porte laissée entrouverte, et roulant sous les tables, ils parviennent à se réfugier à l’abri, ignorés par les humains penchés sur leurs ordinateurs à cette heure tardive – à moins qu’il ne soit tôt ? – espérant ne pas être trouvé, mais en même temps, gloussant à l’idée d’être cherchés. </p>
                </div>
            </Container>
        );
    }
}