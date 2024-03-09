import React from "react";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import BankAccountDetailsForm from "./BankAccountDetailsForm";

// import ContactDetailsForm from "./ContactDetailsForm";
const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "H. Bank Account Details",
    children: <BankAccountDetailsForm />,
  },
];

const BankAccountDetailsCollapse: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <Collapse items={items} defaultActiveKey={["1"]} onChange={onChange} />
  );
};

export default BankAccountDetailsCollapse;
