import React, { useCallback, useState } from 'react'
import { CustomWizardFormPropsType } from '../../../../../Types/FormType'
import { Card, CardBody, Col, Row } from 'reactstrap';
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader';
import BusinessNavComponent from './BusinessNavComponent';
import BusinessTabContent from './BusinessTabContent';

export default function BusinessWizard({ title, divClass='', navColClass, tabColClass }: CustomWizardFormPropsType) {
    const [steps, setSteps] = useState(1);
    const activeCallBack = useCallback((tab: number) => {
        setSteps(tab);
    }, []);
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title={title} />
                <CardBody>
                    <div className={`horizontal-wizard-wrapper  vertical-variations ${divClass}`}>
                        <Row className="g-3">
                            <div className={`main-horizontal-header ${navColClass}`}>
                                <BusinessNavComponent activeCallBack={activeCallBack} steps={steps} />
                            </div>
                            <div className={tabColClass}>
                                <BusinessTabContent steps={steps} activeCallBack={activeCallBack} />
                            </div>
                        </Row>
                    </div>
                </CardBody>
            </Card>
        </Col>

    )
}
