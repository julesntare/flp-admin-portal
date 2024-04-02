import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { Href } from '../../../../Utils/Constants'
import { alignCenterData } from '../../../../Data/BonusUiData/PaginationData'

export default function AlignCenter() {
    return (
        <Pagination className="m-b-30 d-flex justify-content-center pagin-border-danger pagination-danger">
            {alignCenterData && alignCenterData.map((item, index) => (
                <PaginationItem key={index} className={index === 2 ? 'active' : ''}>
                    <PaginationLink href={Href}>{item}</PaginationLink>
                </PaginationItem>
            ))}
        </Pagination>
    )
}
