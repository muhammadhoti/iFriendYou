import React, { Component } from 'react';
import './ProfileScreen.css';
import swal from 'sweetalert';
import { Input } from "antd";
import firebase from '../../Config/Config'

class ProfileScreen extends Component {

  constructor(props){
    super(props)
    this.state={
        showInputBox : true,
        showPictureBox : false,
        showMap : false,
        imgUrls : [],
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
        this.setState({showPictureBox : false,showMap : true})
      })
    }else{
      swal("Acess Denied","Please Upload All Three Pictures");
    }
    
    }
  
  //Picture Box

  

  render() {

    const {showInputBox,showPictureBox,showMap} = this.state

    return (
      <div>
        {showInputBox && !showPictureBox && !showMap &&
        <div className="example-input">
        <Input id="nickname" size="large" placeholder="Enter Your Nickname" />
        <br></br>
        <Input id="number" size="large" placeholder="Enter Your Phone Number" />
        <br></br>
        <a style={{color:'black'}} onClick={this.inputBox} className="myButton">Next</a>
        </div>
        }
        {showPictureBox && !showInputBox && !showMap &&
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
        {showMap && !showInputBox && !showPictureBox &&
          <div>{this.state.imgUrls}</div>
        }
      </div>
    );
  }
}

export default ProfileScreen;