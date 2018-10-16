import React, { Component } from 'react';
import './App.css';
import Homepage from './Components/Homepage/Homepage'
import { Layout } from 'antd';
import { Row, Col } from 'antd';

import ProfileScreen from './Components/Profile Screen/ProfileScreen'

class App extends Component {

  constructor(props){
    super(props)
    this.state={
      showHomepage : true,
      showProfileScreen : false
    }
    this.goToProfileScreen=this.goToProfileScreen.bind(this)
  }

  goToProfileScreen(id){
    this.setState({
      uid : id,
      showHomepage : false,
      showProfileScreen : true
    })
  }

  render() {

    const { Header, Footer, Content } = Layout;
    
    const {showHomepage,showProfileScreen,uid} = this.state;

    return (
      <div>
        <Layout style={{backgroundColor:"rgb(52, 41, 41)"}}>
          <Row> 
            <Col span={24}>
            <h1 className="Heading">I Friend You !</h1>
              {/* <Header>
                <h1 className="Heading">I Friend You !</h1>
              </Header> */}
            </Col>
          </Row>
          <Row>
            <hr></hr>         
            <Content>
              {showHomepage && !showProfileScreen &&
                <Col span={24}>
                  <div className="Homepage">
                    <Homepage changeScreen={this.goToProfileScreen}/>
                  </div>
                </Col>
              }
              {showProfileScreen && !showHomepage &&
                <Col span={24}>
                  <div className="ProfileScreen">
                    <ProfileScreen uid={uid}/> 
                  </div>
                </Col>
              }
            </Content>
          </Row>
          <Row>
            <Col span={24}>
              <hr></hr>              
              <Footer style={{backgroundColor:"rgb(52, 41, 41)",margin:"-5px"}}>
                <address style={{color:'white',fontFamily:'Times New Roman',textAlign:'center'}}>
                          Website By : HayFa Tech<sup>©</sup><br></br>
                          Cell No.      : 0332-0355566<br></br>
                          Facebook      : <a href="http://www.facebook.com/M.H0ti"target="_blank">Find Us On Facebook</a><br></br>
                          Twitter       : <a href="https://twitter.com/muhammadhoti"target="_blank">Find Us On Twitter</a><br></br>
                          Github       : <a href="https://github.com/muhammadhoti"target="_blank">Find Us On Github</a><br></br>
                </address>
              </Footer>
            </Col>
          </Row>
        </Layout>
      </div>
    );
  }
}

export default App;
