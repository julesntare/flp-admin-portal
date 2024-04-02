import { Card, CardBody, Col } from "reactstrap"
import { badgeIconData, badgeWithIconSubTitle } from "../../../../Data/UiKitsData/TagAndPillsData"
import { BadgeIcons, Href } from "../../../../Utils/Constants"
import { Badges } from "../../../../AbstractElements"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"
import FeatherIconCom from "../../../../Utils/CommonComponents/CommonIcons/FeatherIconCom"

export default function BadgeWithIcon() {
    
    return (
        <Col sm={12} xl={6}>
            <Card>
                <CommonCardHeader headClass="pb-0" title={BadgeIcons} subTitle={badgeWithIconSubTitle} />
                <CardBody>
                    <div className='badge-spacing'>
                        {badgeIconData && badgeIconData.map((item, index) => (
                            <Badges color={item.color} className={item.class} href={Href} key={index}>
                                <FeatherIconCom iconName={item.iconName} />
                            </Badges>
                        ))}
                    </div>
                </CardBody>
            </Card >
        </Col >
    )
}
