import React from 'react'
import { Card } from 'reactstrap'
import { H4, Image, LI, P, UL } from '../../../../../../AbstractElements'
import { dynamicImage } from '../../../../../../Utils'
import { BlogShadowText, MarkJecno } from '../../../../../../Utils/Constants'

export default function BlogShadow() {
  return (
    <Card className="o-hidden">
      <div className="blog-box blog-shadow">
        <Image className="img-fluid" src={dynamicImage(`blog/blog.jpg`)} alt="" />
        <div className="blog-details">
          <P>{'25 July 2023'}</P>
          <H4>{BlogShadowText}</H4>
          <UL className="blog-social simple-list flex-row">
            <LI><i className="icofont icofont-user"></i>{MarkJecno}</LI>
            <LI><i className="icofont icofont-thumbs-up"></i>{'02 Hits'}</LI>
          </UL>
        </div>
      </div>
    </Card>
  )
}
