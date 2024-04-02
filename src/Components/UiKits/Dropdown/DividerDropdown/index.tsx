import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { dividerCommonData, dividerDropdownSubTitle } from '../../../../Data/UiKitsData/DropdownData'
import { Fragment } from 'react'
import DividerBody from './DividerBody'
import { DividerDropdownTitle } from '../../../../Utils/Constants'

export default function DividerDropdown() {

    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={DividerDropdownTitle} subTitle={dividerDropdownSubTitle} />
                <CardBody className='rtl-dropdown'>
                    <div className='common-flex'>
                        {dividerCommonData && dividerCommonData.map((item, index) => (
                            <Fragment key={index}>
                                <DividerBody item={item} />
                            </Fragment>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

