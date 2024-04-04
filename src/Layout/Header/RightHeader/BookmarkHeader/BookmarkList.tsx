import React from 'react';
import { LI, UL } from '../../../../AbstractElements'
import { Col, Row } from 'reactstrap'
import { AddNewBookmark, Href } from '../../../../Utils/Constants';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux-toolkit/store';
import { setBookMarkClass } from '../../../../redux-toolkit/reducers/LayoutReducer';
import SvgIcon from '../../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons';
import { BookmarkListProps, SidebarMenuType } from '../../../../Types/LayoutTypes';

export default function BookmarkList({ bookmarkList }: BookmarkListProps) {
  const dispatch = useDispatch();
  const layoutState = useSelector((state: RootState) => state.layout);
  const { bookMarkClass } = layoutState;

  const addNewBookmark = () => {
    dispatch(setBookMarkClass(!bookMarkClass));
  };
  return (
    <UL className="bookmark-dropdown simple-list">
      <LI>
        <Row>
          {bookmarkList.map((data: SidebarMenuType, index: number) => (
            <Col xs={4} className="text-center" key={index}>
              <div className="bookmark-content">
                <div className="bookmark-icon">
                  <SvgIcon iconId={`fill-${data.icon}`} />
                </div>
                <Link to={data.url || ''}><span>{data.title}</span></Link>
              </div>
            </Col>
          ))}
        </Row>
      </LI>
      <LI className="text-center">
        <a onClick={addNewBookmark} className="flip-btn f-w-700" id="flip-btn" href={Href}>{AddNewBookmark}</a>
      </LI>
    </UL>
  )
}
