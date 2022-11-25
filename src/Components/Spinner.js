import React, { Component } from 'react'
import loading from "./loading.gif";

export  class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <p><strong>Loading</strong><img src = {loading} alt = "spinner"></img></p>
        
      </div>
    )
  }
}

export default Spinner