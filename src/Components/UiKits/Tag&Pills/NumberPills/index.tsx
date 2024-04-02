import { Card, CardBody, Col } from "reactstrap"
import { numberPillsData, numberPillsSubTitle } from "../../../../Data/UiKitsData/TagAndPillsData"
import { NumberofPills } from "../../../../Utils/Constants"
import { Badges } from "../../../../AbstractElements"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"

export default function NumberPills() {
    
    return (
        <Col sm={12} xl={6}>
            <Card>
                <CommonCardHeader headClass="pb-0" title={NumberofPills} subTitle={numberPillsSubTitle} />
                <CardBody>
                    <div className='badge-spacing'>
                        {numberPillsData && numberPillsData.map((item, index) => (
                            <Badges color={item.class} className='badge rounded-circle badge-p-space' key={index}>{item.text}</Badges>
                        ))}
                    </div>
                </CardBody>
            </Card >
        </Col >
    )
}
