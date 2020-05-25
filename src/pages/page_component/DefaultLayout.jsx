import React from "react";
import Layout from "antd/lib/layout";
const { Header, Sider, Footer, Content } = Layout;
import CustomMenu from "@pages/page_component/CustomMenu";

const DefaultLayout = (props) => {
    return (
        <Layout>
            <Header>
                <CustomMenu />
            </Header>
            <Layout>
                <Sider>left sidebar</Sider>
                <Content>{props.children}</Content>
            </Layout>
            <Footer>footer</Footer>
        </Layout>
    );
};

export default DefaultLayout;
