import React from 'react';
import style from './app.module.scss'
import HeaderR from '../components/header';
import ACSTables from '../components/ACS-tables';
import GeneralInfo from '../components/generalInfo';
import Relationships from '../components/relationships';
import Items from '../components/Items';
import Hideout from '../components/hideout';
import Notes from '../components/notes';

function App() {
  return (
    <main className={style.main}>
      <HeaderR/>
      <section className={style.sheet}>
        <ACSTables/>
        <section className={style.allInfo}>
          <GeneralInfo/>
          <Relationships/>
          <section className={style.itemsHideout}>
            <Items/>
            <Hideout/>
          </section>
          <Notes/>
        </section>
      </section>
    </main>
  );
}

export default App;
