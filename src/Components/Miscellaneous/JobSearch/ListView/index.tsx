import React, { Fragment } from 'react'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { JobSearchTitle, ListViewTitle } from '../../../../Utils/Constants'
import { Col, Container, Row } from 'reactstrap'
import LeftSidebar from '../Common/LeftSidebar'
import RightSidebarCards from '../Common/RightSidebarCards'

export default function ListViewContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={ListViewTitle} parent={JobSearchTitle} title={ListViewTitle} />
            <Container fluid>
                <Row>
                    <LeftSidebar />
                    <Col xxl={9} xl={8} className='box-col-8'>
                        <RightSidebarCards limit={8} />
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}
