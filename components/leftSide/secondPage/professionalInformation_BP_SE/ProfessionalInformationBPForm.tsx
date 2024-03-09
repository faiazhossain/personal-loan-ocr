import React, { useEffect, useState } from "react";
import { Col, Form, Input, Radio, Row, Space } from "antd";
import "animate.css";
import { useSelector } from "react-redux";

type FieldType = {
  bp_company_name?: string;
  bp_office_address?: string;
  bp_nature_of_business?: string;
  bp_current_year?: string;
  bp_current_month?: string;
  bp_contact_phone_number?: string;
};

const dateFormat = "DD-MM-YYYY";
const ProfessionalInformationBPForm = () => {
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
        bp_company_name: getOcrData[1]?.text?.applicant_company_name,
        bp_office_address: getOcrData[1]?.text?.applicant_office_address,
        bp_nature_of_business: getOcrData[1]?.text?.applicant_nature_business,
      });
    }
  }, [getOcrData, form]);

  return (
    <>
      <Form.Item<FieldType>
        label="Company's Name"
        name="bp_company_name"
        // rules={[{ required: true, message: "Please input !" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label="Office Address"
        name="bp_office_address"
        // rules={[{ required: true, message: "Please input!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label="Nature of Business"
        name="bp_nature_of_business"
        style={{ marginRight: "10px" }}
        // rules={[
        //   { required: true, message: "Please input your !" },
        // ]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="bp_type_of_business" label="Type of Business">
        <Radio.Group>
          <Radio value="Proprietorship">Proprietorship</Radio>
          <Radio value="Partnership">Partnership</Radio>
          <Radio value="Limited Company">Limited Company</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item<FieldType>
        label="Contact Phone Number"
        name="bp_contact_phone_number"
        style={{ marginRight: "10px" }}
        // rules={[
        //   { required: true, message: "Please input !" },
        // ]}
      >
        <Input />
      </Form.Item>

      <label htmlFor="gender">Length of Service with Current Business</label>
      <Row>
        <Col md={12}>
          <Form.Item<FieldType>
            label="Year(s)"
            name="bp_current_year"
            style={{ marginRight: "10px" }}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col md={12}>
          <Form.Item<FieldType>
            label="Month(s)"
            name="bp_current_month"
            // rules={[
            //   { required: true, message: "Please input your !" },
            // ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
};

export default ProfessionalInformationBPForm;
