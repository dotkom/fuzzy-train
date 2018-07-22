import * as React from 'react';
import style from './Indicator.scss';

interface IProps {
  selectedTab: number;
  tabAmount: number;
}

export const Indicator = (props: IProps) => {
  const { selectedTab, tabAmount } = props;
  let gradientPosition = selectedTab / (tabAmount - 1);
  if (selectedTab === 0) {
    gradientPosition = 0;
  } else if (selectedTab === tabAmount - 1) {
    gradientPosition = 1;
  }
  const gradientPositionDropoff = 1 / tabAmount;
  return (
    <hr
      style={{
        background: `linear-gradient(to right, transparent ${(gradientPosition -
          gradientPositionDropoff) *
          100}%, #731494 ${gradientPosition *
          100}%, transparent ${(gradientPosition + gradientPositionDropoff) *
          100}%) `,
      }}
      className={style.indicator}
    />
  );
};
