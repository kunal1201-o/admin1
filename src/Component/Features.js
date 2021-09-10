import React,{useState} from 'react'
import {ArrowRightAltOutlined} from '@material-ui/icons'

const Features = (props) => {
   
    return (
        <>
            <div className="featured">
                <div className="featuredItem">
                    <span className="featuredtitle">
                    {props.num}
                    </span>
                    <div className="contant">
                    <span className="featureMOn">
                        Total listed Product
                    </span>
                   
                    </div>
                    <span className="moreinfo">
                        More Info <ArrowRightAltOutlined/>
                    </span>
                </div>
                
                    <div className="featuredItem">
                    <span className="featuredtitle">
                        53
                    </span>
                    <div className="contant">
                    <span className="featureMOn">
                        Total Inquiry
                    </span>
                   
                    </div>
                    <span className="moreinfo">
                        More Info <ArrowRightAltOutlined/>
                    </span>
                </div>
                
                    <div className="featuredItem">
                    <span className="featuredtitle">
                        44
                    </span>
                    <div className="contant">
                    <span className="featureMOn">
                        Total Lead
                    </span>
                   
                    </div>
                    <span className="moreinfo">
                        More Info <ArrowRightAltOutlined/>
                    </span>
                </div>
                <div className="featuredItem">
                    <span className="featuredtitle">
                        65
                    </span>
                    <div className="contant">
                    <span className="featureMOn">
                        Unique Visitors
                    </span>
                   
                    </div>
                    <span className="moreinfo">
                        More Info <ArrowRightAltOutlined/>
                    </span>
                </div>
                
            </div>
            
        </>
    )
}

export default Features
