import React, { Fragment } from 'react'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { KnowledgebaseTitle } from '../../../Utils/Constants'
import { Container, Row } from 'reactstrap'
import KnowledgeSearch from './KnowledgeSearch'
import FaqWidgets from '../Common/FaqWidgets'
import FeaturedTutorials from '../Common/FeaturedTutorials'
import LatestArticlesVideos from '../Common/LatestArticlesVideos'
import BrowseArticles from './BrowseArticles'

export default function KnowledgebaseContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={KnowledgebaseTitle} parent={KnowledgebaseTitle} title={KnowledgebaseTitle} />
            <Container className='knowledgebase' fluid>
                <Row>
                    <KnowledgeSearch />
                    <FaqWidgets />
                    <BrowseArticles />
                    <FeaturedTutorials />
                    <LatestArticlesVideos />
                </Row>
            </Container>
        </Fragment>
    )
}
