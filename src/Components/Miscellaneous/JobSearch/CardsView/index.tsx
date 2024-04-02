import React, { Fragment } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { CardsViewTitle, JobSearchTitle } from '../../../../Utils/Constants'
import LeftSidebar from '../Common/LeftSidebar'
import RightSidebarCards from '../Common/RightSidebarCards'

export default function CardsViewContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={CardsViewTitle} parent={JobSearchTitle} title={CardsViewTitle} />
            <Container fluid>
                <Row>
                    <LeftSidebar />
                    <Col xxl={9} xl={8} className='box-col-8'>
                        <Row>
                            <RightSidebarCards limit={14} colClass='col-xl-6 box-col-6' />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}
