import React from 'react';
import { FormGroup, Input } from 'reactstrap'
import { LI } from '../../../../AbstractElements';
import { SearchBarContainPropsType } from '../../../../Types/LayoutTypes';
import SearchResult from './SearchResult';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux-toolkit/store';
import { setSearchIcon } from '../../../../redux-toolkit/reducers/LayoutReducer';
import SvgIcon from '../../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons';

export default function SearchBoxToggle({ handleSearch, suggestion }: SearchBarContainPropsType) {
    const dispatch = useDispatch();
    const layoutState = useSelector((state: RootState) => state.layout);
    const { searchIcon } = layoutState;

    const handleSearchIconClick = () => {
        dispatch(setSearchIcon(!searchIcon));
    };
    return (
        <LI className="serchinput">
            <div className="serchbox" onClick={handleSearchIconClick}>
                <SvgIcon iconId='fill-search' />
            </div>
            {searchIcon &&
                <FormGroup className={`search-form ${searchIcon ? 'open' : ''}`}>
                    <Input type="text" placeholder="Search here..." onChange={handleSearch} />
                    <SearchResult suggestion={suggestion} />
                </FormGroup>}
        </LI>
    )
}
