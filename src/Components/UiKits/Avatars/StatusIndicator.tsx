import { Card, CardBody, Col } from "reactstrap"
import { StatusIndicatorTitle } from "../../../Utils/Constants"
import { Image } from "../../../AbstractElements"
import CommonCardHeader from "../../../Utils/CommonComponents/CommonCardHeader"
import { avatarStatusData, statusSubTitle } from "../../../Data/UiKitsData/AvatarsData"
import { dynamicImage } from "../../../Utils"

export default function StatusIndicator() {
    return (
        <Col xl={4} md={6}>
            <Card>
                <CommonCardHeader headClass="pb-0" title={StatusIndicatorTitle} subTitle={statusSubTitle} />
                <CardBody className='avatar-showcase'>
                    <div className='avatars'>
                        {avatarStatusData && avatarStatusData.map((item, index) => (
                            <div className="avatar" key={index}>
                                <Image className={item.class} src={dynamicImage(item.image)} alt="#" body={true}/>
                                <div className={`status ${item.status}`} />
                            </div>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
