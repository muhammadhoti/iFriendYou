import React, { Component } from 'react';
import './Dashboard.css';
import Cards, { Card } from 'react-swipe-deck'
import swal from 'sweetalert';
import { Carousel } from 'antd';
import { Radio } from 'antd';
import { Calendar} from 'antd';
import moment from 'moment';
import { TimePicker } from 'antd';
import firebase from '../../Config/Config'

const RadioGroup = Radio.Group;
const format = 'HH:mm';


class Dashboard extends Component {

  constructor(props){
    super(props)
    this.state={
        uid : this.props.uid,
        meetingButton : true,
        card : false,
        meetingPoint : false,
        currentUser : {},
        otherUsers : [],
        selectedUsers : [],
        venues : [],
        radioButtonValue: 0,
    }
  }

  componentDidMount(){
    
    const {uid,currentUser,otherUsers,selectedUsers,venues} = this.state;

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
      value.userInfo[i].meetingDuration.map((value2)=>{
        if(currentUser.meetingDuration.includes(value2))
        {selectedFlag = true}
      })
      
      value.userInfo[i].beverages.map((value2)=>{
        if(currentUser.beverages.includes(value2))
        {selectedFlag = true}
      })
      
      if(selectedFlag === true){
        selectedUsers.push(value.userInfo[i])
        this.setState(selectedUsers)
      }
      }
      
      })
      
    //Setting Selected Users In state 


        })

    //Setting Other Users In State

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
    const {meetingDetails,venues} = this.state;
    meetingDetails.meetingVenue = venues[index];
    this.setState(meetingDetails)
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
    const meetings = database.ref(`meetings/${uid}`).push();

    if(radioButtonValue !== 0 && meetingDetails.meetingDate && meetingDetails.meetingTime){
    
    meetings.set(
       {
         meetingDetails
       }
     )
       
       this.setState({meetingButton:true,card:false,meetingPoint:false})

      }else{
    
        swal("Access Denied","Please Select The Required Details");
    
      }
  }

  render() {
    
    const {meetingButton,card,selectedUsers,meetingPoint,venues,meetingDetails,calendarValue,selectedValue} = this.state;
    
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };

    return (
      
      <div>
        {meetingButton && !card && !meetingPoint &&
        <div>
        
        <div><h1 style={{color:"antiquewhite",fontFamily:'Times New Roman',margin:"60px"}}>You have not done any meeting yet!”, try creating a new meeting!</h1></div>
        <a href="#" style={{color:"black"}} onClick={()=>{this.setState({meetingButton : false,card:true})}} className="myButton">Set A Meeting !</a>
        </div>
        }
        {card && !meetingButton && !meetingPoint &&
        <div >
        <h1 style={{color:"antiquewhite",fontFamily:"Time New Roman"}}>Here Are All Those Who Have Similarites With You</h1>
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
            <h1 style={{color:"yellowgreen",fontFamily:"Time New Roman"}}>Select Your Meeting Time </h1>
            <TimePicker onChange={(e)=>{this.getTime(e)}} defaultValue={moment('10:30', format)} format={format} />
            <h1 style={{color:"yellowgreen",fontFamily:"Time New Roman"}}>Select Your Meeting Date </h1>
            <div style={{ width: 1000, border: '1px solid #d9d9d9', borderRadius: 4,color:"antiquewhite"}}>
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

export default Dashboard;
