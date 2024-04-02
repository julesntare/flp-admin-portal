import React, { Fragment } from 'react'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { BonusUiTitle, PaginationsTitle } from '../../../Utils/Constants'
import { Container, Row } from 'reactstrap'
import DefaultPagination from './DefaultPagination'
import ActiveDisablePage from './ActiveDisablePage'
import IconPagination from './IconPagination'
import RoundedPagination from './RoundedPagination'
import PaginationAlign from './PaginationAlign'
import PaginationSize from './PaginationSize'

export default function PaginationsContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={PaginationsTitle} parent={BonusUiTitle} title={PaginationsTitle} />
            <Container fluid>
                <Row>
                    <DefaultPagination/>
                    <ActiveDisablePage/>
                    <IconPagination/>
                    <RoundedPagination/>
                    <PaginationAlign/>
                    <PaginationSize/>
                </Row>
            </Container>
        </Fragment>
    )
}
