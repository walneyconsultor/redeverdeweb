import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import style from './style.scss';
import '../../global.css';

const HeroButton = ({ text, primary, onclick }) => (
  <a onClick={(e) => onclick(e)} href="#" className='Button' data-primary={primary}>
    {text}
  </a>
);

HeroButton.propTypes = {
  /**
   * @property {boolean} primary determines is a primary button (emphasized)
   */
  primary: PropTypes.bool,

  /**
   * @property {string} text label to be displayed within the button
   */
  text: PropTypes.string
}

HeroButton.defaultProps = {
  text: 'Hero Button!',
  primary: true,
}

export default HeroButton;
