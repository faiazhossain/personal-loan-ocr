import React from "react";
import { Button, Checkbox, Form, Input } from "antd";

type FieldType = {
  username2?: string;
  password2?: string;
  remember?: string;
};

const ContactDetailsForm: React.FC = () => (
  <>
    <Form.Item<FieldType>
      label="Username2"
      name="username2"
      rules={[{ required: true, message: "Please input your username!" }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Password2"
      name="password2"
      rules={[{ required: true, message: "Please input your password!" }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item<FieldType>
      name="remember"
      valuePropName="checked"
      wrapperCol={{ offset: 8, span: 16 }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>
  </>
);

export default ContactDetailsForm;
