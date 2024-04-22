import React, { useEffect, useState } from "react";
import { Col, DatePicker, Form, Input, Radio, Row, Space } from "antd";
import dayjs from "dayjs";
import "animate.css";
import { useSelector } from "react-redux";

type FieldType = {
  other_company_name?: string;
  other_office_address?: string;
  other_profession?: string;
  other_current_year?: string;
  other_current_month?: string;
  other_contact_phone_number?: string;
};

const dateFormat = "DD-MM-YYYY";
const ProfessionalInformationOtherForm = () => {
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
        other_company_name: getOcrData[1]?.text?.applicant_company_name_2,
        other_office_address: getOcrData[1]?.text?.applicant_office_address_2,
        other_profession: getOcrData[1]?.text?.applicant_profession,
        // other_current_year: getOcrData[1]?.text?.applicant_company_name,
        // other_current_month: getOcrData[1]?.text?.applicant_company_name,
        other_contact_phone_number:
          getOcrData[1]?.text?.applicant_work_number_2,
      });
    }
  }, [getOcrData, form]);

  return (
    <>
      <Form.Item<FieldType>
        label="Profession"
        name="other_profession"
        style={{ marginRight: "10px" }}
        // rules={[
        //   { required: true, message: "Please !" },
        // ]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label="Company's Name"
        name="other_company_name"
        // rules={[{ required: true, message: "Please input !" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label="Office Address"
        name="other_office_address"
        // rules={[{ required: true, message: "Please input !" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Contact Phone Number"
        name="other_contact_phone_number"
        style={{ marginRight: "10px" }}
        // rules={[
        //   { required: true, message: "Please input !" },
        // ]}
      >
        <Input />
      </Form.Item>

      <label htmlFor="gender">Length of Practice/Service</label>
      <Row>
        <Col md={12}>
          <Form.Item<FieldType>
            label="Year(s)"
            name="other_current_year"
            style={{ marginRight: "10px" }}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col md={12}>
          <Form.Item<FieldType>
            label="Month(s)"
            name="other_current_month"
            // rules={[
            //   { required: true, message: "Please input !" },
            // ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
};

export default ProfessionalInformationOtherForm;
