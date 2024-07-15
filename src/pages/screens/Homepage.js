import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/homepage.css';  

const HomePage = () => {
  const navigate = useNavigate();

  const following = [
    {
      name: 'Shailesh',
      image: require('../../assets/images/vendorimg.png'),
      location: 'Kisumu',
    },
    {
      name: 'Hansen',
      image: require('../../assets/images/vendorimg1.png'),
      location: 'Mumbai',
    },
  ];

  return (
    <div className="page-container">
      <img className="shapesIcon" src={require('../../assets/images/shapes.png')} alt="Shapes" />
      <img className="shapesIcon1 vectorIconLayout" src={require('../../assets/images/shapes.png')} alt="Shapes" />

      <div className="challengeFrame">
        <div className="challengeBox1 challengeLayout">
          <div className="challengeBox1Child" />
          <span className="harvestRainWater about201BillionTypo">
            Harvest <br /> Rain Water <br /> 5L/10L
          </span>
          <img className="rainIcon" src={require('../../assets/images/rain.png')} alt="Rain Icon" />
          <div className="rectangleParent">
            <div className="groupChild" />
            <div className="groupItem groupBorder" />
          </div>
        </div>

        <div className="challengeBox2 challengeLayout">
          <div className="challengeBox1Child" />
          <span className="harvestRainWater about201BillionTypo">
            Walk <br /> a <br /> mile
          </span>
          <img className="rainIcon" src={require('../../assets/images/favorite.png')} alt="Favorite Icon" />
          <div className="rectangleParent">
            <div className="groupInner groupBorder" />
          </div>
        </div>

        <div className="challengeBox3 challengeLayout">
          <div className="challengeBox1Child" />
          <span className="harvestRainWater about201BillionTypo">
            Recycle <br />10 Plastic <br /> Bottles
          </span>
          <img className="rainIcon" src={require('../../assets/images/circle-left.png')} alt="Circle Left Icon" />
          <div className="rectangleParent">
            <div className="groupChild" />
            <div className="groupChild1 groupBorder" />
          </div>
        </div>
      </div>

      <span className="challengeProgress vendorsYouFollowTypo"> Challenge Progress: </span>

      <div className="noteMessage noteLayout">
        <div className="noteMessageChild noteLayout" />
        <span className="factAbout201Container textFlexBox">
          <span className="textTypo">Fact</span>
          <span className="about201BillionTypo">
            : About 2.01 billion tons of municipal solid waste is generated
            globally each year
          </span>
        </span>
      </div>

      <span className="hello helloTypo">Hello!🍀</span>

      <div className="vendorFrame">
        {following.map((vendor, index) => (
          <div key={index} className={`vendordetails vendordetailsLayout ${index === 1 ? 'vendordetails1' : ''}`} onClick={() => navigate('VendorsProfilePage')} >
            <div className={`vendorname vendornameLayout ${index === 1 ? 'vendorname1' : ''}`}>
              <span className={`${index === 0 ? 'shailesh shaileshTypo' : 'hansenReddy vendorname1Layout'}`}>
                {vendor.name}
              </span>
              <span className="thane thaneTypo">({vendor.location})</span>
            </div>
            <img className="vendorimgIcon vendordetailsLayout" src={vendor.image.default} alt="Vendor Image" />
          </div>
        ))}

        <div className="addVendorBtn text1Layout">
          <img
            className="addVendorBtnChild vendornameLayout"
            src={require('../../assets/images/ellipse-47.png')}
            alt="Add Vendor Button"
          />
          <span className="text1 text1Layout">+</span>
        </div>

        <span className="vendorsYouFollow vendorsYouFollowTypo"> Vendors you follow: </span>
      </div>
    </div>
  );
};

export default HomePage;
