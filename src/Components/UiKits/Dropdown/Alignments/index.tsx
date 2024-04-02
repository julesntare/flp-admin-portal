import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { alignmentData, alignmentsSubTitle } from '../../../../Data/UiKitsData/DropdownData'
import { Fragment } from 'react'
import DropdownCommon from '../../../../Utils/CommonComponents/DropdownCommon'
import AlignTopDemo from './AlignTopDemo'
import { AlignmentsTitle } from '../../../../Utils/Constants'

export default function Alignments() {
    
    return (
        <Col lg={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={AlignmentsTitle} subTitle={alignmentsSubTitle} />
                <CardBody className='rtl-dropdown'>
                    <div className='common-flex'>
                        <AlignTopDemo />
                        {alignmentData && alignmentData.map((item, index) => (
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
