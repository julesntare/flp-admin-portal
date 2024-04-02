import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { H3, H5, LI, P, UL } from '../../../../AbstractElements'
import { brandData, shippingData } from '../../../../Data/AppsData/EcommerceData/ProductData'
import { Brand } from '../../../../Utils/Constants'

export default function BrandShipping() {
    return (
        <Col xxl={3} md={6} className="box-col-6">
            <Card>
                <CardBody>
                    <div className="filter-block">
                        <H3>{Brand}</H3>
                        <UL className='simple-list'>
                            <Link to={`${process.env.PUBLIC_URL}/applications/ecommerce/product`}>
                                {brandData.map((item, index) => (
                                    <LI key={index}>{item}</LI>
                                ))}
                            </Link>
                        </UL>
                    </div>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <div className="collection-filter-block">
                        <UL className="pro-services simple-list">
                            {shippingData.map((data) => (
                                <LI key={data.id}>
                                    <div className="d-flex">
                                        {data.icon}
                                        <div className="flex-grow-1">
                                            <H5>{data.title}</H5>
                                            <P>{data.subTitle}</P>
                                        </div>
                                    </div>
                                </LI>
                            ))}
                        </UL>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
