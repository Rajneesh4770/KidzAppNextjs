import React, { useContext } from 'react'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import ThirdStep from './ThirdStep'
import { Stepper, StepLabel, Step } from '@mui/material'
import DisplayData from './DisplayData'
import { multiStepContext, StepContext } from './StepContext'
import style from './form.module.css'

const Index = () => {

    const { currentStep, submitted } = useContext(multiStepContext)

    const showStep = (step) => {
        console.log(step);
        switch (step) {
            case 1:
                return <FirstStep />
            case 2:
                return <SecondStep />
            case 3:
                return <ThirdStep />

        }
    }

    const steps = [
        'Your Profile',
        'Home Location',
        'My Kidz Ages',
    ]

    return (
        <div className={`container ${style.multiStepperHeader}`}>
            <div className={style.shared}>
                <h3>Welcome</h3>
                <h5>Add your location, ages and personal details</h5>
                {submitted ? <DisplayData /> :
                    <>
                        <div className={`${style.centerStepper} ${style.stepProgressBar}`}>
                            <Stepper
                                activeStep={currentStep - 1}
                                orientation='horizontal'
                                alternativeLabel
                                className={style.stepper}
                            >
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel >{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </div>
                        <div>
                            {showStep(currentStep)}
                        </div>
                    </>
                }
            </div>
        </div>

    )
}

export default Index