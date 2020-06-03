import React from 'react';
import './App.css';

class AppWork extends React.Component{

    render(){
        return(
            <div className="Work-container">
                <div className="Work-column">
                <image className="Work-image" src="#">Fin tech, web apps</image>
                <image className="Work-image">CRM, web apps</image>
                <image className="Work-image">Data Analytics, web apps</image>
                </div>
                <div className="Work-column">
                <image className="Work-image">ERP, mobile apps</image>
                <image className="Work-image">Entertainment, mobile apps</image>
                <image className="Work-image">Health care, mobile apps</image>
                </div>
            </div>
        )
    }
}


export default AppWork;