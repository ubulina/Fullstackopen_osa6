import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(state => state.notification) 
  
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  
  }

//ehdollinen renderöinti
//jos tila on tyhjä, renderöidään ilman tyyliä, jolloin kehykset eivät näy

  if(notification === '') {

    return (
      <div>{notification}</div>
    )
  
  }

  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification