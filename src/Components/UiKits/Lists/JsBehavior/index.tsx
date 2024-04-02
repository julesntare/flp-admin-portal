import { useState } from "react"
import { Card, CardBody, Col, Row } from "reactstrap"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"
import { jsBehaviorSubTitle } from "../../../../Data/UiKitsData/ListsData"
import { JsBehaviorTitle } from "../../../../Utils/Constants"
import ListComponent from "./ListComponent"
import JsBehaviorContent from "./JsBehaviorContent"

export default function JsBehavior() {
    const [activeList, setActiveList] = useState<string>('1')
    
    return (
        <Col sm={12} xl={12}>
            <Card>
                <CommonCardHeader headClass="card-no-border pb-0" title={JsBehaviorTitle} subTitle={jsBehaviorSubTitle} />
                <CardBody>
                    <Row>
                        <Col sm={4}>
                            <ListComponent activeList={activeList} setActiveList={setActiveList} />
                        </Col>
                        <Col sm={8}>
                            <JsBehaviorContent tabId={activeList} />
                        </Col>
                    </Row>
                </CardBody>
            </Card >
        </Col >
    )
}
