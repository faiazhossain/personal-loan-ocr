import React from "react";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import CoApplicantInformationForm from "./CoApplicantInformationForm";
// import ContactDetailsForm from "./ContactDetailsForm";
const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "B. Co-Applicant's Information",
    children: <CoApplicantInformationForm />,
  },
];

const CoApplicantInformationCollapse: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <Collapse items={items} defaultActiveKey={["1"]} onChange={onChange} />
  );
};

export default CoApplicantInformationCollapse;
