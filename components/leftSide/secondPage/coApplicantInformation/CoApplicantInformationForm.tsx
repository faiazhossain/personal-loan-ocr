import React, { useEffect, useState } from "react";
import { Col, DatePicker, Form, Input, Radio, Row, Space } from "antd";
import dayjs from "dayjs";
import "animate.css";
import { useSelector } from "react-redux";

type FieldType = {
  co_applicant_full_name?: string;
  co_applicant_mother_name?: string;
  co_applicant_father_name?: string;
  co_applicant_date_picker?: string;
  co_applicant_gender?: string;
  co_applicant_etin?: number;
  co_applicant_other_education_level?: string;
};

const dateFormat = "DD-MM-YYYY";
const CoApplicantInformationForm = () => {
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
        co_applicant_full_name: getOcrData[1]?.text?.applicant_name,
        // mother_name: getOcrData[1]?.text?.applicant_mother_name,
        // father_name: getOcrData[1]?.text?.applicant_father_name,
        // gender: getOcrData[1]?.text?.applicant_gender,
        // marital_status: getOcrData[1]?.text?.applicant_married_status,
        // employment_status: getOcrData[1]?.text?.applicant_employement_status,
        // spouse_name: getOcrData[1]?.text?.applicant_spouse_name,
        // spouse_mobile_phone: getOcrData[1]?.text?.applicant_spouse_number,
        // spouse_profession: getOcrData[1]?.text?.applicant_spouse_profession,
      });
    }
  }, [getOcrData, form]);
  return (
    <>
      <Form.Item<FieldType>
        label="Full Name"
        name="co_applicant_full_name"
        // rules={[{ required: true, message: "Please input your full name!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label="Mother's Name"
        name="co_applicant_mother_name"
        // rules={[{ required: true, message: "Please input your mother's name!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label="Father's Name"
        name="co_applicant_father_name"
        // rules={[{ required: true, message: "Please input your father's name!" }]}
      >
        <Input />
      </Form.Item>
      <Row>
        <Col md={12}>
          <Form.Item label="Date of Birth" name="co_applicant_date_picker">
            <DatePicker
              defaultValue={dayjs("01-01-2015", dateFormat)}
              format={dateFormat}
            />
          </Form.Item>
        </Col>
        <Col md={12}>
          <Form.Item name="co_applicant_gender" label="Gender">
            <Radio.Group>
              <Radio value="Male">Male</Radio>
              <Radio value="Female">Female</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        name="co_applicant_highest_education_level"
        label="Highest Education Level"
      >
        <Radio.Group onChange={handleEducationLevelChange}>
          <Radio value="SSC">SSC</Radio>
          <Radio value="HSC">HSC</Radio>
          <Radio value="Graduate">Graduate</Radio>
          <Radio value="Post Graduate">Post Graduate</Radio>
          <Radio value="Others">Others</Radio>
        </Radio.Group>
      </Form.Item>
      {showOtherInput && (
        <Form.Item name="co_applicant_other_education_level">
          <Input className="animate__animated animate__bounceIn" />
        </Form.Item>
      )}
      <Form.Item
        name="co_applicant_employment_status"
        label="Employment Status"
      >
        <Radio.Group onChange={handleEducationLevelChange}>
          <Radio value="Salaried">Salaried</Radio>
          <Radio value="Business Person">Business Person</Radio>
          <Radio value="Professional">Professional</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item<FieldType> label="E-TIN" name="co_applicant_etin">
        <Input type="number" />
      </Form.Item>
      <Form.Item
        name="co_applicant_identification_document"
        label="Identification Document"
      >
        <Input />
      </Form.Item>
    </>
  );
};

export default CoApplicantInformationForm;
