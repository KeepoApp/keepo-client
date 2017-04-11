import React, { PropTypes } from 'react';

import './profile.less';

const Profile = props => (
  <div className="profile">
    <div className="profile__image profile__image--round">
      <img src={props.image} alt="" />
    </div>
    <div className="profile__name">
      <span>{props.name}</span>
    </div>
  </div>
);

Profile.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Profile;
