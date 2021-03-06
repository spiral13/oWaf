/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import MyMarker from 'src/containers/Marker';

/*
 * Component
 */
const MyMapComponent = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAVQtHXYY_yzzutflzsTmGc6DcRg6TLhB4&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '600px' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(props =>
  (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: props.lat, lng: props.lng }}
    >
      {((props.places.length > 0)) && props.places.map(place =>
        <MyMarker key={place.id} {...place} />)}
    </GoogleMap>
  ));

/*
 * Component
 */
class MyFancyComponent extends React.Component {
  state = {
    isMarkerShown: false,
    places: [],
  }

  componentDidMount() {
    this.delayedShowMarker();
  }
  componentDidUpdate() {
    this.delayedShowMarker();
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true, places: this.props.places });
    }, 5000);
  }

  delayedAddPlace = () => {
    setTimeout(() => {
      this.setState({ places: this.props.places });
    }, 1000);
  }

  render() {
    const { lat, lng } = this.props;
    return (
      <MyMapComponent
        lat={lat}
        lng={lng}
        isMarkerShown={this.state.isMarkerShown}
        places={this.state.places}
      />
    );
  }
}

/*
 * PropTypes
 */
MyFancyComponent.propTypes = {
  places: PropTypes.array.isRequired,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
};

/*
 * Export default
 */
export default MyFancyComponent;
