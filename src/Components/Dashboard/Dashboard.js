/* eslint-disable no-undef */
/* global google */

import React, { Component } from 'react';
import './Dashboard.css';
import firebase from '../../Config/Config'
import _ from 'lodash';
import Cards, { Card } from 'react-swipe-deck'
import swal from 'sweetalert';
import moment from 'moment';
import { withGoogleMap, GoogleMap, Marker, DirectionsRenderer, withScriptjs } from "react-google-maps"
import { Carousel, Radio, Calendar, TimePicker, Modal, Avatar, Card as ReqCard } from 'antd';
import { connect } from 'react-redux'

const RadioGroup = Radio.Group;
const format = 'HH:mm';
const { Meta } = ReqCard;


class Dashboard extends Component {

  constructor(props){
    super(props)
    this.state={
        uid : this.props.uid,
        meetingButton : true,
        card : false,
        meetingPoint : false,
        meetingStatus : false,
        currentUser : {},
        otherUsers : [],
        selectedUsers : [],
        venues : [],
        radioButtonValue: 0,
        navigation : {},
        visible: false,
        meetings:[],
        currentUserMeetings:[],
    }
    this.radius = this.radius.bind(this)
    this.getDistance = this.getDistance.bind(this)
    this.getDirections = this.getDirections.bind(this)
  }

  componentDidMount(){
    
    const {uid,currentUser,otherUsers,selectedUsers,venues,meetings,currentUserMeetings} = this.state;

    //Setting Current User In State
      
      fetch(`https://i-friend-you.firebaseio.com/users/${uid}.json`)
      .then(data => {
          return data.json();
      })
      .then(data2 => {
      var abc = data2.userInfo
        for (let i in abc){
          currentUser.beverages = abc[i].beverages
          currentUser.imgUrls = abc[i].imgUrls
          currentUser.meetingDuration = abc[i].meetingDuration
          currentUser.nickname = abc[i].nickname
          currentUser.displayName = abc[i].displayName
          currentUser.email = abc[i].email
          currentUser.displayPicture = abc[i].displayPicture
          currentUser.latitude = abc[i].latitude
          currentUser.longitude = abc[i].longitude
        }
        this.setState(currentUser)
        
        //Setting Current User In State

        //Getting Venues

      }).then(()=>{
        
        fetch(`https://api.foursquare.com/v2/venues/explore?client_id=TCEW2YEVYB3DZRKWOZMW2JMYUQNKB4HNUMGCNPUGLSAQZXUM&client_secret=4KCFM5Q5FCDHIVUDD3XSDXYRCJVQLFDROBAQDR5R334MKTPD&v=20180323&ll=${currentUser.latitude},${currentUser.longitude}`)
        .then((data) => {
            return data.json()
        }).then((data2)=>{
          data2.response.groups[0].items.map((value,index)=>{
            
            index < 3 && venues.push({
              name : value.venue.name,
              address : value.venue.location.address,
              lat : value.venue.location.lat,
              lng : value.venue.location.lng,
            })
          })
          this.setState(venues)
        })
      })

      //Getting Venues

    //Setting Other Users In State

    fetch(`https://i-friend-you.firebaseio.com/users.json`)
    .then(data => {
        return data.json();
    })
    .then(data2 => {
    for (let i in data2){
      i !== uid && otherUsers.push(data2[i])
    }
    this.setState(otherUsers)
        }).then(()=>{

      //Setting Selected Users In state 

      otherUsers.map((value)=>{

      for (let i in value.userInfo){

      var selectedFlag = false;
      var radiusFlag = false;

      value.userInfo[i].meetingDuration.map((value2)=>{
        if(currentUser.meetingDuration.includes(value2))
        {selectedFlag = true}
      })
      
      value.userInfo[i].beverages.map((value2)=>{
        if(currentUser.beverages.includes(value2))
        {selectedFlag = true}
      })

      if(this.getDistance(currentUser.latitude,currentUser.longitude,value.userInfo[i].latitude,value.userInfo[i].longitude) < 4999){
        radiusFlag = true
      }
      
      if(selectedFlag === true && radiusFlag == true){
        selectedUsers.push(value.userInfo[i])
        this.setState(selectedUsers)
      }
      }
      
      })
      
    //Setting Selected Users In state 


        })

    //Setting Other Users In State

    //Getting Meetings Status And Request 

    fetch('https://i-friend-you.firebaseio.com/meetings.json')
    .then(response => response.json())
    .then((data) => { 
      for (let i in data){
        meetings.push(data[i])
      }
    }).then(
      ()=>{
        meetings.map(
          (value,index)=>{
            value.sender === uid && currentUserMeetings.push(value)
          }
          )
      }
    ).then(
      () => {
        currentUserMeetings.length > 0 && this.setState({meetingStatus : 'true'})
      }
    )

    //Getting Meetings Status And Request 

  }

  radius(x){
    return x * Math.PI / 180;
  }

