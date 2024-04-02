import React, { Fragment } from 'react'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { BonusUiTitle, ScrollableTitle } from '../../../Utils/Constants'
import { Container, Row } from 'reactstrap'
import CustomScrollbar from './CustomScrollbar'
import SmallSizeScroll from './SmallSizeScroll'
import BadgesScrollbar from './BadgesScrollbar'
import ProfileScrollable from './ProfileScrollable'
import ScrollableContent from './ScrollableContent'
import HorizontalScrollbar from './HorizontalScrollbar'
import BothSideScrollbar from './BothSideScrollbar'

export default function ScrollableContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={ScrollableTitle} parent={BonusUiTitle} title={ScrollableTitle} />
            <Container fluid className="list-name">
                <Row>
                    <CustomScrollbar/>
                    <SmallSizeScroll/>
                    <BadgesScrollbar/>
                    <ProfileScrollable/>
                    <ScrollableContent/>
                    <HorizontalScrollbar/>
                    <BothSideScrollbar/>
                </Row>
            </Container>
        </Fragment>
    )
}
