import React from "react";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import ReferenceForm from "./ReferenceForm";

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "K. Reference (Immediate Relatives Preffered)",
    children: <ReferenceForm />,
  },
];

const ReferenceCollapse: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <Collapse items={items} defaultActiveKey={["1"]} onChange={onChange} />
  );
};

export default ReferenceCollapse;
