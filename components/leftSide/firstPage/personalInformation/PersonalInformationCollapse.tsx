import React from "react";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import PersonalInformationTable from "./PersonalInformationForm";
const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "A. Personal Information (Principal Applicant)",
    children: <PersonalInformationTable></PersonalInformationTable>,
  },
];

const PersonalInformationCollapse: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <Collapse items={items} defaultActiveKey={["1"]} onChange={onChange} />
  );
};

export default PersonalInformationCollapse;
