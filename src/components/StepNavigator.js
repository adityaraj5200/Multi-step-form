import React from 'react';
import { Button } from '@mui/material';

function StepNavigator({ currentStep,nextStep,prevStep }) {
  const styleForButton = {
    margin: 10,
  }
  return (
    <div style={{textAlign:'center'}}>
      
      {currentStep>1 && <Button style={styleForButton} onClick={() => prevStep()} variant='outlined'>Back</Button>}
      {currentStep<4 &&<Button style={styleForButton} onClick={() => nextStep()} variant='contained'>Continue</Button>}
    </div>
  )
}

export default StepNavigator
