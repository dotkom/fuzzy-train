import * as React from 'react';
import { Logo, Tabs } from 'src/components';
import * as style from './Hero.scss';

export const Hero = () => {
  const tabs = [
    { text: 'Organisasjonen', content: <p>we</p> },
    { text: 'Komiteer', content: <p>are</p> },
    { text: 'Andre sosiale verv', content: <p>number</p> },
    { text: 'Annet', content: <p>one</p> },
  ];

  return (
    <div className={style.hero}>
      <Logo />
      <div className={style.text}>
        <p>Her finner du wiki, arrangement og info til bedrifter</p>
        <p>[Insert other generic text]</p>
        <p>Trykk under for å lære mer om siden vår</p>
      </div>
      <Tabs tabs={tabs} />
    </div>
  );
};
