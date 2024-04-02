import { Card, CardBody, Col } from "reactstrap"
import { numberBadgeSubTitle, numberBadgesData } from "../../../../Data/UiKitsData/TagAndPillsData"
import { Href, NumberofBadge } from "../../../../Utils/Constants"
import { Badges } from "../../../../AbstractElements"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"

export default function NumberBadges() {
    
    return (
        <Col sm={12} xl={6}>
            <Card>
                <CommonCardHeader headClass="pb-0" title={NumberofBadge} subTitle={numberBadgeSubTitle} />
                <CardBody>
                    <div className='badge-spacing'>
                        {numberBadgesData && numberBadgesData.map((item, index) => (
                            <Badges href={Href} color={item.class} key={index}>{item.text}</Badges>
                        ))}
                    </div>
                </CardBody>
            </Card >
        </Col >
    )
}