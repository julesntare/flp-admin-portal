import React, { Fragment, useState } from 'react'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { EmailTitle, LetterBoxTitle } from '../../../../Utils/Constants'
import { Container, Row } from 'reactstrap'
import LetterLeftAside from './LetterLeftAside'
import LetterRightAside from './LetterRightAside'

export default function LetterBoxContainer() {
    const [navId, setNavId]= useState("1");
    return (
        <Fragment>
            <Breadcrumbs pageTitle={LetterBoxTitle} parent={EmailTitle} title={LetterBoxTitle} />
            <Container fluid>
                <div className="email-wrap email-main-wrapper">
                    <Row>
                        <LetterLeftAside navId={navId} setNavId={setNavId} />
                        <LetterRightAside navId={navId}/>
                    </Row>
                </div>
            </Container>
        </Fragment>
    )
}
