import React from "react";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import ContactDetailsForm from "./ContactDetailsForm";
const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "B. Contact Details",
    children: <ContactDetailsForm />,
  },
];

const ContactDetails: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <Collapse items={items} defaultActiveKey={["1"]} onChange={onChange} />
  );
};

export default ContactDetails;
