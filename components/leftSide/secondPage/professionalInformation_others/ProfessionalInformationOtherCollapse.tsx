import React from "react";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import ProfessionalInformationOtherForm from "./ProfessionalInformationOtherForm";
const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "F. Professional Information (Doctors/Engineers/Architects/Chartered Accountants/Other Professionals)",
    children: <ProfessionalInformationOtherForm />,
},
];

const ProfessionalInformationOtherCollapse: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <Collapse items={items} defaultActiveKey={["1"]} onChange={onChange} />
  );
};

export default ProfessionalInformationOtherCollapse;
