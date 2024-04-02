import { Card, CardBody, Col, Row } from "reactstrap"
import { nestingSubTitle } from "../../../../Data/UiKitsData/GridData"
import NestingLevel2 from "./NestingLevel2"
import NestingLevel3 from "./NestingLevel3"
import { Level1col3, Level2col4 } from "../../../../Utils/Constants";
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader";

export default function Nesting() {

    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title='Nesting' subTitle={nestingSubTitle} />
                <CardBody className='grid-showcase'>
                    <Row className='g-3'>
                        <Col xs={3}><span>{Level1col3}</span></Col>
                        <NestingLevel2 />
                        <NestingLevel3 />
                        <Col xs={4}><span>{Level2col4}</span></Col>
                    </Row>
                </CardBody>
            </Card >
        </Col >
    )
}
