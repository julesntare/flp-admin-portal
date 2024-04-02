import React from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { PolylinesTitle } from '../../../../Utils/Constants';
import { containerStyle, defaultCenter } from '../../../../Data/MiscellaneousData/MapsData';

export default function PolylineMaps() {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey:
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyAjeJEPREBQFvAIqDSZliF0WjQrCld-Mh0",
    });
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={PolylinesTitle} />
                <CardBody>
                    <div className="map-js-height">
                        <div id="gmap-simple" className="map-block">
                            {isLoaded ? <GoogleMap mapContainerStyle={containerStyle} center={defaultCenter} zoom={10}></GoogleMap> : "loading"}
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
