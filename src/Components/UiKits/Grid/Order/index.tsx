import { Card, CardBody, Col } from "reactstrap"
import CommonCardFooter from "../Common/CommonCardFooter"
import { orderSubTitle } from "../../../../Data/UiKitsData/GridData"
import OrderBody from "./OrderBody"
import { OrderClass, OrderPosition, OrderTitle } from "../../../../Utils/Constants"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"

export default function Order() {
    
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title={OrderTitle} subTitle={orderSubTitle} />
                <CardBody className='grid-showcase'>
                    <OrderBody />
                </CardBody>
                <CommonCardFooter code={OrderClass} value={OrderPosition} />
            </Card >
        </Col>
    )
}
