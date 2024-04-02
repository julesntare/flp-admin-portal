import { Card, CardBody, Col, Row } from "reactstrap"
import CommonCardFooter from "../Common/CommonCardFooter"
import { verticalAlignSubTitle } from "../../../../Data/UiKitsData/GridData"
import VerticalStart from "./VerticalStart"
import VerticalCenter from "./VerticalCenter"
import VerticalEnd from "./VerticalEnd"
import { VerticalAlignmentTitle, VerticalClass, VerticalPosition } from "../../../../Utils/Constants"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"

export default function VerticalAlignment() {

    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title={VerticalAlignmentTitle} subTitle={verticalAlignSubTitle} />
                <CardBody className='grid-showcase mb-0'>
                    <Row>
                        <VerticalStart />
                        <VerticalCenter />
                        <VerticalEnd />
                    </Row>
                </CardBody>
                <CommonCardFooter code={VerticalClass} value={VerticalPosition} />
            </Card >
        </Col >
    )
}
