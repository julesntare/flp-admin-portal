import React, { useRef } from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'
import { Printer } from 'react-feather'
import ReactToPrint from "react-to-print";
import { H3 } from '../../../../../AbstractElements'
import { CreatedByMe, Href, Print } from '../../../../../Utils/Constants'
import CreatedByMeTable from './CreatedByMeTable'

export default function TaskList() {
    const componentRef = useRef<HTMLDivElement>(null);

    return (
        <Card className="mb-0">
            <CardHeader className="d-flex">
                <H3 className="mb-0">{CreatedByMe}</H3>
                <ReactToPrint
                    trigger={() => (
                        <a href={Href}>
                            <Printer className="me-2" /> {Print}
                        </a>
                    )}
                    content={() => componentRef.current}
                />
            </CardHeader>
            <CardBody className="p-0">
                <CreatedByMeTable componentRef={componentRef} />
            </CardBody>
        </Card>
    )
}
