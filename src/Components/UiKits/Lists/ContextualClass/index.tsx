import { Card, CardBody, Col } from "reactstrap"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"
import { contextualClassSubTitle, contextualListData } from "../../../../Data/UiKitsData/ListsData"
import { ContextualClassTitle } from "../../../../Utils/Constants"
import { LI, UL } from "../../../../AbstractElements"

export default function ContextualClass() {
    
    return (
        <Col xl={6} sm={12} className='box-col-6'>
            <Card className="height-equal">
                <CommonCardHeader headClass="card-no-border pb-0" title={ContextualClassTitle} subTitle={contextualClassSubTitle} />
                <CardBody>
                    <UL>
                        {contextualListData && contextualListData.map((item, index) => (
                            <LI className={`list-group-item-action ${item.class}`} key={index}>
                                {item.htmlText}
                            </LI>
                        ))}
                    </UL>
                </CardBody>
            </Card>
        </Col>
    )
}
