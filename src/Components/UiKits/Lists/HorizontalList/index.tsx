import { Card, CardBody, Col } from "reactstrap"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"
import { horizontalColor, horizontalListData, horizontalListSubTitle } from "../../../../Data/UiKitsData/ListsData"
import { HorizontalListTitle } from "../../../../Utils/Constants"
import { LI, UL } from "../../../../AbstractElements"

export default function HorizontalList() {
    
    return (
        <Col xl={6} xs={12} className='box-col-6' >
            <Card className='height-equal'>
                <CommonCardHeader headClass="card-no-border pb-0" title={HorizontalListTitle} subTitle={horizontalListSubTitle} />
                <CardBody>
                    <div className='horizontal-list-wrapper dark-list'>
                        {horizontalListData && horizontalListData.map((item, index) => (
                            <UL className={`fw-bold ${item.class}`} key={index}>
                                {item.data && item.data.map((data, i) => (
                                    <LI className={`${i === 0 && horizontalColor[index]}`} key={i}>{data}</LI>
                                ))}
                            </UL>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}