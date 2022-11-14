import React, { Component } from 'react'
import loading from './../images/spinner.webp'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img className="my-3" src={loading} alt="loading" style={{height: '150px', width: '150px'}}/>
      </div>
    )
  }
}
