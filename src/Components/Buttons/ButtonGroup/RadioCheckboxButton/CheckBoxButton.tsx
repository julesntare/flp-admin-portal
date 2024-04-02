import React from 'react'
import { ButtonPropsType } from '../../../../Types/ButtonsType'
import { ButtonGroup, Col, Input, Label } from 'reactstrap'
import { Btn } from '../../../../AbstractElements'
import { Option1, Option2 } from '../../../../Utils/Constants'

export default function CheckBoxButton({ item }: ButtonPropsType) {
    return (
        <Col xl={6} sm={12}>
            <ButtonGroup className={item.btnClass}>
                <Btn color={item.colorClass}>
                    <div className={item.divClass}>
                        <Input id={item.id1} type="checkbox" />
                        <Label htmlFor={item.id1}>{Option1}</Label>
                    </div>
                </Btn>
                <Btn color={item.colorClass}>
                    <div className={item.divClass}>
                        <Input id={item.id2} type="checkbox" />
                        <Label htmlFor={item.id2}>{Option2}</Label>
                    </div>
                </Btn>
            </ButtonGroup>
        </Col>
    )
}