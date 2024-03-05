import { Col, Row } from "antd";
import React from "react";
import LeftPanel from "../../components/leftSide/LeftPanel";
import RightPanel from "../../components/rightSide/RightPanel";

export default function Home() {
  return (
    <main>
      <Row>
        <Col span={12}>
          <LeftPanel></LeftPanel>
        </Col>
        <Col span={12}>
          <RightPanel></RightPanel>
        </Col>
      </Row>
    </main>
  );
}
