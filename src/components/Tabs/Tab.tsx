import classNames from 'classnames';
import * as React from 'react';
import * as style from './Tab.scss';

interface IProps {
  onClick: (tabIndex: number) => void;
  selectedTabId: number;
  tabId: number;
  text: string;
}

export const Tab = (props: IProps) => {
  const { onClick, selectedTabId, tabId, text } = props;
  const onClickWrapper = () => {
    onClick(tabId);
  };
  const tabClasses = classNames({
    [style.tab]: true,
    [style.selected]: selectedTabId === tabId,
  });
  return (
    <button className={tabClasses} onClick={onClickWrapper}>
      {text}
    </button>
  );
};
