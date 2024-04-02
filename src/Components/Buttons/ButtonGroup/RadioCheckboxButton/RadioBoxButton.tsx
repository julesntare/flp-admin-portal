import React from 'react'
import { ButtonPropsType } from '../../../../Types/ButtonsType'
import { ButtonGroup, Col, Input, Label } from 'reactstrap'
import { Btn } from '../../../../AbstractElements'

export default function RadioBoxButton({ item }: ButtonPropsType) {
    return (
        <Col xl={4} md={6} sm={12}>
            <div className={item.btnClass}>
                <ButtonGroup>
                    <Btn color={item.colorClass}>
                        <div className={item.divClass}>
                            <Input id={item.id1} type="radio" name={item.name} value="option1" />
                            <Label htmlFor={item.id1}>{item.title1}</Label>
                        </div>
                    </Btn>
                    <Btn color={item.colorClass}>
                        <div className={item.divClass}>
                            <Input id={item.id2} type="radio" name={item.name} value="option1" defaultChecked />
                            <Label htmlFor={item.id2}>{item.title2}</Label>
                        </div>
                    </Btn>
                </ButtonGroup>
            </div>
        </Col>
    )
}