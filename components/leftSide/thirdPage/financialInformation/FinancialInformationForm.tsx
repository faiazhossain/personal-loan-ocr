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
  console.log(getOcrData[2]?.tables[0][2][1]);
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
                <td>{getOcrData[2]?.tables[0][2][1]}</td>
                <td>{getOcrData[2]?.tables[0][2][2]}</td>
              </tr>
              <tr>
                <td>Spouse&apos;s Salary/Income</td>
                <td>{getOcrData[2]?.tables[0][3][1]}</td>
                <td>{getOcrData[2]?.tables[0][3][2]}</td>
              </tr>
              <tr>
                <td>Rent Income</td>
                <td>{getOcrData[2]?.tables[0][4][1]}</td>
                <td>{getOcrData[2]?.tables[0][4][2]}</td>
              </tr>
              <tr>
                <td>Interest Income</td>
                <td>{getOcrData[2]?.tables[0][5][1]}</td>
                <td>{getOcrData[2]?.tables[0][5][2]}</td>
              </tr>
              <tr></tr>
              <tr>
                <td>Other Income</td>
                <td>{getOcrData[2]?.tables[0][6][1]}</td>
                <td>{getOcrData[2]?.tables[0][6][2]}</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>{getOcrData[2]?.tables[0][7][1]}</td>
                <td>{getOcrData[2]?.tables[0][7][2]}</td>
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
                <td>Rent & Utility</td>
                <td>{getOcrData[2]?.tables[0][2][4]}</td>
                <td>{getOcrData[2]?.tables[0][2][5]}</td>
              </tr>
              <tr>
                <td>Food & Clothing</td>
                <td>{getOcrData[2]?.tables[0][3][4]}</td>
                <td>{getOcrData[2]?.tables[0][3][5]}</td>
              </tr>
              <tr>
                <td>Education</td>
                <td>{getOcrData[2]?.tables[0][4][4]}</td>
                <td>{getOcrData[2]?.tables[0][4][5]}</td>
              </tr>
              <tr>
                <td>Loan Repayment (if any)</td>
                <td>{getOcrData[2]?.tables[0][5][4]}</td>
                <td>{getOcrData[2]?.tables[0][5][5]}</td>
              </tr>
              <tr></tr>
              <tr>
                <td>Miscellaneous</td>
                <td>{getOcrData[2]?.tables[0][6][4]}</td>
                <td>{getOcrData[2]?.tables[0][6][5]}</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>{getOcrData[2]?.tables[0][7][4]}</td>
                <td>{getOcrData[2]?.tables[0][7][5]}</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </>
  );
};

export default FinancialInformationForm;
