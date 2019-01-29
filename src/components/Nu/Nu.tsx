import * as React from 'react';
import { Curve, Logo } from 'src/components';
import * as style from './Nu.scss';

export const Nu = () => (
  <div className={style.nu}>
    <Curve />
    <div className={style.nuTop}>
      <Logo />
      <div className={style.text}>
        <p>Her finner du wiki, arrangement og info til bedrifter</p>
        <p>[Insert other generic text]</p>
        <p>Trykk under for å lære mer om siden vår</p>
      </div>
    </div>
  </div>
);
