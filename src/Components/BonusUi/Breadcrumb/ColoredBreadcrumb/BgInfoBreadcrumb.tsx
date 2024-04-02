import React from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { BonusUi, BreadcrumbTitle, Home, Href } from '../../../../Utils/Constants'

export default function BgInfoBreadcrumb() {
    return (
        <Breadcrumb className='breadcrumb-colored m-b-30 bg-primary'>
            <BreadcrumbItem className='fw-bold' href={Href}> {Home} </BreadcrumbItem>
            <BreadcrumbItem className='fw-bold' href={Href}> {BonusUi} </BreadcrumbItem>
            <BreadcrumbItem className='fw-bold' active> {BreadcrumbTitle} </BreadcrumbItem>
        </Breadcrumb>
    )
}
