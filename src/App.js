import React from 'react';
import './App.css';
import AppForm from './App-form';


import CloudDownloadOutlinedIcon from '@material-ui/icons/CloudDownloadOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ContactPhoneOutlinedIcon from '@material-ui/icons/ContactPhoneOutlined';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import FlagIcon from '@material-ui/icons/Flag';
import GroupIcon from '@material-ui/icons/Group';
import WebIcon from '@material-ui/icons/Web';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import CountUp from 'react-countup';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';




class App extends React.Component {
  state={
    currentpage: "account",
    transition: false
  }
  accountView=()=>{
    if(this.state.currentpage!=="account"){
      this.setState({
        transition: true
      });
  
      setTimeout(()=>{
        this.setState({
          transition: false,
          currentpage: "account"
        });
      },800);  
    }
  }
  contactView=()=>{
    if(this.state.currentpage!=="contact"){
      this.setState({
        transition: true
      });
      setTimeout(()=>{
        this.setState({
          transition: false,
          currentpage: "contact"
        });
      },800);    
    }
  }
  workView=()=>{
  if(this.state.currentpage!=="work"){
      this.setState({
        transition: true
      });

      setTimeout(()=>{
        this.setState({
          transition: false,
          currentpage: "work"
        });
      },800);    
    }
  } 
  render(){
  let appDetails; 
  if(this.state.currentpage==="account"){
    appDetails = <AppDetailsAccount/>;
  } else if(this.state.currentpage==="contact"){
    appDetails = <AppDetailsContact/>;
  } else if(this.state.currentpage==="work"){
    appDetails = "none"
  }
  return (
      <div className="App-main">
        <div className="App-nav">
          <div className="Nav-upload-container">
            <div><CloudDownloadOutlinedIcon className="Nav-upload"/></div>
          </div>
          <div className="Nav-icon-container"><AccountCircleOutlinedIcon className="Nav-icon" onClick={this.accountView} /></div>
          <div className="Nav-icon-container"><ContactPhoneOutlinedIcon className="Nav-icon" onClick={this.contactView} /></div>
          <div className="Nav-icon-container"><WorkOutlineIcon className="Nav-icon" onClick={this.workView}/></div>
        </div>
          <div className="App-photo">
            <div className="App-photo-details"> Bohdan Zaliskyi <p>Project Manager</p></div>
          </div>
          <div className={`App-details ${this.state.transition ? 'transition-fadeout' : 'transition-fadein'}`}>
            {appDetails}
          </div>
      </div> 
  
  );
  }
}
function AppDetailsAccount(){
    return(
          <div>
            <div className="App-details-title">about me<p>27 years / Kyiv / Fulltime or Freelance</p></div>
          Project Manager specialist and Certified PSM I , working 4+ years in IT various innovative markets on Web, Mobile,
          VR/AR projects with international clients. Using Agile frameworks, more inclined to Management
          3.0 style, have experience with version control services and project management tools, such as
          Atlassian Suite and other. Have experience with Html, CSS, JS, React and C#
          (Unity3D). 
          <hr/>
          <div className="App-details-services"><p>principal facts</p></div>
          <div className="App-details-facts-row">
            <div className="App-details-fact"><p><CountUp start={0} end={42} duration={10}/>+</p>projects</div>
            <div className="App-details-fact"><p><CountUp start={0} end={23} duration={10}/></p>applications live</div>
            <div className="App-details-fact"><p><CountUp start={0} end={5} duration={10}/></p>client references</div>
          </div>
          <hr/>
          <div className="App-details-services"><p>my services</p></div>
          <div className="App-details-services-table-row">
            <div><FlagIcon className="Service-icon"/><p>project management</p> Manage your projects, releases to fit in scope and time</div>
            <div><GroupIcon className="Service-icon"/><p>Scrum</p> Facilitate your team, growing Agile qualities within</div>
          </div>
          <div className="App-details-services-table-row">
            <div><WebIcon className="Service-icon"/><p>static websites</p> Develop your business landing pages and deploy it to web</div>
            <div><VideogameAssetIcon className="Service-icon"/><p>Unity3D </p> Develop Web, Mobile or Desktop Unity application</div>
          </div>
        </div>
    )    
}

function AppDetailsContact(){
    return( 
        <div>
            <div className="App-details-title">contacts</div>
            <div className="App-details-contact-column">
              <div className="App-details-contact-text"><MailOutlineIcon className="App-details-contact-icon"/>bogdanzaliskyi@gmail.com</div>
              <div className="App-details-contact-text"><RoomOutlinedIcon className="App-details-contact-icon"/>Kyiv, Ukraine</div>
            </div>
          <hr/>   
          <div className="App-details-title">send message</div>
          <div>
            <AppForm/>
          </div>
        </div>
    )
}


export default App;
