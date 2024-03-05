"use client";
import React from "react";
import ManagerPart from "./ManagerPart";
import { Typography } from "antd";

const LeftPanel: React.FC = () => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <Typography> PERSONAL LOAN APPLICATION FORM</Typography>
    <ManagerPart></ManagerPart>
  </div>
);

export default LeftPanel;
