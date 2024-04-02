import React from 'react'
import { RegisterWizardForm } from '../../../../../Types/OtherPagesType'
import { Age, Birthday, EnterEmailPassword, HavePassport, SignUpToAccount } from '../../../../../Utils/Constants'
import { H2, H5 } from '../../../../../AbstractElements'
import { FormGroup, Input, Label } from 'reactstrap'

export default function MessageForm({ formValue, updateUserData }: RegisterWizardForm) {
    return (
        <div id="step-3" className="content" >
            <div className="wizard-title">
                <H2>{SignUpToAccount}</H2>
                <H5 className="text-muted mb-4">{EnterEmailPassword}</H5>
            </div>
            <div className="login-main">
                <div className="theme-form">
                    <FormGroup>
                        <Label>{Birthday}</Label>
                        <Input type="date" onChange={updateUserData} value={formValue.birthDate} name="birthDate" />
                    </FormGroup>
                    <FormGroup>
                        <Label>{Age}</Label>
                        <Input placeholder="Age" type="text" onChange={updateUserData} value={formValue.age} name="age" />
                    </FormGroup>
                    <FormGroup>
                        <Label>{HavePassport}</Label>
                        <Input placeholder="Yes/No" type="text" onChange={updateUserData} value={formValue.passPort} name="passPort" />
                    </FormGroup>
                </div>
            </div>
        </div>
    )
}
