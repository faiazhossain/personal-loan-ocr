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
const FinancialInformationForm = () => {
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
        <Col span={12}>
          <table className="custom-table">
            <thead>
              <tr>
                <th>Monthly Income</th>
                <th>Amount(Tk.)</th>
                <th>Bank Use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Gross Monthly Salary/Income</td>
                <td>{getOcrData[0]?.text?.applicant_name}</td>
                <td></td>
              </tr>
              <tr>
                <td>Spouse&apos;s Salary/Income</td>
                <td>{getOcrData[0]?.text?.applicant_name}</td>
                <td></td>
              </tr>
              <tr>
                <td>Rent Income</td>
                <td>{getOcrData[0]?.text?.applicant_name}</td>
                <td></td>
              </tr>
              <tr>
                <td>Interest Income</td>
                <td></td>
                <td></td>
              </tr>
              <tr></tr>
              <tr>
                <td>Other Income</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Total</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </Col>
        <Col span={12}>
          <table className="custom-table">
            <thead>
              <tr>
                <th>Monthly Income</th>
                <th>Amount(Tk.)</th>
                <th>Bank Use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Gross Monthly Salary/Income</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Spouse&apos;s Salary/Income</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Rent Income</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Interest Income</td>
                <td></td>
                <td></td>
              </tr>
              <tr></tr>
              <tr>
                <td>Other Income</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Total</td>
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

export default FinancialInformationForm;
