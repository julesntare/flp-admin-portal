import React, { Fragment, useEffect } from 'react'
import { Container, Row } from 'reactstrap'
import { useDispatch } from 'react-redux'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { AppsTitle, BookmarksTitle } from '../../../Utils/Constants'
import LeftAsideBookmark from './LeftAsideBookmark'
import RightAsideBookmark from './RightAsideBookmark'
import { getBookmarkData } from '../../../redux-toolkit/reducers/BookmarkReducer'
import { AppDispatch } from '../../../redux-toolkit/store'

export default function BookmarksContainer() {
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(getBookmarkData());
    }, []);
    return (
        <Fragment>
            <Breadcrumbs pageTitle={BookmarksTitle} parent={AppsTitle} title={BookmarksTitle} />
            <Container fluid>
                <div className="email-wrap bookmark-wrap">
                    <Row>
                        <LeftAsideBookmark />
                        <RightAsideBookmark />
                    </Row>
                </div>
            </Container>
        </Fragment>
    )
}
