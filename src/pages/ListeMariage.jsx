import React from 'react';
import Tiles from 'grommet/components/Tiles';
import Box from 'grommet/components/Box';
import Section from 'grommet/components/Section';
import Page from '../components/Page';
import Contribution from '../components/Contribution';
import KAppareilPhoto from '../../public/kickstart_appareil_photo.png';
import KCarteElectronique from '../../public/kickstart_carte_electronique.png';
import KEcoSouvenir from '../../public/kickstart_eco_souvenir.jpg';
import KFabricationHeritier from '../../public/kickstart_fabrication_heritier.jpg';
import KHeritier from '../../public/kickstart_heritier.jpg';
import KHeritierPrenoms from '../../public/kickstart_heritier_prenoms.png';
import KSelfieMouton from '../../public/kickstart_selfie_mouton.jpg';
import KCartePostale from '../../public/kickstart_carte_postale.jpg';
import KMontrerSonCul from '../../public/kickstart_montrer_cul.jpg';

const ListeMariage = (props) => (
  <Page parentProps={props}>
    <Section direction="column" align="center" appCentered justify="center" full="horizontal">
      <Box margin={{ vertical: 'small', horizontal: 'large' }} align="center">
        <div>
          Y&apos;en n&apos;a pas !<br />
          Urna arenam sunt erat apparct (eu conservationem, eu assum, ad pessimum, ad charybdium, ea sunt... sint hic ad !).<br />
          Ea successu, esse occasionem te quod sunt esse si orbare, dis cumque decessu in in subseguetur, at esse vicinarum me verbum ad eorum lorem 7018.<br />
          Ex eu ? Ex Gigantem Nominum !<br />
          Ipsum, te eros meritornm accesserunt non sociis ea ipsam quae iste consternatus, hic lius eorum vitae vacare regnandi, cum unde modo m nihilominus !<br />
          At usus esse peregrina ac omnis tyrannidem, optio ea ex&apos;me arcu domina ac incidunt se louor diuturna tellus :
      </div>
      </Box>
      <Tiles fill flush={false} flex="grow" size="large">
        <Contribution thumbnail={KCarteElectronique} montant={3000} colorIndex="neutral-1-a" heading="Lacus publico confoederati" description="Cras consensu eum lacus castigo perfectionem, arcu sem sortem ab sem sollemnes eu sancta buccis louor !" />
        <Contribution thumbnail={KSelfieMouton} montant={4000} colorIndex="neutral-2-a" heading="Litora peccat" description="Ab usus w 0000€ + se activus toties quod se amplissima landem contemptor !" />
        <Contribution thumbnail={KCartePostale} montant={5000} colorIndex="neutral-2-a" heading="Porta intendo" description="Se quam v 2000€ + quae regressu vicinarum quo arcui morbi solenni modo ea nibh luctam, vitae mus ipsum louor triduo !" />
        <Contribution thumbnail={KEcoSouvenir} montant={6000} colorIndex="neutral-1-a" heading="Perpetuum" description="Me nunc e 8000€ + quod nemo supponendo ad “eum-redundat” termino sed sed fusce !" />
        <Contribution thumbnail={KAppareilPhoto} montant={8000} colorIndex="neutral-1-a" heading="Minus" description="Ac nemo m 5000€ + sem morbi comprobatione nemo esse at rem lacus se quas." />
        <Contribution thumbnail={KMontrerSonCul} montant={10000} colorIndex="neutral-2-a" heading="Eum at nominis" description="Ex nunc v 2000€ + me certus autem dis reddet ad eos ipsa assum equestrem" />
        <Contribution thumbnail={KHeritier} montant={15000} colorIndex="neutral-2-a" heading="Claritas" description="Ad quam o 00000€ + ad victoris ad'ea pede propria eu proin me fusce" />
        <Contribution thumbnail={KHeritierPrenoms} montant={25000} colorIndex="neutral-1-a" heading="Nonullis purus " description="Ad quae s 35000€ + nemo orandum lategue ut mus ex v&apos;legentis" />
        <Contribution thumbnail={KFabricationHeritier} montant={50000} colorIndex="neutral-3-a" heading="Victoria quas saepe " description="Ea unde v 05000€ + eu hungariae ipsam per id comilitones ad s&apos;sentiunt" />
      </Tiles>
    </Section>
  </Page >
);

export default ListeMariage;
