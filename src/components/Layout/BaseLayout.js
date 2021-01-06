import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { getToken, setToken } from 'utils/filter';
import Routes from '@/routes/subRoutes';
import SiderCustom from './Sider';
import HeaderCustom from './Header';
import Cookie from "../../utils/cookie";
import { CORGITOKENENVDATA } from "../../utils/env";

const { Content, Footer } = Layout;

class BaseLayout extends Component {
  toggle = () => {
    const { collapsed } = this.props;
    const { updateState } = this.props;
    updateState({ collapsed: !collapsed });
    setToken('sider_collapsed', !collapsed);
  };

  render() {
    const { collapsed } = this.props;
    let name = getToken('username') || '管理员';
    // 退出逻辑
    const logout = ()=>{
      Cookie.delete(CORGITOKENENVDATA, '/', '.kaikeba.com')
      localStorage.clear()
      sessionStorage.clear()
      window.location.reload()
    }

    return (
      <Layout className="ant-layout-has-sider" style={{ minHeight: '100%' }}>
        {
          window.__POWERED_BY_QIANKUN__?null:<SiderCustom collapsed={collapsed} path="/app/demo" />
        }
        <Layout id="content">
          {
            window.__POWERED_BY_QIANKUN__? null: <HeaderCustom collapsed={collapsed} logout={logout} toggle={this.toggle} username={name} />
          }
          <Content style={{ margin: '16px 16px' }}>
            <Routes />
          </Content>
          <Footer
            style={{
              textAlign: 'center',
              margin: '30px 0 10px 0',
              color: 'rgba(0, 0, 0, .45)',
            }}
          >
            copyright © 2019 北京开课吧科技有限公司版权所有
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  const { collapsed } = state.config;
  return {
    collapsed:collapsed?collapsed:false
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateState: params => dispatch.config.updateState(params),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BaseLayout);
