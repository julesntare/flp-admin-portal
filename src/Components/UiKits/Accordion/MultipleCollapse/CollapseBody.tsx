import { Card, CardBody, Col, Collapse, Row } from "reactstrap"

type propsType = {
    collapseId: { collapse1: boolean, collapse2: boolean }
}

export default function CollapseBody({ collapseId }: propsType) {
    return (
        <Row>
            <Col xl={6}>
                <Collapse className={`multi-collapse dark-accordion ${collapseId.collapse1 && 'show'}`}>
                    <Card className='mt-3 mb-0'>
                        <CardBody className="collapse-wrapper bg-light-primary">
                            {"The collapse JavaScript plugin is used to show and hide content.Buttons or anchors are used as triggers that are mapped to specific elements you toggle.Collapsing an element will animate the height from it's current value to 0. Given how CSS handles animations, you cannot use padding on a collapse element.Instead, use the class as an independent wrapping element."}
                        </CardBody>
                    </Card>
                </Collapse>
            </Col>
            <Col xl={6}>
                <Collapse className={`multi-collapse dark-accordion ${collapseId.collapse2 && 'show'}`}>
                    <Card className='mt-3 mb-0'>
                        <CardBody className="collapse-wrapper bg-light-warning">
                            {"This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.These classes control the overall appearance,  well as the showing and hiding via CSS transitions.You can modify any of this with custom CSS or overriding our default variables."}
                        </CardBody>
                    </Card>
                </Collapse>
            </Col>
        </Row>
    )
}

