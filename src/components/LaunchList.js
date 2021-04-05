import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const LaunchList = () => {
  const [launchList, setLaunchList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios({
          method: "get",
          url: "https://api.spacexdata.com/v4/launchpads",
        });
        setLaunchList(response.data);
      } catch (e) {
        console.log("Cannot get launchpads.");
      }
    })();
  }, []);

  const renderLaunch = (launches) => {
    launches = launches.slice(0,3);
    return launches.map((launch, i) => {
      return (
        <div key={i}>
          <Link to={`/${launch}`} style={{ color: "black" }} className="item">
            {launch}
          </Link>
        </div>
      );
    });
  };

  const renderList = () => {
    return launchList.map((launchpad) => {
      return (
        <div
          className="item"
          key={launchpad.id}
          style={{
            border: "1px solid #eeeeee",
            margin: "10px",
            padding: "10px",
            background: "#eeeeff",
          }}
        >
          <div className="header">{launchpad.name}</div>
          <div className="content">
            <div className="header">Status: {launchpad.status}</div>
            <div className="description">Details: {launchpad.details}</div>
          </div>
          <div className="content">
            <div className="header">Launches:</div>
            <div className="description">
              {launchpad.launches.length === 0
                ? "No launch available"
                : renderLaunch(launchpad.launches)}
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="ui container">
      <h3>LaunchPads List</h3>
      <div className="ui list">
        {launchList.length === 0 ? "" : renderList()}
      </div>
    </div>
  );
};

export default LaunchList;
