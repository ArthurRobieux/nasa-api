import React, { useState, useEffect } from "react";

import { apiClient } from "../../../api-client";
import { ApiRoverList, RoverType } from "../../../api-client/types/nasa";
import { Loader } from "../../../common-ui";
import { Rover } from "../Rover/Rover";

import "./styles.css";

export const Rovers = () => {
  const [rovers, setRovers] = useState<ApiRoverList | null>(null);
  const [selectedRover, setSelectedRover] = useState<RoverType | null>(null);

  const fetchData = () => {
    apiClient.rovers.getRoverList().then((response) => {
      setRovers(response);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(rovers);

  if (!rovers) return <Loader />;

  return (
    <div>
      <div className="container">
        {rovers.rovers.map((rover) => {
          return (
            <div className="rover-name" onClick={() => setSelectedRover(rover)}>
              {rover.name}
            </div>
          );
        })}
      </div>
      <div className="rover-detail">
        {selectedRover && <Rover rover={selectedRover} />}
      </div>
    </div>
  );
};
