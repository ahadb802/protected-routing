import React from 'react'
import Toast from 'react-bootstrap/Toast';

const message = () => {
 let currentUser=JSON.parse(sessionStorage.getItem("User"));
 if(currentUser===null){
  currentUser={name:" "}
 }
  return (
    <Toast>
      <Toast.Body>Hello, There! <strong>{currentUser.name}</strong> Thanks for Using My App</Toast.Body>
    </Toast>
  )
}

export default message