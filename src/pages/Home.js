import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import iclogo from '../assets/logo-nav.png';
import icsearch from '../assets/ic-search-copy.png';
import icclose from '../assets/ic-close.png';


const Home = (props) => {
  let search = (<><Link to="/" >
    <img src={iclogo} alt="iclogo" id="logo" />
  </Link>
    <img src={icsearch} alt="icsearch" onClick={props.showSearch} /></>)

  if (props.search) {
    search = (
      <div>
        <img src={icsearch} alt="icsearch" />
        <input className="SEARCHBOX" type="text" placeholder="Pesquisar" id="search" />
        <img src={icclose} alt="fechar" onClick={props.showSearch} />
      </div>
    )
  }
  return (<nav className="NAVBAR">{search}</nav>)
}

export default Home;