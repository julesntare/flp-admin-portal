import React, { Fragment } from 'react'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { GoogleMapsTitle, MapsTitle } from '../../../../Utils/Constants'
import { Container, Row } from 'reactstrap'
import BasicMap from './BasicMap'
import MarkerMaps from './MarkerMaps'
import PolygonsMap from './PolygonsMap'
import PolylineMaps from './PolylineMaps'

export default function GoogleMapsContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={GoogleMapsTitle} parent={MapsTitle} title={GoogleMapsTitle} />
            <Container fluid>
                <Row>
                    <BasicMap />
                    <MarkerMaps />
                    <PolygonsMap />
                    <PolylineMaps/>
                </Row>
            </Container>
        </Fragment>
    )
}
