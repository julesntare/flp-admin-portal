import { Card, CardBody, Col, Row } from 'reactstrap'
import { ListingTypography } from '../../../../Utils/Constants'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { listingSubTitle } from '../../../../Data/UiKitsData/TypographyData'
import UnorderList from './UnorderList'
import DescriptionList from './DescriptionList'
import OrderList from './OrderList'

const Listing = () => {
    
    return (
        <Col sm={12} className='listing'>
            <Card>
                <CommonCardHeader title={ListingTypography} subTitle={listingSubTitle} />
                <CardBody>
                    <Row className='g-3'>
                        <UnorderList />
                        <OrderList />
                        <DescriptionList />
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
export default Listing