import { Card, CardBody, Col } from "reactstrap";
import { popoverOffsetSubTitle } from "../../../../Data/UiKitsData/PopoverData";
import { PopoverOffsetTitle } from "../../../../Utils/Constants";
import OffsetRight from "./OffsetRight";
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader";
import OffsetLeft from "./OffsetLeft";

export default function PopoverOffset() {
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader headClass="card-no-border pb-0" title={PopoverOffsetTitle} subTitle={popoverOffsetSubTitle} />
                <CardBody className='common-flex popover-wrapper'>
                    <OffsetRight/>
                    <OffsetLeft/>
                </CardBody>
            </Card >
        </Col >
    )
}