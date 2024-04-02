import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { Href } from '../../../../Utils/Constants'
import { alignbottomData } from '../../../../Data/BonusUiData/PaginationData'

export default function AlignBottom() {
    return (
        <Pagination className="d-flex justify-content-end pagin-border-success pagination-success">
            {alignbottomData && alignbottomData.map((item, index) => (
                <PaginationItem key={index}>
                    <PaginationLink href={Href}>{item}</PaginationLink>
                </PaginationItem>
            ))}
        </Pagination>
    )
}
