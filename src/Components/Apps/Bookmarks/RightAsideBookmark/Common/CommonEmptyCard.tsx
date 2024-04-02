import React from 'react'
import { Card, CardBody } from 'reactstrap'
import HeaderCard from './HeaderCard'
import { NoBookmarksFoundText } from '../../../../../Utils/Constants'
import { HeaderCardProp } from '../../../../../Types/BookmarkType'

export default function CommonEmptyCard({ title }: HeaderCardProp) {
    return (
        <Card className="mb-0">
            <HeaderCard title={title} />
            <CardBody>
                <div className="details-bookmark text-center">
                    <span>{NoBookmarksFoundText}</span>
                </div>
            </CardBody>
        </Card>
    )
}
