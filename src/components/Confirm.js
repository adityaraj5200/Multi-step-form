import React from 'react'

function Confirm({ firstName,lastName,email,city,bio,occupation }) {
  const styleForCentering = {
    textAlign: 'center'
  }
  const styleForQuestion = {
    fontSize: 25,
    fontWeight: 'normal',
    marginRight: 20,
  }
  const styleForAnswer = {
    fontSize: 25, 
    fontWeight: 'lighter',
  }
  return (
    <div style={styleForCentering}>
      <p>
        <span style={styleForQuestion}>First Name:</span>
        <span style={styleForAnswer}>{firstName}</span>
      </p>

      <p>
        <span style={styleForQuestion}>Last Name:</span>
        <span style={styleForAnswer}>{lastName}</span>
      </p>
      
      <p>
        <span style={styleForQuestion}>Email:</span>
        <span style={styleForAnswer}>{email}</span>
      </p>

      <p>
        <span style={styleForQuestion}>City:</span>
        <span style={styleForAnswer}>{city}</span>
      </p>

      <p>
        <span style={styleForQuestion}>Occupation:</span>
        <span style={styleForAnswer}>{occupation}</span>
      </p>

      <p>
        <span style={styleForQuestion}>Bio:</span>
        <span style={styleForAnswer}>{bio}</span>
      </p>

    </div>
  )
}

export default Confirm
