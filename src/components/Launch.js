import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const Launch = () => {
  const { id } = useParams();
  const [launch, setLaunch] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const response = await axios({
          method: "get",
          url: `https://api.spacexdata.com/v4/launches/${id}`,
        });
        console.log(response.data);
        setLaunch(response.data);
      } catch (e) {
        console.log("Cannot get launchPad");
      }
    })();
  }, []);

  return (
    <div className="ui container">
      <h3 style={{ marginTop: '10px'}}>About Launch</h3>
      <div
        className="item"
        style={{
          border: "1px solid #eeeeee",
          margin: "10px",
          padding: "10px",
          background: "#eeeeff",
        }}
      >
        <div className="header">Name: {launch.name}</div>
        <div className="header">Date UTC: {launch.static_fire_date_utc}</div>
        <div className="content">
          <div className="description">Details: {launch.details}</div>
          <div className="description">Reused: {launch.fairings?.reused === null? 'No': 'Yes'}</div>
        </div>
      </div>
    </div>
  );
};

export default Launch;
