import logo from './logo.svg';
import './App.css';
import Header from './layouts/common/header/Index';
import LeftSideBar from './layouts/common/sidebar/LeftSideBar';
import { Layout } from 'antd'
import 'antd/dist/antd.css';

const { Sider } = Layout;

function App() {
  return (
    <>
    
      <Layout>
        {/* Sider */}
        <LeftSideBar />
        <Layout>
          {/* Header */}
          <Header />
        </Layout>
      </Layout>
    </>
  );
}

export default App;
