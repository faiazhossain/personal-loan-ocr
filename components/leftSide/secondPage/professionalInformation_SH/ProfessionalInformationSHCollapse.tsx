import React from "react";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import ProfessionalInformationSHForm from "./ProfessionalInformationSHForm";
const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "D. Professional Information (For Service Holder)",
    children: <ProfessionalInformationSHForm />,
  },
];

const ProfessionalInformationSHCollapse: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <Collapse items={items} defaultActiveKey={["1"]} onChange={onChange} />
  );
};

export default ProfessionalInformationSHCollapse;
