import React,{useState} from 'react'
import Features from './Features'
import "./Style.css"
const AddEnquiry = () => {
const [name,Setname] = useState('')
const [fname, setfname] = useState('')
const int=(e)=>{
Setname(e.target.value);
}
const click =()=>{
    const val=setfname(name);
}


 


    return (
      
        <div>
 
            <div className="field">
               
                <h2>Enquiry</h2>
                <label htmlFor="">Product id</label>
                <input type="text"
                onChange={int}
                value={name}
                />
                <label htmlFor="">Enter your Message</label>
                <input type="text" name="" id="" 
                 />
            <button onClick={click}>Add</button>
           
           
            
            </div>
        </div>
    )
}

export default AddEnquiry
