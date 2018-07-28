import * as React from 'react';
import { Logo, Tabs } from 'src/components';
import * as style from './Hero.scss';

export const Hero = () => {
  const tabs = [
    {
      content: [
        'in the deepest ocean',
        'the bottom of the sea',
        'your eyes',
        'they turn me',
        'why should i stay here',
        'why should i stay',
      ],
      heading: 'Organisasjonen',
    },
    {
      content: [
        'id be crazy not to follow',
        'follow where you lead',
        'your eyes',
        'they turn me',
      ],
      heading: 'Komiteer',
    },
    {
      content: [
        'turn me on to phantoms',
        'i follow to the edge of the earth',
        'and fall off',
      ],
      heading: 'Andre sosiale verv',
    },
    {
      content: [
        'everybody leaves',
        'if they get the chance',
        'and this is my chance',
      ],
      heading: 'Annet',
    },
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
