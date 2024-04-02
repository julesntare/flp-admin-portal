import { Card, CardBody, Col } from "reactstrap"
import { BlockquotesTitle } from "../../../../Utils/Constants"
import { P, BlockQuotes} from "../../../../AbstractElements"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"
import { blockQuotesData, blockQuotesSubTitle } from "../../../../Data/UiKitsData/TypographyData"

export default function BlockQuotesCard() {
    
    return (
        <Col sm={12}>
            <Card className='overflow-hidden' >
                <CommonCardHeader headClass="pb-0" title={BlockquotesTitle} subTitle={blockQuotesSubTitle} />
                <CardBody>
                    {blockQuotesData && blockQuotesData.map((item, index) => (
                        <div key={index} className={item.class}>
                            <BlockQuotes className="blockquote light-card mb-2">
                                <P className="mb-0 txt-dark">{item.text}</P>
                                <span className="blockquote-footer pt-3">{item.footer}</span>
                            </BlockQuotes>
                        </div>
                    ))}
                </CardBody>
            </Card >
        </Col >
    )
}
