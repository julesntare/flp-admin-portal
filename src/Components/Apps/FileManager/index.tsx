import React, { Fragment } from 'react'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { AppsTitle, FileManagerTitle } from '../../../Utils/Constants'
import { Container, Row } from 'reactstrap'
import FileSidebar from './FileSidebar'
import FileContent from './FileContent'

export default function FileManagerContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={FileManagerTitle} parent={AppsTitle} title={FileManagerTitle} />
            <Container fluid>
                <Row>
                   <FileSidebar/> 
                   <FileContent/>
                </Row>
            </Container>
        </Fragment>
    )
}
