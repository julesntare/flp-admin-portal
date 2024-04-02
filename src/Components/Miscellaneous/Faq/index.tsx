import React, { Fragment } from 'react'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { FaqTitle } from '../../../Utils/Constants'
import { Container, Row } from 'reactstrap'
import FaqWidgets from '../Common/FaqWidgets'
import QuickQuestions from './QuickQuestions'
import FeaturedTutorials from '../Common/FeaturedTutorials'
import LatestArticlesVideos from '../Common/LatestArticlesVideos'

export default function FaqContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={FaqTitle} parent={FaqTitle} title={FaqTitle} />
            <Container fluid>
                <div className="faq-wrap">
                    <Row>
                        <FaqWidgets />
                        <QuickQuestions/>
                        <FeaturedTutorials/>
                        <LatestArticlesVideos/>
                    </Row>
                </div>
            </Container>
        </Fragment>
    )
}
