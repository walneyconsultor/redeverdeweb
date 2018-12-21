import React from 'react';
import ReactDom from 'react-dom';
import HeroButton from '../hero-button';
import style from './style.scss';
import '../../global.css';

import Logo from '../../assets/images/logo2.png';
import Background from '../../assets/images/leaf.jpg'

const Hero = ({ title, description, firstButtonClick, secondButtonClick }) => (
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
        <HeroButton primary text="CRIE A SUA CONTA" onclick={firstButtonClick} />
        <HeroButton primary={false} text="ENTRE AGORA" onclick={secondButtonClick} />
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
