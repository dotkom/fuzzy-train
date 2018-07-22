import * as React from 'react';
import { Logo, Tabs } from 'src/components';
import * as style from './Hero.scss';

export const Hero = () => {
  return (
    <div className={style.hero}>
      <Logo />
      <div className={style.text}>
        <p>Her finner du wiki, arrangement og info til bedrifter</p>
        <p>[Insert other generic text]</p>
        <p>Trykk under for å lære mer om siden vår</p>
      </div>
      <Tabs />
    </div>
  );
};
