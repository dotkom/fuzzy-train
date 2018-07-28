import * as React from 'react';
import { Content, Header, Tabs } from 'src/components';
import { HARD_DATA } from 'src/constants';
import * as style from './App.scss';

interface IState {
  selectedTabId: number;
}

export class App extends React.Component<{}, IState> {
  public state = {
    selectedTabId: 0,
  };
  public handleClick = (index: number) => {
    this.setState({
      selectedTabId: index,
    });
  };
  public render() {
    const { selectedTabId } = this.state;
    return (
      <div className={style.app}>
        <Header />
        <Tabs
          tabs={HARD_DATA}
          selectedTabId={selectedTabId}
          handleClick={this.handleClick}
        />
        <Content selectedChunks={HARD_DATA[selectedTabId]} />
      </div>
    );
  }
}
