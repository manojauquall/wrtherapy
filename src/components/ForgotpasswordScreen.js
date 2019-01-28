import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import ForgotForm from './ForgotForm';
import Wallpaper from './Wallpaper';
import FogSubmit from './FogSubmit';
import SignupSection from './SignupSection';

export default class ForgotpasswordScreen extends Component {
  render() {
    return (
      <Wallpaper>
        <Logo />
        <ForgotForm />
        <FogSubmit />
      </Wallpaper>
    );
  }
}
