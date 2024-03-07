import React, { useEffect, useState } from "react";
import { Col, DatePicker, Form, Input, Radio, Row, Space } from "antd";
import dayjs from "dayjs";
import "animate.css";
import { useSelector } from "react-redux";

type FieldType = {
  full_name?: string;
  mother_name?: string;
  father_name?: string;
  date_picker?: string;
  gender?: string;
  marital_status?: string;
  employment_status?: string;
  spouse_name?: string;
  spouse_profession?: string;
  spouse_Work_Address?: string;
  spouse_land_phone?: number;
  spouse_mobile_phone?: number;
  other_education_level?: string;
};

const dateFormat = "DD-MM-YYYY";
const PersonalInformationForm = () => {
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
        full_name: getOcrData[0]?.text?.applicant_name,
        mother_name: getOcrData[0]?.text?.applicant_mother_name,
        father_name: getOcrData[0]?.text?.applicant_father_name,
        gender: getOcrData[0]?.text?.applicant_gender,
        marital_status: getOcrData[0]?.text?.applicant_married_status,
        employment_status: getOcrData[0]?.text?.applicant_employement_status,
        spouse_name: getOcrData[0]?.text?.applicant_spouse_name,
        spouse_mobile_phone: getOcrData[0]?.text?.applicant_spouse_number,
        spouse_profession: getOcrData[0]?.text?.applicant_spouse_profession,
      });
    }
  }, [getOcrData, form]);

  return (
    <>
      <Form.Item<FieldType>
        label="Full Name"
        name="full_name"
        // rules={[{ required: true, message: "Please input your full name!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label="Mother's Name"
        name="mother_name"
        // rules={[{ required: true, message: "Please input your mother's name!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label="Father's Name"
        name="father_name"
        // rules={[{ required: true, message: "Please input your father's name!" }]}
      >
        <Input />
      </Form.Item>
      <Row>
        <Col md={12}>
          <Form.Item label="Date of Birth" name="date_picker">
            <DatePicker
              defaultValue={dayjs("01-01-2015", dateFormat)}
              format={dateFormat}
            />
          </Form.Item>
        </Col>
        <Col md={12}>
          <Form.Item name="gender" label="Gender">
            <Radio.Group>
              <Radio value="Male">Male</Radio>
              <Radio value="Female">Female</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Form.Item name="marital_status" label="Marital Status">
        <Radio.Group>
          <Radio value="Single">Single</Radio>
          <Radio value="Married">Married</Radio>
          <Radio value="Widow">Widow</Radio>
          <Radio value="Separated">Separated</Radio>
        </Radio.Group>
      </Form.Item>
      <Row>
        <Col md={12}>
          <Form.Item<FieldType>
            label="Spouse's Name"
            name="spouse_name"
            style={{ marginRight: "10px" }}
            // rules={[
            //   { required: true, message: "Please input your father's name!" },
            // ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col md={12}>
          <Form.Item<FieldType>
            label="Profession"
            name="spouse_profession"
            // rules={[
            //   { required: true, message: "Please input your spouse_profession!" },
            // ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item<FieldType>
        label="Spouse's Work Address"
        name="spouse_Work_Address"
        // rules={[
        //   { required: true, message: "Please input your spouse_profession!" },
        // ]}
      >
        <Input />
      </Form.Item>
      <Row>
        <Col md={12}>
          <Form.Item<FieldType>
            label="Spouse's or Parents Land phone"
            name="spouse_land_phone"
            style={{ marginRight: "10px" }}
            // rules={[
            //   { required: true, message: "Please input your father's name!" },
            // ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col md={12}>
          <Form.Item<FieldType>
            label="Spouse's or Parents Mobile phone"
            name="spouse_mobile_phone"
            // rules={[
            //   { required: true, message: "Please input your spouse_profession!" },
            // ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item name="highest_education_level" label="Highest Education Level">
        <Radio.Group onChange={handleEducationLevelChange}>
          <Radio value="SSC">SSC</Radio>
          <Radio value="HSC">HSC</Radio>
          <Radio value="Graduate">Graduate</Radio>
          <Radio value="Post Graduate">Post Graduate</Radio>
          <Radio value="Others">Others</Radio>
        </Radio.Group>
      </Form.Item>
      {showOtherInput && (
        <Form.Item name="other_education_level">
          <Input className="animate__animated animate__bounceIn" />
        </Form.Item>
      )}
      <Form.Item name="employment_status" label="Employment Status">
        <Radio.Group onChange={handleEducationLevelChange}>
          <Radio value="Salaried">Salaried</Radio>
          <Radio value="Business Person">Business Person</Radio>
          <Radio value="Professional">Professional</Radio>
        </Radio.Group>
      </Form.Item>{" "}
      <Form.Item name="identification_document" label="Identification Document">
        <Radio.Group onChange={handleEducationLevelChange}>
          <Radio value="Passport">Passport</Radio>
          <Radio value="Voter ID">Voter ID</Radio>
          <Radio value="Driving License">Driving License</Radio>
          <Radio value="Commisionar's Certificate">
            Commisionar&apos;s Certificate
          </Radio>
        </Radio.Group>
      </Form.Item>
    </>
  );
};

export default PersonalInformationForm;
