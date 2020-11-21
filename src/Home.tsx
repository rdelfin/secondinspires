import React, { FC } from "react";
import { Divider, PageHeader } from "antd";
import "./Home.less";
import Page from "./Page";

const Home: FC = () => (
  <Page>
    <PageHeader
      className="site-page-header"
      title="Welcome"
      subTitle="to SECOND robotics"
    />
    <Divider orientation="left">News</Divider>
    <Divider orientation="left">Memes</Divider>
    <Divider orientation="left">More Memes</Divider>
  </Page>
);

export default Home;
