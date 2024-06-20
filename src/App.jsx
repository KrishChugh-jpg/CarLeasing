import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import CarInfoForm from './components/CarInfoForm';
import AdditionalDetailsForm from './components/AdditionalDetailsForm';
import PayDetailsForm from './components/PayDetailsForm';
import CarImage from './assets/tin.svg';
import './App.css';

function App() {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="bg-blue-400 flex justify-center items-start min-h-screen py-8">
      <div className="bg-white w-full max-w-7xl p-9 rounded-lg shadow-lg transition-all duration-500">
      <div className="flex justify-center mb-8">
          <img src={CarImage} alt="Car Leasing" className="bg-gradient-to-t" /> 
        </div>
        <Header />
        <div className="transition-all duration-500">
          {step === 0 && <CarInfoForm nextStep={nextStep} />}
          {step === 1 && <AdditionalDetailsForm nextStep={nextStep} prevStep={prevStep} />}
          {step === 2 && <PayDetailsForm prevStep={prevStep} />}
        </div>
      </div>
    </div>
  );
  
}

export default App;

