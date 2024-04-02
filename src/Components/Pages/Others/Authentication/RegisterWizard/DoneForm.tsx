import React from 'react'
import { RegisterWizardForm } from '../../../../../Types/OtherPagesType'
import { City, Country, EnterEmailPassword, SignUpToAccount, State } from '../../../../../Utils/Constants'
import { H2, H5 } from '../../../../../AbstractElements'
import { FormGroup, Input, Label } from 'reactstrap'

export default function DoneForm({ formValue, updateUserData }: RegisterWizardForm) {
    return (
        <div id="step-4" className="content">
            <div className="wizard-title">
                <H2>{SignUpToAccount}</H2>
                <H5 className="text-muted mb-4">{EnterEmailPassword}</H5>
            </div>
            <div className="login-main">
                <div className="theme-form">
                    <FormGroup>
                        <Label>{Country}</Label>
                        <Input className="mt-1" value={formValue.country} onChange={updateUserData} name="country" type="text" placeholder="Country" />
                    </FormGroup>
                    <FormGroup>
                        <Label>{State}</Label>
                        <Input className="mt-1" value={formValue.state} onChange={updateUserData} name="state" type="text" placeholder="State" />
                    </FormGroup>
                    <FormGroup>
                        <Label>{City}</Label>
                        <Input value={formValue.city} onChange={updateUserData} name="city" className="mt-1" type="text" placeholder="City" />
                    </FormGroup>
                </div>
            </div>
        </div>
    )
}
