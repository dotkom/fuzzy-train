import * as style from 'assets/scss/App.scss';
import * as React from 'react';

import logo from 'assets/images/logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className={style.app}>
        <header className={style.appHeader}>
          <img src={logo} className={style.appLogo} alt="logo" />
          <h1 className={style.appTitle}>Welcome to React</h1>
        </header>
        <p className={style.appIntro}>༼ ºل͟º༼ ºل͟º༼ ºل͟º༼ ºل͟º ༽ºل͟º ༽ºل͟º ༽</p>
      </div>
    );
  }
}

export default App;
