import { Card, CardBody, Col } from "reactstrap"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"
import { scrollableListData, scrollableListSubTitle } from "../../../../Data/UiKitsData/ListsData"
import { H5, Image, LI, P, UL } from "../../../../AbstractElements"
import { ScrollableListTitle } from "../../../../Utils/Constants"
import { dynamicImage } from "../../../../Utils"

export default function ScrollableList() {

    return (
        <Col xxl={4}>
            <Card>
                <CommonCardHeader headClass="card-no-border pb-0" title={ScrollableListTitle} subTitle={scrollableListSubTitle} />
                <CardBody>
                    <UL className='main-lists-content scrollbar-wrapper theme-scrollbar'>
                        {scrollableListData && scrollableListData.map((item, index) => (
                            <LI className={`list-group-item-action light-primary ${index === 0 && 'active'}`} key={index}>
                                <div className="list-wrapper gap-0">
                                    <Image className="list-img" src={dynamicImage(`user/${item.image}`)} alt="profile" width={100} height={100} />
                                    <div className="list-content">
                                        <H5>{item.head}</H5>
                                        <P>{item.mail}</P>
                                        <small className={index !== 0 ? 'text-muted' : ''}>{item.small}</small>
                                    </div>
                                </div>
                            </LI>
                        ))}
                    </UL>
                </CardBody>
            </Card>
        </Col>
    )
}
