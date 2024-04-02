import React, { Fragment, useCallback, useState } from 'react';
import { Container, Row } from 'reactstrap';
import IconMarkUp from '../Common/IconMarkUp'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import { IconsTitle, ThemifyIconTitle } from '../../../Utils/Constants';
import ThemifyIconBody from './ThemifyIconBody';
import { themifyIconData } from '../../../Data/IconsData/ThemifyIconData';

export default function ThemifyIconContainer() {
    const [iconTag, setIconTag] = useState({ iconTag: '' });
    const [icon, setIcon] = useState({ icon: '' });
    const [iconFClass, setIconFClass] = useState({ iconFClass: '' });
    const callback = useCallback((tag: string) => {
        setIconTag({
            iconTag: '<i className="' + tag + '"></i>',
        });
        setIcon({
            icon: '' + tag + ' fa-2x',
        });
        setIconFClass({
            iconFClass:  tag,
        });
    }, []);
    return (
        <Fragment>
            <Breadcrumbs pageTitle={ThemifyIconTitle} parent={IconsTitle} title={ThemifyIconTitle} />
            <Container fluid>
                <Row>
                    {themifyIconData.map((data, i) => (
                        <ThemifyIconBody key={i} iconType={data.data} title={data.title} parentCallback={callback} />
                    ))}
                </Row>
            </Container>
            <IconMarkUp iconTag={iconTag} icon={icon} iconFClass={iconFClass} />
        </Fragment>
    )
}
