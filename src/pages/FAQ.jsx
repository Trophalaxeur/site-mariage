import React from 'react';
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import Paragraph from 'grommet/components/Paragraph';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import Page from '../components/Page';

const FAQ = (props) => {
  const faq = [{
    question: 'Puis-je rester quelques nuits supplémentaires sur place ?',
    response: <div>Il n&apos;y a pas de soucis pour rester quelques nuits supplémentaires, avant ou après le mariage, il faut juste nous prévenir qu&apos;on puisse s&apos;organiser au niveau des hébergements.</div>
  }, {
    question: 'Je souhaite participer au repas du lendemain, où dois-je m\'inscrire ?',
    response: <div>Il faut aller sur la page &quot;<Anchor key="/notrepresence" path="/notrepresence">Notre Présence</Anchor>&quot; pour saisir cette information.</div>
  }, {
    question: 'Est-ce qu\'il faut apporter nos draps ?',
    response: 'Non les draps sont fournis, mais vous devrez apporter ou louer sur place votre linge de toilettes'
  }, {
    question: 'Y\'aura du wifi ?',
    response: 'Pas sûr, mais on va essayer de faire en sorte que oui :) !'
  }, {
    question: 'Y a-t-il une liste de mariage ?',
    response: 'Non, nous sommes déjà bien équipés mais on a envie de faire un beau voyage alors une urne sera à votre disposition et à vot\'bon coeur.'
  }, {
    question: 'Il fait quel temps généralement en cette saison ?',
    response: 'Généralement, il fait doux et beau !'
  }, {
    question: 'Nous aimerions renseigner plusieurs adresses mail pour l\'inscription à la newsletter, comment faire ?',
    response: 'Nân ! Ch\'est pas pochible k\'on vous dit !'
  }];

  return (
    <Page parentProps={props}>
      <Section direction="column" align="center" appCentered justify="center" full="horizontal">
        <Box margin="large">
          <Accordion openMulti>
            {faq.map((faqItem) => (<AccordionPanel heading={faqItem.question} colorIndex="neutral-1-a">
              <Paragraph>
                {faqItem.response}
              </Paragraph>
            </AccordionPanel>)
            )}
          </Accordion>
        </Box>
      </Section>
    </Page>
  );
};

export default FAQ;
