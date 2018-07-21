import * as React from 'react';
import * as style from './Button.scss';

interface IOwnProps {
  handleClick: () => void;
  text: string;
}

type IProps = IOwnProps;

export const Button = (props: IProps) => {
  const { handleClick, text } = props;
  return (
    <div className={style.button} onClick={handleClick}>
      {text}
    </div>
  );
};
