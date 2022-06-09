import React from "react";
import { RoverType } from "../../../api-client/types/nasa";

import "./styles.css";

type Props = { rover: RoverType };

export const Rover = ({ rover }: Props) => {
  return (
    <div>
      <div>{rover.id}</div>
      <div>{rover.landing_date}</div>
      <div>{rover.max_date}</div>
      <div>{rover.max_sol}</div>
      <div>{rover.name}</div>
    </div>
  );
};
