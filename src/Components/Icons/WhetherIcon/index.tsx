import React, { Fragment } from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import { IconsTitle, WhetherIconTitle, WhetherIconsWithAnimations } from '../../../Utils/Constants';
import CommonCardHeader from '../../../Utils/CommonComponents/CommonCardHeader';
import WhetherIconBody from './WhetherIconBody';

export default function WhetherIconContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={WhetherIconTitle} parent={IconsTitle} title={WhetherIconTitle} />
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <Card>
                            <CommonCardHeader headClass='pb-0' title={WhetherIconsWithAnimations} />
                            <CardBody>
                                <WhetherIconBody />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}
