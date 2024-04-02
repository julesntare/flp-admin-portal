import React from 'react'
import { Card, Col, Row } from 'reactstrap';
import { Image } from '../../../../../AbstractElements';
import { dynamicImage } from '../../../../../Utils';
import { Href } from '../../../../../Utils/Constants';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../redux-toolkit/store';
import { BookmarkProps } from '../../../../../Types/BookmarkType';
import { removeMyBookMark, updateBookMark, updateFavFillStar } from '../../../../../redux-toolkit/reducers/BookmarkReducer';
import FavDescriptionData from './FavDescriptionData';
import NoBookmarksFound from '../Common/NoBookmarksFound';

export default function FavDataLoop() {
    const { myBookmarkData } = useSelector((state: RootState) => state.bookmark);
    const dispatch = useDispatch();
    const removeFavourite = (data: BookmarkProps) => {
        if (data.fillStar) {
            dispatch(updateFavFillStar(data.id));
            dispatch(removeMyBookMark(data.id));
            dispatch(updateBookMark({ id: data.id, data, image_url: data.image }));
        }
    };
    return (
        <Row>
            {myBookmarkData.length > 0 ? (
                myBookmarkData.map((mybookdata) => {
                    return (
                        <Col xxl={3} md={4} className='col-ed-4' key={mybookdata.id}>
                            <Card className='card-with-border bookmark-card o-hidden'>
                                <div className='details-website'>
                                    <Image className='img-fluid' src={dynamicImage(mybookdata.image)} alt='' />
                                    <div className={`favourite-icon favourite_0 ${mybookdata.fillStar ? 'favourite' : ''}`}>
                                        <a href={Href}>
                                            <i className='fa fa-star' onClick={() => removeFavourite(mybookdata)}></i>
                                        </a>
                                    </div>
                                    <FavDescriptionData data={mybookdata}/>
                                </div>
                            </Card>
                        </Col>
                    );
                })
            ) : (
                <NoBookmarksFound/>
            )}
        </Row>
    )
}