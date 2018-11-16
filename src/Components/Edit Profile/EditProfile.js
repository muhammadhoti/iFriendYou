import React, { Component } from 'react';
import './EditProfile.css';
import { Input, Checkbox } from "antd";
import coffee from "../../Assets/Images/Profile Screen/Coffee.png"
import juice from "../../Assets/Images/Profile Screen/Juice.png"
import cocktail from "../../Assets/Images/Profile Screen/Cocktail.png"

class EditProfile extends Component {

  constructor(props){
    super(props)
    this.state={

    }
  }

//   this.props.changeScreen(uid)

  render() {
      console.log(this.props)
    return (
      <div>
        <h1 style={{
                    color: "antiquewhite",
                    fontFamily: "Times New Roman",
                    margin: "60px"
                  }}
                >
                  Edit Your Profile
        </h1>
        <div className="example-input marginSetting">
        <Input id="nickname" size="large" placeholder="Enter Your Nickname" />
        <br></br>
        <Input id="number" type="number" size="large" placeholder="Enter Your Phone Number" />
        <br></br>
        </div>
        <div className="marginSetting">
            <h1 className="pb-heading">Select Meeting Duration</h1>
            <Checkbox style={{color:"antiquewhite"}} value="120 Minutes" onChange={(e)=>{this.Change(e)}}>120 Minutes</Checkbox>
            <Checkbox style={{color:"antiquewhite"}} value="60 Minutes" onChange={(e)=>{this.Change(e)}}>60 Minutes</Checkbox>
            <Checkbox style={{color:"antiquewhite"}} value="30 Minutes" onChange={(e)=>{this.Change(e)}}>30 Minutes</Checkbox>
            <br></br>
            <h1 className="pb-heading">Select Beverages</h1>
            <img src={coffee} className="bev-ca" />
            <Checkbox style={{color:"antiquewhite"}} value="Coffee" onChange={(e)=>{this.onChange(e)}}>Coffee</Checkbox>
            <img src={juice} className="bev-ca" />
            <Checkbox style={{color:"antiquewhite"}} value="Juice" onChange={(e)=>{this.onChange(e)}}>Juice</Checkbox>
            <img src={cocktail} className="bev-ca" />
            <Checkbox style={{color:"antiquewhite"}} value="Cocktail" onChange={(e)=>{this.onChange(e)}}>Cocktail</Checkbox>
          </div>
        <a
                href="#"
                style={{ color: "black", margin : '16px' }}
                onClick={() => {
                this.props.changeScreen(this.props.uid)
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
