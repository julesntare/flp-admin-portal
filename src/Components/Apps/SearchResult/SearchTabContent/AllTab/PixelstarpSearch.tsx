import React from 'react'
import { Col } from 'reactstrap'
import { SearchResultInitialState } from '../../../../../Types/SearchResultType'
import { H5, LI, P, UL } from '../../../../../AbstractElements'
import { Href, SearchResultPixelstrap } from '../../../../../Utils/Constants'

export default function PixelstarpSearch({allResult}: SearchResultInitialState) {
  return (
    <Col xxl={8} xl={6} className="box-col-7">
        <H5 className="f-w-700 mb-2">{SearchResultPixelstrap}</H5>
        {allResult &&
            allResult.slice(0,4).map((item) => (
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
            )
        )}
    </Col>
  )
}
