import { Card, CardBody, Col, Row } from "reactstrap"
import { alertColorData, linkColorSubTitle } from "../../../../Data/UiKitsData/AlertData"
import { Fragment } from "react"
import { Href, LinkColorTitle, ThisIsA, WithExampleLinkCheck } from "../../../../Utils/Constants"
import { Alerts, P } from "../../../../AbstractElements"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"

export default function LinkDarkColor() {

    return (
        <Col xl={12}>
            <Card>
                <CommonCardHeader headClass="pb-0" title={LinkColorTitle} subTitle={linkColorSubTitle} />
                <CardBody>
                    <Row>
                        {alertColorData && alertColorData.map((item, index) => (
                            <Col xl={6} key={index}>
                                {item.data && item.data.map((item, index) => (
                                    <Fragment key={index}>
                                        <P className="mb-0">{item.text}</P>
                                        <Alerts color={item.class} className='dark'>
                                            <P>{ThisIsA} <a className={`alert-link ${item.class !== 'light' ? 'text-white': ''}`} href={Href}>
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