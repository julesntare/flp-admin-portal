import React from 'react'
import { groupButtonData } from '../../../../Data/ButtonsData/GroupButtonData'
import { ButtonGroup, Card, CardBody, Col, Row } from 'reactstrap'
import { Btn } from '../../../../AbstractElements'
import CardHeaderSpan from '../../../../Utils/CommonComponents/CardHeaderSpan'

export default function GroupButtonClass() {
    return (
        <>
            {groupButtonData.map((item, i) => (
                <Col xs={12} key={i}>
                    <Card>
                        <CardHeaderSpan headingClassName='card-no-border pb-0' heading={item.title} />
                        <CardBody className='btn-group-showcase'>
                            <Row>
                                {item.color.map((colorItem, i) => (
                                    <Col xl={4} md={6} sm={12} key={i}>
                                        <ButtonGroup className={colorItem.btnClass}>
                                            <Btn size={colorItem.size ? colorItem.size : ''} color={colorItem.leftButtonClass ? colorItem.leftButtonClass : colorItem.colorClass}>
                                                {colorItem.title1}
                                            </Btn>
                                            <Btn size={colorItem.size ? colorItem.size : ''} color={colorItem.differentClass ? colorItem.differentClass : colorItem.colorClass}>
                                                {colorItem.title2}
                                            </Btn>
                                            <Btn size={colorItem.size ? colorItem.size : ''} color={colorItem.rightButtonClass ? colorItem.rightButtonClass : colorItem.colorClass}>
                                                {colorItem.title3}
                                            </Btn>
                                        </ButtonGroup>
                                    </Col>
                                ))}
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </>
    )
}
