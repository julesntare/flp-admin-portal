import { Card, CardBody, Col } from 'reactstrap'
import { Image } from '../../../AbstractElements'
import { RatioTitle } from '../../../Utils/Constants'
import CommonCardHeader from '../../../Utils/CommonComponents/CommonCardHeader'
import { avatarRatioData, ratioSubTitle } from '../../../Data/UiKitsData/AvatarsData'
import { dynamicImage } from '../../../Utils'

export default function Ratio() {

    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={RatioTitle} subTitle={ratioSubTitle} />
                <CardBody className='avatar-showcase'>
                    <div className="avatars">
                        {avatarRatioData && avatarRatioData.map((item, index) => (
                            <div className="avatar ratio" key={index}>
                                <Image className={item.class} src={dynamicImage(item.image)} alt="#" />
                            </div>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
