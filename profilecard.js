// src/ProfileCard.js
import React from 'react';

const ProfileCard = (props) => {
  return (
    <div className="profile-card">
      <img src={props.image} alt={`${props.name}'s profile`} />
      <h2>{props.name}</h2>
      <p>{props.bio}</p>
    </div>
  );
};

export default ProfileCard;
