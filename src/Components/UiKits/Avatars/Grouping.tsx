import { Card, CardBody, Col } from 'reactstrap'
import { GroupingTitle } from '../../../Utils/Constants'
import { Image, LI, UL } from '../../../AbstractElements'
import CommonCardHeader from '../../../Utils/CommonComponents/CommonCardHeader'
import { avatarGroupData, groupSubTitle } from '../../../Data/UiKitsData/AvatarsData'
import { dynamicImage } from '../../../Utils'

export default function Grouping() {
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={GroupingTitle} subTitle={groupSubTitle} />
                <CardBody className='avatar-showcase'>
                    <div className="avatars">
                        {avatarGroupData && avatarGroupData.map((data) => (
                            <div className="customers d-inline-block avatar-group" key={data.id}>
                                <UL className='simple-list'>
                                 {data.child && data.child.map((item)=>(
                                    <LI className="d-inline-block" key={item.id}>
                                        <Image className={item.class} src={dynamicImage(item.image)} alt="#" body={true}/>
                                    </LI>
                                 ))}
                                </UL>
                            </div>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
