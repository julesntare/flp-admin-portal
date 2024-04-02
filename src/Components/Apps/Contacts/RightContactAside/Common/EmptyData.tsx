import React from 'react'
import { Card, CardBody } from 'reactstrap'
import CardHeaderSpan from '../../../../../Utils/CommonComponents/CardHeaderSpan'
import { P } from '../../../../../AbstractElements'
import { EmptyDataProp } from '../../../../../Types/ContactType'
import { ZeroContact } from '../../../../../Utils/Constants'

export default function EmptyData({ title }: EmptyDataProp) {
    return (
        <Card className="mb-0">
            {title && <CardHeaderSpan headingClassName="d-flex" heading={title}
                span={ZeroContact} />}
            <CardBody>
                <P className='text-center'>{'No Contact Found'} </P>
            </CardBody>
        </Card>
    )
}
