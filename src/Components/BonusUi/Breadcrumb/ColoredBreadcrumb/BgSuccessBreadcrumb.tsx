import React from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Gallery, GalleryGrid, Home, Href } from '../../../../Utils/Constants'

export default function BgSuccessBreadcrumb() {
    return (
        <Breadcrumb className='breadcrumb-colored m-0 bg-success'>
            <BreadcrumbItem className='fw-bold' href={Href}> {Home} </BreadcrumbItem>
            <BreadcrumbItem className='fw-bold' href={Href}> {Gallery} </BreadcrumbItem>
            <BreadcrumbItem className='fw-bold' active> {GalleryGrid} </BreadcrumbItem>
        </Breadcrumb>
    )
}
