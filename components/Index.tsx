import { Row, Col, Skeleton } from "antd";
import React from "react";
import IndexLeftPanel from "./leftSide/IndexLeftPanel";
import RightPanel from "./rightSide/RightPanel";
import UploadImage from "./leftSide/firstPage/UploadImage/UploadImage";
import { useSelector } from "react-redux";
import "animate.css";

const Index = () => {
  const getImageFiles = useSelector((state: any) => state.image.imageData);
  console.log(getImageFiles);
  return (
    <div>
      <h1 className="headerText" style={{ textAlign: "center" }}>
        Personal loan for city bank
      </h1>
      <Row gutter={10} style={{ margin: "auto", maxWidth: "1440px" }}>
        <UploadImage />
        <Col style={{ margin: "auto" }} span={14}>
          {/* {getImageFiles.length === 0 && <IndexLeftPanel />} */}
        </Col>

        <Col span={12}>
          <IndexLeftPanel />
        </Col>
        <Col span={12}>
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
                style={{ height: "80vh", width: "40vw" }}
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
