import * as React from 'react';
import { Indicator, Tab } from 'src/components';
import * as style from './Tabs.scss';

interface IState {
  selectedTab: number;
}

export class Tabs extends React.Component<{}, IState> {
  public state = {
    selectedTab: 1,
  };
  public handleClick = (tabIndex: number) => {
    this.setState({
      selectedTab: tabIndex,
    });
  };
  public render() {
    const { selectedTab } = this.state;
    return (
      <div className={style.tabs}>
        <div className={style.buttons}>
          <Tab
            tabIndex={0}
            selectedTab={selectedTab}
            onClick={this.handleClick}
            text="Budent"
          />
          <Tab
            tabIndex={1}
            selectedTab={selectedTab}
            onClick={this.handleClick}
            text="Budent"
          />
          <Tab
            tabIndex={2}
            selectedTab={selectedTab}
            onClick={this.handleClick}
            text="Budent"
          />
          <Tab
            tabIndex={3}
            selectedTab={selectedTab}
            onClick={this.handleClick}
            text="Budent"
          />
          <Tab
            tabIndex={4}
            selectedTab={selectedTab}
            onClick={this.handleClick}
            text="Budent"
          />
          <Tab
            tabIndex={5}
            selectedTab={selectedTab}
            onClick={this.handleClick}
            text="Budent"
          />
        </div>
        <Indicator selectedTab={selectedTab} tabAmount={6} />
      </div>
    );
  }
}
