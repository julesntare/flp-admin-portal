//@ts-nocheck
import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import Rating from "react-rating";
import CommonCardHeader from '../../../Utils/CommonComponents/CommonCardHeader';
import { SquareRatingBar } from '../../../Utils/Constants';
import { squareRatingData } from '../../../Data/BonusUiData/RatingData';
import { dynamicNumber } from '../../../Utils';

export default function SquareRating() {
    const [rating, setRating] = useState(1);

    return (
        <Col xxl={4} md={4}>
            <Card>
                <CommonCardHeader title={SquareRatingBar} subTitle={squareRatingData} />
                <CardBody>
                    <div className="rating ">
                        <Rating initialRating={rating} emptySymbol={dynamicNumber(5).map((n: number) => (<span className="square-number" key={n}>{n}</span>))}
                            fullSymbol={dynamicNumber(5).map((n: number) => (<span className="square-number active" key={n}>{n}</span>))}
                            onChange={(rate) => setRating(rate)}
                        />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
