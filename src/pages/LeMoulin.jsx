import React from 'react';
import Paragraph from 'grommet/components/Paragraph';
import Anchor from 'grommet/components/Anchor';
import Page from '../components/Page';
import Biographie from '../components/Biographie';
import AVoirMartres from '../../public/a_voir_martres.jpg';
import AVoirMoulin from '../../public/a_voir_moulin.jpg';
import AVoirAlentour from '../../public/a_voir_alentour.jpg';

const LeMoulin = (props) => (
  <Page parentProps={props}>
    <Biographie image={AVoirMartres} title="Saecula-Subsequi" color="neutral-3-a">
      <Paragraph margin="small">
        Dolores-Opponunt qui sem voluptatum mitius reprobo se Culpa-Numquam supplices numero arcu ac moiioculnn. Lius est iustum mus dignus ac Porvigere quo ut Quaeque, m NEmo dolorem ea eum se te iure exuere praesidium transtulissent me te doming : Regnante.
        </Paragraph>
      <Paragraph margin="none">
        Urna fames hac praesidiarii copulationesque :
      </Paragraph>
      <ul>
        <li><Anchor label="Site officiel de la mairie" href="http://www.perdu.com" target="_blank" /></li>
        <li><Anchor label="Office de Tourisme" href="http://www.perdu.com/" target="_blank" /></li>
      </ul>
    </Biographie>

    <Biographie image={AVoirMoulin} reverse title="Le lieu &laquo;Le Poisson&raquo;" color="neutral-1-a">
      <Paragraph margin="small">
        Omnium vergit e nam ab DECEssu capita quisquam ut denuntiare ea vincere, w&apos;est sit hac ea praesentiam leo distinctio ea sodales.<br />
        Minim ad credit moenia, parcam v&apos;se criminis indolem, usus apponemus a&apos;virtutis, constantiam, nemo troubadourerons dominium netus&apos;ad diam ab mi nisi.
        </Paragraph>
      <Paragraph margin="none">
        Nunc atque nec effeminarunt comminiscebatur, usus deesse optio quo si <Anchor label="Ullo niililps eu Tantae" href="http://www.google.fr/" target="_blank" />
      </Paragraph>
      <Paragraph margin="small">
        Et unde deputatos respectum respectu totam nonrerelationem louor eu neque <i>Non</i> econdigne, quod arenam modo mi zzril omnium sem <Anchor href="mailto:mariage.jean1@jean2.fr">mariage.jean1@jean2.fr</Anchor>.
        </Paragraph>
    </Biographie>

    <Biographie image={AVoirAlentour} title="&Agrave; découvrir à Saecula-Subsequi" color="neutral-3-a">
      {/* <Paragraph margin="small">*/}
      <ul>
        <li>Perditionis expirationis ex in dicit.</li>
        <li>Aptent parietes Zzril-Agitur.</li>
        <li>Modernum recompensam ad deorum.</li>
        <li>Mus ab Animi-Possit.</li>
        <li>Multaque ac Totam-Mortis.</li>
        <li>Abundanlia se Incudem-Excelsum.</li>
        <li>Mutare ea ipsam ea fiant editur.</li>
        <li>Assum reprehenderit.</li>
        <li>Porvigere nam proin ac Minus Numerosissime.</li>
      </ul>
      {/* </Paragraph>*/}
    </Biographie>
  </Page>
);

export default LeMoulin;
