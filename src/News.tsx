import React, { FC } from "react";
import { Divider, PageHeader } from "antd";
import "./Home.less";
import Page from "./Page";

const Home: FC = () => (
  <Page>
    <PageHeader
      className="site-page-header"
      title="News"
      subTitle="in SECOND robotics"
    />
    <Divider orientation="left">News</Divider>
  </Page>
);

export default Home;
