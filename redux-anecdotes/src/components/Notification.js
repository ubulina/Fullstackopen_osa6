import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {


  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  
  }

//ehdollinen renderöinti
//jos tila on tyhjä, renderöidään ilman tyyliä, jolloin kehykset eivät näy

  if(props.notification === '') {

    return (
      <div>{props.notification}</div>
    )
  
  }

  return (
    <div style={style}>
      {props.notification}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

export default connect(mapStateToProps)(Notification)
