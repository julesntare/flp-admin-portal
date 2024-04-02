import React, { Fragment } from 'react'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { BonusUiTitle, ToastsTitle } from '../../../Utils/Constants'
import { Container, Row } from 'reactstrap'
import LiveToast from './LiveToast'
import ColorsScheme from './ColorsScheme'
import StackingToasts from './StackingToasts'
import TranslucentToasts from './TranslucentToasts'
import DefaultToast from './DefaultToast'
import UniqueToast from './UniqueToast'
import ToastPlacement from './ToastPlacement'

export default function ToastsContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={ToastsTitle} parent={BonusUiTitle} title={ToastsTitle} />
            <Container fluid>
                <Row>
                    <LiveToast/>
                    <ColorsScheme/>
                    <StackingToasts/>
                    <TranslucentToasts/>
                    <DefaultToast/>
                    <UniqueToast/>
                    <ToastPlacement/>
                </Row>
            </Container>
        </Fragment>
    )
}
