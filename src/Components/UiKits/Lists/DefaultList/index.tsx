import { Card, CardBody, Col } from "reactstrap"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"
import { LI, UL } from "../../../../AbstractElements"
import { DefaultListTitle, ECommerce, LogoDesign, SEO, WebDesignDevelop } from "../../../../Utils/Constants"
import { defaultListSubTitle } from "../../../../Data/UiKitsData/ListsData"

export default function DefaultList() {

    return (
        <Col xl={4} md={6}>
            <Card>
                <CommonCardHeader headClass="card-no-border pb-0" title={DefaultListTitle} subTitle={defaultListSubTitle} />
                <CardBody>
                    <UL>
                        <LI> <i className="icofont icofont-arrow-right" />{LogoDesign}</LI>
                        <LI> <i className="icofont icofont-arrow-right" />{WebDesignDevelop}</LI>
                        <LI> <i className="icofont icofont-arrow-right" />{ECommerce}</LI>
                        <LI> <i className="icofont icofont-arrow-right" />{SEO}</LI>
                    </UL>
                </CardBody>
            </Card>
        </Col>
    )
}