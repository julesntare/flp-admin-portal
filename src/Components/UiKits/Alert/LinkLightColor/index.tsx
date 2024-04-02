import { Card, CardBody, Col, Row } from "reactstrap"
import { alertLightColorData, linkLightSubTitle } from "../../../../Data/UiKitsData/AlertData"
import { Fragment } from "react"
import { Href, LinkLightColorTitle, ThisIsA, WithExampleLinkCheck } from "../../../../Utils/Constants"
import { Alerts, P } from "../../../../AbstractElements"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"

export default function LinkLightColor() {

    return (
        <Col xl={12}>
            <Card>
                <CommonCardHeader headClass="pb-0" title={LinkLightColorTitle} subTitle={linkLightSubTitle} />
                <CardBody>
                    <Row>
                        {alertLightColorData && alertLightColorData.map((item, index) => (
                            <Col xl={6} key={index}>
                                {item.data && item.data.map((item, index) => (
                                    <Fragment key={index}>
                                        <P className="mb-0">{item.text}</P>
                                        <Alerts color={item.class}>
                                            <P className={item.textClass}>{ThisIsA} <a className={`alert-link ${item.textClass}`} href={Href}>
                                                {item.alertText}</a> {WithExampleLinkCheck}
                                            </P>
                                        </Alerts>
                                    </Fragment>
                                ))}
                            </Col>
                        ))}
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}

