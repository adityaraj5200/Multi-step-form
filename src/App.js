import React, { useState } from 'react'

import NavBar from './components/NavBar';
import FormSlides from './components/FormSlides';
import StepNavigator from './components/StepNavigator';

// import logo from './new_logo.png';

const App = () => {
  const [currentStep, setStep] = useState(1);
  const nextStep = () => setStep(currentStep + 1);
  const prevStep = () => setStep(currentStep - 1);

  return (
    <div>
      <NavBar currentStep={currentStep}/>
      <FormSlides style={{ border: '1px solid red' }} currentStep={currentStep}/>
      <StepNavigator currentStep={currentStep} nextStep={nextStep} prevStep={prevStep} />
    </div>
  )
}

export default App;
