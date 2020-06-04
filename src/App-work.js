import React from 'react';
import './App.css';
import fin from './fin.jpg';
import crm from './crm.jpg';
import data from './data.jpg';
import erp from './erp.png';
import game from './game.jpeg';
import health from './health.jpeg';

class AppWork extends React.Component{
    state ={
        hovered: false
    }
    render(){
        return(
            <div className="Work-container">
                <div className="Work-column">
                    <div className="Work-div"><img className="Work-image" src={fin} alt="Fin tech, web apps"></img><div className="Work-blank">FinTech</div></div>
                    <div className="Work-div"><img className="Work-image" src={crm} alt="CRM, web apps"></img><div className="Work-blank">CRM, web apps</div></div>
                    <div className="Work-div"><img className="Work-image" src={data} alt="Data Analytics, web apps"></img><div className="Work-blank">Data Analytics, web apps</div></div>
                </div>
                <div className="Work-column">
                    <div className="Work-div"><img className="Work-image" src={erp} alt="ERP, mobile apps"></img><div className="Work-blank">ERP, mobile apps</div></div>
                    <div className="Work-div"><img className="Work-image" src={game} alt="Entertainment, mobile apps"></img><div className="Work-blank">Entertainment, mobile apps</div></div>
                    <div className="Work-div"><img className="Work-image" src={health} alt="Health care, mobile apps"></img><div className="Work-blank">Health care, mobile apps</div></div>
                </div>
            </div>
        )
    }
}


export default AppWork;