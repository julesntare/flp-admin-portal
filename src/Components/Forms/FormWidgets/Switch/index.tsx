import React, { Fragment } from 'react'
import { Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { FormWidgetsTitle, SwitchTitle } from '../../../../Utils/Constants'
import CustomSwitch from './CustomSwitch'
import IconUncheckedBorderSwitch from './IconUncheckedBorderSwitch'
import DisabledOutlineSwitch from './DisabledOutlineSwitch'
import VariationOfSwitches from './VariationOfSwitches'
import SwitchSizingIcons from './SwitchSizingIcons'

export default function SwitchContainer() {

    return (
        <Fragment>
            <Breadcrumbs pageTitle={SwitchTitle} parent={FormWidgetsTitle} title={SwitchTitle} />
            <Container fluid>
                <Row>
                    <CustomSwitch />
                    <IconUncheckedBorderSwitch/>
                    <DisabledOutlineSwitch />
                    <VariationOfSwitches />
                    <SwitchSizingIcons/>
                </Row>
            </Container>
        </Fragment>
    )
}
