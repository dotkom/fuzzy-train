import * as React from 'react';
import { Button, Logo } from 'src/components';
import { PlanetOnline } from '../PlanetOnline/PlanetOnline';
import * as style from './Hero.scss';

export const Hero = () => {
  const handleClick = () => {
    alert('i am clicked');
  };
  return (
    <div className={style.hero}>
      <PlanetOnline />
      <Logo />
      <div className={style.text}>
        <p>Her finner du wiki, arrangement og info til bedrifter</p>
        <p>[Insert other generic text]</p>
        <p>Trykk under for å lære mer om siden vår</p>
      </div>
      <div className={style.buttons}>
        <Button handleClick={handleClick} text="Bedrift" />
        <Button handleClick={handleClick} text="Hovedside" />
        <Button handleClick={handleClick} text="Student" />
      </div>
    </div>
  );
};
