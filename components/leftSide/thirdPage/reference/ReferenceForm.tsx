import React, { useEffect, useState } from "react";
import { Col, Form, Input, Radio, Row } from "antd";
import { useSelector } from "react-redux";
type FieldType = {
  reference_full_name?: string;
  reference_relationship?: string;
  reference_residence_address?: string;
  reference_work_address?: string;
  reference_number_land?: string;
  reference_number_mobile?: string;
  reference_full_name2?: string;
  reference_relationship2?: string;
  reference_residence_address2?: string;
  reference_work_address2?: string;
  reference_number_land2?: string;
  reference_number_mobile2?: string;
};

const ReferenceForm = () => {
  const form = Form.useFormInstance();

  // States
  const [showOtherInput, setShowOtherInput] = useState(false);
  const getOcrData = useSelector((state: any) => state.ocr.ocrData);
  console.log(getOcrData && getOcrData, "getOcrData");
  useEffect(() => {
    if (getOcrData.length > 0) {
      form.setFieldsValue({
        reference_full_name: getOcrData[2]?.text?.applicant_reference,
        reference_relationship:
          getOcrData[2]?.text?.applicant_reference_relationship,
        reference_residence_address:
          getOcrData[2]?.text?.applicant_reference_address,
        reference_work_address: getOcrData[2]?.text?.applicant_work_address,
        reference_number_land: getOcrData[2]?.text?.applicant_present_address,
        reference_number_mobile:
          getOcrData[2]?.text?.applicant_reference_mobile,
        reference_full_name2: getOcrData[2]?.text?.applicant_reference_2,
        reference_relationship2:
          getOcrData[2]?.text?.applicant_reference_2_relation,
        reference_residence_address2:
          getOcrData[2]?.text?.applicant_reference_2_present_addres,
        reference_work_address2:
          getOcrData[2]?.text?.applicant_reference_2_work_address,
        reference_number_land2: getOcrData[2]?.text?.applicant_present_address2,
        reference_number_mobile2:
          getOcrData[2]?.text?.applicant_reference_2_mobile_number,
      });
    }
  }, [getOcrData, form]);
  const handleEducationLevelChange = (e: any) => {
    setShowOtherInput(e.target.value === "Others");
  };
  // adsfla
  return (
    <>
      <Form.Item<FieldType> label="(1) Full Name" name="reference_full_name">
        <Input />
      </Form.Item>
      <Form.Item name="reference_relationship" label="Relationship">
        <Input />
      </Form.Item>
      <Form.Item name="reference_residence_address" label="Residence Address">
        <Input />
      </Form.Item>

      <Form.Item<FieldType> label="Work Address" name="reference_work_address">
        <Input />
      </Form.Item>

      <Row gutter={10}>
        <Col span={12}>
          <Form.Item<FieldType>
            label="Contact No. Land"
            name="reference_number_land"
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item<FieldType> label="Mobile" name="reference_number_mobile">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      {/* 2nd table */}
      <Form.Item<FieldType> label="(2) Full Name" name="reference_full_name2">
        <Input />
      </Form.Item>
      <Form.Item name="reference_relationship2" label="Relationship">
        <Input />
      </Form.Item>
      <Form.Item name="reference_residence_address2" label="Residence Address">
        <Input />
      </Form.Item>

      <Form.Item<FieldType> label="Work Address" name="reference_work_address2">
        <Input />
      </Form.Item>

      <Row gutter={10}>
        <Col span={12}>
          <Form.Item<FieldType>
            label="Contact No. Land"
            name="reference_number_land2"
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item<FieldType> label="Mobile" name="reference_number_mobile2">
            <Input />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
};

export default ReferenceForm;
