import React from 'react'
import Toast from 'react-bootstrap/Toast';

const message = () => {
  let currentUser=JSON.parse(localStorage.getItem("logedUser"));
  if(currentUser===null){
    currentUser=[{name:""}]
  }
  return (
    <Toast>
      <Toast.Body>Hello, There! <strong>{currentUser[0].name}</strong> Thanks for Using My App</Toast.Body>
    </Toast>
  )
}

export default message