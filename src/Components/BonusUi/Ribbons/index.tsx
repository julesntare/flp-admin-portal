import React, { Fragment } from 'react'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { BonusUiTitle, RibbonsTitle } from '../../../Utils/Constants'
import { Container, Row } from 'reactstrap'
import LeftSideRibbons from './LeftSideRibbons'
import RightSideRibbon from './RightSideRibbon'

export default function RibbonsContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={RibbonsTitle} parent={BonusUiTitle} title={RibbonsTitle} />
            <Container fluid>
                <Row>
                    <LeftSideRibbons/>
                </Row>
                <Row>
                    <RightSideRibbon/>
                </Row>
            </Container>
        </Fragment>
    )
}
