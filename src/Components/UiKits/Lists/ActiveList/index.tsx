import { Card, CardBody, Col } from "reactstrap"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"
import { activeListSubTitle } from "../../../../Data/UiKitsData/ListsData"
import { ActiveListTitle, ApexCharts, StarterKits, UIKits, WowAnimations } from "../../../../Utils/Constants"
import { LI, UL } from "../../../../AbstractElements"

export default function ActiveList() {
    
    return (
        <Col xl={4} md={6}>
            <Card>
                <CommonCardHeader headClass="card-no-border pb-0" title={ActiveListTitle} subTitle={activeListSubTitle} />
                <CardBody>
                    <UL>
                        <LI className=" active bg-warning-light"><i className="icofont icofont-arrow-right" /> {UIKits}</LI>
                        <LI><i className="icofont icofont-arrow-right" /> {WowAnimations}</LI>
                        <LI> <i className="icofont icofont-arrow-right" /> {ApexCharts}</LI>
                        <LI><i className="icofont icofont-arrow-right" /> {StarterKits}</LI>
                    </UL>
                </CardBody>
            </Card>
        </Col>
    )
}
