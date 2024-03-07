import React, { useEffect, useState } from "react";
import { Col, Form, Input, Radio, Row } from "antd";
import { useSelector } from "react-redux";
type FieldType = {
  present_address?: string;
  residence_status?: string;
  other_residence_status?: string;
  years_in_current_address?: string;
  permanent_address?: string;
  work_address?: string;
  number_home?: string;
  number_office?: string;
  number_mobile?: string;
  email?: string;
};

const dateFormat = "DD-MM-YYYY";
const ContactDetailsForm = () => {
  const form = Form.useFormInstance();

  // States
  const [showOtherInput, setShowOtherInput] = useState(false);
  const getOcrData = useSelector((state: any) => state.ocr.ocrData);
  console.log(getOcrData && getOcrData, "getOcrData");
  useEffect(() => {
    if (getOcrData.length > 0) {
      form.setFieldsValue({
        present_address: getOcrData[0]?.text?.applicant_present_address,
        residence_status: getOcrData[0]?.text?.applicant_residence_status,
        years_in_current_address:
          getOcrData[0]?.text?.applicant_year_current_address,
        gender: getOcrData[0]?.text?.applicant_gender,
        permanent_address: getOcrData[0]?.text?.applicant_permanent_address,
        work_address: getOcrData[0]?.text?.applicant_work_address,
        number_home: getOcrData[0]?.text?.applicant_work_number,
        number_office: getOcrData[0]?.text?.applicant_work_number2,
        number_mobile: getOcrData[0]?.text?.applicant_mobile,
        applicant_email: getOcrData[0]?.text?.applicant_email,
      });
    }
  }, [getOcrData, form]);
  const handleEducationLevelChange = (e: any) => {
    setShowOtherInput(e.target.value === "Others");
  };

  return (
    <>
      <Form.Item<FieldType>
        label="Present Address"
        name="present_address"
        // rules={[{ required: true, message: "Please input your full name!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="residence_status" label="Residence Status">
        <Radio.Group onChange={handleEducationLevelChange}>
          <Radio value="Own">Own</Radio>
          <Radio value="Rented">Rented</Radio>
          <Radio value="Family Owned">Family Owned</Radio>
          <Radio value="Others">Others</Radio>
        </Radio.Group>
      </Form.Item>
      {showOtherInput && (
        <Form.Item name="other_residence_status">
          <Input className="animate__animated animate__bounceIn" />
        </Form.Item>
      )}
      <Form.Item
        name="years_in_current_address"
        label="Years in Current Address"
      >
        <Radio.Group>
          <Radio value="1 year">1 year</Radio>
          <Radio value="1-3 years">1-3 years</Radio>
          <Radio value="3-5 years">3-5 years</Radio>
          <Radio value="5-10 years">5-10 years</Radio>
          <Radio value="Above 10 years">Above 10 years</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item<FieldType>
        label="Permanent Address"
        name="permanent_address"
        // rules={[{ required: true, message: "Please input your full name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Work Address"
        name="work_address"
        // rules={[{ required: true, message: "Please input your full name!" }]}
      >
        <Input />
      </Form.Item>
      {/* <h4>Contact Number</h4> */}
      <Row gutter={10}>
        <Col md={5}>
          <Form.Item name="number_home" label="Home">
            <Input />
          </Form.Item>
        </Col>
        <Col md={5}>
          <Form.Item name="number_office" label="Office">
            <Input />
          </Form.Item>
        </Col>
        <Col md={6}>
          <Form.Item name="number_mobile" label="Mobile">
            <Input />
          </Form.Item>
        </Col>
        <Col md={8}>
          <Form.Item name="applicant_email" label="Email">
            <Input />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
};

export default ContactDetailsForm;
