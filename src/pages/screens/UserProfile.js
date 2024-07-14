import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/userprofile.css';

const UserProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <img className="shapesIcon" src="/assets/shapes.png" alt="Shapes" />
      <img className="shapesIcon1" src="/assets/shapes.png" alt="Shapes" />
      <div className="notification">
        <img className="vectorIcon" src="/assets/vector.png" alt="Vector" />
        <img className="vectorIcon1" src="/assets/vector1.png" alt="Vector" />
        <img className="vectorIcon2" src="/assets/vector2.png" alt="Vector" />
        <p className="text">9:40</p>
      </div>
      <button className="rectangleParent" onClick={() => navigate('/chat-page')}>
        <div className="groupChild"></div>
        <img className="chatAlt2FillIcon" src="/assets/chat-alt-2-fill.png" alt="Chat" />
        <p className="communicate">Communicate</p>
      </button>
      <div className="rectangleGroup">
        <div className="groupChild"></div>
        <p className="communicate">Share Vendor</p>
        <img className="groupShareIcon" src="/assets/group-share.png" alt="Share" />
      </div>
      <div className="rectangleContainer">
        <div className="groupChild"></div>
        <p className="communicate">Call Vendor</p>
        <img className="phoneFillIcon" src="/assets/phone-fill.png" alt="Phone" />
      </div>
      <div className="groupView">
        <div className="groupChild"></div>
        <p className="vendorsHistory">Vendor’s History</p>
        <img className="userLightIcon" src="/assets/user-light.png" alt="User" />
      </div>
      <div className="rectangleParent1">
        <div className="groupChild"></div>
        <p className="vendorsHistory">Report Vendor as scam</p>
        <img className="flagFinishFillIcon" src="/assets/flag-finish-fill.png" alt="Flag" />
      </div>
      <h1 className="vendorsProfile">Vendor’s Profile</h1>
      <button className="image2" onClick={() => navigate(-1)}>
        <img className="icon" src="/assets/image-2.png" alt="Back" />
      </button>
      <div className="rectangleParent2">
        <div className="groupChild2"></div>
        <p className="shaileshShete">Shailesh Shete</p>
        <p className="verifiedVendorAt">(Verified Vendor at Mumbai)</p>
        <img className="ellipseIcon" src="/assets/ellipse-93.png" alt="Ellipse" />
        <button className="removeFromVendorContainer" onClick={() => navigate('/sign-in-page')}>
          <p className="removeFromVendorList">Remove from Vendor List?</p>
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
