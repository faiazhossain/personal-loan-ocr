import React, { useEffect, useState } from "react";
import { Col, DatePicker, Form, Input, Radio, Row, Space } from "antd";
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
const AppliedForLoanTakeForm = () => {
  // States
  const [showOtherInput, setShowOtherInput] = useState(false);
  const getOcrData = useSelector((state: any) => state.ocr.ocrData);
  const handleEducationLevelChange = (e: any) => {
    setShowOtherInput(e.target.value === "Others");
  };
  useEffect(() => {
    if (getOcrData.length > 0) {
    }
  }, [getOcrData]);

  return (
    <>
      <Row>
        <Col span={24}>
          <p>Loan</p>
          <table className="custom-table">
            <thead>
              <tr>
                <th>Lender&apos;s Name</th>
                <th>Type of Loan</th>
                <th>Loan A/C No.</th>
                <th>Disbursement Date</th>
                <th>Disbursed Amount</th>
                <th>OutStanding</th>
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

export default AppliedForLoanTakeForm;
