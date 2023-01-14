import React from 'react';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';

const UserDeatils = ({setFirstName,setLastName,setEmail,firstName,lastName,email}) => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: 400,
  };
  const textFieldStyle = {
    margin: 10
  }


  return (
    <Container style={containerStyle}>
      <TextField style={textFieldStyle} onChange={(e) => {setFirstName(e.target.value)}} value={firstName} label="First Name" variant="standard" />
      <TextField style={textFieldStyle} onChange={(e) => { setLastName(e.target.value) }} value={lastName} label="Last Name"  variant="standard" />
      <TextField style={textFieldStyle} onChange={(e) => { setEmail(e.target.value) }} value={email} label="Email" variant="standard" />
    </Container>
  )
}

export default UserDeatils
