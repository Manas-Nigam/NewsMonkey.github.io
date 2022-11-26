import React from 'react'
import loading from "./loading.gif";

const Spinner= ()=>{

    return (
      <div className='text-center'>
        <p><strong>Loading</strong><img src = {loading} alt = "spinner"></img></p>
        
      </div>
    )
  
}

export default Spinner