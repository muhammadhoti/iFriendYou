import React, { Component } from 'react';
import './App.css';
import { Layout, Row, Col, Icon } from 'antd';
import { store, persistor } from './Redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter as Router, Route,  Switch, } from "react-router-dom";

import Homepage from './Components/Homepage/Homepage'
import ProfileScreen from './Components/Profile Screen/ProfileScreen'
import Dashboard from './Components/Dashboard/Dashboard'
import EditProfile from './Components/Edit Profile/EditProfile'

class App extends Component {

  constructor(props){
    super(props)
    this.state={
      showHomepage : true,
      showProfileScreen : false,
      showDashboard : false,
      showEditProfile : false,
    }
    this.goToProfileScreen=this.goToProfileScreen.bind(this)
    this.goToDashboard=this.goToDashboard.bind(this)
    this.goToEditProfile=this.goToEditProfile.bind(this)
  }

  componentDidMount(){
    const uid = localStorage.getItem("uid");
    uid && this.goToDashboard(uid)
  }

  goToProfileScreen(id,displayName,displayPicture,email){
    this.setState({
      uid : id,
      displayName : displayName,
      displayPicture : displayPicture ,
      email : email,
      showHomepage : false,
      showProfileScreen : true
    })
  }

  goToDashboard(id){
    // console.log(id)
    this.setState({
      showHomepage : false,
      showProfileScreen : false,
      showEditProfile : false,
      showDashboard : true,
      uid:id,
    })
  }

  goToEditProfile(){
    this.setState({
      showHomepage : false,
      showProfileScreen : false,
      showDashboard : false,
      showEditProfile : true,
    })
  }

  render() {

    const { Header, Footer, Content } = Layout;
    
    const bgColor = "#100c08"

    const {showHomepage,showProfileScreen,uid,displayName,displayPicture,email,showDashboard,showEditProfile} = this.state;

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor = {persistor}>
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
            <hr style={{height:"1px"}}></hr>         
            <Content>
              <div className="heightSetting">
              {showHomepage && !showProfileScreen && !showDashboard && !showEditProfile &&
                <Col span={24}>
                  <div className="Homepage">
                    <Homepage changeScreen={this.goToProfileScreen} changeScreen2={this.goToDashboard} />
                  </div>
                </Col>
              }
              {showProfileScreen && !showHomepage && !showDashboard && !showEditProfile &&
                <Col span={24}>
                  <div className="ProfileScreen">
                    <ProfileScreen uid={uid} email={email} displayName={displayName} displayPicture={displayPicture} changeScreen={this.goToDashboard}/> 
                  </div>
                </Col>
              }
              {showDashboard && !showHomepage && !showProfileScreen && !showEditProfile &&
                <Col span={24}>
                  <div className="dashboard">
                    {/* <Router>
                        <div>
                          <Switch>
                            <Route path="/editProfile" component={EditProfile} exact/>
                          </Switch>
                        </div>  
                    </Router>  */}
                    <Dashboard uid={uid} changeScreen={this.goToEditProfile}/> 
                  </div>
                </Col>
              }
              {showEditProfile && !showDashboard && !showHomepage && !showProfileScreen && 
                <Col span={24}>
                  <div className="dashboard">
                    <EditProfile uid={uid} changeScreen={this.goToDashboard}/> 
                  </div>
                </Col>
              }
              </div>
            </Content>
          </Row>
          <Row>
            <Col span={24}>
            <hr style={{height:"1px"}}></hr>                   
              <Footer style={{backgroundColor:bgColor,margin:"-5px"}}>
                <address style={{color:'yellow',fontFamily:'Times New Roman',textAlign:'center'}}>
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
    </PersistGate>
    </Provider>
    );
  }
}

export default App;

