import React, { useState } from 'react'
import { Card, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import { Href } from '../../../../../Utils/Constants';
import { productPageMainNav } from '../../../../../Data/AppsData/EcommerceData/ProductData';
import { P } from '../../../../../AbstractElements';

export default function ProductPageTabs() {
    const [activeTab, setActiveTab] = useState(1);
    return (
        <Card>
            <Row className="product-page-main">
                <Col sm={12}>
                    <Nav className="border-tab mb-0" color='primary' tabs>
                        {productPageMainNav.map((item, index) => (
                            <NavItem key={index}>
                                <NavLink className={activeTab === index + 1 ? 'active' : ''} onClick={() => setActiveTab(index + 1)} href={Href}>{item}</NavLink>
                                <div className="material-border"></div>
                            </NavItem>
                        ))}
                    </Nav>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId={1}>
                            <P className="mb-0 m-t-20">{'Refresh your wardrobe with this chic top. With an eye-catching square neck, this top also features pretty puff sleeves. Stunning pink colour classNameic solid pattern Square neck Elasticated puff sleeves Belt included, Polyester fabric, machine wash.."'}</P>
                            <P className="mb-0">{'Tee Stores is an Indian contemporary clothing brand. The product pages display a fine quality fabric with colorful description. We offer many vivid designs, artclassName, styles that "combine heritage with modernity, simplicity, playfulness and street style"."'}</P>
                        </TabPane>
                        <TabPane tabId={2}>
                            <P className="mb-0 m-t-20">{"Lorate Solid Men's Fashion Full Sleeves Latest Jacket for Men With"}</P>
                            <P className="mb-0">{'Button Closure Long Sleeve Casual Torn Lycra Denim Jacket.'}</P>
                        </TabPane>
                        <TabPane tabId={3}>
                            <P className="mb-0 m-t-20">{'Rock Paper Scissors Various Dots Half Sleeves Girl’s Regular Fit T-Shirt I 100% Cotton'}</P>
                            <P className="mb-0">{'T Shirt with Half Sleeve Round Neck I Regular Wear Solid Kids Tees and Black Sleeve.'}</P>
                        </TabPane>
                        <TabPane tabId={4}>
                            <P className="mb-0 m-t-20">{'Product Dimensions : 18 x 18 x 4 cm'}</P>
                            <P className="mb-0">{'Date First Available : 31 March 2023'}</P>
                            <P className="mb-0">{'Manufacturer : Tee Stores'}</P>
                            <P className="mb-0">{'Item part number : TS-WT721-XS-WHITE'}</P>
                        </TabPane>
                    </TabContent>
                </Col>
            </Row>
        </Card>
    )
}
