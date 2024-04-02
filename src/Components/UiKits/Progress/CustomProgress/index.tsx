import { Card, CardBody, Col, Row } from "reactstrap";
import { customProgressData, customProgressSubTitle } from "../../../../Data/UiKitsData/ProgressData";
import { CustomProgressTitle } from "../../../../Utils/Constants";
import { Fragment } from "react";
import { H6, ProgressBar } from "../../../../AbstractElements";
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader";

export default function CustomProgress() {
    return (
        <Card>
            <CommonCardHeader headClass="pb-0" subTitle={customProgressSubTitle} title={CustomProgressTitle} />
            <CardBody>
                <Row className="progress-showcase">
                    <Col>
                        {customProgressData && customProgressData.map((item, index) => (
                            <Fragment key={index}>
                                <H6 className="mb-2">{item.text}</H6>
                                <ProgressBar className="mb-4 text-center" color={item.class} value={item.value} animated>
                                    {item.value}{'%'}
                                </ProgressBar>
                            </Fragment>
                        ))}
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}
