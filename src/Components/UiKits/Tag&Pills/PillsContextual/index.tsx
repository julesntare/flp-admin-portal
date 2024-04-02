import { Card, CardBody, Col } from "reactstrap"
import { pillsContextualSubTitle, pillsData } from "../../../../Data/UiKitsData/TagAndPillsData"
import { PillsContextualTitle } from "../../../../Utils/Constants"
import { Badges } from "../../../../AbstractElements"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"

export default function PillsContextual() {
    
    return (
        <Col sm={12} xl={6}>
            <Card>
                <CommonCardHeader headClass="pb-0" title={PillsContextualTitle} subTitle={pillsContextualSubTitle} />
                <CardBody>
                    <div className='badge-spacing'>
                        {pillsData && pillsData.map((item, index) => (
                            <Badges className="rounded-pill" color={item.class} key={index}>{item.text}</Badges>
                        ))}
                    </div>
                </CardBody>
            </Card >
        </Col >
    )
}