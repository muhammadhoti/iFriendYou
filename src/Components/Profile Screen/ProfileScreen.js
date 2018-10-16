import React, { Component } from 'react';
import './ProfileScreen.css';
import swal from 'sweetalert';
import { Input } from "antd";
import firebase from '../../Config/Config'
import { Checkbox } from "antd";
import coffee from "../../Assets/Images/Profile Screen/Coffee.png"
import juice from "../../Assets/Images/Profile Screen/Juice.png"
import cocktail from "../../Assets/Images/Profile Screen/Cocktail.png"

class ProfileScreen extends Component {

  constructor(props){
    super(props)
    this.state={
        showInputBox : true,
        showPictureBox : false,
        showBeverages : false,
        showMap : false,
        imgUrls : [],
        beverages: [],
        meetingDuration : [],
    }
    this.inputBox=this.inputBox.bind(this)
    this.uploadPictures=this.uploadPictures.bind(this)
  }

  inputBox(){
    const nickname = document.getElementById("nickname").value;
    const number = document.getElementById("number").value;
    if(nickname != "" && number != ""){
        this.setState({
            nickname : nickname,
            number : number,
            showInputBox : false,
            showPictureBox : true
        })
    }else{
        swal("Acess Denied", "Input Nickname And Phone Number");
    }
  }

  //Picture Box
  uploadPictures(){
    const pic1 = document.getElementById("pic1").value;
    const pic2 = document.getElementById("pic2").value;
    const pic3 = document.getElementById("pic3").value;
    const ref = firebase.storage().ref();
    const {file1,file2,file3,imgUrls} = this.state;
    if(pic1 !== "" && pic2 !== "" && pic3 !== "" ){
      const name1 = (+new Date()) + '-' + file1.name;
      const metadata1 = {
      contentType: file1.type
      };
      
      const task1 = ref.child("Pictures").child(name1).put(file1, metadata1);
      task1
      .then(snapshot => snapshot.ref.getDownloadURL())
      .then((url1) => {
        
        imgUrls.push(url1)
        this.setState(imgUrls)
      })
      const name2 = (+new Date()) + '-' + file2.name;
      const metadata2 = {
      contentType: file2.type
      };
      
      const task2 = ref.child("Pictures").child(name2).put(file2, metadata2);
      task2
      .then(snapshot => snapshot.ref.getDownloadURL())
      .then((url2) => {
        
        imgUrls.push(url2)
        this.setState(imgUrls)
      })
      const name3 = (+new Date()) + '-' + file3.name;
      const metadata3 = {
      contentType: file3.type
      };
      
      const task3 = ref.child("Pictures").child(name3).put(file3, metadata3);
      task3
      .then(snapshot => snapshot.ref.getDownloadURL())
      .then((url3) => {
        
        imgUrls.push(url3)
        this.setState(imgUrls)
      }).then(()=>{
        this.setState({showPictureBox : false,showBeverages : true})
      })
    }else{
      swal("Acess Denied","Please Upload All Three Pictures");
    }
    
    }
  
  //Picture Box

  //Beverages

  onChange(e){
    const {beverages} =this.state;
    !beverages.includes(e.target.value) ? beverages.push(e.target.value):
    beverages.splice(beverages.indexOf(e.target.value),1)
    this.setState(beverages)
  }

  //Beverages

  //Meeting Duration
  
  Change(e){
    const {meetingDuration} =this.state;
    !meetingDuration.includes(e.target.value) ? meetingDuration.push(e.target.value):
    meetingDuration.splice(meetingDuration.indexOf(e.target.value),1)
    this.setState(meetingDuration)
  }

  gotoMap(){
    const {beverages,meetingDuration} = this.state
    beverages.length === 0 || meetingDuration.length === 0 ? swal("Access Denied","Atleast Choose Any One From Both Fields"):
    this.setState({
      showMap : true,
      showBeverages : false
    })
  }
  //Meeting Duration

  render() {

    const {showInputBox,showPictureBox,showBeverages,showMap} = this.state

    return (
      <div>
        {showInputBox && !showPictureBox && !showBeverages && !showMap &&
        <div className="example-input">
        <Input id="nickname" size="large" placeholder="Enter Your Nickname" />
        <br></br>
        <Input id="number" type="number" size="large" placeholder="Enter Your Phone Number" />
        <br></br>
        <a style={{color:'black'}} onClick={this.inputBox} className="myButton">Next</a>
        </div>
        }
        {showPictureBox && !showInputBox && !showBeverages && !showMap &&
        <div>
          <h1 className="pb-heading">Upload Your 3 Dashing Pictures!</h1>
          <input type="file" name="pic1" id="pic1" onChange={(e)=>{this.setState({file1 : e.target.files[0]})}}/>
          <br></br>
          <input type="file" name="pic2" id="pic2" onChange={(e)=>{this.setState({file2 : e.target.files[0]})}}/>
          <br></br>
          <input type="file" name="pic3" id="pic3" onChange={(e)=>{this.setState({file3 : e.target.files[0]})}}/>
          <br></br>
          <a style={{color:'black'}} onClick={this.uploadPictures} className="myButton">Next</a>
          
        </div>
        }
        {showBeverages && !showInputBox && !showPictureBox && !showMap &&
          <div>
            <h1 className="pb-heading">Select Meeting Duration</h1>
            <Checkbox style={{color:"antiquewhite"}} value="120 Minutes" onChange={(e)=>{this.Change(e)}}>120 Minutes</Checkbox>
            <Checkbox style={{color:"antiquewhite"}} value="60 Minutes" onChange={(e)=>{this.Change(e)}}>60 Minutes</Checkbox>
            <Checkbox style={{color:"antiquewhite"}} value="30 Minutes" onChange={(e)=>{this.Change(e)}}>30 Minutes</Checkbox>
            <br></br>
            <h1 className="pb-heading">Select Beverages</h1>
            <Checkbox style={{color:"antiquewhite"}} value="Coffee" onChange={(e)=>{this.onChange(e)}}>Coffee</Checkbox>
            <img src={coffee} className="bev-ca" />
            <Checkbox style={{color:"antiquewhite"}} value="Juice" onChange={(e)=>{this.onChange(e)}}>Juice</Checkbox>
            <img src={juice} className="bev-ca" />
            <Checkbox style={{color:"antiquewhite"}} value="Cocktail" onChange={(e)=>{this.onChange(e)}}>Cocktail</Checkbox>
            <img src={cocktail} className="bev-ca" />
            <br></br>
            <a style={{color:'black'}} onClick={()=>{this.gotoMap()}} className="myButton">Next</a>
          </div>
        }
        {showMap && !showBeverages && !showInputBox && !showPictureBox &&
          <div>
            <button onClick={()=>{console.log(this.state)}}>check</button>
          </div>
        }
      </div>
    );
  }
}

export default ProfileScreen;