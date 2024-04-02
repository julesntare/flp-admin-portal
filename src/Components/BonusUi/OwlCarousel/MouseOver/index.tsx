import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import Slider from 'react-slick'
import { mouseOverSubTitle, mouseWheelSliderOptions } from '../../../../Data/BonusUiData/OwlCarouselData'
import { Image } from '../../../../AbstractElements'
import { MouseOverTitle } from '../../../../Utils/Constants'
import { dynamicImage, dynamicNumber } from '../../../../Utils'

export default function MouseOver() {

    return (
        <Col xl={6} sm={12}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={MouseOverTitle} subTitle={mouseOverSubTitle} />
                <CardBody>
                    <Slider {...mouseWheelSliderOptions}>
                        {dynamicNumber(11).map((item, index) => (
                            <div className='item px-1' key={index}>
                                <Image src={dynamicImage(`slider/${item}.jpg`)} alt='Drawing-room' className='img-fluid rounded' />
                            </div>
                        ))}
                    </Slider>
                </CardBody>
            </Card>
        </Col>
    )
}
