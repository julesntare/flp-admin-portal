import React, { Fragment } from 'react'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { BaseInputsTitle, FormControlTitle } from '../../../../Utils/Constants'
import { Container, Row } from 'reactstrap'
import BasicForm from './BasicForm'
import FloatingForm from './FloatingForm'
import SelectSizing from './SelectSizing'
import FormControlSizing from './FormControlSizing'
import FileInput from './FileInput'
import FlatInputStyle from './FlatInputStyle'
import BasicHtmlInputControl from './BasicHtmlInputControl'
import BasicFloatingInputControl from './BasicFloatingInputControl'
import EdgesInputStyle from './EdgesInputStyle'
import RaiseInputStyle from './RaiseInputStyle'

export default function BaseInputsContainer() {
    
    return (
        <Fragment>
            <Breadcrumbs pageTitle={BaseInputsTitle} parent={FormControlTitle} title={BaseInputsTitle} />
            <Container fluid>
                <Row>
                    <BasicForm />
                    <FloatingForm/>
                    <SelectSizing/>
                    <FormControlSizing/>
                    <FileInput/>
                    <FlatInputStyle/>
                    <BasicHtmlInputControl/>
                    <BasicFloatingInputControl/>
                    <EdgesInputStyle/>
                    <RaiseInputStyle/>
                </Row>
            </Container>
        </Fragment>
    )
}
