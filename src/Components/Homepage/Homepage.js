import React, { Component } from 'react';
import './Homepage.css';
import logo from '../../Assets/Images/Homepage/logo.png'
import tagLine from '../../Assets/Images/Homepage/tagLine.png'
import firebase from '../../Config/Config'
import { database } from 'firebase';

class Homepage extends Component {

  constructor(props){
    super(props)
    this.state={

    }
    this.login=this.login.bind(this)
    this.sendData=this.sendData.bind(this)
  }

  sendData(fbInfo,uid){
    const database = firebase.database();
    const newUserRef = database.ref(`users/${uid}`).push();
    newUserRef.set(
       {
        fbInfo
       }
     )
    
  }

  componentDidUpdate(){
    
    const {user,uid} = this.state;

    const {changeScreen} =this.props;
    
    {user && this.sendData(user,uid)}

    changeScreen(uid)

  }

  login(){
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;

      this.setState({
        uid : user.uid,
        user : {
          displayName : user.displayName,
          displayPicture : user.photoURL ,
          email : user.email,
        }
      })       
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

  render() {
    
    

    return (

      <div>
        <div>
        <img src={tagLine} />
        </div>
        <div className='logo'>
          <img className='logo' width={350} height={350} src={logo} />
        </div>
        <div className="fb-btn">
          <button className="loginBtn loginBtn--facebook" onClick={this.login}>
            Login with Facebook
          </button>
        </div>
      </div>
    );
  }
}

export default Homepage;
