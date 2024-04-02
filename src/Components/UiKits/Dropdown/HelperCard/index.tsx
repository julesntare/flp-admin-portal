import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { Fragment } from 'react'
import HelperCardBody from './HelperCardBody'
import { helperCardData, helperCardSubTitle } from '../../../../Data/UiKitsData/DropdownData'
import { HelperCardTitle } from '../../../../Utils/Constants'

export default function HelperCard() {
    
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={HelperCardTitle} subTitle={helperCardSubTitle} />
                <CardBody className='rtl-dropdown'>
                    <div className='common-flex'>
                        {helperCardData && helperCardData.map((item, index) => (
                            <Fragment key={index}>
                                <HelperCardBody item={item} />
                            </Fragment>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}