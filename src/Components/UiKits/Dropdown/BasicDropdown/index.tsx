import { Card, CardBody, Col } from "reactstrap"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"
import BasicDemo from "./BasicDemo"
import { basicDropdownData, basicDropdownSubTitle } from "../../../../Data/UiKitsData/DropdownData"
import { Fragment } from "react"
import DropdownCommon from "../../../../Utils/CommonComponents/DropdownCommon"
import { BasicDropdownTitle } from "../../../../Utils/Constants"

export default function BasicDropdown() {
    
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader headClass="pb-0" title={BasicDropdownTitle} subTitle={basicDropdownSubTitle} />
                <CardBody className='rtl-dropdown'>
                    <div className='common-flex'>
                        <BasicDemo />
                        {basicDropdownData && basicDropdownData.map((item, index) => (
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
