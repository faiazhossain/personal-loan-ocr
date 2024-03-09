import React from "react";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import AppliedForLoanTakeForm from "./AppliedForLoanTakeForm";

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "J. Applied for Loan Take Over/Balance Transfer",
    children: <AppliedForLoanTakeForm></AppliedForLoanTakeForm>,
  },
];

const AppliedForLoanTakeCollapse: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <Collapse items={items} defaultActiveKey={["1"]} onChange={onChange} />
  );
};

export default AppliedForLoanTakeCollapse;
