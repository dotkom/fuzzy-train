import * as React from 'react';
import { Chunk } from 'src/components';
import { IChunk } from 'src/types';
import * as style from './Content.scss';

interface IProps {
  selectedChunks: Array<IChunk | undefined>;
}

export const Content = (props: IProps) => {
  const { selectedChunks } = props;
  return (
    <div className={style.content}>
      {selectedChunks.map((chunk, i) => (
        <Chunk
          key={chunk ? chunk.key : i}
          heading={chunk ? chunk.heading : 'Laster...'}
          content={chunk ? chunk.content : ''}
        />
      ))}
    </div>
  );
};
