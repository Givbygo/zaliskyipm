import React from 'react';
import './App.css';
import fin from './fin.jpg';
import crm from './crm.jpg';
import data from './data.jpg';
import erp from './erp.png';
import game from './game.jpeg';
import health from './health.jpeg';

const {useState, useRef} = React;

function AppWork() {
    const [loading, setLoading] = useState(true);
    const counter = useRef(0);
    const imageLoaded = () => {
      counter.current += 1;
      if (counter.current >= 6) {
        setLoading(false);
      }
    }
    return (
    <div>
      <div style={{display: loading ? "block" : "none"}}>
         <div className="loader"></div>
      </div>
      <div style={{display: loading ? "none" : "block"}}>
      <div className="Work-container">
                <div className="Work-column">
                    <div className="Work-div"><img className="Work-image" src={fin} alt="Fin tech, web apps" onLoad={imageLoaded}></img><div className="Work-blank">FinTech</div></div>
                    <div className="Work-div"><img className="Work-image" src={crm} alt="CRM, web apps" onLoad={imageLoaded}></img><div className="Work-blank">CRM, web apps</div></div>
                    <div className="Work-div"><img className="Work-image" src={data} alt="Data Analytics, web apps" onLoad={imageLoaded}></img><div className="Work-blank">Data Analytics, web apps</div></div>
                </div>
                <div className="Work-column">
                    <div className="Work-div"><img className="Work-image" src={erp} alt="ERP, mobile apps" onLoad={imageLoaded}></img><div className="Work-blank">ERP, mobile apps</div></div>
                    <div className="Work-div"><img className="Work-image" src={game} alt="Entertainment, mobile apps" onLoad={imageLoaded}></img><div className="Work-blank">Entertainment, mobile apps</div></div>
                    <div className="Work-div"><img className="Work-image" src={health} alt="Health care, mobile apps" onLoad={imageLoaded}></img><div className="Work-blank">Health care, mobile apps</div></div>
                </div>
            </div>
      </div>
    </div>
    )
  }


// class AppWork extends React.Component{
//     // state={
//     //     loaded: false
//     // }
//     // // setTimeout(()=>{
//     // //     this.setState({
//     // //     loaded: true
//     // //     });
//     // // },800);    

//     // componentDidMount(){
//     //     this.setState({
//     //         loaded: true
//     //     })
//     // }


//     render(){
//         return(
//             <div>
//             <div className="Work-container">
//                 <div className="Work-column">
//                     <div className="Work-div"><img className="Work-image" src={fin} alt="Fin tech, web apps"></img><div className="Work-blank">FinTech</div></div>
//                     <div className="Work-div"><img className="Work-image" src={crm} alt="CRM, web apps"></img><div className="Work-blank">CRM, web apps</div></div>
//                     <div className="Work-div"><img className="Work-image" src={data} alt="Data Analytics, web apps"></img><div className="Work-blank">Data Analytics, web apps</div></div>
//                 </div>
//                 <div className="Work-column">
//                     <div className="Work-div"><img className="Work-image" src={erp} alt="ERP, mobile apps"></img><div className="Work-blank">ERP, mobile apps</div></div>
//                     <div className="Work-div"><img className="Work-image" src={game} alt="Entertainment, mobile apps"></img><div className="Work-blank">Entertainment, mobile apps</div></div>
//                     <div className="Work-div"><img className="Work-image" src={health} alt="Health care, mobile apps"></img><div className="Work-blank">Health care, mobile apps</div></div>
//                 </div>
//             </div>
//             </div>
//         )
//     }
// }


export default AppWork;