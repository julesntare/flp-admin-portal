import { Card, CardBody, Col } from "reactstrap"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"
import { listWithNumberSubTitle, numberListData } from "../../../../Data/UiKitsData/ListsData"
import { ListWithNumberTitle } from "../../../../Utils/Constants"
import { LI, OL } from "../../../../AbstractElements"

export default function ListWithNumber() {
    
    return (
        <Col xxl={4} md={6}>
            <Card>
                <CommonCardHeader headClass="card-no-border pb-0" title={ListWithNumberTitle} subTitle={listWithNumberSubTitle} />
                <CardBody>
                    <OL className="list-group list-group-numbered">
                        {numberListData && numberListData.map((item, index) => (
                            <LI className={`fw-bold ${item.class}`} key={index}>
                                {item.text}
                            </LI>
                        ))}
                    </OL>
                </CardBody>
            </Card>
        </Col>
    )
}
