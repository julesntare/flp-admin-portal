import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import Slider from 'react-slick';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { AutoPlayVariantTitle } from '../../../../Utils/Constants'
import { autoPlaySliderOptions, autoPlayVariantSubTitle } from '../../../../Data/BonusUiData/OwlCarouselData';
import { Image } from '../../../../AbstractElements';
import { dynamicImage, dynamicNumber } from '../../../../Utils';

export default function AutoPlayVariant() {

    return (
        <Col xl={6} sm={12}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={AutoPlayVariantTitle} subTitle={autoPlayVariantSubTitle} />
                <CardBody>
                    <Slider {...autoPlaySliderOptions}>
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
