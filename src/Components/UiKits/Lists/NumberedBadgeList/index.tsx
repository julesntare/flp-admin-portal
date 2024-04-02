import { Card, CardBody, Col } from "reactstrap"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"
import { NumBadgeListSubTitle, badgeListData } from "../../../../Data/UiKitsData/ListsData"
import { NumberedBadgeListTitle } from "../../../../Utils/Constants"
import { Badges, LI, OL } from "../../../../AbstractElements"

export default function NumberedBadgeList() {
    
    return (
        <Col xxl={4} md={6}>
            <Card>
                <CommonCardHeader headClass="card-no-border pb-0" title={NumberedBadgeListTitle} subTitle={NumBadgeListSubTitle} />
                <CardBody>
                    <OL className='list-group list-group-numbered'>
                        {badgeListData && badgeListData.map((item, index) => (
                            <LI className="d-flex justify-content-between align-items-start flex-wrap" key={index}>
                                <div className="ms-2 me-auto">{item.text}</div>
                                <Badges color={item.badgeClass} className='rounded-pill p-2'>{item.badgeText}</Badges>
                            </LI>
                        ))}
                    </OL>
                </CardBody>
            </Card>
        </Col>
    )
}
