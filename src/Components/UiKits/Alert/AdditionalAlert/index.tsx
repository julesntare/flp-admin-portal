import { Card, CardBody, Col } from "reactstrap"
import { additionalAlertData, additionalAlertSubTitle } from "../../../../Data/UiKitsData/AlertData"
import { AdditionalAlertTitle } from "../../../../Utils/Constants"
import { Alerts, H3, P } from "../../../../AbstractElements"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"

export default function AdditionalAlert() {

    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader headClass="pb-0" title={AdditionalAlertTitle} subTitle={additionalAlertSubTitle} />
                <CardBody className='dark-alert'>
                    {additionalAlertData && additionalAlertData.map((item, index) => (
                        <Alerts color={item.class} key={index}>
                            <H3 className={`alert-heading pb-2 ${item.headclass}`} >{item.head}</H3>
                            <P>{item.text}</P>
                            <hr />
                            <P className="mb-0">{item.subtext}</P>
                        </Alerts>
                    ))}
                </CardBody>
            </Card >
        </Col >
    )
}