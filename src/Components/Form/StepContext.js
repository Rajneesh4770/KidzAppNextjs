import React,{useState} from 'react'
import Index from './Index'

const multiStepContext = React.createContext();

const StepContext = () => {

    const [currentStep, setStep] = useState(1);
    const [userData, setUserData] = useState({
            firstName: '',
            lastName: '',
            email:'',
            code: '',
            phoneNumber: '',
            address: '',
            landmark: '',
            zipCode: '',    
            btn:'5',    
            phone:'0'
        });
    const [finalData, setFinalData] = useState({});
    const [submitted,setSubmitted] = useState(false);

    const submitData = () => {
        setSubmitted(true);
        setFinalData({...finalData, userData});
        setUserData('');
        setStep(1)
    }

  return (
    <div>
        <multiStepContext.Provider
            value={{
                currentStep,setStep,
                userData, setUserData,
                finalData, setFinalData, submitData,
                submitted,setSubmitted
            }}>
            <Index />
        </multiStepContext.Provider>
    </div>
  )
}

export {multiStepContext,StepContext}