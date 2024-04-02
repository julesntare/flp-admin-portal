import { Card, CardBody, Col } from "reactstrap"
import { Sizes } from "../../../Utils/Constants"
import { Image } from "../../../AbstractElements"
import CommonCardHeader from "../../../Utils/CommonComponents/CommonCardHeader"
import { avatarSizeData, sizesSubTitle } from "../../../Data/UiKitsData/AvatarsData"
import { dynamicImage } from "../../../Utils"

export default function AvatarSizes() {
    
    return (
        <Col xl={4} md={6}>
            <Card>
                <CommonCardHeader headClass="pb-0" title={Sizes} subTitle={sizesSubTitle} />
                <CardBody className='avatar-showcase'>
                    <div className="avatars">
                        {avatarSizeData && avatarSizeData.map((item, index) => (
                                <div key={index} className="avatar">
                                    <Image className={item.class} src={dynamicImage(item.image)} alt="#" body={true}/>
                                </div>
                            ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
