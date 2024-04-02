import { Card, CardBody, Col } from "reactstrap"
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader"
import { customScrollbarSubTitle } from "../../../../Data/BonusUiData/ScrollbarData"
import Scrollbars from "react-custom-scrollbars-2"
import { H3, Image, P } from "../../../../AbstractElements"
import { CustomScroll, CustomScrollbarTitle, HorizontalVertical } from "../../../../Utils/Constants"
import { dynamicImage } from "../../../../Utils"

export default function CustomScrollbar() {

    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader headClass="pb-0" title={CustomScrollbarTitle} subTitle={customScrollbarSubTitle} />
                <CardBody>
                    <Scrollbars className='vertical-scroll scroll-demo custom-container' autoHide>
                        <H3 className="pb-2">{CustomScrollbarTitle}</H3>
                        <P>{"I'm quite interested in learning more about "}
                            <em className="txt-danger"> {CustomScroll}</em> {"because they are becoming more and more common."}
                        </P>
                        <div className="scrollbar-images">
                            <Image className="img-fluid" src={dynamicImage(`banner/1.jpg`)} alt="banner"/>
                        </div>
                        <P>{"There are various justifications for customizing a scrollbar. For instance, the default scrollbar can cause an app's user interface to look inconsistent across various operating systems. In this case, having a single style is helpful"}</P>
                        <P>{"I never had the opportunity to learn about CSS scrollbar customization, but I have always been interested in doing so. I'll take the chance to learn more about them and share my trip in this essay."}</P>
                        <P>{"One crucial point to remember is that, depending on the design, a scrollbar may operate either "}
                            <em className="txt-danger">{HorizontalVertical}</em> {". Additionally, it might alter when you work on a website that is global and operates in both left-to-right and right-to-left orientations."}
                        </P>
                    </Scrollbars>
                </CardBody>
            </Card>
        </Col>
    )
}