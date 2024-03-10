import React from "react";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import LoanWithBankForm from "./loanWithBankForm";
const items: CollapseProps["items"] = [
  {
    key: "1",
    label:
      "I. Loan with Bank(s)/Financial Institution(s)/Employer(Personal and Business Loan)",
    children: <LoanWithBankForm></LoanWithBankForm>,
  },
];

const LoanWithBankCollapse: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <Collapse items={items} defaultActiveKey={["1"]} onChange={onChange} />
  );
};

export default LoanWithBankCollapse;
