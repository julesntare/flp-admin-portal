import React, { useCallback, useState } from 'react'
import { Nav, NavItem } from 'reactstrap'
import { Bookmark, PlusCircle } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { Btn, LI } from '../../../../AbstractElements'
import { Href, NewBookmark, Tags, Views } from '../../../../Utils/Constants'
import { RootState } from '../../../../redux-toolkit/store';
import { updateActiveTabs } from '../../../../redux-toolkit/reducers/BookmarkReducer';
import { StateType } from '../../../../Types/BookmarkType';
import TagModal from '../BookmarkModals/TagModal';
import NewBookmarkModal from '../BookmarkModals/NewBookmarkModal';
import { bookmarkViewsNav, bookmarkTagsNav } from '../../../../Data/AppsData/Bookmark&ContactData';

export default function NavTabs() {
    const dispatch = useDispatch();
    const [state, setState] = useState<StateType>({ addModal: false, tagModal: false });
    const { activeTabs } = useSelector((state: RootState) => state.bookmark);
    const onClickHandle = (id: string) => {
        dispatch(updateActiveTabs(id));
    };
    const modalToggle = (modalName: keyof StateType) => {
        setState((prevState) => ({
            ...prevState,
            [modalName]: !prevState[modalName],
        }));
    };
    const addToggleCallback = useCallback((toggle: boolean) => {
        setState((prevState) => ({
            ...prevState,
            addModal: toggle,
        }));
    }, []);

    return (
        <Nav className="main-menu">
            <NavItem>
                <Btn color='primary' className="btn-block btn-mail w-100" onClick={() => modalToggle('addModal')}><Bookmark className="me-2" />{NewBookmark}</Btn>
                <NewBookmarkModal showModal={state.addModal} modalToggle={() => modalToggle('addModal')} addCallback={addToggleCallback} />
            </NavItem>
            <NavItem><span className="main-title">{Views}</span></NavItem>
            {bookmarkViewsNav.map((item) => (
                <LI key={item.id}>
                    <a href={Href} className={`show ${activeTabs === item.id ? 'active' : ''}`} onClick={() => onClickHandle(item.id)}><span className="title">{item.title}</span></a>
                </LI>
            ))}
            <LI><hr /></LI>
            <LI>
                <span className="main-title"> {Tags}
                    <span className="pull-right"><a href={Href} onClick={() => modalToggle('tagModal')}><PlusCircle /></a></span>
                </span>
                <TagModal showModal={state.tagModal} modalToggle={() => modalToggle('tagModal')} />
            </LI>
            {bookmarkTagsNav.map((item) => (
                <LI key={item.id}>
                    <a href={Href} className={`show ${activeTabs === item.id ? 'active' : ''}`} onClick={() => onClickHandle(item.id)}><span className="title">{item.title}</span></a>
                </LI>
            ))}
        </Nav>
    )
}
