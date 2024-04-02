import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { alignPageData } from '../../../../Data/BonusUiData/PaginationData'
import { Href } from '../../../../Utils/Constants'

export default function SmallPage() {
    return (
        <Pagination className="pagination-info pagin-border-info" size='sm'>
            {alignPageData && alignPageData.map((item, index) => (
                <PaginationItem key={index}>
                    <PaginationLink href={Href}>{item}</PaginationLink>
                </PaginationItem>
            ))}
        </Pagination>
    )
}
