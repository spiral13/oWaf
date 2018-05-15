/*
*  Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

/*
*  Code
 */
class HomeMembre extends React.Component {
  componentDidMount() {
    this.props.loadPost();
  }

  render() {
    const {
      title1, category1, excerpt1, title2, category2, excerpt2, title3, category3, excerpt3,
      name, dogName, logged,
    } = this.props;
    if (window.location.pathname === '/membre' && !logged) return <Redirect to="/" />;
    return (
      <div id="homeMembre">
        {/* <div className="homeMembre-img" /> */}
        <div className="homeMembre-text">Bienvenue {name} et {dogName} </div>
        <div className="homeMembre-carte-title">Carte interactive</div>
        <a href="/map" className="homeMembre-carte">
          <div className="homeMembre-carte-img" />
          <div className="homeMembre-carte-texte">Venez partager <br />vos lieux de détente favoris <br /> et découvrir ceux des autres !</div>
        </a>
        <a href="/blog" className="home-blog">
          Discussions à la une
          <div className="home-blog-post">
            <div className="post">
              <p className="post-category">{category1}</p>
              <p className="post-title">{title1}</p>
              {/* eslint-disable-next-line */}
              <p className="post-excerpt" dangerouslySetInnerHTML={{ __html: excerpt1 }} />
              <p className="post-more">En lire plus</p>
            </div>
            <div className="post">
              <p className="post-category">{category2}</p>
              <p className="post-title">{title2}</p>
              {/* eslint-disable-next-line */}
              <p className="post-excerpt" dangerouslySetInnerHTML={{ __html: excerpt2 }} />
              <p className="post-more">En lire plus</p>
            </div>
            <div className="post">
              <p className="post-category">{category3}</p>
              <p className="post-title">{title3}</p>
              {/* eslint-disable-next-line */}
              <p className="post-excerpt" dangerouslySetInnerHTML={{ __html: excerpt3 }} />
              <p className="post-more">En lire plus</p>
            </div>
          </div>
        </a>
      </div>
    );
  }
}
HomeMembre.propTypes = {
  loadPost: PropTypes.func.isRequired,
  title1: PropTypes.string.isRequired,
  category1: PropTypes.string.isRequired,
  excerpt1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  category2: PropTypes.string.isRequired,
  excerpt2: PropTypes.string.isRequired,
  title3: PropTypes.string.isRequired,
  category3: PropTypes.string.isRequired,
  excerpt3: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  logged: PropTypes.bool.isRequired,
  dogName: PropTypes.string.isRequired,
};

/*
* Export default
 */

export default HomeMembre;
