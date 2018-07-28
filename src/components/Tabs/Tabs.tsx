import * as React from 'react';
import { Indicator, Tab } from 'src/components';
import * as style from './Tabs.scss';

interface IState {
  selectedTab: number;
}

export class Tabs extends React.Component<{}, IState> {
  public state = {
    selectedTab: 0,
  };
  public handleClick = (tabIndex: number) => {
    this.setState({
      selectedTab: tabIndex,
    });
  };
  public render() {
    const tabText = [
      'Organisasjonen',
      'Komiteer',
      'Andre sosiale verv',
      'Annet',
    ];
    const { selectedTab } = this.state;
    return (
      <div className={style.tabs}>
        <div className={style.buttons}>
          {tabText.map((t, id) => (
            <Tab
              key={id}
              tabId={id}
              selectedTab={selectedTab}
              onClick={this.handleClick}
              text={t}
            />
          ))}
        </div>
        <Indicator />
      </div>
    );
  }
}
