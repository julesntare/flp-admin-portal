import React, { useState } from 'react'
import { controlCarouselData, withControlsSubTitle } from '../../../../Data/BonusUiData/OwlCarouselData';
import { OwlCarouselItem } from '../../../../Types/BonusUiType';
import { Card, CardBody, Carousel, CarouselControl, CarouselItem, Col } from 'reactstrap';
import { Image } from '../../../../AbstractElements';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { WithControlsTitle } from '../../../../Utils/Constants';
import { dynamicImage } from '../../../../Utils';

export default function WithControls() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === controlCarouselData.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };
    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? controlCarouselData.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };
    const slides = controlCarouselData.map((item: OwlCarouselItem) => {
        return (
            <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.id}>
                <Image src={dynamicImage(`slider/${item.image}`)} alt='drawing-room' className='d-block w-100' />
            </CarouselItem>
        );
    });
    return (
        <Col xl={6} sm={12}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={WithControlsTitle} subTitle={withControlsSubTitle} />
                <CardBody>
                    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                        {slides}
                        <CarouselControl direction='prev' directionText='Previous' onClickHandler={previous} />
                        <CarouselControl direction='next' directionText='Next' onClickHandler={next} />
                    </Carousel>
                </CardBody>
            </Card>
        </Col>
    )
}
