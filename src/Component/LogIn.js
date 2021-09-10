import React from 'react'
import "./Style.css"
const LogIn = () => {
  
    return (
        <>
        <div className="Log">
        <div className="name">
            <h2>Darzi</h2>
            <p>vendor Login</p>
        </div>

         <div className="form">
             <p>Sign in to start your session</p>
        <form action="">
            <div className="v">
                +91
            
             <input type="number" placeholder="Mobile" required />
             </div>
            <div className="v">
                🔒
         
             <input type="password" name="password" placeholder="Password" required />
             </div>
            
            <div className="check">
            <button type="submit"  >🔓 Sign In</button>
            </div>
           
            
         
          
        </form>
        </div>

        <p>I forgot my password</p>
        <p><span>Register</span> a new membersip</p>
        </div> 
        </>
    )
}

export default LogIn
