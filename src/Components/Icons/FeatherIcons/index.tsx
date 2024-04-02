import React, { Fragment, useCallback, useState } from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import { FeatherIconsTitle, IconsTitle } from '../../../Utils/Constants';
import CommonCardHeader from '../../../Utils/CommonComponents/CommonCardHeader';
import FeatherIconsBody from './FeatherIconsBody';
import IconMarkUp from '../Common/IconMarkUp';

export default function FeatherIconsContainer() {
    const [iconTag, setIconTag] = useState({ iconTag: '' });
    const [icon, setIcon] = useState({ feathericon: '' });
    const [iconFClass, setIconFClass] = useState({ iconFClass: '' });

    const getIconTag = useCallback((tag: string) => {
        setIconTag({
            iconTag: '<i data-feather="' + tag + '"></i>',
        });
        setIcon({
            feathericon: tag,
        });
        setIconFClass({
            iconFClass: tag,
        });
    }, [])
    return (
        <Fragment>
            <Breadcrumbs pageTitle={FeatherIconsTitle} parent={IconsTitle} title={FeatherIconsTitle} />
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <Card>
                            <CommonCardHeader headClass='pb-0' title={FeatherIconsTitle} />
                            <CardBody>
                                <FeatherIconsBody getIconTag={getIconTag} />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <IconMarkUp iconTag={iconTag} icon={icon} iconFClass={iconFClass} />
        </Fragment>
    )
}
