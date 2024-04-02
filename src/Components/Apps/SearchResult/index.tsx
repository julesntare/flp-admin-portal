import React, { Fragment, useState } from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { SearchPagesTitle, SearchWebsiteTitle } from '../../../Utils/Constants'
import SearchResultHeader from './SearchResultHeader'
import SearchNav from './SearchNav'
import SearchTabContent from './SearchTabContent'

export default function SearchResultContainer() {
    const [activeTab, setActiveTab] = useState(1);
    return (
        <Fragment>
            <Breadcrumbs pageTitle={SearchWebsiteTitle} parent={SearchPagesTitle} title={SearchWebsiteTitle} />
            <Container fluid className="search-page">
                <Row>
                    <Col sm={12}>
                        <Card>
                            <SearchResultHeader />
                            <CardBody>
                                <SearchNav activeTab={activeTab} setActiveTab={setActiveTab} />
                                <SearchTabContent activeTab={activeTab} />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}
