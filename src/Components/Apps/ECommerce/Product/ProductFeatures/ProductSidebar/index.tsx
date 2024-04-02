import React from 'react'
import { useDispatch } from 'react-redux';
import { Card, CardBody, Col, Row } from 'reactstrap'
import { H6, Image } from '../../../../../../AbstractElements';
import { Filters } from '../../../../../../Utils/Constants';
import { dynamicImage } from '../../../../../../Utils';
import ProductCategory from './ProductCategory';
import ProductSearch from './ProductSearch';
import { toggleSidebar } from '../../../../../../redux-toolkit/reducers/EcommerceReducer/FilterReducer';
import NewProductSlides from './NewProductSlides';

export default function ProductSidebar() {
  const dispatch = useDispatch();

  return (
    <Row>
      <Col sm={3}>
        <div className='product-sidebar'>
          <div className="filter-section">
            <Card>
              <div className="card-header">
                <H6 className="mb-0">{Filters}
                  <span className="pull-right">
                    <i className="fa fa-chevron-down toggle-data" onClick={() => {dispatch(toggleSidebar());}}></i>
                  </span>
                </H6>
              </div>
              <div className="left-filter">
                <CardBody className="filter-cards-view animate-chk">
                  <ProductCategory />
                  <NewProductSlides/>
                  <div className="product-filter text-center mt-2">
                    <Image className='img-fluid banner-product m-auto' src={dynamicImage(`ecommerce/banner.jpg`)} alt='' />
                  </div>
                </CardBody>
              </div>
            </Card>
          </div>
        </div>
      </Col>
      <ProductSearch />
    </Row>
  )
}
