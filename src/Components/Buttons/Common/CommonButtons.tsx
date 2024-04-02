import React from 'react'
import { Card, CardBody } from 'reactstrap'
import CardHeaderSpan from '../../../Utils/CommonComponents/CardHeaderSpan'
import { Btn } from '../../../AbstractElements'
import { CommonButtonsInterface } from '../../../Types/ButtonsType'

export default function CommonButtons({ commonButtonsData, title, subTitle, className, raised }:CommonButtonsInterface) {
    
    return (
        <Card>
            <CardHeaderSpan headingClassName='pb-0' heading={title} span={subTitle} />
            <CardBody>
                <div className="btn-showcase">
                    {commonButtonsData.map((data, index) => (
                        <Btn key={index} className={`${className ? className : ""} ${raised && `btn-air-${data.color}`}`}
                            outline={data.outline} active={data.active} disabled={data.disabled}
                            size={data.size ? data.size : ""} id={data.id} color={data.color}>
                            {data.title}
                        </Btn>
                    ))}
                </div>
            </CardBody>
        </Card>
    )
}