  getDistance(latC, lngC, latO, lngO){
    const R = 6378137; // Earth’s mean radius in meter
    const dLat = this.radius(latO - latC);
    const dLong = this.radius(lngO - lngC);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(this.radius(latC)) * Math.cos(this.radius(latO)) *
    Math.sin(dLong / 2) * Math.sin(dLong / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    return d; // returns the distance in meter};
  }

  dismiss(){
    
    const {selectedVenues} = this.state;
    console.log(selectedVenues)
    
    // console.log(selectedUsers)
    // selectedUsers.map((value)=>{
    //   console.log(value.displayName)
    //   console.log(value.imgUrls[0])
    //   console.log(value.imgUrls[1])
    //   console.log(value.imgUrls[2])
    //   console.log(value.nickname)      
    // })
  }

  action(index){
    const {selectedUsers} = this.state;
    swal({
      title: "Are you sure?",
      text: `You Want To Meet ${selectedUsers[index].displayName}`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.setState({meetingDetails: {meetingWith : selectedUsers[index]}})
        this.setState({meetingPoint : true,card:false})
      }
    });
  }

  radioButtonValue(e){
    
    this.setState({
      radioButtonValue: e.target.value,
    });
  }

  selectVenue(e,index){
    const {meetingDetails,venues,navigation} = this.state;
    meetingDetails.meetingVenue = venues[index];
    navigation.lat = venues[index].lat;
    navigation.lng = venues[index].lng;
    this.setState(meetingDetails)
    this.setState(navigation)
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }

