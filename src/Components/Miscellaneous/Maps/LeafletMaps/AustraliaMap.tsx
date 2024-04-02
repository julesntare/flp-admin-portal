import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { MapContainer, TileLayer } from 'react-leaflet'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { australiaMapProps, australiaMapSubHeading } from '../../../../Data/MiscellaneousData/MapsData'

export default function AustraliaMap() {
    return (
        <Col sm={6}>
            <Card>
                <CommonCardHeader title="Leaflet Australia MAP" subTitle={australiaMapSubHeading} />
                <CardBody>
                    <MapContainer className="jvector-map-height custom-map"  {...australiaMapProps}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    </MapContainer>
                </CardBody>
            </Card>
        </Col>
    )
}
