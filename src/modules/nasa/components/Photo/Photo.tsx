import React from "react";

import "./styles.css";

export type PhotoProps = { photo: { img_src: string } };

export const Photo = ({ photo }: PhotoProps) => {
  return (
    <div className="photoContainer">
      <img src={photo.img_src} alt="img" className="photo" />
    </div>
  );
};
