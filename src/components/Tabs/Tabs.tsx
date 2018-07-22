import * as React from 'react';
import { Button, Divider } from 'src/components';
import * as style from './Tabs.scss';

interface IState {
  selectedButton: number;
}

export class Tabs extends React.Component<{}, IState> {
  public state = {
    selectedButton: 1,
  };
  public handleClick = () => {
    this.setState({
      selectedButton: 0,
    });
  };
  public render() {
    return (
      <div className={style.tabs}>
        <div className={style.buttons}>
          <Button onClick={this.handleClick} text="Bedrift" />
          <Button onClick={this.handleClick} text="Hovedside" />
          <Button onClick={this.handleClick} text="Student" />
        </div>
        <Divider style={{ width: '100%' }} />
      </div>
    );
  }
}
