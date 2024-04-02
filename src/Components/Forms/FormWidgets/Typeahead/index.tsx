import React, { Fragment } from 'react'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { FormWidgetsTitle, TypeaheadTitle } from '../../../../Utils/Constants'
import { Container, Row } from 'reactstrap'
import AllTypeaheadLists from './AllTypeaheadLists'

export default function TypeaheadContainer() {
    
    return (
        <Fragment>
            <Breadcrumbs pageTitle={TypeaheadTitle} parent={FormWidgetsTitle} title={TypeaheadTitle} />
            <Container fluid>
                <div className="typeahead typeahead-wrapper">
                    <Row>
                        <AllTypeaheadLists />
                    </Row>
                </div>
            </Container>
        </Fragment>
    )
}
