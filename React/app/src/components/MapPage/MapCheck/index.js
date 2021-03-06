/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Component
 */
class MapCheck extends React.Component {
  // Handle change event
  handleChange = (evt) => {
    const { checked } = evt.target;
    this.props.onChange(checked);
  }

  // Render
  render() {
    const { name, label } = this.props;
    const id = `mapField-${name}`;
    return (
      <div className="check">
        <input
          type="checkbox"
          className="details-check"
          id={id}
          name={name}
          onChange={this.handleChange}
        />
        {label}
      </div>
    );
  }
}

/*
 * PropTypes
 */
MapCheck.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

/*
* Export default
*/
export default MapCheck;
