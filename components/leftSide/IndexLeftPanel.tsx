"use client";
import React from "react";
import ManagerPart from "./firstPage/managerPart/ManagerPart";
import { Button, ConfigProvider, Form } from "antd";
import ContactDetails from "./firstPage/contactDetails/ContactDetailsCollapse";
import PersonalInformationCollapse from "./firstPage/personalInformation/PersonalInformationCollapse";
// import { useGetUsersQuery } from "../../redux/services/userApi";
import CoApplicantInformationCollapse from "./secondPage/coApplicantInformation/CoApplicantInformationCollapse";
import ProfessionalInformationSHCollapse from "./secondPage/professionalInformation_SH/ProfessionalInformationSHCollapse";
import ProfessionalInformationBPCollapse from "./secondPage/professionalInformation_BP_SE/ProfessionalInformationBPCollapse";
import ProfessionalInformationOtherCollapse from "./secondPage/professionalInformation_others/ProfessionalInformationOtherCollapse";

const onFinish = (values: any) => {
  const fieldsValue = {
    ...values,
    date_picker: values["date_picker"]
      ? values["date_picker"].format("DD-MM-YYYY")
      : "12-12-2024",
  };
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
const IndexLeftPanel = () => {
  // const { data: users, isLoading, isError } = useGetUsersQuery({});
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }
  // if (isError) {
  //   return <div>Error fetching users</div>;
  // }
  // console.log(users, "faiaz");
  return (
    <div
      className="animate__animated animate__fadeIn"
      style={{ display: "flex", flexDirection: "column" }}
    >
      {/* <ul>
        {users.map((user: any) => (
          <li key={user}>{user}</li>
        ))}
      </ul> */}
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
          style={{ maxWidth: "100%" }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          scrollToFirstError
          layout="vertical"
        >
          <PersonalInformationCollapse />
          <ContactDetails />
          <CoApplicantInformationCollapse />
          <ProfessionalInformationSHCollapse />
          <ProfessionalInformationBPCollapse />
          <ProfessionalInformationOtherCollapse />
          {/* <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item> */}
        </Form>
      </ConfigProvider>
    </div>
  );
};

export default IndexLeftPanel;
