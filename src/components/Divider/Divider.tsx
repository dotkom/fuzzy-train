import classnames from 'classnames';

import * as React from 'react';
import style from './Divider.scss';

export function Divider(props: any) {
  const className = classnames(props.className, style.divider);
  return <hr {...props} className={className} />;
}