  getDirections() {
    const DirectionsService = new google.maps.DirectionsService();
    const {currentUser,navigation} = this.state
      DirectionsService.route({
        origin: new google.maps.LatLng(currentUser.latitude, currentUser.longitude),
        destination: new google.maps.LatLng(navigation.lat, navigation.lng),
        travelMode: google.maps.TravelMode.DRIVING,
      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
        } else {
          alert("Sorry! Can't calculate directions!")
        }
      });
  }

  getTime(e){
    const time = e._d.toString().slice(16,24);
    const {meetingDetails} = this.state
    meetingDetails.meetingTime = time;
    this.setState(meetingDetails)
    
  }

  getDate(e) {
    const date = e._d.toString().slice(4,15)
    const {meetingDetails} = this.state
    meetingDetails.meetingDate = date;
    this.setState(meetingDetails)
  }

  sendMeetingRequest(){
    
    const {meetingDetails,radioButtonValue,uid} = this.state
    const database = firebase.database();
    const meetings = database.ref(`meetings/`).push();

    if(radioButtonValue !== 0 && meetingDetails.meetingDate && meetingDetails.meetingTime){
    
    meetings.set(
       {
        sender : uid,
        receiver : meetingDetails.meetingWith.uid,
        date : meetingDetails.meetingDate,
        time : meetingDetails.meetingTime,
        venue : meetingDetails.meetingVenue,
        status : "pending"
      }
     )
       
       this.setState({meetingButton:true,card:false,meetingPoint:false})

      }else{
    
        swal("Access Denied","Please Select The Required Details");
    
      }
  }


  render() {
    
    const {meetingButton,card,selectedUsers,meetingPoint,venues,meetingDetails,currentUser,navigation,directions,radioButtonValue,meetingStatus,currentUserMeetings} = this.state;
    
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };


    return (
      
      <div>
        {meetingButton && !card && !meetingPoint && 
        <div>
        {!meetingStatus &&
        <div>
          <h1 style={{color:"antiquewhite",fontFamily:'Times New Roman',margin:"60px"}}>You have not done any meeting yet!”, try creating a new meeting!</h1>
          <a href="#" style={{color:"black"}} onClick={()=>{this.setState({meetingButton : false,card:true})}} className="myButton">Set A Meeting !</a>
        </div>
        }
        {meetingStatus &&
          <div>
            <a href="#" style={{color:"black"}} onClick={()=>{this.setState({meetingButton : false,card:true})}} className="myButton">Set A Meeting !</a>
            <br></br>
            <br></br>
            <a href="#" style={{color:"black"}} onClick={this.showModal} className="myButton">See Meeitng Requests</a>}
              <Modal
                title="Meeting Requests"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
              >
                
              </Modal>
            <h1 style={{color:"antiquewhite",fontFamily:'Times New Roman',margin:"20px"}}>Your Meetings Status</h1>
            {
               currentUserMeetings.map((value,index)=>{
                 const receiver = _.find(selectedUsers,{uid:value.receiver})
                 
                 return( 
                  <ReqCard style={{ width: 300, marginTop: 16 }} >
                    <Meta
                      avatar={receiver && <Avatar src={receiver.displayPicture} />}
                      title={receiver && receiver.displayName}
                      description={receiver && `${value.venue.name} - ${value.date}  ${value.time}`}
                    />
                    <h1>{value.status.toUpperCase()}</h1>
                  </ReqCard>
                  //   <div class="card">
                  //   <img src={receiver && receiver.displayPicture} alt="John" style={{width:"50%"}}/>
                  //   <h1>{receiver && receiver.displayName}</h1>
                  //   <p class="title">CEO & Founder, Example</p>
                  //   <p>Harvard University</p>
                  //   <p><button>Contact</button></p>
                  // </div>
               )
               }) 
            }
          </div>
        }
        </div>
        }
        {card && !meetingButton && !meetingPoint &&
        <div >
        <h1 style={{color:"antiquewhite",fontFamily:"Time New Roman"}}>People Near You Around 5 KM Radius And Have Similarities With You</h1>
        <p style={{color:"antiquewhite",fontFamily:"Time New Roman"}}>Swipe Right To Set meeting And Left To Dismiss !</p>  
          <Cards >
            {selectedUsers.map((value,index) =>
            
              <Card
                onSwipeLeft={()=>{this.dismiss('swipe left')}}
                onSwipeRight={()=>{this.action(index)}}
                
              >
                <div  className="w3-container" style={{width:"100%"}}>
                  <div className="w3-card-4 " style={{minHeight:250,backgroundColor:"#84596B"}} >
                    <div className="w3-container w3-center">
                      <h3 style={{fontSize:"20px"}}>{value.displayName}</h3>
                      <div>
                      <Carousel autoplay>
                      <div ><img style={{height:"110px",width: "140px"}} src={value.imgUrls[0]}/></div>
                      <div ><img style={{height:"110px",width: "140px"}} src={value.imgUrls[1]}/></div>
                      <div ><img style={{height:"110px",width: "140px"}} src={value.imgUrls[2]}/></div>
                      </Carousel>
                      </div>
                      {/* <div style={{minHeight:"100px"}}><CarouselSlider slideItems = {value.imgUrls} /></div> */}
                      <p><b>Nickname : {value.nickname}</b></p>
                    </div>
                  </div>
                </div>
                
              </Card>
            )}
          </Cards>
        </div>
        }
        {meetingPoint && !meetingButton && !card && 
          <div>
            <h1 style={{color:"yellowgreen",fontFamily:"Time New Roman"}}>Select Your Meeting Venue </h1>
            <RadioGroup onChange={(e)=>{this.radioButtonValue(e)}} value={this.state.radioButtonValue}>
              {venues.map((value,index)=>{
                return(
                  <Radio onClick={(e)=>{this.selectVenue(e,index)}} style={radioStyle} value={index+1}><span className="radio-btn-value">{value.name},{value.address}</span></Radio>
                )
              })}
            </RadioGroup>
            <div>
            {radioButtonValue !== 0 && <a href="#" style={{color:"black"}} onClick={this.showModal} className="myButton">See Venue On Map</a>}
              <Modal
                title="Map"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
              >
                <MyMapComponent 
                  isMarkerShown 
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAzhBEDUxDg83q1yrZ5r9eSrOtnrNDaVG0&v=3.exp&libraries=geometry,drawing,places"
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `600px` }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                  directions={directions}
                  originLatitude={currentUser.latitude}
                  originLongitude={currentUser.longitude}
                  navigationLatitude={navigation.lat}
                  navigationLongitude={navigation.lng}
                />
                <br></br>
                <a href="#" style={{color:"black"}} onClick={this.getDirections} className="myButton">Get Directions</a>
              </Modal>
            </div>
            <h1 style={{color:"yellowgreen",fontFamily:"Time New Roman"}}>Select Your Meeting Time </h1>
            <TimePicker onChange={(e)=>{this.getTime(e)}} defaultValue={moment('10:30', format)} format={format} />
            <h1 style={{color:"yellowgreen",fontFamily:"Time New Roman"}}>Select Your Meeting Date </h1>
            <div style={{ width: 350,margin:'0 auto', border: '1px solid #d9d9d9', borderRadius: 4,color:"antiquewhite"}}>
              <Calendar fullscreen={false} onChange={(e)=>{this.getDate(e)}} onPanelChange={(e)=>{this.onPanelChange(e)}} />
            </div>
            <br></br>
            <a href="#" style={{color:"black"}} onClick={()=>{this.sendMeetingRequest()}} className="myButton">Send Meeting Request To {meetingDetails.meetingWith.displayName}</a>
            {/* <img width="750px" src="https://i.ytimg.com/vi/gSLIdT4EBlw/maxresdefault.jpg"/> */}
          </div>
        }
      </div>
    );
  }
}

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={14}
    center={{ lat: props.originLatitude, lng: props.originLongitude }}
  >

  <Marker position={{ lat: props.originLatitude, lng: props.originLongitude }} />
  <Marker position={{ lat: props.navigationLatitude, lng: props.navigationLongitude }} />

  {props.directions && <DirectionsRenderer directions={props.directions} />}

  </GoogleMap>
))

const mapStateToProps = (state) => {
  
  return {
    user: state
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
