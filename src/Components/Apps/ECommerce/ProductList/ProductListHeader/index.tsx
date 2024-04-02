import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Filter } from 'react-feather';
import { Href } from '../../../../../Utils/Constants';
import { Card, CardBody, Collapse } from 'reactstrap';
import ProductListBody from './ProductListBody';

export default function ProductListHeader() {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const handleFilterToggle = () => {
        setIsFilterOpen((prevState) => !prevState);
    };
    return (
        <div className="list-product-header">
            <div>
                <div className="light-box">
                    <a href={Href} onClick={handleFilterToggle}>
                        {isFilterOpen ? <i className='icon-close filter-close' /> : <Filter />}
                    </a>
                </div>
                <Link className="btn btn-primary" to={`${process.env.PUBLIC_URL}/applications/ecommerce/add-products`}>
                    <i className="fa fa-plus me-2"></i> {'Add Product'}</Link>
            </div>
            <Collapse className={isFilterOpen ? "show" : ""}>
                <Card className="list-product-body">
                    <CardBody>
                        <ProductListBody />
                    </CardBody>
                </Card>
            </Collapse>
        </div>
    )
}
