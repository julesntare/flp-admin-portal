import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { defaultPagiData } from '../../../../Data/BonusUiData/PaginationData'
import { Href } from '../../../../Utils/Constants'
import { DefaultPaginationListProp } from '../../../../Types/BonusUiType'


export default function DefaultPaginationList({pageClass}: DefaultPaginationListProp) {
    return (
        <Pagination color='primary' className={`pagin-border-primary ${pageClass}`}>
            {defaultPagiData && defaultPagiData.map((item, index) => (
                <PaginationItem key={index}>
                    <PaginationLink href={Href}>{item.text}</PaginationLink>
                </PaginationItem>
            ))}
        </Pagination>
    )
}
