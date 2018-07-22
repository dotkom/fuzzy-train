import classNames from 'classnames';
import * as React from 'react';
import * as style from './Tab.scss';

interface IProps {
  onClick: (tabIndex: number) => void;
  selectedTab: number;
  tabIndex: number;
  text: string;
}

export const Tab = (props: IProps) => {
  const { onClick, selectedTab, tabIndex, text } = props;
  const onClickWrapper = () => {
    onClick(tabIndex);
  };
  const tabClasses = classNames({
    [style.tab]: true,
    [style.selected]: selectedTab === tabIndex,
  });
  return (
    <button className={tabClasses} onClick={onClickWrapper}>
      {text}
    </button>
  );
};
