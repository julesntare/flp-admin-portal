import React from 'react'
import { Col } from 'reactstrap'
import { SearchResultInitialState } from '../../../../../../Types/SearchResultType'
import { Href } from '../../../../../../Utils/Constants'
import { H5, LI, P, UL } from '../../../../../../AbstractElements'
import BlogShadow from './BlogShadow'

export default function BlogBox({ allResult }: SearchResultInitialState) {
    return (
        <Col xxl={4} xl={6} className="box-col-5 mt-4">
            <BlogShadow />
            {allResult &&
                allResult.slice(0, 2).map((item) => (
                    <div className='info-block' key={item.id}>
                        <a href={Href}>{item.url}</a>
                        <H5>{item.title}</H5>
                        <P>{item.detail}</P>
                        <div className='star-ratings'>
                            <UL className='simple-list flex-row search-info'>
                                <LI>
                                    <i className='icofont icofont-ui-rating'></i>
                                    <i className='icofont icofont-ui-rating'></i>
                                    <i className='icofont icofont-ui-rating'></i>
                                    <i className='icofont icofont-ui-rate-blank'></i>
                                    <i className='icofont icofont-ui-rate-blank'></i>
                                </LI>
                                <LI>{item.star}</LI>
                                <LI>{item.vote}</LI>
                                <LI>{item.news}</LI>
                            </UL>
                        </div>
                    </div>
                ))
            }
        </Col>
    )
}
