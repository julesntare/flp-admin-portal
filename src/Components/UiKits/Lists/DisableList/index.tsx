import { Card, CardBody, Col } from "reactstrap"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"
import { disableListData, disableListSubTitle } from "../../../../Data/UiKitsData/ListsData"
import { Image, LI, UL } from "../../../../AbstractElements"
import { DisableListTitle } from "../../../../Utils/Constants"
import { dynamicImage } from "../../../../Utils"

export default function DisableList() {
    
    return (
        <Col xxl={4} md={6}>
            <Card>
                <CommonCardHeader headClass="card-no-border pb-0" title={DisableListTitle} subTitle={disableListSubTitle} />
                <CardBody>
                    <UL>
                        {disableListData && disableListData.map((item, index) => (
                            <LI className={`list-group-item-action ${item.class}`} key={index}>
                                <Image className="rounded-circle" src={dynamicImage(`user/${item.image}`)} alt="user" width={100} height={100} />{item.text}
                            </LI>
                        ))}
                    </UL>
                </CardBody>
            </Card>
        </Col>
    )
}