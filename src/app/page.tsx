"use client";
import { Col, Row } from "antd";
import React from "react";
import IndexLeftPanel from "../../components/leftSide/IndexLeftPanel";
import RightPanel from "../../components/rightSide/RightPanel";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";
import store from "../../redux/store";
export default function Home() {
  return (
    <Provider store={store}>
      <main>
        <Row>
          <Col span={12}>
            <IndexLeftPanel></IndexLeftPanel>
          </Col>
          <Col span={12}>
            <RightPanel></RightPanel>
          </Col>
        </Row>
      </main>
    </Provider>
  );
}
