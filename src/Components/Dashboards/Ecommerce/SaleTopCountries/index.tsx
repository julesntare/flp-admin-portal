import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { MapContainer, TileLayer } from 'react-leaflet'
import DropdownWithHeader from '../../../../Utils/CommonComponents/DashboardsCommon/DropdownWithHeader'
import { SaleTopCountriesTitle } from '../../../../Utils/Constants'
import { monthlyDropdownList, saleTopCountriesData, worldMapProps } from '../../../../Data/DashboardsData/ECommerceData'
import { H2, H5, LI, UL } from '../../../../AbstractElements'

export default function SaleTopCountries() {
    return (
        <Col xl={3} className="col-xl-50 box-col-6 proorder-xl-2">
            <Card className="state">
                <DropdownWithHeader headerClass='pb-0' heading={SaleTopCountriesTitle} dropDownList={monthlyDropdownList} dropDownClass='icon-dropdown' dropDownIcon={true} />
                <CardBody className="mt-0">
                    {saleTopCountriesData.map((data) => (
                        <UL className={`d-flex simple-list flex-row ${data.id === 2 ? 'mt-4' : ''}`} key={data.id}>
                            {data.child.map((item) => (
                                <LI className={`balance-card ${item.class ? item.class : ''}`} key={item.id}>
                                    <div className="Countries"><span className="rounded-pill"></span>
                                        <H5>{item.title}</H5>
                                    </div>
                                    <H2 className="mt-1 mb-0">{item.percent}{'%'}</H2>
                                </LI>
                            ))}
                        </UL>
                    ))}
                    <MapContainer className="jvector-map-height custom-map" {...worldMapProps}>
                        <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
                    </MapContainer>
                </CardBody>
            </Card>
        </Col>
    )
}
