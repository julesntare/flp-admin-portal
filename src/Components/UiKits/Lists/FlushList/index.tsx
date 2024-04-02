import { Card, CardBody, Col } from "reactstrap"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"
import { CART, CHECKOUT, FlushListTitle, PRODUCT, PRODUCTDETAILS } from "../../../../Utils/Constants"
import { LI, UL } from "../../../../AbstractElements"
import { flushListSubTitle } from "../../../../Data/UiKitsData/ListsData"

export default function FlushList() {
    
    return (
        <Col xl={4} md={12}>
            <Card>
                <CommonCardHeader headClass="card-no-border pb-0" title={FlushListTitle} subTitle={flushListSubTitle} />
                <CardBody>
                    <UL className="list-group-flush">
                        <LI><i className="icofont icofont-arrow-right"> </i>{PRODUCT}</LI>
                        <LI><i className="icofont icofont-arrow-right"> </i>{PRODUCTDETAILS}</LI>
                        <LI><i className="icofont icofont-arrow-right"> </i>{CART}</LI>
                        <LI><i className="icofont icofont-arrow-right"> </i>{CHECKOUT}</LI>
                    </UL>
                </CardBody>
            </Card>
        </Col>
    )
}
