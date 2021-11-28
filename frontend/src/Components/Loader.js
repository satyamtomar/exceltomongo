import React from 'react'
import spinner from './spinner.gif'
const Loader =()=> {
        return (
        <div  style={{   backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    
       backgroundColor:'white' ,
   }}>   
   <center>    <img className="my-3 pt-10  "  src={spinner} alt="loading"  /> </center> 
            </div>
        )
    }


export default Loader
