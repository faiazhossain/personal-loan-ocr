import React, { useEffect, useState } from "react";
import { Col, DatePicker, Form, Input, Radio, Row } from "antd";
import "animate.css";
import { useSelector } from "react-redux";

type FieldType = {
  banks_name?: string;
  type_of_account?: string;
  account_no?: string;
  banks_name2?: string;
  type_of_account2?: string;
  account_no2?: number;
};
const BankAccountDetailsForm = () => {
  // States
  const form = Form.useFormInstance();
  const [showOtherInput, setShowOtherInput] = useState(false);
  const getOcrData = useSelector((state: any) => state.ocr.ocrData);
  const handleEducationLevelChange = (e: any) => {
    setShowOtherInput(e.target.value === "Others");
  };
  useEffect(() => {
    if (getOcrData.length > 0) {
      form.setFieldsValue({
        banks_name: getOcrData[2]?.text?.applicant_bank_name_01,
        type_of_account: getOcrData[2]?.text?.applicant_bank_acc_type_01,
        account_no: getOcrData[2]?.text?.applicant_bank_acc_number_01,
        banks_name2: getOcrData[2]?.text?.applicant_bank_name_02,
        type_of_account2: getOcrData[2]?.text?.applicant_bank_acc_type_02,
        account_no2: getOcrData[2]?.text?.applicant_bank_acc_number_02,
      });
    }
  }, [getOcrData, form]);
  return (
    <>
      <Form.Item<FieldType> label="Bank's Name" name="banks_name">
        <Input />
      </Form.Item>
      <Row gutter={10}>
        <Col span={12}>
          <Form.Item<FieldType>
            label="Type of Account Name"
            name="type_of_account"
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item<FieldType> label="Account No" name="account_no">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item<FieldType> label="Bank's Name" name="banks_name2">
        <Input />
      </Form.Item>
      <Row gutter={10}>
        <Col span={12}>
          <Form.Item<FieldType>
            label="Type of Account Name"
            name="type_of_account2"
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item<FieldType> label="Account No" name="account_no2">
            <Input />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
};

export default BankAccountDetailsForm;
