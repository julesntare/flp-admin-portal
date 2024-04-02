import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SweetAlert from "sweetalert2";
import { BookmarkProps, DescriptionDataProps } from '../../../../../Types/BookmarkType'
import { removeBookmMark, removeMyBookMark, setEditImgUrl, setEditModal, setEditRow } from '../../../../../redux-toolkit/reducers/BookmarkReducer';
import { RootState } from '../../../../../redux-toolkit/store';
import { dynamicImage } from '../../../../../Utils';
import { H3, LI, P, UL } from '../../../../../AbstractElements';
import { Edit2, Link, Share2, Tag, Trash2 } from 'react-feather';
import { Href } from '../../../../../Utils/Constants';

export default function DescriptionData({ data }: DescriptionDataProps) {
    const { editModal } = useSelector((state: RootState) => state.bookmark);

    const dispatch = useDispatch();
    const editToggle = () => {
        dispatch(setEditModal(!editModal));
    };
    const onClickHandle = (data: BookmarkProps) => {
        editToggle();
        dispatch(setEditRow(data));
        dispatch({
            type: setEditImgUrl,
            payload: `${dynamicImage(data.image)}`,
        });
    };
    const removeFromBookmark = (bookmarkId: number, fillstar: boolean) => {
        SweetAlert.fire({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Ok",
            cancelButtonText: "cancel",
            reverseButtons: true,
        }).then((result) => {
            if (result.value) {
                if (fillstar) dispatch(removeMyBookMark(bookmarkId));
                dispatch(removeBookmMark(bookmarkId));
                SweetAlert.fire("Deleted!", "Your file has been deleted.", "success");
            } else {
                SweetAlert.fire("Your imaginary file is safe!");
            }
        });
    };
    return (
        <div className='desciption-data'>
            <div className='title-bookmark'>
                <H3>{data.title} </H3>
                <P> {data.website_url} </P>
                <div className='hover-block'>
                    <UL className='simple-list flex-row'>
                        <LI><a href={Href} onClick={() => onClickHandle(data)}><Edit2 /></a></LI>
                        <LI><a href={Href}><Link /></a></LI>
                        <LI><a href={Href}><Share2 /></a></LI>
                        <LI><a href={Href} onClick={() => removeFromBookmark(data.id, data.fillStar)}><Trash2 /></a></LI>
                        <LI className='pull-right text-end'><a href={Href}><Tag /></a></LI>
                    </UL>
                </div>
                <div className='content-general'>
                    <P>{data.description} </P>
                    <span>{data.collection}</span>
                </div>
            </div>
        </div>
    )
}
