import React from "react";
import "../../assets/styles/challenge.css";
import shapes from "../../assets/images/shapes.png";
import favorite from "../../assets/images/favorite.png";
import rain from "../../assets/images/rain.png";
import circleLeft from "../../assets/images/circle-left.png";
import image1 from "../../assets/images/image-1.png";
import delAltFill from "../../assets/images/del-alt-fill.png";


const ChallengePage = () => {
  return (
    <div className="page-container">
      <img className="shapesIcon" src={shapes} alt="Shapes" />
      
      <div className="completedChallengeFrame">
        <div className="challengeBox1 challengeLayout">
          <div className="challengeBox1Child challengeChildLayout"></div>
          <span className="walkAMile walkAMileTypo">Walk a Mile</span>
          <img className="favoriteIcon" src={favorite} alt="Favorite" />
          <span className="completedYesterday completedTypo">
            <span className="completedTypo1">Completed:</span>
            <span className="yesterday">Yesterday</span>
          </span>
        </div>
        <div className="challengeBox3 challengeLayout">
          <div className="challengeBox1Child challengeChildLayout"></div>
          <span className="walkAMile walkAMileTypo">Walk 2 Miles</span>
          <img className="favoriteIcon" src={favorite} alt="Favorite" />
          <span className="completedYesterday completedTypo">
            <span className="completedTypo1">Completed:</span>
            <span className="yesterday">14th August</span>
          </span>
        </div>
        <div className="challengeBox2 challengeLayout">
          <div className="challengeBox2Child challengeChildLayout"></div>
          <span className="water5Random plant5TreesTypo">Water 5 Random Plants/Trees</span>
          <img className="image1Icon" src={image1} alt="Image 1" />
          <span className="completed2 startTypo">Completed</span>
        </div>
        <div className="challengeBox4 challengeLayout">
          <div className="challengeBox4Child challengeChildLayout"></div>
          <span className="makeDrywetDustbins walkAMileTypo">Make Dry/Wet Dustbins</span>
          <span className="completed3 completedTypo">Completed</span>
          <img className="delAltFillIcon iconLayout" src={delAltFill} alt="Delete Alt Fill" />
        </div>
      </div>
      <span className="completedChallenges challengesTypo">Completed challenges:</span>
      <div className="weeklyChallengeFrame challengeLayout">
        <div className="challengeBox11 challengeLayout">
          <div className="challengeBox2Child challengeChildLayout"></div>
          <span className="plant5Trees plant5TreesTypo">Plant 5 trees or plants</span>
          <img className="image1Icon" src={image1} alt="Image 1" />
        </div>
        <div className="challengeBox2 challengeLayout">
          <div className="challengeBox2Inner challengeChildLayout"></div>
          <span className="plant5Trees plant5TreesTypo">Harvest Rain Water (10L)</span>
          <img className="rainIcon" src={rain} alt="Rain" />
          <div className="lineParent parentPosition">
            <div className="groupItem groupItemLayout"></div>
            <span className="started startedPosition">STARTED</span>
          </div>
        </div>
        <div className="challengeBox31 challengeLayout">
          <div className="challengeBox3Inner challengeChildLayout"></div>
          <span className="plant5Trees plant5TreesTypo">Recycle 10 Plastic Bottles</span>
          <img className="circleLeftIcon" src={circleLeft} alt="Circle Left" />
          <div className="lineParent parentPosition">
            <div className="groupItem groupItemLayout"></div>
            <span className="started startedPosition">STARTED</span>
          </div>
        </div>
      </div>
      <span className="thisWeeksChallenges parentPosition">This week’s challenges:</span>
      <div className="noteMessage noteLayout">
        <div className="noteMessageChild noteLayout"></div>
        <span className="tipOfTheContainer parentPosition">
          <span className="textTypo">Tip Of The Day</span>
          <span className="completedTypo1">: Reduce. Reuse. Recycle.</span>
        </span>
      </div>
      <span className="challenges">Challenges</span>
      <div className="challengePageChild groupItemLayout"></div>
    </div>
  );
};

export default ChallengePage;