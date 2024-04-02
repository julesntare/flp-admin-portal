import React, { Fragment, useCallback, useState } from 'react'
import { Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import IconMarkUp from '../Common/IconMarkUp'
import FontAwesomeBody from './FontAwesomeBody'
import { FontAwesomeIconTitle, IconsTitle } from '../../../Utils/Constants'
import { fontAwesomeData } from '../../../Data/IconsData/FontAwesomeData'

export default function FontAwesomeIconContainer() {
    const [iconTag, setIconTag] = useState({ iconTag: '' });
    const [icon, setIcon] = useState({ icon: '' });
    const [iconFClass, setIconFClass] = useState({ iconFClass: '' });
    const callback = useCallback((tag: string) => {
        setIconTag({
            iconTag: '<i className="fa fa-' + tag + '"></i>',
        });
        setIcon({
            icon: 'fa fa-' + tag + ' fa-2x',
        });
        setIconFClass({
            iconFClass: 'fa fa-' + tag,
        });
    }, []);
    return (
        <Fragment>
            <Breadcrumbs pageTitle={FontAwesomeIconTitle} parent={IconsTitle} title={FontAwesomeIconTitle} />
            <Container fluid>
                <Row>
                    {fontAwesomeData.map((data, i) => (
                        <FontAwesomeBody key={i} iconType={data.data} title={data.title} parentCallback={callback} />
                    ))}
                </Row>
            </Container>
            <IconMarkUp iconTag={iconTag} icon={icon} iconFClass={iconFClass} />
        </Fragment>
    )
}
