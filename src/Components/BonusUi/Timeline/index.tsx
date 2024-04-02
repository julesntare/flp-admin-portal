import React, { Fragment } from 'react'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { TimelineTitle, TimelineTitle1 } from '../../../Utils/Constants'
import { Container, Row } from 'reactstrap'
import BasicTimeline from './BasicTimeline'
import HoverTimeline from './HoverTimeline'
import VariationTimeline from './VariationTimeline'
import HorizontalTimeline from './HorizontalTimeline'
import TimelineMain from './TimelineMain'

export default function TimelineContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={TimelineTitle} parent={TimelineTitle} title={TimelineTitle1} />
            <Container fluid>
                <Row>
                    <BasicTimeline />
                    <HoverTimeline />
                    <VariationTimeline />
                    <HorizontalTimeline />
                    <TimelineMain />
                </Row>
            </Container>
        </Fragment>
    )
}
