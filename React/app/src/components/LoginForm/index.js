/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';


/*
 * Local import
 */
import LoginField from 'src/containers/LoginField';


/*
 * Code
 */
class LoginForm extends React.Component {
  onSubmit = (evt) => {
    evt.preventDefault();
    if (this.props.data.title === 'Connexion') {
      this.props.loginSubmit();
    }
    else {
      this.props.newpassSubmit();
    }
    this.context.router.push('/');
  }

  render() {
    const { data } = this.props;
    return (
      <form id="loginform" onSubmit={this.onSubmit}>
        <h1 id="loginform-title">{data.title}</h1>
        {/* <div id="loginform-desc">{data.desc}</div> */}
        {data.fields.map(field => <LoginField key={field.name} {...field} />)}
        <button id="loginform-submit" className={data.submit.className}>
          {data.submit.label}
        </button>
      </form>
    );
  }
}
LoginForm.propTypes = {
  loginSubmit: PropTypes.func.isRequired,
  newpassSubmit: PropTypes.func.isRequired,
  data: PropTypes.shape({
    fields: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    title: PropTypes.string.isRequired,
    submit: PropTypes.shape({
      className: PropTypes.string,
      label: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
LoginForm.contextTypes = {
  router: PropTypes.object.isRequired,
};
/*
 * Export default
 */
export default LoginForm;
