import React, { Fragment } from 'react'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { BonusUiTitle, BreadcrumbTitle } from '../../../Utils/Constants'
import { Container, Row } from 'reactstrap'
import DefaultBreadcrumb from './DefaultBreadcrumb'
import DividerBreadcrumb from './DividerBreadcrumb'
import WithIconBreadcrumb from './WithIconBreadcrumb'
import VariationBreadcrumb from './VariationBreadcrumb'
import ColoredBreadcrumb from './ColoredBreadcrumb'

export default function BreadcrumbContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={BreadcrumbTitle} parent={BonusUiTitle} title={BreadcrumbTitle} />
            <Container fluid>
                <Row>
                    <DefaultBreadcrumb />
                    <DividerBreadcrumb />
                    <WithIconBreadcrumb />
                    <VariationBreadcrumb />
                    <ColoredBreadcrumb />
                </Row>
            </Container>
        </Fragment>
    )
}
