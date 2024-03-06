"use client";
import { Col, Row } from "antd";
import React from "react";
import IndexLeftPanel from "../../components/leftSide/IndexLeftPanel";
import RightPanel from "../../components/rightSide/RightPanel";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";
import store from "../../redux/store";
import Index from "../../components/Index";

export default function Home() {
  return (
    <Provider store={store}>
      <main>
        <Index></Index>
      </main>
    </Provider>
  );
}
