import * as React from 'react';
import { Content, Header, Tabs, ToggleTheme } from 'src/components';
import { CHUNKS_API, HARD_DATA, STUDENT_TABS } from 'src/constants';
import { IChunk } from 'src/types';
import * as style from './App.scss';

interface IState {
  chunks: Map<string, IChunk>;
  selectedTabId: number;
}

export class App extends React.Component<{}, IState> {
  public state = {
    chunks: new Map(Object.entries(HARD_DATA)),
    selectedTabId: 0,
  };
  public handleClick = (id: number) => {
    this.setState({
      selectedTabId: id,
    });
  };

  public componentDidMount() {
    this.loadChunks();
  }

  public render() {
    const { selectedTabId, chunks } = this.state;
    return (
      <div className={style.app}>
        <ToggleTheme />
        <Header />
        <Tabs
          tabs={STUDENT_TABS}
          selectedTabId={selectedTabId}
          handleClick={this.handleClick}
        />
        <Content
          selectedChunks={STUDENT_TABS[selectedTabId].chunks.map(
            chunk => chunks.get(chunk) as IChunk
          )}
        />
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
        { content: chunk.content, heading: chunk.description, key: chunk.key },
      ])
    );
    this.setState({
      chunks,
    });
  }
}
