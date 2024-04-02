import React from 'react'
import { Edit2, Link, Share2, Tag, Trash2 } from 'react-feather';
import SweetAlert from "sweetalert2";
import { useDispatch, useSelector } from 'react-redux';
import { BookmarkProps, DescriptionDataProps } from '../../../../../Types/BookmarkType'
import { H3, LI, P, UL } from '../../../../../AbstractElements'
import { Href } from '../../../../../Utils/Constants';
import { dynamicImage } from '../../../../../Utils';
import { removeMyBookMark, setEditImgUrl, setEditModal, setEditRow } from '../../../../../redux-toolkit/reducers/BookmarkReducer';
import { RootState } from '../../../../../redux-toolkit/store';

export default function FavDescriptionData({ data }: DescriptionDataProps) {
  const dispatch = useDispatch();
  const { editModal } = useSelector((state: RootState) => state.bookmark);
  const editToggle = () => {
    dispatch(setEditModal(!editModal));
  };
  const editBookmarkData = (data: BookmarkProps) => {
    editToggle();
    setEditRow(data);
    setEditImgUrl(`${dynamicImage(data.image)}`);
  };
  const removeMyFavourite = (myBookmarkId: number) => {
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
        dispatch(removeMyBookMark(myBookmarkId));
        SweetAlert.fire("Deleted!", "Your file has been deleted.", "success");
      } else {
        SweetAlert.fire("Your imaginary file is safe!");
      }
    });
  };
  return (
    <div className='desciption-data'>
      <div className='title-bookmark'>
        <H3>{data.title}</H3>
        <P>{data.website_url}</P>
        <div className='hover-block'>
          <UL className='simple-list flex-row'>
            <LI><a href={Href} onClick={() => editBookmarkData(data)}><Edit2 /></a></LI>
            <LI><a href={Href}><Link /></a></LI>
            <LI><a href={Href}><Share2 /></a></LI>
            <LI><a href={Href} onClick={() => removeMyFavourite(data.id)}><Trash2 /></a></LI>
            <LI className='pull-right text-end'><a href={Href}><Tag /></a></LI>
          </UL>
        </div>
        <div className='content-general'>
          <P>{data.description}</P>
          <span>{data.collection}</span>
        </div>
      </div>
    </div>
  )
}
