import * as React from 'react';
import * as style from './Button.scss';

interface IButtonProps {
  onClick: () => void;
  text: string;
}

export const Button = (props: IButtonProps) => {
  const { onClick, text } = props;
  return (
    <button className={style.button} onClick={onClick}>
      {text}
    </button>
  );
};
