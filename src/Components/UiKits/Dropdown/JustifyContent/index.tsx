import { Card, CardBody, Col } from "reactstrap"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"
import { justifyContentSubTitle, justifyData } from "../../../../Data/UiKitsData/DropdownData"
import { Fragment } from "react"
import DropdownCommon from "../../../../Utils/CommonComponents/DropdownCommon"
import TextLeftDemo from "./TextLeftDemo"
import { JustifyContentTitle } from "../../../../Utils/Constants"

export default function JustifyContent() {
    
    return (
        <Col lg={6}>
            <Card>
                <CommonCardHeader headClass="pb-0" title={JustifyContentTitle} subTitle={justifyContentSubTitle} />
                <CardBody className='dropdown-basic m-0'>
                    <div className='common-flex'>
                        <TextLeftDemo />
                        {justifyData && justifyData.map((item, index) => (
                            <Fragment key={index}>
                                <DropdownCommon item={item} />
                            </Fragment>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
