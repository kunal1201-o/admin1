import React from 'react'
import "./Style.css"
import {NotificationsNone,Language,Settings,Toc} from '@material-ui/icons';
const Header = () => {
 
    return (
        <>
        <div className="topbar">
            <div className="topbarwrapper">
                <div className="left">
               <span className="logo">
                  
                   <Toc className="toc"/>
                      Derzi</span>
                </div>
                <div className="right">
                   <div className="IconContainer">
                   <Language/>
                   
                     
                   
                   </div>
                   <div className="IconContainer">
                   <NotificationsNone/>
                   
                       <span className="badge">2</span>
                   
                   </div>
                   <div className="IconContainer">
                   <Settings/>
                   
                     
                   </div>
                   <img src="Images/pic4.jpg" alt="" className="topAvtar"/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header

