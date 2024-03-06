import { Image } from "antd";
import React from "react";
import { useSelector } from "react-redux";

const RightPanel = () => {
  const getImageFiles = useSelector((state: any) => state.image.imageData);
  return (
    <div>
      {getImageFiles.map((image: any, index: any) => (
        <Image key={index} src={image} alt="" />
      ))}
    </div>
  );
};

export default RightPanel;
