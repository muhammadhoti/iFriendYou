import React, { Component } from 'react';
import './EditProfile.css';
import '../Dashboard/Dashboard.css'
import firebase from "../../Config/Config";
import swal from 'sweetalert';
import { Input, Checkbox } from "antd";
import coffee from "../../Assets/Images/Profile Screen/Coffee.png"
import juice from "../../Assets/Images/Profile Screen/Juice.png"
import cocktail from "../../Assets/Images/Profile Screen/Cocktail.png"

class EditProfile extends Component {

  constructor(props){
    super(props)
    this.state={
      currentUser : {},
    }
  }

  componentDidMount(){
    const { uid } = this.props
    const { currentUser, coffeeCheck, juiceCheck, cocktailCheck } = this.state

    fetch(`https://i-friend-you.firebaseio.com/users/${uid}/userInfo.json`)
    .then(
      (response)=>{
        return response.json()
      }
    )
    .then(
      (data)=>{
        for (let i in data) {
          this.setState ({currentUser : data[i],key : i,})
          data[i].beverages.includes("Cocktail") && this.setState({cocktailCheck : true})
          data[i].beverages.includes("Juice") && this.setState({juiceCheck : true})
          data[i].beverages.includes("Coffee") && this.setState({coffeeCheck : true})
          data[i].meetingDuration.includes("60 Minutes") && this.setState({check60Min : true})
          data[i].meetingDuration.includes("120 Minutes") && this.setState({check120Min : true})
          data[i].meetingDuration.includes("30 Minutes") && this.setState({check30Min : true})
        }
      }
    )
  }

//Beverages

onChange(e){
  const { currentUser } =this.state;
  const index = currentUser.beverages.indexOf(e.target.value)
  !e.target.checked && currentUser.beverages.splice(index,1)
  e.target.checked && currentUser.beverages.push(e.target.value)
  this.setState(currentUser)
}

//Beverages

//Meeting Duration

Change(e){
  const { currentUser } =this.state;
  const index = currentUser.beverages.indexOf(e.target.value)
  !e.target.checked && currentUser.meetingDuration.splice(index,1)
  e.target.checked && currentUser.meetingDuration.push(e.target.value)
  this.setState(currentUser)
  
}

changeNickname(e){
  const { currentUser } = this.state;
  currentUser.nickname = e.target.value;
  this.setState(currentUser)
}

changeNumber(e){
  const { currentUser } = this.state;
  currentUser.number = e.target.value;
  this.setState(currentUser)
}

changeEmail(e){
  const { currentUser } = this.state;
  currentUser.email = e.target.value;
  this.setState(currentUser)
}

saveChanges(){
  const { currentUser,key } = this.state
  const { uid } = this.props
  const database = firebase.database();
  
  if(currentUser.meetingDuration.length === 0){
    swal("Acess Denied", "Choose Atleast One Meeting Duration");
  }else if(currentUser.beverages.length === 0){
    swal("Acess Denied", "Choose Atleast One Beverage");
  }else if(currentUser.nickname === ""){
    swal("Acess Denied", "Enter Your Nickname Correctly");
  }else if(currentUser.number === ""){
    swal("Acess Denied", "Enter Your Number Correctly");
  }else if(currentUser.email.indexOf("@") === -1){
    swal("Acess Denied", "Enter Your Email Correctly");
  }
  else{
    database.ref(`users/${uid}/userInfo/${key}`).update(currentUser)
    .then(
      setTimeout(()=>{this.props.changeScreen(uid)},1500)
    )
    
  }
}

