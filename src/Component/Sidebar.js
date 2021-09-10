import React from 'react'
import "./Style.css"
import {Person,Speed,ShoppingCart,Help,Settings,MenuBook} from '@material-ui/icons'
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidewrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarDash active" >
                        <Speed className="icon"/>
                        Dashboard
                    </h3>
                 
                </div>
                <div className="sidebarMenu">
               
                    <h3 className="sidebarDash" >
                    <Person className="icon"/>
                       Profile
                    </h3>
                    <ul className="sidebarlist">
                        <li className="sidebarlistItem">
                            Update Profile
                        </li>
                      
                        <li className="sidebarlistItem">
                            Check Profile
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarDash">
                      <ShoppingCart className="icon"/>  Products
                    </h3>
                    <ul className="sidebarlist">
                        <li className="sidebarlistItem ">
                            Add Product
                        </li>
                        <li className="sidebarlistItem">
                            Update Product
                        </li>
                        <li className="sidebarlistItem">
                         Product List
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarDash">
                       <MenuBook className="icon"/> Enquiry
                    </h3>
                    <ul className="sidebarlist">
                        <li className="sidebarlistItem ">
                            Add Enquiry
                        </li>
                       
                        <li className="sidebarlistItem">
                         Enquiry List
                        </li>
                    </ul>
                 
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarDash">
                        Ads Request
                    </h3>
                 
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarDash">
                      <Settings className="icon"/>  Settings
                    </h3>
                 
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarDash">
                        
                    <Help className="icon"/>    Helps
                    </h3>
               
                </div>
            </div>
           
        </div>
    )
}

export default Sidebar
