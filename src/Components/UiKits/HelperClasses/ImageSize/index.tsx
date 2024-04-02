import { Card, CardBody, Col } from "reactstrap"
import { Image } from "../../../../AbstractElements"
import { ImageSizeTitle } from "../../../../Utils/Constants"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"
import { imageData, imageSubTitle } from "../../../../Data/UiKitsData/HelperClassData"
import { dynamicImage } from "../../../../Utils"

export default function ImageSize() {

    return (
        <Col xl={6}>
            <Card className='height-equal'>
                <CommonCardHeader headClass="pb-0" title={ImageSizeTitle} subTitle={imageSubTitle} />
                <CardBody>
                    <div className='gradient-border gap-3'>
                        {imageData && imageData.map((item, index) => (
                            <Image className={item.class} src={dynamicImage(`blog/comment.jpg`)} alt="img-size-10" key={index} />
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
