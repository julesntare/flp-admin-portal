import React, { useCallback, useState } from 'react'
import { TabContent, TabPane } from 'reactstrap'
import { NavCustomizerProps } from '../../../Types/LayoutTypes'
import { Btn, H5, P } from '../../../AbstractElements'
import Configuration from './ConfigurationModal';
import SidebarCusmizer from './SidebarCusmizer';
import { ConfigurationTitle, PreviewSettings } from '../../../Utils/Constants';

export default function TabCustomizer({ callbackNav, selected}: NavCustomizerProps) {
    const [modal, setModal] = useState(false);
    const toggle = useCallback(() => {
        setModal(!modal);
    }, [modal]);
    return (
        <TabContent activeTab={selected}>
            <div className="customizer-header">
                <i className="icofont-close icon-close" onClick={() => callbackNav("", false)}></i>
                <H5 className="f-w-700">{PreviewSettings}</H5>
                <P className="mb-0">
                    {"Try It Real Time  "}
                    <i className="fa fa-thumbs-o-up txt-primary"></i>
                </P>
                <Btn color="primary" className="plus-popup mt-2" onClick={toggle}>
                    {ConfigurationTitle}
                </Btn>
                <Configuration modal={modal} toggle={toggle} />
            </div>
            <div className="customizer-body custom-scrollbar">
                <TabPane tabId="sidebar-type"><SidebarCusmizer /></TabPane>
            </div>
        </TabContent>
    )
}
