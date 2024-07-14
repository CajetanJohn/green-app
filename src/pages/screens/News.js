import React from "react";
import "../../assets/styles/news.css"; // Import the corresponding CSS file

const NewsPage = () => {
  return (
    <div className="page-container">
      <img className="shapesIcon" src={require("../../assets/images/shapes.png")} alt="shapes" />
      <img className="shapesIcon1 vectorIconLayout" src={require("../../assets/images/shapes.png")} alt="shapes"/>

      <div className="event3Parent menuBarIconPosition">
        <div className="event3 event3Layout">
          <p className="wasteTechnologyIndia textTypo">
            Waste Technology India Expo 2023
            <br />
            13th-15th September 2023
          </p>
          <img
            className="event3Child event3Layout"
            src={require("../../assets/images/rectangle-57.png")}
            alt="event3"
          />
        </div>
        <div className="event2 eventLayout">
          <p className="cleanIndiaShow cleanIndiaShowTypo">
            Clean India Show (CIS)
            <br />
            13th-15th September 2023
          </p>
          <img
            className="event3Child event3Layout"
            src={require("../../assets/images/rectangle-57.png")}
            alt="event2"
          />
        </div>
        <div className="event1 eventLayout">
          <p className="skrapEventJuhu cleanIndiaShowTypo">
            Skrap Event @Juhu, Mumbai
            <br />
            1st September 2023
          </p>
        </div>
        <p className="locationMumbaiIndia newsInfoTypo">
          Location: Mumbai, India
        </p>
        <div className="tabs">
          <div className="rectangleParent rectangleLayout">
            <div className="groupChild groupLayout"></div>
            <p className="events newsTypo">Events</p>
          </div>
          <div className="rectangleGroup rectangleLayout">
            <div className="groupItem groupLayout"></div>
            <p className="news newsTypo">News</p>
          </div>
        </div>
        <p className="newsInfo newsInfoTypo">News & Info</p>
      </div>
    </div>
  );
};

export default NewsPage;
