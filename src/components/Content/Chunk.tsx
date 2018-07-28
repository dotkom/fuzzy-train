import * as React from 'react';
import * as style from './Chunk.scss';

interface IProps {
  heading: string;
  content: string;
}

export const Chunk = (props: IProps) => {
  const { heading, content } = props;
  return (
    <div className={style.container}>
      <h2 className={style.heading}>{heading}</h2>
      <div className={style.content}>
        <p>{content}</p>
      </div>
    </div>
  );
};
