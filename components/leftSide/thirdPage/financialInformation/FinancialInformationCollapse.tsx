import React from "react";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import FinancialInformationForm from "./FinancialInformationForm";
const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "G. Financial Information",
    children: <FinancialInformationForm></FinancialInformationForm>,
  },
];

const FinancialInformationCollapse: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <Collapse items={items} defaultActiveKey={["1"]} onChange={onChange} />
  );
};

export default FinancialInformationCollapse;
