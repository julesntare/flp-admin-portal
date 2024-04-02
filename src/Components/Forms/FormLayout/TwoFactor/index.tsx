import React, { Fragment } from 'react'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { FormLayoutTitle, TwoFactorTitle } from '../../../../Utils/Constants'
import { Container, Row } from 'reactstrap'
import TwoFactorAuthentication from './TwoFactorAuthentication'
import EmailVerification from './EmailVerification'

export default function TwoFactorContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={TwoFactorTitle} parent={FormLayoutTitle} title={TwoFactorTitle} />
            <Container fluid>
                <Row>
                    <TwoFactorAuthentication />
                    <EmailVerification/>
                </Row>
            </Container>
        </Fragment>
    )
}
