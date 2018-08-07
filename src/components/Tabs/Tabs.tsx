import * as React from 'react';
import { Indicator, Tab } from 'src/components';
import { ITab } from 'src/types';
import * as style from './Tabs.scss';

interface IProps {
  handleClick: (id: number) => void;
  selectedTabId: number;
  tabs: ITab[];
}

interface IState {
  selectedTab: number;
}

export class Tabs extends React.Component<IProps, IState> {
  public render() {
    const { handleClick, selectedTabId, tabs } = this.props;
    return (
      <div className={style.tabs}>
        <div className={style.buttons}>
          {tabs.map((t, id) => (
            <Tab
              key={id}
              tabId={id}
              selectedTabId={selectedTabId}
              onClick={handleClick}
              text={t.name}
            />
          ))}
        </div>
        <Indicator />
      </div>
    );
  }
}
