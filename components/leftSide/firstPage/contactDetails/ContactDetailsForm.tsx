import React, { useState } from "react";
import {
  Col,
  Form,
  Input,
  Radio,
  Row,
} from "antd";

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
  // States
  const [showOtherInput, setShowOtherInput] = useState(false);

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
      <h4>Contact Number</h4>
      <Row gutter={10}>
        <Col md={5}>
          <Form.Item name="number_home" label="Home">
            <Radio.Group>
              <Input />
            </Radio.Group>
          </Form.Item>
        </Col>{" "}
        <Col md={5}>
          <Form.Item name="number_office" label="Office">
            <Radio.Group>
              <Input />
            </Radio.Group>
          </Form.Item>
        </Col>{" "}
        <Col md={6}>
          <Form.Item name="number_mobile" label="Mobile">
            <Radio.Group>
              <Input />
            </Radio.Group>
          </Form.Item>
        </Col>{" "}
        <Col md={8}>
          <Form.Item name="email" label="Email">
            <Radio.Group>
              <Input />
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      {/* <Row>
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
        <Radio.Group>
          <Radio value="SSC">SSC</Radio>
          <Radio value="HSC">HSC</Radio>
          <Radio value="Graduate">Graduate</Radio>
          <Radio value="Post Graduate">Post Graduate</Radio>
          <Radio value="Others">Others</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item name="employment_status" label="Employment Status">
        <Radio.Group>
          <Radio value="Salaried">Salaried</Radio>
          <Radio value="Business Person">Business Person</Radio>
          <Radio value="Professional">Professional</Radio>
        </Radio.Group>
      </Form.Item>{" "}
      <Form.Item name="identification_document" label="Identification Document">
        <Radio.Group>
          <Radio value="Passport">Passport</Radio>
          <Radio value="Voter ID">Voter ID</Radio>
          <Radio value="Driving License">Driving License</Radio>
          <Radio value="Commisionar's Certificate">
            Commisionar&apos;s Certificate
          </Radio>
        </Radio.Group>
      </Form.Item> */}
    </>
  );
};

export default ContactDetailsForm;
