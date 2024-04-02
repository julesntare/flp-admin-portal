import React from 'react'
import { FormGroup, Input, Label } from 'reactstrap'
import { RegisterWizardForm } from '../../../../../Types/OtherPagesType'
import { H2, H5 } from '../../../../../AbstractElements'
import { ContactNoLabel, EnterEmailPassword, FirstName, LastName, SignUpToAccount } from '../../../../../Utils/Constants'

export default function PersonalForm({ formValue, updateUserData }: RegisterWizardForm) {
    return (
        <div  id="step-1" className="content">
            <div className="wizard-title">
                <H2>{SignUpToAccount}</H2>
                <H5 className="text-muted mb-4">{EnterEmailPassword}</H5>
            </div>
            <div className="login-main">
                <div className="theme-form">
                    <FormGroup>
                        <Label>{FirstName}</Label>
                        <Input value={formValue.firstName} name="firstName" onChange={updateUserData} id="name" type="text" placeholder="Johan" />
                    </FormGroup>
                    <FormGroup>
                        <Label>{LastName}</Label>
                        <Input value={formValue.lastName} name="lastName" onChange={updateUserData} type="text" placeholder="Deo" />
                    </FormGroup>
                    <FormGroup>
                        <Label>{ContactNoLabel}</Label>
                        <Input value={formValue.contactNumber} name="contactNumber" onChange={updateUserData} type="number" placeholder={"123456789"} />
                    </FormGroup>
                </div>
            </div>
        </div>
    )
}
