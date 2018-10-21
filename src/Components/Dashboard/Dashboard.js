import React, { Component } from 'react';
import './Dashboard.css';
import CarouselSlider from "react-carousel-slider"
import Cards, { Card } from 'react-swipe-deck'
import swal from 'sweetalert';

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

  dismiss(){
    // const {selectedUsers} = this.state;
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
        this.setState({meetingWith:selectedUsers[index]})
        this.setState({meetingPoint : true,card:false})
      }
    });
  }

  render() {
    
    const {meetingButton,card,selectedUsers,meetingPoint} = this.state;
    return (
      
      <div>
        {meetingButton && !card && !meetingPoint &&
        <div>
        
        <div><h1 style={{color:"antiquewhite",margin:"60px"}}>You have not done any meeting yet!”, try creating a new meeting!</h1></div>
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
                  <div className="w3-card-4 w3-dark-grey" style={{minHeight:250}} >
                    <div className="w3-container w3-center">
                      <h3 style={{fontSize:"20px"}}>{value.displayName}</h3>
                      <img src={value.imgUrls[0]} alt="Avatar" width='75%' height="100%"/>
                      {/* <div style={{minHeight:"100px"}}><CarouselSlider slideItems = {value.imgUrls} /></div> */}
                      <h5>{value.nickname}</h5>
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
            <h1 style={{color:"antiquewhite",fontFamily:"Time New Roman"}}>Select Your Meeting Point </h1>
            <img width="750px" src="https://i.ytimg.com/vi/gSLIdT4EBlw/maxresdefault.jpg"/>
          </div>
        }
      </div>
    );
  }
}

export default Dashboard;
