(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{214:function(e,t,a){e.exports=a.p+"static/media/logo.e742beba.png"},215:function(e,t,a){e.exports=a.p+"static/media/tagLine.3851b0ce.png"},221:function(e,t,a){e.exports=a.p+"static/media/Coffee.a8d11b6c.png"},222:function(e,t,a){e.exports=a.p+"static/media/Juice.ef24b71a.png"},223:function(e,t,a){e.exports=a.p+"static/media/Cocktail.1b07e77a.png"},238:function(e,t,a){e.exports=a(512)},243:function(e,t,a){},245:function(e,t,a){},247:function(e,t,a){},268:function(e,t,a){},466:function(e,t,a){},512:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),l=a(9),o=a.n(l),r=(a(243),a(44)),s=a(45),c=a(49),u=a(46),m=a(48),d=a(13),g=(a(245),a(247),a(214)),h=a.n(g),p=a(215),f=a.n(p),v=a(104);v.initializeApp({apiKey:"AIzaSyAIZufe716Ae-vQyzqTP_qguwGoaH51lzM",authDomain:"i-friend-you.firebaseapp.com",databaseURL:"https://i-friend-you.firebaseio.com",projectId:"i-friend-you",storageBucket:"gs://i-friend-you.appspot.com",messagingSenderId:"510355093518"});var y=v,E=a(68),b=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={usersList:[]},a.login=a.login.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://i-friend-you.firebaseio.com/usersList.json").then(function(e){return e.json()}).then(function(t){for(var a in t)e.state.usersList.push(t[a].uid)})}},{key:"componentDidUpdate",value:function(){var e=this.state,t=e.email,a=e.displayName,n=e.displayPicture,i=e.uid,l=e.usersList,o=this.props,r=o.changeScreen,s=o.changeScreen2;if(l.includes(i)){var c={uid:i,displayName:a,displayPicture:n,email:t};this.props.updateUser(c),s(i),localStorage.setItem("uid",i)}else{var u={uid:i,displayName:a,displayPicture:n,email:t};this.props.updateUser(u),r(i,a,n,t)}}},{key:"login",value:function(){var e=this,t=new y.auth.FacebookAuthProvider;y.auth().signInWithPopup(t).then(function(t){t.credential.accessToken;var a=t.user;e.setState({uid:a.uid,displayName:a.displayName,displayPicture:a.photoURL,email:a.email})}).catch(function(e){var t=e.code,a=e.message;console.log(t,a);e.email,e.credential})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("img",{src:f.a})),i.a.createElement("div",{className:"logo"},i.a.createElement("img",{className:"logo",width:350,height:350,src:h.a})),i.a.createElement("div",{className:"fb-btn"},i.a.createElement("button",{className:"loginBtn loginBtn--facebook",onClick:this.login},"Login with Facebook")))}}]),t}(n.Component),w=Object(E.b)(function(e){return{user:e.user}},function(e){return{updateUser:function(t){return e(function(e){return{type:"UPDATE_USER",user:e}}(t))}}})(b),S=a(523),k=a(515),M=a(513),D=a(31),N=a(157),C={user:null},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_USER":return Object(N.a)({},e,{user:t.user});case"REMOVE_USER":return Object(N.a)({},e,{user:null});default:return e}},j=Object(D.c)({authReducers:O}),B=a(218),P=a(156),U=a(219),T={key:"root",storage:a.n(U).a},x=Object(P.a)(T,j),L=Object(D.d)(x,Object(D.a)(B.a)),R=Object(P.b)(L),A=a(220),I=(a(268),a(58)),q=a.n(I),F=a(522),V=a(524),Y=a(221),H=a.n(Y),G=a(222),W=a.n(G),z=a(223),_=a.n(z),K=(a(121),a(27)),Z=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={uid:e.uid,email:e.email,displayName:e.displayName,displayPicture:e.displayPicture,showInputBox:!0,showPictureBox:!1,showBeverages:!1,showMap:!1,imgUrls:[],beverages:[],meetingDuration:[],location:[],latitude:24.862736834972253,longitude:67.02094346140439},a.inputBox=a.inputBox.bind(Object(d.a)(Object(d.a)(a))),a.uploadPictures=a.uploadPictures.bind(Object(d.a)(Object(d.a)(a))),a.updateCenter=a.updateCenter.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"inputBox",value:function(){var e=document.getElementById("nickname").value,t=document.getElementById("number").value;""!==e&&""!==t&&11===t.length?this.setState({nickname:e,number:t,showInputBox:!1,showPictureBox:!0}):q()("Acess Denied","Type Correct Nickname And Phone Number With 11 Digits")}},{key:"uploadPictures",value:function(){var e=this,t=document.getElementById("pic1").value,a=document.getElementById("pic2").value,n=document.getElementById("pic3").value,i=y.storage().ref(),l=this.state,o=l.file1,r=l.file2,s=l.file3,c=l.imgUrls;if(""!==t&&""!==a&&""!==n){document.getElementById("uploading").style.display="none",document.getElementById("uploading2").style.display="block";var u=+new Date+"-"+o.name,m={contentType:o.type};i.child("Pictures").child(u).put(o,m).then(function(e){return e.ref.getDownloadURL()}).then(function(t){c.push(t),e.setState(c)});var d=+new Date+"-"+r.name,g={contentType:r.type};i.child("Pictures").child(d).put(r,g).then(function(e){return e.ref.getDownloadURL()}).then(function(t){c.push(t),e.setState(c)});var h=+new Date+"-"+s.name,p={contentType:s.type};i.child("Pictures").child(h).put(s,p).then(function(e){return e.ref.getDownloadURL()}).then(function(t){c.push(t),e.setState(c)}).then(function(){e.setState({showPictureBox:!1,showBeverages:!0})})}else q()("Acess Denied","Please Upload All Three Pictures")}},{key:"onChange",value:function(e){var t=this.state.beverages;t.includes(e.target.value)?t.splice(t.indexOf(e.target.value),1):t.push(e.target.value),this.setState(t)}},{key:"Change",value:function(e){var t=this.state.meetingDuration;t.includes(e.target.value)?t.splice(t.indexOf(e.target.value),1):t.push(e.target.value),this.setState(t)}},{key:"gotoMap",value:function(){var e=this.state,t=e.beverages,a=e.meetingDuration;0===t.length||0===a.length?q()("Access Denied","Atleast Choose Any One From Both Fields"):this.setState({showMap:!0,showBeverages:!1})}},{key:"componentDidMount",value:function(){this.setPosition()}},{key:"setPosition",value:function(){var e=this;navigator.geolocation.getCurrentPosition(function(t){t.coords.latitude&&e.setState({latitude:t.coords.latitude,longitude:t.coords.longitude})})}},{key:"updateCenter",value:function(e,t){this.setState({latitude:e,longitude:t})}},{key:"submit",value:function(){var e=this.props.changeScreen,t=y.database(),a=this.state,n=a.displayPicture,i=a.displayName,l=a.email,o=a.beverages,r=a.latitude,s=a.longitude,c=a.imgUrls,u=a.meetingDuration,m=a.nickname,d=a.number,g=a.uid,h=a.coords;t.ref("users/".concat(g,"/userInfo")).push().set(r&&s?{displayName:i,displayPicture:n,email:l,beverages:o,imgUrls:c,latitude:r,longitude:s,meetingDuration:u,nickname:m,number:d,uid:g}:{displayName:i,displayPicture:n,email:l,beverages:o,imgUrls:c,latitude:h.latitude,longitude:h.longitude,meetingDuration:u,nickname:m,number:d,uid:g}),t.ref("usersList").push().set({uid:g}),e(g),localStorage.setItem("uid",g)}},{key:"render",value:function(){var e=this,t=this.state,a=t.showInputBox,n=t.showPictureBox,l=t.showBeverages,o=t.showMap;t.coords;return i.a.createElement("div",null,a&&!n&&!l&&!o&&i.a.createElement("div",{className:"example-input marginSetting"},i.a.createElement(F.a,{id:"nickname",size:"large",placeholder:"Enter Your Nickname"}),i.a.createElement("br",null),i.a.createElement(F.a,{id:"number",type:"number",size:"large",placeholder:"Enter Your Phone Number"}),i.a.createElement("br",null),i.a.createElement("a",{style:{color:"black"},onClick:this.inputBox,className:"myButton"},"Next")),n&&!a&&!l&&!o&&i.a.createElement("div",{className:"marginSetting"},i.a.createElement("h1",{className:"pb-heading"},"Upload Your 3 Good Looking Pictures!"),i.a.createElement("br",null),i.a.createElement("input",{type:"file",name:"pic1",id:"pic1",onChange:function(t){e.setState({file1:t.target.files[0]})}}),i.a.createElement("br",null),i.a.createElement("input",{type:"file",name:"pic2",id:"pic2",onChange:function(t){e.setState({file2:t.target.files[0]})}}),i.a.createElement("br",null),i.a.createElement("input",{type:"file",name:"pic3",id:"pic3",onChange:function(t){e.setState({file3:t.target.files[0]})}}),i.a.createElement("br",null),i.a.createElement("a",{id:"uploading",style:{color:"black"},onClick:this.uploadPictures,className:"myButton"},"Next"),i.a.createElement("p",{id:"uploading2",style:{display:"none",color:"antiquewhite"}},"Wait ... Soon You Will Be Redirected To Next Screen")),l&&!a&&!n&&!o&&i.a.createElement("div",{className:"marginSetting"},i.a.createElement("h1",{className:"pb-heading"},"Select Meeting Duration"),i.a.createElement(V.a,{style:{color:"antiquewhite"},value:"120 Minutes",onChange:function(t){e.Change(t)}},"120 Minutes"),i.a.createElement(V.a,{style:{color:"antiquewhite"},value:"60 Minutes",onChange:function(t){e.Change(t)}},"60 Minutes"),i.a.createElement(V.a,{style:{color:"antiquewhite"},value:"30 Minutes",onChange:function(t){e.Change(t)}},"30 Minutes"),i.a.createElement("br",null),i.a.createElement("h1",{className:"pb-heading"},"Select Beverages"),i.a.createElement("img",{src:H.a,className:"bev-ca"}),i.a.createElement(V.a,{style:{color:"antiquewhite"},value:"Coffee",onChange:function(t){e.onChange(t)}},"Coffee"),i.a.createElement("img",{src:W.a,className:"bev-ca"}),i.a.createElement(V.a,{style:{color:"antiquewhite"},value:"Juice",onChange:function(t){e.onChange(t)}},"Juice"),i.a.createElement("img",{src:_.a,className:"bev-ca"}),i.a.createElement(V.a,{style:{color:"antiquewhite"},value:"Cocktail",onChange:function(t){e.onChange(t)}},"Cocktail"),i.a.createElement("br",null),i.a.createElement("a",{style:{color:"black"},onClick:function(){e.gotoMap()},className:"myButton"},"Next")),o&&!l&&!a&&!n&&i.a.createElement("div",{className:"showMap"},i.a.createElement("h1",{className:"pb-heading"},"Select Your Location"),i.a.createElement("small",{style:{color:"white"}},"Drag And Drop Marker To Select Your Location And Then Hit Submit Button"),i.a.createElement(J,{isMarkerShown:!0,googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",loadingElement:i.a.createElement("div",{style:{height:"100%"}}),containerElement:i.a.createElement("div",{style:{height:"100vh"}}),mapElement:i.a.createElement("div",{style:{height:"100%"}}),latitude:this.state.latitude,longitude:this.state.longitude,updateCenter:this.updateCenter}),i.a.createElement("br",null),i.a.createElement("a",{style:{color:"black"},onClick:function(){e.submit()},className:"myButton"},"Submit")))}}]),t}(n.Component),J=Object(K.withScriptjs)(Object(K.withGoogleMap)(function(e){return i.a.createElement(K.GoogleMap,{defaultZoom:14,center:{lat:e.latitude,lng:e.longitude}},e.isMarkerShown&&i.a.createElement(K.Marker,{position:{lat:e.latitude,lng:e.longitude},draggable:!0,onDragEnd:function(t){e.updateCenter(t.latLng.lat(),t.latLng.lng())}}))})),Q=(a(466),a(119)),X=a.n(Q),$=a(153),ee=a.n($),te=a(15),ae=a.n(te),ne=a(472),ie=a(519),le=a(520),oe=a(516),re=a(517),se=a(521),ce=a(518),ue=a(226),me=a.n(ue),de=ne.a.Group,ge=ie.a.Meta,he=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).showModal=function(){a.setState({visible:!0})},a.showModal2=function(){a.setState({visible2:!0})},a.handleOk=function(e){a.setState({visible:!1})},a.handleCancel=function(e){a.setState({visible:!1})},a.handleOk2=function(e){a.setState({visible2:!1})},a.handleCancel2=function(e){a.setState({visible2:!1})},a.state={uid:a.props.uid,meetingButton:!0,card:!1,meetingPoint:!1,meetingStatus:!1,currentUser:{},otherUsers:[],selectedUsers:[],venues:[],radioButtonValue:0,navigation:{},visible:!1,visible2:!1,meetings:[],currentUserMeetings:[],currentUserMeetingsRequests:[],currentUserAcceptedMeetings:[],meetingRequest:!1,meetingAccepted:!1},a.radius=a.radius.bind(Object(d.a)(Object(d.a)(a))),a.getDistance=a.getDistance.bind(Object(d.a)(Object(d.a)(a))),a.getDirections=a.getDirections.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.state,a=t.uid,n=t.currentUser,i=t.otherUsers,l=t.selectedUsers,o=t.venues,r=t.meetings,s=t.currentUserMeetings,c=t.currentUserMeetingsRequests,u=t.currentUserAcceptedMeetings;fetch("https://i-friend-you.firebaseio.com/users/".concat(a,".json")).then(function(e){return e.json()}).then(function(t){var a=t.userInfo;for(var i in a)n.beverages=a[i].beverages,n.imgUrls=a[i].imgUrls,n.meetingDuration=a[i].meetingDuration,n.nickname=a[i].nickname,n.displayName=a[i].displayName,n.email=a[i].email,n.displayPicture=a[i].displayPicture,n.latitude=a[i].latitude,n.longitude=a[i].longitude;e.setState(n)}).then(function(){fetch("https://api.foursquare.com/v2/venues/explore?client_id=TCEW2YEVYB3DZRKWOZMW2JMYUQNKB4HNUMGCNPUGLSAQZXUM&client_secret=4KCFM5Q5FCDHIVUDD3XSDXYRCJVQLFDROBAQDR5R334MKTPD&v=20180323&ll=".concat(n.latitude,",").concat(n.longitude)).then(function(e){return e.json()}).then(function(t){t.response.groups[0].items.map(function(e,t){t<3&&o.push({name:e.venue.name,address:e.venue.location.address,lat:e.venue.location.lat,lng:e.venue.location.lng})}),e.setState(o)})}),fetch("https://i-friend-you.firebaseio.com/users.json").then(function(e){return e.json()}).then(function(t){for(var n in t)n!==a&&i.push(t[n]);e.setState(i)}).then(function(){i.map(function(t){for(var a in t.userInfo){var i=!1,o=!1;t.userInfo[a].meetingDuration.map(function(e){n.meetingDuration.includes(e)&&(i=!0)}),t.userInfo[a].beverages.map(function(e){n.beverages.includes(e)&&(i=!0)}),e.getDistance(n.latitude,n.longitude,t.userInfo[a].latitude,t.userInfo[a].longitude)<4999&&(o=!0),!0===i&&1==o&&(l.push(t.userInfo[a]),e.setState(l))}})}),fetch("https://i-friend-you.firebaseio.com/meetings.json").then(function(e){return e.json()}).then(function(e){for(var t in e)e[t].key=t,r.push(e[t])}).then(function(){r.map(function(t,n){t.sender===a&&s.push(t),t.receiver===a&&"accepted"===t.status&&e.setState({meetingAccepted:!0})})}).then(function(){s.length>0&&e.setState({meetingStatus:"true"})}).then(function(){r.map(function(t,n){t.receiver===a&&"pending"===t.status&&(c.push(t),e.setState({meetingRequest:!0,meetingStatus:!0})),t.receiver===a&&"accepted"===t.status&&(u.push(t),e.setState({meetingAccepted:!0,meetingStatus:!0}))})})}},{key:"radius",value:function(e){return e*Math.PI/180}},{key:"getDistance",value:function(e,t,a,n){var i=this.radius(a-e),l=this.radius(n-t),o=Math.sin(i/2)*Math.sin(i/2)+Math.cos(this.radius(e))*Math.cos(this.radius(a))*Math.sin(l/2)*Math.sin(l/2);return 6378137*(2*Math.atan2(Math.sqrt(o),Math.sqrt(1-o)))}},{key:"dismiss",value:function(){var e=this.state.selectedVenues;console.log(e)}},{key:"action",value:function(e){var t=this,a=this.state.selectedUsers;q()({title:"Are you sure?",text:"You Want To Meet ".concat(a[e].displayName),icon:"warning",buttons:!0,dangerMode:!0}).then(function(n){n&&(t.setState({meetingDetails:{meetingWith:a[e]}}),t.setState({meetingPoint:!0,card:!1}))})}},{key:"radioButtonValue",value:function(e){this.setState({radioButtonValue:e.target.value})}},{key:"selectVenue",value:function(e,t){var a=this.state,n=a.meetingDetails,i=a.venues,l=a.navigation;n.meetingVenue=i[t],l.lat=i[t].lat,l.lng=i[t].lng,this.setState(n),this.setState(l)}},{key:"getDirections",value:function(){var e=this,t=new google.maps.DirectionsService,a=this.state,n=a.currentUser,i=a.navigation;t.route({origin:new google.maps.LatLng(n.latitude,n.longitude),destination:new google.maps.LatLng(i.lat,i.lng),travelMode:google.maps.TravelMode.DRIVING},function(t,a){a===google.maps.DirectionsStatus.OK?e.setState({directions:t}):alert("Sorry! Can't calculate directions!")})}},{key:"getDirections2",value:function(e){var t=this;console.log(e);var a=new google.maps.DirectionsService,n=this.state.currentUser;a.route({origin:new google.maps.LatLng(n.latitude,n.longitude),destination:new google.maps.LatLng(e.lat,e.lng),travelMode:google.maps.TravelMode.DRIVING},function(e,a){a===google.maps.DirectionsStatus.OK?t.setState({directions:e}):alert("Sorry! Can't calculate directions!")})}},{key:"getTime",value:function(e){var t=e._d.toString().slice(16,24),a=this.state.meetingDetails;a.meetingTime=t,this.setState(a)}},{key:"getDate",value:function(e){var t=e._d.toString().slice(4,15),a=this.state.meetingDetails;a.meetingDate=t,this.setState(a)}},{key:"sendMeetingRequest",value:function(){var e=this.state,t=e.meetingDetails,a=e.radioButtonValue,n=e.uid,i=y.database().ref("meetings/").push();0!==a&&t.meetingDate&&t.meetingTime?(i.set({sender:n,receiver:t.meetingWith.uid,date:t.meetingDate,time:t.meetingTime,venue:t.meetingVenue,status:"pending"}),this.setState({meetingButton:!0,card:!1,meetingPoint:!1})):q()("Access Denied","Please Select The Required Details")}},{key:"accept",value:function(e){y.database().ref("meetings/".concat(e)).update({status:"accepted"}).then(setTimeout(function(){window.location.reload()},1500))}},{key:"reject",value:function(e){y.database().ref("meetings/".concat(e)).set({}).then(setTimeout(function(){window.location.reload()},1500))}},{key:"render",value:function(){var e=this,t=this.state,a=t.meetingButton,n=t.card,l=t.selectedUsers,o=t.meetingPoint,r=t.venues,s=t.meetingDetails,c=t.currentUser,u=t.navigation,m=t.directions,d=t.radioButtonValue,g=t.meetingStatus,h=t.currentUserMeetings,p=t.currentUserMeetingsRequests,f=t.currentUserAcceptedMeetings,v=t.meetingRequest,y=t.meetingAccepted,E={display:"block",height:"30px",lineHeight:"30px"},b=[{google:"Google"}];return i.a.createElement("div",null,a&&!n&&!o&&i.a.createElement("div",null,!g&&!y&&!v&&i.a.createElement("div",null,i.a.createElement("h1",{style:{color:"antiquewhite",fontFamily:"Times New Roman",margin:"60px"}},"You have not done any meeting yet!\u201d, try creating a new meeting!"),i.a.createElement("a",{href:"#",style:{color:"black"},onClick:function(){e.setState({meetingButton:!1,card:!0})},className:"myButton"},"Set A Meeting !")),g&&i.a.createElement("div",null,i.a.createElement("a",{href:"#",style:{color:"black"},onClick:function(){e.setState({meetingButton:!1,card:!0})},className:"myButton"},"Set A Meeting !"),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("a",{href:"#",style:{color:"black"},onClick:this.showModal,className:"myButton"},"See Meeitng Requests"),"}",i.a.createElement(le.a,{title:"Meeting Requests",visible:this.state.visible,onOk:this.handleOk,onCancel:this.handleCancel},p.map(function(t,a){var n=X.a.find(l,{uid:t.sender});return i.a.createElement("div",{class:"card"},i.a.createElement("div",{class:"header"},i.a.createElement("div",{class:"avatar"},i.a.createElement("img",{src:n&&n.displayPicture,alt:""}))),i.a.createElement("div",{class:"card-body"},i.a.createElement("div",{class:"user-meta has-text-centered"},i.a.createElement("h3",{class:"username"},n&&n.displayName),i.a.createElement("h5",{class:"position"},"Meeting For : ",n&&n.meetingDuration[0])),i.a.createElement("div",{class:"user-bio has-text-centered"},i.a.createElement("p",null,n&&"".concat(n.displayName," Wants To Meet You At ").concat(t.venue.name," On ").concat(t.date," Timing is ").concat(t.time," Onwards"))),i.a.createElement("div",{class:"action has-text-centered"},i.a.createElement("a",{href:"#",class:"button navBtn is-small",onClick:e.showModal2},"Map Of Meeitng Location"),i.a.createElement(le.a,{title:"Map",visible:e.state.visible2,onOk:e.handleOk2,onCancel:e.handleCancel2,value:t},i.a.createElement(pe,{isMarkerShown:!0,googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyAzhBEDUxDg83q1yrZ5r9eSrOtnrNDaVG0&v=3.exp&libraries=geometry,drawing,places",loadingElement:i.a.createElement("div",{style:{height:"100%"}}),containerElement:i.a.createElement("div",{style:{height:"600px"}}),mapElement:i.a.createElement("div",{style:{height:"100%"}}),directions:m,originLatitude:c.latitude,originLongitude:c.longitude,navigationLatitude:t.venue.lat,navigationLongitude:t.venue.lng}),i.a.createElement("br",null),i.a.createElement("div",{class:"action has-text-centered"},i.a.createElement("a",{href:"#",style:{color:"black"},onClick:function(){e.getDirections2(t.venue)},class:"button navBtn is-small"},"Get Directions")))),i.a.createElement("div",{class:"action has-text-centered"},i.a.createElement("a",{href:"#",class:"button is-small",onClick:function(){e.accept(t.key)}},"Accept"),i.a.createElement("a",{href:"#",class:"button myBtn is-small",onClick:function(){e.reject(t.key)}},"Reject"))))})),i.a.createElement("h1",{style:{color:"antiquewhite",fontFamily:"Times New Roman",margin:"20px"}},"Your Meetings Status"),h.map(function(e,t){var a=X.a.find(l,{uid:e.receiver});return i.a.createElement(ie.a,{style:{width:300,marginTop:16}},i.a.createElement(ge,{avatar:a&&i.a.createElement(oe.a,{src:a.displayPicture}),title:a&&a.displayName,description:a&&"".concat(e.venue.name," - ").concat(e.date,"  ").concat(e.time)}),i.a.createElement("h4",null,"Status : ",e.status.toUpperCase()))}),f.map(function(e,t){var a=X.a.find(l,{uid:e.sender});return i.a.createElement(ie.a,{style:{width:300,marginTop:16}},i.a.createElement(ge,{avatar:a&&i.a.createElement(oe.a,{src:a.displayPicture}),title:a&&a.displayName,description:a&&"".concat(e.venue.name," - ").concat(e.date,"  ").concat(e.time)}),i.a.createElement("h4",null,"Status : ",e.status.toUpperCase()),a&&i.a.createElement(me.a,{event:{title:"I Friend You's Meeting",description:"Meeting With ".concat(a.displayName," On ").concat(e.date," At ").concat(e.time," For ").concat(a.meetingDuration[0]),location:e.venue.name},listItems:b}))})),"} }"),n&&!a&&!o&&i.a.createElement("div",null,i.a.createElement("h1",{style:{color:"antiquewhite",fontFamily:"Time New Roman"}},"People Near You Around 5 KM Radius And Have Similarities With You"),i.a.createElement("p",{style:{color:"antiquewhite",fontFamily:"Time New Roman"}},"Swipe Right To Set meeting And Left To Dismiss !"),i.a.createElement(ee.a,null,l.map(function(t,a){return i.a.createElement($.Card,{onSwipeLeft:function(){e.dismiss("swipe left")},onSwipeRight:function(){e.action(a)}},i.a.createElement("div",{className:"w3-container",style:{width:"100%"}},i.a.createElement("div",{className:"w3-card-4 ",style:{minHeight:250,backgroundColor:"#84596B"}},i.a.createElement("div",{className:"w3-container w3-center"},i.a.createElement("h3",{style:{fontSize:"20px"}},t.displayName),i.a.createElement("div",null,i.a.createElement(re.a,{autoplay:!0},i.a.createElement("div",null,i.a.createElement("img",{style:{height:"110px",width:"140px"},src:t.imgUrls[0]})),i.a.createElement("div",null,i.a.createElement("img",{style:{height:"110px",width:"140px"},src:t.imgUrls[1]})),i.a.createElement("div",null,i.a.createElement("img",{style:{height:"110px",width:"140px"},src:t.imgUrls[2]})))),i.a.createElement("p",null,i.a.createElement("b",null,"Nickname : ",t.nickname))))))}))),o&&!a&&!n&&i.a.createElement("div",null,i.a.createElement("h1",{style:{color:"yellowgreen",fontFamily:"Time New Roman"}},"Select Your Meeting Venue"," "),i.a.createElement(de,{onChange:function(t){e.radioButtonValue(t)},value:this.state.radioButtonValue},r.map(function(t,a){return i.a.createElement(ne.a,{onClick:function(t){e.selectVenue(t,a)},style:E,value:a+1},i.a.createElement("span",{className:"radio-btn-value"},t.name,",",t.address))})),i.a.createElement("div",null,0!==d&&i.a.createElement("a",{href:"#",style:{color:"black"},onClick:this.showModal,className:"myButton"},"See Venue On Map"),i.a.createElement(le.a,{title:"Map",visible:this.state.visible,onOk:this.handleOk,onCancel:this.handleCancel},i.a.createElement(pe,{isMarkerShown:!0,googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyAzhBEDUxDg83q1yrZ5r9eSrOtnrNDaVG0&v=3.exp&libraries=geometry,drawing,places",loadingElement:i.a.createElement("div",{style:{height:"100%"}}),containerElement:i.a.createElement("div",{style:{height:"600px"}}),mapElement:i.a.createElement("div",{style:{height:"100%"}}),directions:m,originLatitude:c.latitude,originLongitude:c.longitude,navigationLatitude:u.lat,navigationLongitude:u.lng}),i.a.createElement("br",null),i.a.createElement("a",{href:"#",style:{color:"black"},onClick:this.getDirections,className:"myButton"},"Get Directions"))),i.a.createElement("h1",{style:{color:"yellowgreen",fontFamily:"Time New Roman"}},"Select Your Meeting Time"," "),i.a.createElement(se.a,{onChange:function(t){e.getTime(t)},defaultValue:ae()("10:30","HH:mm"),format:"HH:mm"}),i.a.createElement("h1",{style:{color:"yellowgreen",fontFamily:"Time New Roman"}},"Select Your Meeting Date"," "),i.a.createElement("div",{style:{width:350,margin:"0 auto",border:"1px solid #d9d9d9",borderRadius:4,color:"antiquewhite"}},i.a.createElement(ce.a,{fullscreen:!1,onChange:function(t){e.getDate(t)},onPanelChange:function(t){e.onPanelChange(t)}})),i.a.createElement("br",null),i.a.createElement("a",{href:"#",style:{color:"black"},onClick:function(){e.sendMeetingRequest()},className:"myButton"},"Send Meeting Request To ",s.meetingWith.displayName)))}}]),t}(n.Component),pe=Object(K.withScriptjs)(Object(K.withGoogleMap)(function(e){return i.a.createElement(K.GoogleMap,{defaultZoom:14,center:{lat:e.originLatitude,lng:e.originLongitude}},i.a.createElement(K.Marker,{position:{lat:e.originLatitude,lng:e.originLongitude}}),i.a.createElement(K.Marker,{position:{lat:e.navigationLatitude,lng:e.navigationLongitude}}),e.directions&&i.a.createElement(K.DirectionsRenderer,{directions:e.directions}))})),fe=Object(E.b)(function(e){return{user:e}},function(e){return{}})(he),ve=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={showHomepage:!0,showProfileScreen:!1,showDashboard:!1},a.goToProfileScreen=a.goToProfileScreen.bind(Object(d.a)(Object(d.a)(a))),a.goToDashboard=a.goToDashboard.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("uid");e&&this.goToDashboard(e)}},{key:"goToProfileScreen",value:function(e,t,a,n){this.setState({uid:e,displayName:t,displayPicture:a,email:n,showHomepage:!1,showProfileScreen:!0})}},{key:"goToDashboard",value:function(e){this.setState({showHomepage:!1,showProfileScreen:!1,showDashboard:!0,uid:e})}},{key:"render",value:function(){S.a.Header;var e=S.a.Footer,t=S.a.Content,a=this.state,n=a.showHomepage,l=a.showProfileScreen,o=a.uid,r=a.displayName,s=a.displayPicture,c=a.email,u=a.showDashboard;return i.a.createElement(E.a,{store:L},i.a.createElement(A.a,{loading:null,persistor:R},i.a.createElement("div",null,i.a.createElement(S.a,{style:{backgroundColor:"#100c08"}},i.a.createElement(k.a,null,i.a.createElement(M.a,{span:24},i.a.createElement("h1",{className:"Heading"},"I Friend You !"))),i.a.createElement(k.a,null,i.a.createElement("hr",null),i.a.createElement(t,null,i.a.createElement("div",{className:"heightSetting"},n&&!l&&!u&&i.a.createElement(M.a,{span:24},i.a.createElement("div",{className:"Homepage"},i.a.createElement(w,{changeScreen:this.goToProfileScreen,changeScreen2:this.goToDashboard}))),l&&!n&&!u&&i.a.createElement(M.a,{span:24},i.a.createElement("div",{className:"ProfileScreen"},i.a.createElement(Z,{uid:o,email:c,displayName:r,displayPicture:s,changeScreen:this.goToDashboard}))),u&&!n&&!l&&i.a.createElement(M.a,{span:24},i.a.createElement("div",{className:"dashboard"},i.a.createElement(fe,{uid:o})))))),i.a.createElement(k.a,null,i.a.createElement(M.a,{span:24},i.a.createElement("hr",null),i.a.createElement(e,{style:{backgroundColor:"#100c08",margin:"-5px"}},i.a.createElement("address",{style:{color:"yellow",fontFamily:"Times New Roman",textAlign:"center"}},"HayFa Tech",i.a.createElement("sup",null,"\xa9"),i.a.createElement("br",null),"Facebook      : ",i.a.createElement("a",{href:"http://www.facebook.com/M.H0ti",target:"_blank"},"Find Us On Facebook"),i.a.createElement("br",null),"Twitter       : ",i.a.createElement("a",{href:"https://twitter.com/muhammadhoti",target:"_blank"},"Find Us On Twitter"),i.a.createElement("br",null),"Github       : ",i.a.createElement("a",{href:"https://github.com/muhammadhoti",target:"_blank"},"Find Us On Github"),i.a.createElement("br",null)))))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(510);o.a.render(i.a.createElement(ve,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[238,2,1]]]);
//# sourceMappingURL=main.09f166ee.chunk.js.map