import { Card, CardBody, Col } from "reactstrap"
import { offsetSubTitle } from "../../../../Data/UiKitsData/GridData"
import OffsetBody from "./OffsetBody"
import CommonCardFooter from "../Common/CommonCardFooter"
import { OffsetClass, OffsetStep, OffsetTitle } from "../../../../Utils/Constants"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"

export default function Offset() {
    
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title={OffsetTitle} subTitle={offsetSubTitle} />
                <CardBody className='grid-showcase'>
                    <OffsetBody />
                </CardBody>
                <CommonCardFooter code={OffsetClass} value={OffsetStep} />
            </Card >
        </Col >
    )
}
