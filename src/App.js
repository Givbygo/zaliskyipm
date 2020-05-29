import React from 'react';
import './App.css';
import CloudDownloadOutlinedIcon from '@material-ui/icons/CloudDownloadOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ContactPhoneOutlinedIcon from '@material-ui/icons/ContactPhoneOutlined';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';



function App() {
  return (
      <div className="App-main">
        <div className="App-nav">
          <div className="Nav-upload-container">
            <div><CloudDownloadOutlinedIcon className="Nav-upload"/></div>
          </div>
          <div className="Nav-icon-container"><AccountCircleOutlinedIcon className="Nav-icon"/></div>
          <div className="Nav-icon-container"><ContactPhoneOutlinedIcon className="Nav-icon"/></div>
          <div className="Nav-icon-container"><WorkOutlineIcon className="Nav-icon"/></div>
        </div>
        <div className="App-photo">
        <div className="App-photo-details"> Bohdan Zaliskyi <p>Project Manager</p></div>
        </div>
        <div className="App-details">
        Project Manager specialist and Certified PSM I , working 4+ years in IT various innovative markets on Web, Mobile,
        VR/AR projects with international clients. Using Agile frameworks, more inclined to Management
        3.0 style, have experience with version control services and project management tools, such as
        Atlassian Suite and other. Have non professional experience with Html, CSS, JS, React and C#
        (Unity3D) and Photoshop. 
        </div>
            
      </div> 
  );
}

export default App;
