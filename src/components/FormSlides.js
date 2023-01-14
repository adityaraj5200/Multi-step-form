import React, { useState } from 'react'

import UserDetails from './UserDetails';
import PersonalDetails from './PersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

const FormSlides = ({currentStep}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [occupation, setOccupation] = useState('');
  const [city, setCity] = useState('');
  const [bio, setBio] = useState('');


  
  switch (currentStep) {
    case 1:
      return (
        <div>
          <UserDetails 
            setFirstName={setFirstName}
            setLastName={setLastName}
            setEmail={setEmail}
            firstName={firstName}
            lastName={lastName}
            email={email}
          />
        </div>
      )
      case 2:
        return (
          <div>
          <PersonalDetails 
            setOccupation={setOccupation}
            setCity={setCity}
            setBio={setBio}
            occupation={occupation}
            city={city}
            bio={bio}
          />
        </div>
      )
    case 3:
      return (
        <div>
          <Confirm 
            firstName={firstName}
            lastName={lastName}
            email={email}
            city={city}
            bio={bio}
            occupation={occupation}
          />
        </div>
      )
    case 4:
      return (
        <div>
          <Success/>
        </div>
      )
    default:
      return <p>Landed on wrong step!</p>
  }
}


export default FormSlides;