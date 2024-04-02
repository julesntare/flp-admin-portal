import { Card, CardBody, Col } from 'reactstrap'
import { DeletText, ExtraSmalltext, InerText, Inlinetextelements, ItalicText, MarkText, SmallText, StrongText, UnderlineText, highlight, textd } from '../../../../Utils/Constants'
import { P } from '../../../../AbstractElements'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { InlineTextSubTitle } from '../../../../Data/UiKitsData/TypographyData'

export default function InlineTextElements() {
    
    return (
        <Col sm={12} xl={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={Inlinetextelements} subTitle={InlineTextSubTitle} />
                <CardBody>
                    <div className='d-flex flex-column gap-2'>
                        <P className="mb-0">{MarkText}<mark>{highlight}</mark>{textd}</P>
                        <P className="mb-0"><del>{DeletText}</del></P>
                        <P className="mb-0"><s>{SmallText}</s></P>
                        <P className="mb-0"><ins>{InerText}</ins></P>
                        <P className="mb-0"><u>{UnderlineText}</u> </P>
                        <P className="mb-0"><small>{ExtraSmalltext}</small></P>
                        <P className="mb-0"><strong>{StrongText}</strong></P>
                        <P className="mb-0"><em>{ItalicText}</em></P>
                    </div>
                </CardBody>
            </Card >
        </Col >
    )
}
