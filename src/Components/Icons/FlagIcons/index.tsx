import React, { Fragment, useCallback, useState } from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import { FlagIconsTitle, IconsTitle } from '../../../Utils/Constants';
import CommonCardHeader from '../../../Utils/CommonComponents/CommonCardHeader';
import FlagIconBody from './FlagIconBody';
import IconMarkUp from '../Common/IconMarkUp';

export default function FlagIconsContainer() {
    const [iconTag, setIconTag] = useState({ iconTag: '' });
    const [icon, setIcon] = useState({ icon: '' });
    const [iconFClass, setIconFClass] = useState({ iconFClass: '' });

    const getIconTag = useCallback((tag: { abbreviation: string }) => {
        setIconTag({
            iconTag: '<i className="fi fi-' + tag.abbreviation + '"></i>',
        });
        setIcon({
            icon: 'fi fi-' + tag.abbreviation + ' fa-3x',
        });
        setIconFClass({
            iconFClass: 'fi fi-' + tag.abbreviation,
        });
    }, [])
    return (
        <Fragment>
            <Breadcrumbs pageTitle={FlagIconsTitle} parent={IconsTitle} title={FlagIconsTitle} />
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <Card>
                            <CommonCardHeader headClass='pb-0' title={FlagIconsTitle} />
                            <CardBody>
                                <FlagIconBody getIconTag={getIconTag} />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <IconMarkUp iconTag={ iconTag } icon={ icon } iconFClass={ iconFClass } />
        </Fragment>
    )
}
