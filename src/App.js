import React, { Component } from 'react';
import './App.css';
import Homepage from './Components/Homepage/Homepage'
import { Layout } from 'antd';
import { Row, Col } from 'antd';

import ProfileScreen from './Components/Profile Screen/ProfileScreen'

import Dashboard from './Components/Dashboard/Dashboard'

class App extends Component {

  constructor(props){
    super(props)
    this.state={
      showHomepage : true,
      showProfileScreen : false,
      showDashboard : false,
    }
    this.goToProfileScreen=this.goToProfileScreen.bind(this)
    this.goToDashboard=this.goToDashboard.bind(this)
    this.directGoToDashboard=this.directGoToDashboard.bind(this)
  }

  goToProfileScreen(id){
    this.setState({
      uid : id,
      showHomepage : false,
      showProfileScreen : true
    })
  }

  goToDashboard(){
    this.setState({
      showHomepage : false,
      showProfileScreen : false,
      showDashboard : true
    })
  }

  directGoToDashboard(id){
    this.setState({
      showHomepage : false,
      showProfileScreen : false,
      showDashboard : true,
      uid : id 
    })
  }

  render() {

    const { Header, Footer, Content } = Layout;
    
    const bgColor = "#85144b"


    const {showHomepage,showProfileScreen,uid,showDashboard} = this.state;

    return (
      <div>
        <Layout style={{backgroundColor:bgColor}}>
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
              {showHomepage && !showProfileScreen && !showDashboard &&
                <Col span={24}>
                  <div className="Homepage">
                    <Homepage changeScreen={this.goToProfileScreen} changeScreen2={this.directGoToDashboard}/>
                  </div>
                </Col>
              }
              {showProfileScreen && !showHomepage && !showDashboard &&
                <Col span={24}>
                  <div className="ProfileScreen">
                    <ProfileScreen uid={uid} changeScreen={this.goToDashboard}/> 
                  </div>
                </Col>
              }
              {showDashboard && !showHomepage && !showProfileScreen && 
                <Col span={24}>
                  <div className="dashboard">
                    <Dashboard uid={uid}/> 
                  </div>
                </Col>
              }
            </Content>
          </Row>
          <Row>
            <Col span={24}>
              <hr></hr>              
              <Footer style={{backgroundColor:bgColor,margin:"-5px"}}>
                <address style={{color:'antiquewhite',fontFamily:'Times New Roman',textAlign:'center'}}>
                          HayFa Tech<sup>©</sup><br></br>
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