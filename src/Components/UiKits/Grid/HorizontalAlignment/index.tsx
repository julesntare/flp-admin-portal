import { Card, CardBody, Col } from 'reactstrap'
import CommonCardFooter from '../Common/CommonCardFooter'
import { horizontalAlignSubTitle } from '../../../../Data/UiKitsData/GridData'
import HorizontalStart from './HorizontalStart'
import HorizontalEnd from './HorizontalEnd'
import HorizontalCenter from './HorizontalCenter'
import { HorizontalAlignmentTitle, HorizontalClass, HorizontalPosition } from '../../../../Utils/Constants'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'

export default function HorizontalAlignment() {
    
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title={HorizontalAlignmentTitle} subTitle={horizontalAlignSubTitle} />
                <CardBody className='grid-showcase grid-align'>
                    <HorizontalStart />
                    <HorizontalCenter />
                    <HorizontalEnd />
                </CardBody>
                <CommonCardFooter code={HorizontalClass} value={HorizontalPosition} />
            </Card>
        </Col >
    )
}
