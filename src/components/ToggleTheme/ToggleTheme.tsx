import * as React from 'react';
import * as style from './ToggleTheme.scss';

export class ToggleTheme extends React.Component {
  public handleThemeUpdate(e: any) {
    switch (e.target.value) {
      case 'dark':
        document.documentElement.style.setProperty('--bg-color', '#07244C');
        document.documentElement.style.setProperty('--contrast-color', 'white');
        break;
      case 'light':
        document.documentElement.style.setProperty('--bg-color', 'white');
        document.documentElement.style.setProperty(
          '--contrast-color',
          '#07244C'
        );
        break;
    }
  }

  public render() {
    return (
      <div className={style.row}>
        <button
          className={style.buttons}
          onClick={this.handleThemeUpdate}
          value="dark"
        >
          dark
        </button>
        <button
          className={style.buttons}
          onClick={this.handleThemeUpdate}
          value="light"
        >
          light
        </button>
      </div>
    );
  }
}
