import React from 'react'
import { CardHeader } from 'reactstrap'
import { Grid, List } from 'react-feather'
import { useDispatch } from 'react-redux'
import { HeaderCardProp } from '../../../../../Types/BookmarkType'
import { H3, LI, UL } from '../../../../../AbstractElements'
import { setGridView } from '../../../../../redux-toolkit/reducers/BookmarkReducer'
import { Href } from '../../../../../Utils/Constants'

export default function HeaderCard({ title }: HeaderCardProp) {
    const dispatch = useDispatch();
    const gridBookmark = () => {
        dispatch(setGridView(true));
    };
    const listBookmark = () => {
        dispatch(setGridView(false));
    };
    return (
        <CardHeader className='d-flex pb-0'>
            <H3 className='mb-0'>{title}</H3>
            <UL className='simple-list flex-row'>
                <LI>
                    <a className='grid-bookmark-view' href={Href}>
                        <Grid onClick={gridBookmark} />
                    </a>
                </LI>
                <LI>
                    <a className='list-layout-view' href={Href}>
                        <List onClick={listBookmark} />
                    </a>
                </LI>
            </UL>
        </CardHeader>
    )
}
