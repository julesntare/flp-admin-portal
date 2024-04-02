import { Card, CardBody, Col } from "reactstrap"
import { badgeButtonData, badgeButtonSubTitle } from "../../../../Data/UiKitsData/TagAndPillsData"
import { Badges, Btn } from "../../../../AbstractElements"
import { BadgesPartButtons } from "../../../../Utils/Constants"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"
import FeatherIconCom from "../../../../Utils/CommonComponents/CommonIcons/FeatherIconCom"

export default function BadgeButton() {
    
    return (
        <Col sm={12} xl={6}>
            <Card>
                <CommonCardHeader headClass="pb-0" title={BadgesPartButtons} subTitle={badgeButtonSubTitle} />
                <CardBody>
                    <div className='badge-spacing flex-column align-items-start'>
                        {badgeButtonData && badgeButtonData.map((item, index) => (
                            <Btn color={item.class} className='d-flex align-items-center' type="button" key={index}>{item.text}
                                <Badges color="light" className="rounded-circle btn-p-space text-dark ms-2">
                                    <FeatherIconCom iconName={item.iconName} />
                                </Badges>
                            </Btn>
                        ))}
                    </div>
                </CardBody>
            </Card >
        </Col >
    )
}
