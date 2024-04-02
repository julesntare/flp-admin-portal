import React, { Fragment } from 'react'
import { Container, Row } from 'reactstrap'
import { BonusUiTitle, RatingTitle } from '../../../Utils/Constants'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import SimpleRatingBar from './SimpleRatingBar'
import MovingRating from './MovingRating'
import SquareRating from './SquareRating'
import PillRating from './PillRating'
import ReverseRating from './ReverseRating'
import StarRating from './StarRating'
import HalfStarRating from './HalfStarRating'
import ThumbUpDown from './ThumbUpDown'
import HeartRating from './HeartRating'

export default function RatingContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={RatingTitle} parent={BonusUiTitle} title={RatingTitle} />
            <Container fluid>
                <Row>
                    <SimpleRatingBar />
                    <MovingRating />
                    <SquareRating />
                    <PillRating />
                    <ReverseRating />
                    <StarRating />
                    <HalfStarRating />
                    <ThumbUpDown />
                    <HeartRating />
                </Row>
            </Container>
        </Fragment>
    )
}
