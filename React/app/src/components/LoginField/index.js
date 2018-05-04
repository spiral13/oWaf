/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FaLock from 'react-icons/lib/fa/lock';
import FaUser from 'react-icons/lib/fa/user';


/*
 * Local import
 */


/*
 * Code
 */


/*
 * Component
 */
export default class LoginField extends React.Component {
  /*
   * PropTypes
   */
  static propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    fa: PropTypes.string.isRequired,
    inputValue: PropTypes.string,
    type: PropTypes.oneOf(['text', 'password']),
  }

  static defaultProps = {
    inputValue: '',
    type: 'text',
  }

  state = {
    error: false,
    focus: false,
  }

  /**
   * Handle change event
   */
  handleChange = (evt) => {
    const { value } = evt.target;
    this.props.onChange(value);

    // on vérifie les champs obligatoires
    if (evt.target.required) {
      const error = !value;
      this.setState({ error });
    }
  }

  /**
   * Handle focus event
   */
  // handleFocus = () => {
  //   this.setState({
  //     error: false,
  //     focus: true,
  //   });
  // }

  /**
   * Handle blur event
   */
  // handleBlur = () => {
  //   this.setState({ focus: false });
  // }

  /*
   * Render
   */
  render() {
    const { error, focus } = this.state;
    const {
      name,
      placeholder,
      inputValue,
      type,
      fa,
    } = this.props;
    const Icon = fa === 'FaLock' ? FaLock : FaUser;
    const id = `field-${name}`;
    return (
      <div
        className={classNames(
          'field',
          { 'field--has-value': inputValue !== '' },
          { 'field--has-error': error },
          { 'field--has-focus': focus },
        )}
      >
        <Icon />
        <input
          type={type}
          className="field-input"
          id={id}
          name={name}
          placeholder={placeholder}
          inputvalue={inputValue}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          required
        />
      </div>
    );
  }
}
