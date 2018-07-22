import * as React from 'react';
import * as style from './PlanetOnline.scss';

export const PlanetOnline = () => {
  return (
    <div className={style.universe}>
      <div className={style.galaxy}>
        <div className={style.sun} />

        <div id={style.mercury} className={style.orbit}>
          <div className={style.pos}>
            <div className={style.planet} />
          </div>
        </div>
      </div>
    </div>
  );
};
