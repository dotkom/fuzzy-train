import * as React from 'react';
import { Indicator, Tab, TextChunk } from 'src/components';
import { ITab } from 'src/types';
import * as style from './Tabs.scss';

interface IProps {
  tabs: ITab[];
}

interface IState {
  selectedTab: number;
}

export class Tabs extends React.Component<IProps, IState> {
  public state = {
    selectedTab: 0,
  };
  public handleClick = (tabIndex: number) => {
    this.setState({
      selectedTab: tabIndex,
    });
  };
  public render() {
    const { tabs } = this.props;
    const { selectedTab } = this.state;
    return (
      <div className={style.tabs}>
        <div className={style.buttons}>
          {tabs.map((t, id) => (
            <Tab
              key={id}
              tabId={id}
              selectedTab={selectedTab}
              onClick={this.handleClick}
              text={t.heading}
            />
          ))}
        </div>
        <Indicator />
        <div className={style.content}>
          <TextChunk
            heading={tabs[selectedTab].heading}
            paragraphs={tabs[selectedTab].content}
          />
        </div>
      </div>
    );
  }
}
