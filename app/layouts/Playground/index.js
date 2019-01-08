import React, { Component } from 'react';
import Layout from 'components/Layout';
import Menu from 'components/Menu';
import { Row, Col } from 'components/Grid';
import 'components/Layout/style';
import 'components/Grid/style';

/* eslint-disable */
class Playground extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { Sider, Header, Footer, Content } = Layout;
    const { Consumer } = Sider.Context;
    return (
      <Layout>
        <Sider collapsible breakpoint="lg">
          <Consumer>
            {({ siderCollapsed, collapsedWidth }) => (
              <Menu
                style={{ height: '100vh' }}
                siderCollapsed={siderCollapsed}
                collapsedWidth={collapsedWidth}
              />
            )}
          </Consumer>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff' }}>header</Header>
          <Content>
            <Row>
              <Col lg={{ span: 6 }} md={{ span: 12 }}>
                <div style={{ height: '50px', background: 'blue' }}>col-12</div>
              </Col>
              <Col lg={{ span: 6 }} md={{ span: 12 }}>
                <div style={{ height: '50px', background: 'blue' }}>col-12</div>
              </Col>
              <Col lg={{ span: 6 }} md={{ span: 12 }}>
                <div style={{ height: '50px', background: 'blue' }}>col-12</div>
              </Col>
              <Col lg={{ span: 6 }} md={{ span: 12 }}>
                <div style={{ height: '50px', background: 'blue' }}>col-12</div>
              </Col>
            </Row>
          </Content>
          <Footer>footer</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Playground;
