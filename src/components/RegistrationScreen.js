import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import SignupForm from './SignupForm';
import Wallpaper from './Wallpaper';
import RegSubmit from './RegSubmit';
import SignupSection from './SignupSection';

export default class RegistrationScreen extends Component {
  render() {
    return (
      <Wallpaper>
        <Logo />
        <SignupForm />
        <RegSubmit />
      </Wallpaper>
    );
  }
}
