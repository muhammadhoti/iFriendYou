(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{162:function(e,t,a){e.exports=a.p+"static/media/logo.e742beba.png"},163:function(e,t,a){e.exports=a.p+"static/media/tagLine.3851b0ce.png"},164:function(e,t,a){e.exports=a.p+"static/media/Coffee.a8d11b6c.png"},165:function(e,t,a){e.exports=a.p+"static/media/Juice.ef24b71a.png"},166:function(e,t,a){e.exports=a.p+"static/media/Cocktail.1b07e77a.png"},175:function(e,t,a){e.exports=a(415)},180:function(e,t,a){},182:function(e,t,a){},184:function(e,t,a){},199:function(e,t,a){},403:function(e,t,a){},415:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(23),l=a.n(o),c=(a(180),a(24)),r=a(25),s=a(29),u=a(26),m=a(30),d=a(10),h=(a(182),a(184),a(162)),g=a.n(h),p=a(163),b=a.n(p),f=a(73);f.initializeApp({apiKey:"AIzaSyAIZufe716Ae-vQyzqTP_qguwGoaH51lzM",authDomain:"i-friend-you.firebaseapp.com",databaseURL:"https://i-friend-you.firebaseio.com",projectId:"i-friend-you",storageBucket:"gs://i-friend-you.appspot.com",messagingSenderId:"510355093518"});var v=f,E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={usersList:[]},a.login=a.login.bind(Object(d.a)(Object(d.a)(a))),a.sendData=a.sendData.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"sendData",value:function(e,t,a,n){v.database().ref("users/".concat(n,"/facebookInfo")).push().set({email:e,displayName:t,displayPicture:a})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://i-friend-you.firebaseio.com/usersList.json").then(function(e){return e.json()}).then(function(t){for(var a in t)e.state.usersList.push(t[a].uid)})}},{key:"componentDidUpdate",value:function(){var e=this.state,t=e.email,a=e.displayName,n=e.displayPicture,i=e.uid,o=e.usersList,l=this.props,c=l.changeScreen,r=l.changeScreen2;o.includes(i)?r(i):(this.sendData(t,a,n,i),c(i))}},{key:"login",value:function(){var e=this,t=new v.auth.FacebookAuthProvider;v.auth().signInWithPopup(t).then(function(t){t.credential.accessToken;var a=t.user;e.setState({uid:a.uid,displayName:a.displayName,displayPicture:a.photoURL,email:a.email})}).catch(function(e){var t=e.code,a=e.message;console.log(t,a);e.email,e.credential})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("img",{src:b.a})),i.a.createElement("div",{className:"logo"},i.a.createElement("img",{className:"logo",width:350,height:350,src:g.a})),i.a.createElement("div",{className:"fb-btn"},i.a.createElement("button",{className:"loginBtn loginBtn--facebook",onClick:this.login},"Login with Facebook")))}}]),t}(n.Component),y=a(419),w=a(420),k=a(421),S=(a(199),a(76)),C=a.n(S),j=a(417),O=a(418),D=a(164),N=a.n(D),B=a(165),P=a.n(B),x=a(166),M=a.n(x),T=(a(81),a(52)),I=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={uid:e.uid,showInputBox:!0,showPictureBox:!1,showBeverages:!1,showMap:!1,imgUrls:[],beverages:[],meetingDuration:[],location:[]},a.inputBox=a.inputBox.bind(Object(d.a)(Object(d.a)(a))),a.uploadPictures=a.uploadPictures.bind(Object(d.a)(Object(d.a)(a))),a.updateCenter=a.updateCenter.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"inputBox",value:function(){var e=document.getElementById("nickname").value,t=document.getElementById("number").value;""!==e&&""!==t&&11===t.length?this.setState({nickname:e,number:t,showInputBox:!1,showPictureBox:!0}):C()("Acess Denied","Type Correct Nickname And Phone Number With 11 Digits")}},{key:"uploadPictures",value:function(){var e=this,t=document.getElementById("pic1").value,a=document.getElementById("pic2").value,n=document.getElementById("pic3").value,i=v.storage().ref(),o=this.state,l=o.file1,c=o.file2,r=o.file3,s=o.imgUrls;if(""!==t&&""!==a&&""!==n){document.getElementById("uploading").style.display="none",document.getElementById("uploading2").style.display="block";var u=+new Date+"-"+l.name,m={contentType:l.type};i.child("Pictures").child(u).put(l,m).then(function(e){return e.ref.getDownloadURL()}).then(function(t){s.push(t),e.setState(s)});var d=+new Date+"-"+c.name,h={contentType:c.type};i.child("Pictures").child(d).put(c,h).then(function(e){return e.ref.getDownloadURL()}).then(function(t){s.push(t),e.setState(s)});var g=+new Date+"-"+r.name,p={contentType:r.type};i.child("Pictures").child(g).put(r,p).then(function(e){return e.ref.getDownloadURL()}).then(function(t){s.push(t),e.setState(s)}).then(function(){e.setState({showPictureBox:!1,showBeverages:!0})})}else C()("Acess Denied","Please Upload All Three Pictures")}},{key:"onChange",value:function(e){var t=this.state.beverages;t.includes(e.target.value)?t.splice(t.indexOf(e.target.value),1):t.push(e.target.value),this.setState(t)}},{key:"Change",value:function(e){var t=this.state.meetingDuration;t.includes(e.target.value)?t.splice(t.indexOf(e.target.value),1):t.push(e.target.value),this.setState(t)}},{key:"gotoMap",value:function(){var e=this.state,t=e.beverages,a=e.meetingDuration;0===t.length||0===a.length?C()("Access Denied","Atleast Choose Any One From Both Fields"):this.setState({showMap:!0,showBeverages:!1})}},{key:"componentDidMount",value:function(){this.setPosition()}},{key:"setPosition",value:function(){var e=this;navigator.geolocation.getCurrentPosition(function(t){e.setState({latitude:t.coords.latitude,longitude:t.coords.longitude})})}},{key:"updateCenter",value:function(e,t){this.setState({latitude:e,longitude:t})}},{key:"submit",value:function(){var e=this.props.changeScreen,t=v.database(),a=this.state,n=a.beverages,i=a.latitude,o=a.longitude,l=a.imgUrls,c=a.meetingDuration,r=a.nickname,s=a.number,u=a.uid,m=a.coords;t.ref("users/".concat(u,"/profileScreenInfo")).push().set(i&&o?{beverages:n,imgUrls:l,latitude:i,longitude:o,meetingDuration:c,nickname:r,number:s}:{beverages:n,imgUrls:l,latitude:m.latitude,longitude:m.longitude,meetingDuration:c,nickname:r,number:s}),t.ref("usersList").push().set({uid:u}),e(u)}},{key:"render",value:function(){var e=this,t=this.state,a=t.showInputBox,n=t.showPictureBox,o=t.showBeverages,l=t.showMap;t.coords;return i.a.createElement("div",null,a&&!n&&!o&&!l&&i.a.createElement("div",{className:"example-input marginSetting"},i.a.createElement(j.a,{id:"nickname",size:"large",placeholder:"Enter Your Nickname"}),i.a.createElement("br",null),i.a.createElement(j.a,{id:"number",type:"number",size:"large",placeholder:"Enter Your Phone Number"}),i.a.createElement("br",null),i.a.createElement("a",{style:{color:"black"},onClick:this.inputBox,className:"myButton"},"Next")),n&&!a&&!o&&!l&&i.a.createElement("div",{className:"marginSetting"},i.a.createElement("h1",{className:"pb-heading"},"Upload Your 3 Good Looking Pictures!"),i.a.createElement("br",null),i.a.createElement("input",{type:"file",name:"pic1",id:"pic1",onChange:function(t){e.setState({file1:t.target.files[0]})}}),i.a.createElement("br",null),i.a.createElement("input",{type:"file",name:"pic2",id:"pic2",onChange:function(t){e.setState({file2:t.target.files[0]})}}),i.a.createElement("br",null),i.a.createElement("input",{type:"file",name:"pic3",id:"pic3",onChange:function(t){e.setState({file3:t.target.files[0]})}}),i.a.createElement("br",null),i.a.createElement("a",{id:"uploading",style:{color:"black"},onClick:this.uploadPictures,className:"myButton"},"Next"),i.a.createElement("p",{id:"uploading2",style:{display:"none",color:"antiquewhite"}},"Wait ... Soon You Will Be Redirected To Next Screen")),o&&!a&&!n&&!l&&i.a.createElement("div",{className:"marginSetting"},i.a.createElement("h1",{className:"pb-heading"},"Select Meeting Duration"),i.a.createElement(O.a,{style:{color:"antiquewhite"},value:"120 Minutes",onChange:function(t){e.Change(t)}},"120 Minutes"),i.a.createElement(O.a,{style:{color:"antiquewhite"},value:"60 Minutes",onChange:function(t){e.Change(t)}},"60 Minutes"),i.a.createElement(O.a,{style:{color:"antiquewhite"},value:"30 Minutes",onChange:function(t){e.Change(t)}},"30 Minutes"),i.a.createElement("br",null),i.a.createElement("h1",{className:"pb-heading"},"Select Beverages"),i.a.createElement("img",{src:N.a,className:"bev-ca"}),i.a.createElement(O.a,{style:{color:"antiquewhite"},value:"Coffee",onChange:function(t){e.onChange(t)}},"Coffee"),i.a.createElement("img",{src:P.a,className:"bev-ca"}),i.a.createElement(O.a,{style:{color:"antiquewhite"},value:"Juice",onChange:function(t){e.onChange(t)}},"Juice"),i.a.createElement("img",{src:M.a,className:"bev-ca"}),i.a.createElement(O.a,{style:{color:"antiquewhite"},value:"Cocktail",onChange:function(t){e.onChange(t)}},"Cocktail"),i.a.createElement("br",null),i.a.createElement("a",{style:{color:"black"},onClick:function(){e.gotoMap()},className:"myButton"},"Next")),l&&!o&&!a&&!n&&i.a.createElement("div",{className:"showMap"},i.a.createElement("h1",{className:"pb-heading"},"Select Your Location"),i.a.createElement("small",{style:{color:"white"}},"Drag And Drop Marker To Select Your Location And Then Hit Submit Button"),i.a.createElement(L,{isMarkerShown:!0,googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",loadingElement:i.a.createElement("div",{style:{height:"100%"}}),containerElement:i.a.createElement("div",{style:{height:"100vh"}}),mapElement:i.a.createElement("div",{style:{height:"100%"}}),latitude:this.state.latitude,longitude:this.state.longitude,updateCenter:this.updateCenter}),i.a.createElement("br",null),i.a.createElement("a",{style:{color:"black"},onClick:function(){e.submit()},className:"myButton"},"Submit")))}}]),t}(n.Component),L=Object(T.withScriptjs)(Object(T.withGoogleMap)(function(e){return i.a.createElement(T.GoogleMap,{defaultZoom:14,center:{lat:e.latitude,lng:e.longitude}},e.isMarkerShown&&i.a.createElement(T.Marker,{position:{lat:e.latitude,lng:e.longitude},draggable:!0,onDragEnd:function(t){e.updateCenter(t.latLng.lat(),t.latLng.lng())}}))})),U=(a(403),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={uid:a.props.uid},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.state.uid;fetch("https://i-friend-you.firebaseio.com/users/".concat(e,".json")).then(function(e){return e.json()}).then(function(e){console.log(e)}),console.log(this.props.uid)}},{key:"render",value:function(){return console.log("Dashboard Chala"),i.a.createElement("div",null,i.a.createElement("img",{width:"750px",src:"https://i.ytimg.com/vi/gSLIdT4EBlw/maxresdefault.jpg"}))}}]),t}(n.Component)),A=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={showHomepage:!0,showProfileScreen:!1,showDashboard:!1},a.goToProfileScreen=a.goToProfileScreen.bind(Object(d.a)(Object(d.a)(a))),a.goToDashboard=a.goToDashboard.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"goToProfileScreen",value:function(e){this.setState({uid:e,showHomepage:!1,showProfileScreen:!0})}},{key:"goToDashboard",value:function(e){console.log(e),this.setState({showHomepage:!1,showProfileScreen:!1,showDashboard:!0,uid:e})}},{key:"render",value:function(){y.a.Header;var e=y.a.Footer,t=y.a.Content,a=this.state,n=a.showHomepage,o=a.showProfileScreen,l=a.uid,c=a.showDashboard;return i.a.createElement("div",null,i.a.createElement(y.a,{style:{backgroundColor:"#85144b"}},i.a.createElement(w.a,null,i.a.createElement(k.a,{span:24},i.a.createElement("h1",{className:"Heading"},"I Friend You !"))),i.a.createElement(w.a,null,i.a.createElement("hr",null),i.a.createElement(t,null,i.a.createElement("div",{className:"heightSetting"},n&&!o&&!c&&i.a.createElement(k.a,{span:24},i.a.createElement("div",{className:"Homepage"},i.a.createElement(E,{changeScreen:this.goToProfileScreen,changeScreen2:this.goToDashboard}))),o&&!n&&!c&&i.a.createElement(k.a,{span:24},i.a.createElement("div",{className:"ProfileScreen"},i.a.createElement(I,{uid:l,changeScreen:this.goToDashboard}))),c&&!n&&!o&&i.a.createElement(k.a,{span:24},i.a.createElement("div",{className:"dashboard"},i.a.createElement(U,{uid:l})))))),i.a.createElement(w.a,null,i.a.createElement(k.a,{span:24},i.a.createElement("hr",null),i.a.createElement(e,{style:{backgroundColor:"#85144b",margin:"-5px"}},i.a.createElement("address",{style:{color:"antiquewhite",fontFamily:"Times New Roman",textAlign:"center"}},"HayFa Tech",i.a.createElement("sup",null,"\xa9"),i.a.createElement("br",null),"Facebook      : ",i.a.createElement("a",{href:"http://www.facebook.com/M.H0ti",target:"_blank"},"Find Us On Facebook"),i.a.createElement("br",null),"Twitter       : ",i.a.createElement("a",{href:"https://twitter.com/muhammadhoti",target:"_blank"},"Find Us On Twitter"),i.a.createElement("br",null),"Github       : ",i.a.createElement("a",{href:"https://github.com/muhammadhoti",target:"_blank"},"Find Us On Github"),i.a.createElement("br",null)))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(413);l.a.render(i.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[175,2,1]]]);
//# sourceMappingURL=main.5b1877e5.chunk.js.map