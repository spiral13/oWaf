/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Redirect } from 'react-router-dom';

/*
 * Local import
 */
import ChangeView from 'src/containers/ChangeView';
import LoginForm from 'src/containers/LoginForm';

/*
 * Code
 */
/* eslint-disable-next-line */
class Login extends React.Component {
  render() {
    const { visible, logged } = this.props;
    if (window.location.pathname === '/connect' && logged) return <Redirect to="/member" />;
    return (
      <div
        id="login"
        className={
        classNames(
          'login',
          {
            'login--open': visible,
          },
        )
      }
      >
        <ChangeView from="password" to="login" back />
        <LoginForm />
        <ChangeView from="login" to="password" />
      </div>
    );
  }
}

/*
* propTypes
*/
Login.propTypes = {
  visible: PropTypes.bool.isRequired,
  logged: PropTypes.bool.isRequired,
};

/*
 * Export default
 */
export default Login;
