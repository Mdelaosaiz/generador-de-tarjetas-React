import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../stylesheets/layout/_profile.scss';

class Profile extends Component {
  render() {
    const { avatar } = this.props;
    return (
      <div className='profile card__container--img'>
        <div
          className='profile__avatar card--img js__profile-image'
          style={{ backgroundImage: `url(${avatar})` }}
        ></div>
      </div>
    );
  }
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default Profile;
