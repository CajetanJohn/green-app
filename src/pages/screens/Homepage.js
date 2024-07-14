import React from 'react';
import { useNavigation } from 'react-router-dom'; 
import '../../assets/styles/homepage.css'; 
const HomePage = () => {
  const navigation = useNavigation(); // Adjust for web navigation as needed

  return (
    <div className="homePageExistingUser">
      <img
        className="shapesIcon"
        src={require('../../assets/images/shapes.png')}
        alt="Shapes"
      />
      <img
        className="shapesIcon1 vectorIconLayout"
        src={require('../../assets/images/shapes.png')}
        alt="Shapes"
      />
      

      <img
        className="menuBarIcon"
        src={require('../assets/menu-bar.png')}
        alt="Menu Bar"
      />
      <div className="challengeFrame">
        <div className="challengeBox1 challengeLayout">
          <div className="challengeBox1Child" />
          <span className="harvestRainWater about201BillionTypo">
            Harvest
            <br />
            Rain Water
            <br />
            5L/10L
          </span>
          <img
            className="rainIcon"
            src={require('../assets/rain.png')}
            alt="Rain Icon"
          />
          <div className="rectangleParent">
            <div className="groupChild" />
            <div className="groupItem groupBorder" />
          </div>
        </div>
        <div className="challengeBox2 challengeLayout">
          <div className="challengeBox1Child" />
          <span className="harvestRainWater about201BillionTypo">
            Walk
            <br />
            a
            <br />
            mile
          </span>
          <img
            className="rainIcon"
            src={require('../assets/favorite.png')}
            alt="Favorite Icon"
          />
          <div className="rectangleParent">
            <div className="groupInner groupBorder" />
          </div>
        </div>
        <div className="challengeBox3 challengeLayout">
          <div className="challengeBox1Child" />
          <span className="harvestRainWater about201BillionTypo">
            Recycle
            <br />
            10 Plastic
            <br />
            Bottles
          </span>
          <img
            className="rainIcon"
            src={require('../assets/circle-left.png')}
            alt="Circle Left Icon"
          />
          <div className="rectangleParent">
            <div className="groupChild" />
            <div className="groupChild1 groupBorder" />
          </div>
        </div>
      </div>
      <span className="challengeProgress vendorsYouFollowTypo">
        Challenge Progress:
      </span>
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
        <div
          className="vendordetails vendordetailsLayout"
          onClick={() => navigation.navigate('VendorsProfilePage')}
        >
          <div className="vendorname vendornameLayout">
            <span className="shailesh shaileshTypo">Shailesh</span>
            <span className="mumbai thaneTypo">(Mumbai)</span>
          </div>
          <img
            className="vendorimgIcon vendordetailsLayout"
            src={require('../assets/vendorimg.png')}
            alt="Vendor Image"
          />
        </div>
        <div className="vendordetails1 vendordetailsLayout">
          <div className="vendorname1 vendorname1Layout">
            <span className="hansenReddy vendorname1Layout">Hansen Reddy</span>
            <span className="thane thaneTypo">(Thane)</span>
          </div>
          <img
            className="vendorimgIcon vendordetailsLayout"
            src={require('../assets/vendorimg1.png')}
            alt="Vendor Image"
          />
        </div>
        <div className="addVendorBtn text1Layout">
          <img
            className="addVendorBtnChild vendornameLayout"
            src={require('../assets/ellipse-47.png')}
            alt="Add Vendor Button"
          />
          <span className="text1 text1Layout">+</span>
        </div>
        <span className="vendorsYouFollow vendorsYouFollowTypo">
          Vendors you follow:
        </span>
      </div>
    </div>
  );
};

export default HomePage;