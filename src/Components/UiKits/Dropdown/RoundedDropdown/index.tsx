import { Card, CardBody, Col } from "reactstrap"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"
import RoundedDemo from "./RoundedDemo"
import { roundedDropdownData, roundedDropdownSubTitle } from "../../../../Data/UiKitsData/DropdownData"
import { Fragment } from "react"
import DropdownCommon from "../../../../Utils/CommonComponents/DropdownCommon"
import { RoundedDropdownTitle } from "../../../../Utils/Constants"

export default function RoundedDropdown() {
    
    return (
        <Col xl={6}>
            <Card className='height-equal'>
                <CommonCardHeader headClass="pb-0" title={RoundedDropdownTitle} subTitle={roundedDropdownSubTitle} />
                <CardBody className='rtl-dropdown'>
                    <div className='common-flex'>
                        <div className='btn-group'>
                            <RoundedDemo />
                        </div>
                        {roundedDropdownData && roundedDropdownData.map((item, index) => (
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

