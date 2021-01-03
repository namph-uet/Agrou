import React from 'react'
import {
    Layout,
    Typography,
    Menu
} from 'antd'

const { Sider } = Layout;
const { Title } = Typography;

export default function leftSideBar() {
    return (
        <Layout>
            <Sider
                style={{
                }}
                breakpoint="lg"
                collapsedWidth={80}
                onBreakpoint={broken => {
                    console.log(broken)
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <Menu theme="dark" mode="inline">
                    <Menu.Item key="1">News feed</Menu.Item>
                    <Menu.Item key="2">Board game</Menu.Item>
                    <Menu.Item key="3">Music</Menu.Item>
                </Menu>
            </Sider>
        </Layout>
    )
}
