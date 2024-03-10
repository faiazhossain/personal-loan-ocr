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
  const [showOtherInput, setShowOtherInput] = useState(false);
  const getOcrData = useSelector((state: any) => state.ocr.ocrData);
  const handleEducationLevelChange = (e: any) => {
    setShowOtherInput(e.target.value === "Others");
  };
  useEffect(() => {
    if (getOcrData.length > 0) {
    }
  }, [getOcrData]);

  console.log(getOcrData[2]?.tables[1][0][0]);
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
                <td>{getOcrData[2]?.tables[1][1][0] || ""}</td>
                <td>{getOcrData[2]?.tables[1][1][1] || ""}</td>
                <td>{getOcrData[2]?.tables[1][1][2] || ""}</td>
                <td>{getOcrData[2]?.tables[1][1][3] || ""}</td>
                <td>{getOcrData[2]?.tables[1][1][4] || ""}</td>
                <td>{getOcrData[2]?.tables[1][1][5] || ""}</td>
              </tr>
              <tr>
                <td>{getOcrData[2]?.tables[1][2][0] || ""}</td>
                <td>{getOcrData[2]?.tables[1][2][1] || ""}</td>
                <td>{getOcrData[2]?.tables[1][2][2] || ""}</td>
                <td>{getOcrData[2]?.tables[1][2][3] || ""}</td>
                <td>{getOcrData[2]?.tables[1][2][4] || ""}</td>
                <td>{getOcrData[2]?.tables[1][2][5] || ""}</td>
              </tr>
              <tr>
                <td>{getOcrData[2]?.tables[1][3][0] || ""}</td>
                <td>{getOcrData[2]?.tables[1][3][1] || ""}</td>
                <td>{getOcrData[2]?.tables[1][3][2] || ""}</td>
                <td>{getOcrData[2]?.tables[1][3][3] || ""}</td>
                <td>{getOcrData[2]?.tables[1][3][4] || ""}</td>
                <td>{getOcrData[2]?.tables[1][3][5] || ""}</td>
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
                <td>{getOcrData[2]?.tables[2][1][0] || ""}</td>
                <td>{getOcrData[2]?.tables[2][1][1] || ""}</td>
                <td>{getOcrData[2]?.tables[2][1][2] || ""}</td>
                <td>{getOcrData[2]?.tables[2][1][3] || ""}</td>
                <td>{getOcrData[2]?.tables[2][1][4] || ""}</td>
              </tr>
              <tr>
                <td>{getOcrData[2]?.tables[2][2][0] || ""}</td>
                <td>{getOcrData[2]?.tables[2][2][1] || ""}</td>
                <td>{getOcrData[2]?.tables[2][2][2] || ""}</td>
                <td>{getOcrData[2]?.tables[2][2][3] || ""}</td>
                <td>{getOcrData[2]?.tables[2][2][4] || ""}</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </>
  );
};

export default LoanWithBankForm;
