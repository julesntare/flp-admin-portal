import React, { Fragment, useCallback, useState } from 'react';
import { Container, Row } from 'reactstrap';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import { IcoIconTitle, IconsTitle } from '../../../Utils/Constants';
import IcoIconBody from './IcoIconBody';
import IconMarkUp from '../Common/IconMarkUp';
import { icoIconData } from '../../../Data/IconsData/IcoIconData';

export default function IcoIconContainer() {
    const [iconTag, setIconTag] = useState({ iconTag: '' });
    const [icon, setIcon] = useState({ icon: '' });
    const [iconFClass, setIconFClass] = useState({ iconFClass: '' });
    const callback = useCallback((tag: string) => {
        setIconTag({
            iconTag: '<i className="icofont icofont-' + tag + '"></i>',
        });
        setIcon({
            icon: 'icofont icofont-' + tag + ' fa-2x',
        });
        setIconFClass({
            iconFClass: 'icofont icofont-' + tag,
        });
    }, []);
    return (
        <Fragment>
            <Breadcrumbs pageTitle={IcoIconTitle} parent={IconsTitle} title={IcoIconTitle} />
            <Container fluid>
                <Row>
                    {icoIconData.map((data, i) => (
                        <IcoIconBody key={i} iconType={data.icons} title={data.title} parentCallback={callback} />
                    ))}
                </Row>
            </Container>
            <IconMarkUp iconTag={iconTag} icon={icon} iconFClass={iconFClass} />
        </Fragment>
    )
}
