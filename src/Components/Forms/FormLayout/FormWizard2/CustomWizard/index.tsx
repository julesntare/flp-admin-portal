import React, { useCallback, useState } from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap';
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader';
import { CustomWizardFormPropsType } from '../../../../../Types/FormType';
import CustomNavComponent from './CustomNavComponent';
import CustomTabContent from './CustomTabContent';

export default function CustomWizard({ title, divClass, navColClass, tabColClass }: CustomWizardFormPropsType) {
    const [steps, setSteps] = useState(1);
    const activeCallBack = useCallback((tab: number) => {
        setSteps(tab);
    }, []);
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title={title} />
                <CardBody>
                    <div className={`horizontal-wizard-wrapper ${divClass}`}>
                        <Row className="g-3">
                            <div className={`main-horizontal-header ${navColClass}`}>
                                <CustomNavComponent activeCallBack={activeCallBack} steps={steps} />
                            </div>
                            <div className={tabColClass}>
                                <CustomTabContent activeCallBack={activeCallBack} steps={steps} />
                            </div>
                        </Row>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
