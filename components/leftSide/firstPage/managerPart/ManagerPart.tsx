import { Col, Form, Input, Row } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
type FieldType = {
  manager_branch_name?: string;
  loan_amount?: string;
  loan_apply_date?: string;
  loan_amount_in_words?: string;
  purpose_of_loan?: string;
};
const ManagerPart = () => {
  const form = Form.useFormInstance();
  const getOcrData = useSelector((state: any) => state.ocr.ocrData);
  useEffect(() => {
    if (getOcrData.length > 0) {
      form.setFieldsValue({
        // manager_branch_name: getOcrData[0]?.text?.applicant_present_address,
        loan_amount: getOcrData[0]?.text?.loan_amount,
        loan_apply_date: getOcrData[0]?.text?.application_date,
        loan_amount_in_words: getOcrData[0]?.text?.loan_amount_in_words,
        purpose_of_loan: getOcrData[0]?.text?.loan_purpose,
      });
    }
  }, [getOcrData, form]);
  return (
    <div>
      <h4>The Manager</h4>
      <p>The City Bank Limited</p>
      <Row gutter={20}>
        <Col span={6}>
          <Form.Item<FieldType>
            name="manager_branch_name"
            // rules={[{ required: true, message: "Please input your full name!" }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={4}>: Branch</Col>
        <Col span={6}>
          {" "}
          <Form.Item<FieldType>
            name="loan_apply_date"
            // rules={[{ required: true, message: "Please input your full name!" }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={3}>: Date</Col>
      </Row>
      <Row>
        <Col span={10}>I/we hereby apply for a loan of Tk. (in numbers)</Col>
        <Col span={14}>
          <Form.Item<FieldType>
            name="loan_amount"
            // rules={[{ required: true, message: "Please input your full name!" }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={3}>(in words)</Col>
        <Col span={21}>
          <Form.Item<FieldType>
            name="loan_amount_in_words"
            // rules={[{ required: true, message: "Please input your full name!" }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={3}>Purpose</Col>
        <Col span={21}>
          <Form.Item<FieldType>
            name="purpose_of_loan"
            // rules={[{ required: true, message: "Please input your full name!" }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
    </div>
  );
};

export default ManagerPart;
