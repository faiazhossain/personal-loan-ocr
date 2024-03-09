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
const LoanWithBankForm = () => {
  // States
  // const [showOtherInput, setShowOtherInput] = useState(false);
  // const getOcrData = useSelector((state: any) => state.ocr.ocrData);
  // const handleEducationLevelChange = (e: any) => {
  //   setShowOtherInput(e.target.value === "Others");
  // };
  // useEffect(() => {
  //   if (getOcrData.length > 0) {
  //     form.setFieldsValue({
  //       full_name: getOcrData[0]?.text?.applicant_name,
  //       mother_name: getOcrData[0]?.text?.applicant_mother_name,
  //       father_name: getOcrData[0]?.text?.applicant_father_name,
  //       gender: getOcrData[0]?.text?.applicant_gender,
  //       date_of_birth: getOcrData[0]?.text?.applicant_date_of_birth,
  //       marital_status: getOcrData[0]?.text?.applicant_married_status,
  //       employment_status: getOcrData[0]?.text?.applicant_employement_status,
  //       spouse_name: getOcrData[0]?.text?.applicant_spouse_name,
  //       spouse_mobile_phone: getOcrData[0]?.text?.applicant_spouse_number,
  //       spouse_profession: getOcrData[0]?.text?.applicant_spouse_profession,
  //     });
  //   }
  // }, [getOcrData, form]);

  return (
    <>
      <Row>
        <Col span={24}>
          <p>Loan</p>
          <table className="custom-table">
            <thead>
              <tr>
                <th>Lender&apos;s Name</th>
                <th>Type of Facility</th>
                <th>Disbursed Amount</th>
                <th>Outstanding</th>
                <th>EMI</th>
                <th>Expiry Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </Col>
        <Col span={24}>
          <p>Credit card</p>
          <table className="custom-table">
            <thead>
              <tr>
                <th>Issuer&apos;s Name</th>
                <th>Card No</th>
                <th>Limit</th>
                <th>Outstanding</th>
                <th>Expiry Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </>
  );
};

export default LoanWithBankForm;
