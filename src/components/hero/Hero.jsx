import React from 'react';
import ReactDom from 'react-dom';
import HeroButton from '../hero-button';
import style from './style.scss';
import '../../global.css';

import Logo from '../../assets/images/logo2.png';
import Background from '../../assets/images/leaf.jpg'

console.log(Logo); 

const Hero = ({ title, description }) => (
  <div
    className='Hero'
    style={{ backgroundColor: '#D8DCD9' }}
  >
    <div className='content'>
      <img
        className='logo'
        src={Logo}
        alt="Rede Verde"
      />
      <h2>{title}</h2>
      <p>{description}</p>
      <div className='button-wrapper'>
        <HeroButton primary text="CRIE A SUA CONTA" />
        <HeroButton primary={false} text="ENTRE AGORA" />
      </div>
    </div>
    <div className='overlay'></div>
  </div>
);

Hero.defaultProps = {
  title: '',
  description: '',
}

export default Hero;