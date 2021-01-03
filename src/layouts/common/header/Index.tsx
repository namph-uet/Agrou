import React from 'react'
import {
    Layout
} from 'antd'
import './index.css';

const { Header, Footer } = Layout;

export default function CommonHeader() {
    return (
        <>
            <Header
                style={{
                    minHeight: 50
                }}
            >Header</Header>
        </>
    )
}
