import React from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { FlagIcon, Home, Href, Icons } from '../../../../Utils/Constants'

export default function BgSecondaryBreadcrumb() {
    return (
        <Breadcrumb className='breadcrumb-colored m-b-30 bg-secondary'>
            <BreadcrumbItem className='fw-bold' href={Href}> {Home} </BreadcrumbItem>
            <BreadcrumbItem className='fw-bold' href={Href}> {Icons} </BreadcrumbItem>
            <BreadcrumbItem className='fw-bold' active> {FlagIcon} </BreadcrumbItem>
        </Breadcrumb>
    )
}
