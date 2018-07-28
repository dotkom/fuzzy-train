import * as React from 'react';
import { Chunk } from 'src/components';
import { IChunk } from 'src/types';
import * as style from './Content.scss';

interface IProps {
  selectedChunks: IChunk | null;
}

export const Content = (props: IProps) => {
  const { selectedChunks } = props;
  return (
    <div className={style.content}>
      <Chunk
        heading={selectedChunks ? selectedChunks.heading : 'Laster...'}
        content={selectedChunks ? selectedChunks.content : ''}
      />
    </div>
  );
};
