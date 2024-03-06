"use client";
import React from "react";
import ManagerPart from "./firstPage/ManagerPart";
import { Button, ConfigProvider, Form, Typography } from "antd";
import ContactDetails from "./firstPage/contactDetails/ContactDetailsCollapse";
import PersonalInformationCollapse from "./firstPage/personalInformation/PersonalInformationCollapse";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { imageData } from "../../redux/slices/imageSlice";

const onFinish = (values: any) => {
  const fieldsValue = {
    ...values,
    date_picker: values["date_picker"]
      ? values["date_picker"].format("DD-MM-YYYY")
      : "12-12-2024",
  };
  console.log(fieldsValue, "faiaz");
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
const IndexLeftPanel = () => {
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(imageData(""));
  };
  const image = useSelector((state: any) => state.image);
  return (
    <div
      className="animate__animated animate__fadeIn"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Typography> {image}</Typography>
      <button onClick={handleIncrement}>Increment</button>
      <ManagerPart />
      <ConfigProvider
        theme={{
          components: {
            Collapse: { headerBg: "#E5E1DA", headerPadding: "4px 10px" },
          },
          token: {
            // Seed Token
            colorPrimary: "#3D3B40",
            borderRadius: 2,
            // Alias Token
            colorBgContainer: "white",
          },
        }}
      >
        <Form
          name="basic"
          labelCol={{ span: 16 }}
          wrapperCol={{ span: 24 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          scrollToFirstError
          layout="vertical"
        >
          <PersonalInformationCollapse />
          <ContactDetails />
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </ConfigProvider>
    </div>
  );
};

export default IndexLeftPanel;