import { Card, CardBody, Col } from 'reactstrap'
import { roundedPillData, roundedPillSubTitle } from '../../../../Data/UiKitsData/TagAndPillsData'
import { Href, PillsWithIcons } from '../../../../Utils/Constants'
import { Badges } from '../../../../AbstractElements'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import FeatherIconCom from '../../../../Utils/CommonComponents/CommonIcons/FeatherIconCom'

export default function RoundedPillsIcon() {
    
    return (
        <Col sm={12} xl={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={PillsWithIcons} subTitle={roundedPillSubTitle} />
                <CardBody>
                    <div className='badge-spacing'>
                        {roundedPillData && roundedPillData.map((item, index) => (
                            <Badges color={item.class} className='rounded-circle p-2' href={Href} key={index}>
                                <FeatherIconCom iconName={item.iconName} />
                            </Badges>
                        ))}
                    </div>
                </CardBody>
            </Card >
        </Col >
    )
}
