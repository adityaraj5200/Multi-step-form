import { Container, TextField } from '@mui/material';
import React from 'react';

const FormPersonalDetails = ({setOccupation,setCity,setBio,occupation,city,bio}) => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: 400,
  };
  const textFieldStyle = {
    margin: 10,
  }

  return (
    <Container style={containerStyle}>
      <TextField style={textFieldStyle} onChange={(e) => {setCity(e.target.value)}} value={city}  label="City" variant="standard" />
      <TextField style={textFieldStyle} onChange={(e) => {setOccupation(e.target.value)}} value={occupation} label="Occupation" variant="standard" />
      <TextField style={textFieldStyle} onChange={(e) => {setBio(e.target.value)}}  label="Bio" value={bio} variant="standard" />
    </Container>
  )
}

export default FormPersonalDetails
