import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { Href } from '../../../../Utils/Constants'
import { alignPageData } from '../../../../Data/BonusUiData/PaginationData'

export default function MediumPage() {
    return (
        <Pagination className="m-b-30 pagination-info pagin-border-info" size='md'>
            {alignPageData && alignPageData.map((item, index) => (
                <PaginationItem key={index}>
                    <PaginationLink href={Href}>{item}</PaginationLink>
                </PaginationItem>
            ))}
        </Pagination>
    )
}
