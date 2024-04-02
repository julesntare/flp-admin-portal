import { Card, CardBody, Col } from 'reactstrap'
import { Image } from '../../../AbstractElements'
import { ShapesTitle } from '../../../Utils/Constants'
import CommonCardHeader from '../../../Utils/CommonComponents/CommonCardHeader'
import { avatarShapeData, shapesSubTitle } from '../../../Data/UiKitsData/AvatarsData'
import { dynamicImage } from '../../../Utils'

export default function Shapes() {

    return (
        <Col xl={4} md={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={ShapesTitle} subTitle={shapesSubTitle} />
                <CardBody className='avatar-showcase'>
                    <div className="avatars">
                        {avatarShapeData && avatarShapeData.map((item, index) => (
                            <div key={index} className="avatar">
                                <Image className={item.class} src={dynamicImage(item.image)} alt="#" body={true} />
                            </div>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
