import React from 'react'
import { FormGroup, Input, Label } from 'reactstrap'
import { ConfirmPassword, EmailAddress, EnterEmailPassword, Password, SignUpToAccount } from '../../../../../Utils/Constants'
import { RegisterWizardForm } from '../../../../../Types/OtherPagesType'
import { H2, H5 } from '../../../../../AbstractElements'

export default function AddressForm({ formValue, updateUserData }: RegisterWizardForm) {
    return (
        <div id="step-2" className="content">
            <div className="wizard-title">
                <H2>{SignUpToAccount}</H2>
                <H5 className="text-muted mb-4">{EnterEmailPassword}</H5>
            </div>
            <div className="login-main">
                <div className="theme-form">
                    <FormGroup className="m-t-15">
                        <Label>{EmailAddress}</Label>
                        <Input name="email" onChange={updateUserData} value={formValue.email} type="email" placeholder="name@example.com" />
                    </FormGroup>
                    <FormGroup>
                        <Label>{Password}</Label>
                        <Input name="password" onChange={updateUserData} value={formValue.password} type="password" placeholder="Password" />
                    </FormGroup>
                    <FormGroup>
                        <Label>{ConfirmPassword}</Label>
                        <Input name="confirmPassword" onChange={updateUserData} value={formValue.confirmPassword} type="password" placeholder="Enter again" />
                    </FormGroup>
                </div>
            </div>
        </div>
    )
}
