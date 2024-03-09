import { Row, Col, Skeleton, Divider } from "antd";
import React from "react";
import IndexLeftPanel from "./leftSide/IndexLeftPanel";
import RightPanel from "./rightSide/RightPanel";
import UploadImage from "./leftSide/firstPage/UploadImage/UploadImage";
import { useDispatch, useSelector } from "react-redux";
// import { getOcrData } from "../redux/actions/mainActions";
import "animate.css";
import { useAntdBreakPoints } from "../utils/BreakPoints";

const Index = () => {
  const dispatch = useDispatch<any>();
  const { xs, sm, md, lg, xl, xxl } = useAntdBreakPoints();
  const getImageFiles = useSelector((state: any) => state.image.imageData);

  return (
    <div>
      <h1
        className="headerText"
        style={{ textAlign: "center", textTransform: "uppercase" }}
      >
        Personal loan application form
      </h1>
      <Row gutter={10} style={{ margin: "auto", maxWidth: "1440px" }}>
        <UploadImage />
        <Col style={{ margin: "auto" }} span={14}>
          {/* {getImageFiles.length === 0 && <IndexLeftPanel />} */}
        </Col>
        <Col md={12}>
          <Divider></Divider>
          <IndexLeftPanel />
        </Col>
        <Col md={12}>
          {getImageFiles.length === 0 && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              className="animate__animated animate__fadeIn animate__slow"
            >
              <h4>Your uploaded document will be displayed here.</h4>
              <Skeleton.Image
                style={{
                  height: "80vh",
                  width: xs || sm ? "90vw" : md || lg || xl ? "40vw" : "23vw",
                }}
                // active={true}
              />
            </div>
          )}
          <RightPanel />
        </Col>
      </Row>
    </div>
  );
};

export default Index;
