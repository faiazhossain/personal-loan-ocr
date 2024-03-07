import React from "react";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import ProfessionalInformationBPForm from "./ProfessionalInformationBPForm";
const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "E. Professional Information (For Business Person/Self-Employed)",
    children: <ProfessionalInformationBPForm />,
},
];

const ProfessionalInformationBPCollapse: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <Collapse items={items} defaultActiveKey={["1"]} onChange={onChange} />
  );
};

export default ProfessionalInformationBPCollapse;
