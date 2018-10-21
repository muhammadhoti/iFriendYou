import React, { Component } from 'react';
import './Dashboard.css';
import CarouselSlider from "react-carousel-slider"
import Cards, { Card } from 'react-swipe-deck'

class Dashboard extends Component {

  constructor(props){
    super(props)
    this.state={
        uid : this.props.uid,
        meetingButton : true,
        card : false,
        currentUser : {},
        otherUsers : [],
        selectedUsers : [],
    }
  }

  componentDidMount(){
    
    const {uid,currentUser,otherUsers,selectedUsers} = this.state;
    
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
      })

    //Setting Current User In State

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

  action(message){
    console.log(message)
    console.log(this.state.selectedUsers)
  }

  render() {
    const {meetingButton,card} = this.state;
    const data = ['Alexandre', 'Thomas', 'Lucien']

    return (
      <div>
        {meetingButton &&
        <div>
        {/* <img width="750px" src="https://i.ytimg.com/vi/gSLIdT4EBlw/maxresdefault.jpg"/> */}
        <div><h1 style={{color:"antiquewhite",margin:"60px"}}>You have not done any meeting yet!”, try creating a new meeting!</h1></div>
        <a href="#" style={{color:"black"}} onClick={()=>{this.setState({meetingButton : false,card:true})}} className="myButton">Set A Meeting !</a>
        </div>
        }
        {card && !meetingButton &&
        <div>
          <Cards className='master-root'>
            {data.map(item =>
              <Card
                onSwipeLeft={()=>{this.action('swipe left')}}
                onSwipeRight={()=>{this.action('swipe right')}}
              >
                <h2>{item}</h2>
              </Card>
            )}
          </Cards>
        </div>
        }
      </div>
    );
  }
}

export default Dashboard;
