import React, { useEffect, useState } from "react";
import { Col, DatePicker, Form, Input, Radio, Row, Space } from "antd";
import dayjs from "dayjs";
import "animate.css";
import { useSelector } from "react-redux";

type FieldType = {
  sh_present_employer_name?: string;
  sh_present_employer_address?: string;
  sh_previous_employer_name?: string;
  sh_department?: string;
  sh_designation?: string;
  sh_current_year?: string;
  sh_current_month?: string;
  sh_previous_year?: string;
  sh_previous_month?: string;
  sh_contact_phone_number?: string;
  sh_ext_no?: string;
};

const dateFormat = "DD-MM-YYYY";
const ProfessionalInformationSHForm = () => {
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
        sh_present_employer_name: getOcrData[1]?.text?.applicant_employeer,
        sh_present_employer_address:
          getOcrData[1]?.text?.applicant_employeer_address,
        // sh_previous_employer_name: getOcrData[1]?.text?.applicant_company_name,
        // sh_department: getOcrData[1]?.text?.applicant_company_name,
        // sh_designation: getOcrData[1]?.text?.applicant_company_name,
        // sh_current_year: getOcrData[1]?.text?.applicant_company_name,
        // sh_current_month: getOcrData[1]?.text?.applicant_company_name,
        // sh_previous_year: getOcrData[1]?.text?.applicant_company_name,
        // sh_previous_month: getOcrData[1]?.text?.applicant_company_name,
        // sh_contact_phone_number: getOcrData[1]?.text?.applicant_company_name,
        // sh_ext_no: getOcrData[1]?.text?.applicant_company_name,
      });
    }
  }, [getOcrData, form]);
  return (
    <>
      <Form.Item<FieldType>
        label="Present Employer's Name"
        name="sh_present_employer_name"
        // rules={[{ required: true, message: "Please input your full name!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label="Present Employer's Address"
        name="sh_present_employer_address"
        // rules={[{ required: true, message: "Please input!" }]}
      >
        <Input />
      </Form.Item>
      <Row>
        <Col md={14}>
          <Form.Item<FieldType>
            label="Department"
            name="sh_department"
            style={{ marginRight: "10px" }}
            // rules={[
            //   { required: true, message: "Please input !" },
            // ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col md={10}>
          <Form.Item<FieldType>
            label="Designation"
            name="sh_designation"
            // rules={[
            //   { required: true, message: "Please" },
            // ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item name="" label="Employment Status">
        <Radio.Group>
          <Radio value="Permanent">Permanent</Radio>
          <Radio value="Contractual">Contractual</Radio>
        </Radio.Group>
      </Form.Item>

      <label htmlFor="gender">Length of Service with Current Employer</label>
      <Row>
        <Col md={12}>
          <Form.Item<FieldType>
            label="Year(s)"
            name="sh_current_year"
            style={{ marginRight: "10px" }}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col md={12}>
          <Form.Item<FieldType>
            label="Month(s)"
            name="sh_current_month"
            // rules={[
            //   { required: true, message: "Please input your spouse_profession!" },
            // ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Form.Item<FieldType>
            label="Contact Phone Number"
            name="sh_contact_phone_number"
            style={{ marginRight: "10px" }}
            // rules={[
            //   { required: true, message: "Please input !" },
            // ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col md={12}>
          <Form.Item<FieldType>
            label="Ext.no"
            name="sh_ext_no"
            // rules={[
            //   { required: true, message: "Please input !" },
            // ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item<FieldType>
        label="Previous Employer's Name"
        name="sh_previous_employer_name"
        // rules={[
        //   { required: true, message: "Please input !" },
        // ]}
      >
        <Input />
      </Form.Item>

      <label>Length of Service with Previous Employer</label>
      <Row>
        <Col md={12}>
          <Form.Item<FieldType>
            label="Year(s)"
            name="sh_previous_year"
            style={{ marginRight: "10px" }}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col md={12}>
          <Form.Item<FieldType>
            label="Month(s)"
            name="sh_previous_month"
            // rules={[
            //   { required: true, message: "Please input your spouse_profession!" },
            // ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
};

export default ProfessionalInformationSHForm;