  render() {
    const { currentUser, coffeeCheck, juiceCheck, cocktailCheck, check30Min, check60Min, check120Min } = this.state
    return (
      <div>
        <h1 style={{
                    color: "antiquewhite",
                    fontFamily: "Times New Roman",
                    margin: "10px",
                    fontSize : "50px"
                  }}
                >
                  Edit Your Profile
        </h1>
        <div style={{padding:'10px'}} className="example-input marginSetting">
        <Input id="nickname" size="large" placeholder="Enter Your Nickname" defaultValue={currentUser.nickname} onChange={(e)=>{this.changeNickname(e)}}/>
        <br></br>
        <Input id="number" type="number" size="large" placeholder="Enter Your Phone Number" defaultValue={currentUser.number} onChange={(e)=>{this.changeNumber(e)}}/>
        <br></br>
        <Input id="email" type="email" size="large" placeholder="Enter Your Email" defaultValue={currentUser.email} onChange={(e)=>{this.changeEmail(e)}}/>
        <br></br>
        </div>
        <div style={{padding:'10px'}} className="marginSetting">
            <h1 className="pb-heading" style={{fontSize : "35px"}}>Meeting Duration</h1>
            {check120Min && <Checkbox style={{color:"antiquewhite"}} value="120 Minutes" onChange={(e)=>{this.Change(e)}} defaultChecked={check120Min}>120 Minutes</Checkbox>}
            {!check120Min && <Checkbox style={{color:"antiquewhite"}} value="120 Minutes" onChange={(e)=>{this.Change(e)}} defaultChecked={false}>120 Minutes</Checkbox>}
            {check60Min&& <Checkbox style={{color:"antiquewhite"}} value="60 Minutes" onChange={(e)=>{this.Change(e)}} defaultChecked={check60Min}>60 Minutes</Checkbox>}
            {!check60Min&& <Checkbox style={{color:"antiquewhite"}} value="60 Minutes" onChange={(e)=>{this.Change(e)}} defaultChecked={false}>60 Minutes</Checkbox>}
            {check30Min && <Checkbox style={{color:"antiquewhite"}} value="30 Minutes" onChange={(e)=>{this.Change(e)}} defaultChecked={check30Min}>30 Minutes</Checkbox>}
            {!check30Min && <Checkbox style={{color:"antiquewhite"}} value="30 Minutes" onChange={(e)=>{this.Change(e)}} defaultChecked={false}>30 Minutes</Checkbox>}
            <br></br>
            <h1 className="pb-heading" style={{fontSize : "35px"}}>Beverages</h1>
            <img src={coffee} className="bev-ca" />
            {coffeeCheck && <Checkbox style={{color:"antiquewhite"}} value="Coffee" onChange={(e)=>{this.onChange(e)}} defaultChecked={coffeeCheck}>Coffee</Checkbox>}
            {!coffeeCheck && <Checkbox style={{color:"antiquewhite"}} value="Coffee" onChange={(e)=>{this.onChange(e)}} defaultChecked={coffeeCheck}>Coffee</Checkbox>}
            <img src={juice} className="bev-ca" />
            {juiceCheck && <Checkbox style={{color:"antiquewhite"}} value="Juice" onChange={(e)=>{this.onChange(e)}} defaultChecked={juiceCheck}>Juice</Checkbox>}
            {!juiceCheck && <Checkbox style={{color:"antiquewhite"}} value="Juice" onChange={(e)=>{this.onChange(e)}} defaultChecked={juiceCheck}>Juice</Checkbox>}
            <img src={cocktail} className="bev-ca" />
            {cocktailCheck &&<Checkbox style={{color:"antiquewhite"}} value="Cocktail" onChange={(e)=>{this.onChange(e)}} defaultChecked={cocktailCheck}>Cocktail</Checkbox>}
            {!cocktailCheck &&<Checkbox style={{color:"antiquewhite"}} value="Cocktail" onChange={(e)=>{this.onChange(e)}} defaultChecked={cocktailCheck}>Cocktail</Checkbox>}
          </div>
        <a
                href="#"
                style={{ color: "black", margin : '16px' }}
                onClick={() => {
                this.saveChanges()
                }}
                className="myButton"
              >
        Save Changes
        </a>
      </div>
    );
  }
}

export default EditProfile;
