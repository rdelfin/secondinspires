import React, { FC } from "react";
import { Layout, Menu, Divider, Breadcrumb, PageHeader } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./App.less";

const { SubMenu } = Menu;
const { Footer, Header, Content, Sider } = Layout;

const App: FC = () => (
  <Layout>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
      >
        <SubMenu key="sub1" icon={<UserOutlined />} title="Home">
          <Menu.Item key="1">Home</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
    <Layout>
      <Header
        className="site-layout-sub-header-background"
        style={{ padding: 0 }}
      />
      <Content style={{ margin: "24px 16px 0" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          <PageHeader
            className="site-page-header"
            title="Welcome"
            subTitle="to SECOND robotics"
          />
          <Divider orientation="left">News</Divider>
          <Divider orientation="left">Memes</Divider>
          <Divider orientation="left">More Memes</Divider>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Ricardo Delfin ©2020</Footer>
    </Layout>
  </Layout>
);

export default App;
