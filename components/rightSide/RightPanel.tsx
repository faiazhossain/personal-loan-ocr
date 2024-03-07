import { Image } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import "animate.css";
const RightPanel = () => {
  const getImageFiles = useSelector((state: any) => state.image.imageData);
  return (
    <div>
      {getImageFiles.map((image: any, index: any) => (
        <Image
          className="animate__animated animate__fadeInUp animate__fast"
          key={index}
          src={image}
          alt=""
        />
      ))}
    </div>
  );
};

export default RightPanel;
