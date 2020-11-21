import React, { FC } from "react";
import { Image, Row, Col, PageHeader } from "antd";
import "./Error.less";
import Page from "./Page";

import { Link } from "react-router-dom";

const Error: FC = () => (
  <Page>
    <PageHeader className="site-page-header" title="Page Not Found" />
    <Row>
      <Col span={24} className="logoError">
        <Image width={300} src="/second_robotics.png" />
      </Col>
    </Row>
    <Link to="/">Go Home</Link>
  </Page>
);

export default Error;
