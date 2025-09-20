import "./UserProfile.css";
import React, { useState } from "react";
import sofi from "./../images/sofi.png";

function UserProfile({ items }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="user-profile">
      {isVisible && (
        <img
          className="user-profile-image"
          height="120"
          width="120"
          src={sofi}
          alt="Sofi"
        />
      )}
      {items.map((item) => (
        <div>
          <h5 className="user-profile-title">{item.name}</h5>
          <p className="user-profile-description">
            {item.age}, {item.background}
          </p>
          <br />
          <p className="user-profile-description">
            <strong>Goals:</strong> {item.goals}
          </p>
          <p className="user-profile-description">
            <strong>Pain Points:</strong> {item.painpoints}
          </p>
          <p className="user-profile-description">
            <strong>Needs:</strong> {item.needs}
          </p>
        </div>
      ))}
    </div>
  );
}

export default UserProfile;
