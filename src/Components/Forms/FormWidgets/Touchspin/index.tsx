import React, { Fragment } from 'react'
import { FormWidgetsTitle, TouchspinTitle } from '../../../../Utils/Constants'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { Container, Row } from 'reactstrap'
import DefaultTouchspin from './DefaultTouchspin'
import OutlinedTouchspin from './OutlinedTouchspin'
import IconsWithPrefixAndPostfix from './IconsWithPrefixAndPostfix'
import ButtonsWithPrefixPostfix from './ButtonsWithPrefixPostfix'
import RoundedTouchspin from './RoundedTouchspin'

export default function TouchspinContainer() {
    
    return (
        <Fragment>
            <Breadcrumbs pageTitle={TouchspinTitle} parent={FormWidgetsTitle} title={TouchspinTitle} />
            <Container fluid>
                <div className="bootstrap-touchspin">
                    <Row>
                        <DefaultTouchspin />
                        <OutlinedTouchspin />
                        <IconsWithPrefixAndPostfix />
                        <ButtonsWithPrefixPostfix />
                        <RoundedTouchspin />
                    </Row>
                </div>
            </Container>
        </Fragment>
    )
}
