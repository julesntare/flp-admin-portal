import { Card, CardBody, Col } from "reactstrap"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"
import { customListData, customListSubTitle } from "../../../../Data/UiKitsData/ListsData"
import { H5, Image, LI, P, UL } from "../../../../AbstractElements"
import { CustomListTitle } from "../../../../Utils/Constants"
import { dynamicImage } from "../../../../Utils"

export default function CustomList() {

    return (
        <Col md={12}>
            <Card>
                <CommonCardHeader headClass="card-no-border pb-0" title={CustomListTitle} subTitle={customListSubTitle} />
                <CardBody>
                    <UL className='main-lists-content'>
                        {customListData && customListData.map((item, index) => (
                            <LI className={`list-group-item-action ${item.class}`} key={index}>
                                <div className="d-flex w-100 justify-content-between align-items-center">
                                    <div className="list-wrapper">
                                        <Image className="list-img" src={dynamicImage(`user/${item.image}`)} alt="profile" width={100} height={100} />
                                        <div className="list-content">
                                            <H5>{item.head}</H5>
                                            <P>{item.mail}</P>
                                        </div>
                                    </div>
                                    <small>{item.span}</small>
                                </div>
                                <P className="mb-1">{item.subtext}</P>
                                <small className={item.class === 'active bg-primary' ? 'text-white' : 'text-muted'}>{item.follower}</small>
                            </LI>
                        ))}
                    </UL>
                </CardBody>
            </Card>
        </Col>
    )
}

