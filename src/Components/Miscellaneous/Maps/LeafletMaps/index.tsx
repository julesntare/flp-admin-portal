import React, { Fragment } from 'react'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { LeafletMapTitle, MapsTitle } from '../../../../Utils/Constants'
import { Container, Row } from 'reactstrap'
import WorldMap from './WorldMap'
import UsaMap from './UsaMap'
import IndiaMap from './IndiaMap'
import AustraliaMap from './AustraliaMap'

export default function LeafletMapsContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={LeafletMapTitle} parent={MapsTitle} title={LeafletMapTitle} />
            <Container fluid>
                <Row>
                    <WorldMap />
                    <UsaMap />
                    <IndiaMap />
                    <AustraliaMap />
                </Row>
            </Container>
        </Fragment>
    )
}
