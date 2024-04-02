import React, { Fragment } from 'react'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { ButtonGroupTitle, ButtonsTitle } from '../../../Utils/Constants'
import { Container, Row } from 'reactstrap'
import GroupButtonClass from './GroupButtonClass'
import RadioCheckboxButton from './RadioCheckboxButton'
import NestingButton from './NestingButton'
import VerticalButtonGroup from './VerticalButtonGroup'

export default function ButtonGroupContainer() {
    
    return (
        <Fragment>
            <Breadcrumbs pageTitle={ButtonGroupTitle} parent={ButtonsTitle} title={ButtonGroupTitle} />
            <Container fluid>
                <Row>
                    <GroupButtonClass/>
                    <RadioCheckboxButton />
                    <NestingButton />
                    <VerticalButtonGroup />
                </Row>
            </Container>
        </Fragment>
    )
}
