import React from 'react';
import { BookMarkContainerPropsType, SidebarMenuType } from '../../../../Types/LayoutTypes'
import { H6, LI, UL } from '../../../../AbstractElements';
import { Back, Bookmark, Href } from '../../../../Utils/Constants';
import BookmarkList from './BookmarkList';
import { Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux-toolkit/store';
import { setBookMarkClass } from '../../../../redux-toolkit/reducers/LayoutReducer';
import SvgIcon from '../../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons';

export default function BookmarkContainer({ handleBookmark, bookmarkList, bookmarkItems, handleSearch }: BookMarkContainerPropsType) {
    const dispatch = useDispatch();
    const layoutState = useSelector((state: RootState) => state.layout);
    const { bookMarkClass } = layoutState;

    const backToBookmark = () => {
        dispatch(setBookMarkClass(!bookMarkClass));
    };
    return (
        <LI className="onhover-dropdown">
            <SvgIcon iconId='fill-star' />
            <div className="onhover-show-div bookmark-flip">
                <div className="flip-card">
                    <div className={`flip-card-inner ${bookMarkClass ? "flipped" : ""}`}>
                        <div className="front">
                            <H6 className="f-18 mb-0 dropdown-title">{Bookmark}</H6>
                            <BookmarkList bookmarkList={bookmarkList} />
                        </div>
                        <div className="back">
                            <UL className='simple-list'>
                                <LI>
                                    <div className="bookmark-dropdown flip-back-content">
                                        <Input type="text" placeholder="search..." onChange={handleSearch} />
                                        <div className={bookmarkItems.length > 0 ? "Typeahead-menu filled-bookmark custom-scrollbar is-open" : ''}>
                                            {bookmarkItems.map((data: SidebarMenuType, index: number) => (
                                                <div className="ProfileCard u-cf" key={index}>
                                                    <div className="ProfileCard-details">
                                                        <div className="ProfileCard-realName d-flex">
                                                            <Link className="realname" to={data.url || ''}>{data.title}</Link>
                                                            <span className="pull-right">
                                                                <a href={Href}>
                                                                    <i className={`fa ${data.bookmark ? 'fa-star' : 'fa-star-o'} mt-1 icon-star`} onClick={(e) => handleBookmark(e, data)} />
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </LI>
                                <LI>
                                    <a onClick={backToBookmark} className="f-w-700 d-block flip-back" id="flip-back" href={Href}>{Back}</a>
                                </LI>
                            </UL>
                        </div>
                    </div>
                </div>
            </div>
        </LI>
    )
}
