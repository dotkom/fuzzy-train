import * as React from 'react';
import { Content, Header, Tabs } from 'src/components';
import { CHUNKS_API, HARD_DATA } from 'src/constants';
import { IChunk } from 'src/types';
import * as style from './App.scss';

interface IState {
  chunks: Map<string, IChunk>;
  selectedTabId: number;
}

export class App extends React.Component<{}, IState> {
  public state = {
    chunks: new Map(),
    selectedTabId: 0,
  };
  public handleClick = (index: number) => {
    this.setState({
      selectedTabId: index,
    });
  };

  public componentDidMount() {
    this.loadChunks();
  }

  public render() {
    const { selectedTabId, chunks } = this.state;
    return (
      <div className={style.app}>
        <Header />
        <Tabs
          tabs={HARD_DATA}
          selectedTabId={selectedTabId}
          handleClick={this.handleClick}
        />
        <Content selectedChunks={chunks.get('chunk_key')} />
      </div>
    );
  }

  private async loadChunks() {
    const chunksJson = await (await fetch(CHUNKS_API)).json();
    // Map chunks into a format Map understands
    interface IChunkJson {
      key: string;
      content: string;
      description: string;
    }
    const chunks: Map<string, IChunk> = new Map(
      chunksJson.results.map((chunk: IChunkJson) => [
        chunk.key,
        { content: chunk.content, heading: chunk.description },
      ])
    );
    this.setState({
      chunks,
    });
  }
}
