import * as React from 'react';
import { Logo } from 'src/components';
import * as style from './Header.scss';

export const Header = () => (
  <div className={style.header}>
    <Logo />
    <div className={style.text}>
      <p>Her finner du wiki, arrangement og info til bedrifter</p>
      <p>[Insert other generic text]</p>
      <p>Trykk under for å lære mer om siden vår</p>
    </div>
  </div>
);
