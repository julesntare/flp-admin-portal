import React, { Fragment, useEffect } from 'react'
import { Container } from 'reactstrap'
import axios from 'axios'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { Ecommerce, ProductTitle } from '../../../../Utils/Constants'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../redux-toolkit/store'
import ProductFeatures from './ProductFeatures'
import ProductGrid from './ProductGrid'

export default function ProductContainer() {
    const { sidebarOpen } = useSelector((state: RootState) => state.filter);

    return (
        <Fragment>
            <Breadcrumbs pageTitle={ProductTitle} parent={Ecommerce} title={ProductTitle} />
            <Container fluid className={`product-wrapper ${sidebarOpen ? "sidebaron" : ""}`}>
                <div className="product-grid">
                    <ProductFeatures />
                    <ProductGrid />
                </div>
            </Container>
        </Fragment>
    )
}
