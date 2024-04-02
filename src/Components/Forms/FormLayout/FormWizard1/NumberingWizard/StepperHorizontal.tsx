import React from 'react'
import { StepperHorizontalProp } from '../../../../../Types/FormType'
import { stepperHorizontalData } from '../../../../../Data/Forms/FormLayoutData'

export default function StepperHorizontal({ step, finishClicked }: StepperHorizontalProp) {

    return stepperHorizontalData.map((data, index) => (
        <div key={index} className={`stepper-one  step ${step > index + 1 || finishClicked === true ? "done active " : ""}`}>
            <div className="step-circle">
                <span>{index + 1}</span>
            </div>
            <div className="step-title">{data}</div>
            <div className="step-bar-left" />
            <div className="step-bar-right" />
        </div>
    ))
}
