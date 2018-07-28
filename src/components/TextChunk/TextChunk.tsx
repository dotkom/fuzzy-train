import * as React from 'react';
import * as style from './TextChunk.scss';

interface IProps {
  heading: string;
  paragraphs: string[];
}

export const TextChunk = (props: IProps) => {
  const { heading, paragraphs } = props;
  return (
    <div className={style.container}>
      <h2 className={style.heading}>{heading}</h2>
      <div className={style.content}>
        {paragraphs.map((p, key) => <p key={key}>{p}</p>)}
      </div>
    </div>
  );
};
