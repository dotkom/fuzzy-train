import classnames from 'classnames';

import * as React from 'react';
import style from './Divider.scss';

export interface IDividerProps extends React.HTMLAttributes<HTMLHRElement> {
  className?: string;
}

export function Divider(props: IDividerProps) {
  const className = classnames(props.className, style.divider);
  return <hr {...props} className={className} />;
}
