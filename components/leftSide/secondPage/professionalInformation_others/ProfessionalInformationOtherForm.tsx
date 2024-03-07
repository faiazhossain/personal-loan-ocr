import React, { useState } from "react";
import { Col, DatePicker, Form, Input, Radio, Row, Space } from "antd";
import dayjs from "dayjs";
import "animate.css";

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
    const [showOtherInput, setShowOtherInput] = useState(false);

    const handleEducationLevelChange = (e: any) => {
        setShowOtherInput(e.target.value === "Others");
    };

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
