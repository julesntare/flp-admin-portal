import React, { useState } from 'react'
import { Card, CardBody, Col, Row, TabContent, TabPane } from 'reactstrap';
import CardHeaderSpan from '../../../../../Utils/CommonComponents/CardHeaderSpan';
import { OrgenizationTitle } from '../../../../../Utils/Constants';
import NavOrganization from './NavOrganization';
import { organizationList } from '../../../../../Data/AppsData/Bookmark&ContactData';
import OrganizationTabPane from './OrganizationTabPane';

export default function OrganizationTab() {
    const [orgActiveTab, setOrgActiveTab] = useState(1);

    return (
        <Card className="mb-0">
            <CardHeaderSpan headingClassName='d-flex' heading={OrgenizationTitle} span={'5 Contacts'} />
            <CardBody className="p-0">
                <Row className="list-persons">
                    <NavOrganization orgActiveTab={orgActiveTab} setOrgActiveTab={setOrgActiveTab} />
                    <Col xl={8} md={7} className="xl-50">
                        <TabContent activeTab={orgActiveTab}>
                            {organizationList.map((user) => (
                                <TabPane tabId={user.id} key={user.id}>
                                    <OrganizationTabPane user={user} />
                                </TabPane>
                            ))}
                        </TabContent>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}
