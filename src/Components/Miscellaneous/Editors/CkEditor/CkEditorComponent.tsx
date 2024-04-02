import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { CkEditorTitle } from '../../../../Utils/Constants';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function CkEditorComponent() {
    const content = 'Hello!, This is content.';
    
    return (
        <Row>
            <Col sm={12}>
                <Card>
                    <CommonCardHeader headClass='pb-0' title={CkEditorTitle} />
                    <CardBody>
                        <CKEditor editor={ClassicEditor} data={content} />
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}
