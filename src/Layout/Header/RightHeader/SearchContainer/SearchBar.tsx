import React from 'react';
import { LI } from '../../../../AbstractElements'
import { Input } from 'reactstrap'
import { SearchBarContainPropsType } from '../../../../Types/LayoutTypes';
import SearchResult from './SearchResult';
import SvgIcon from '../../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons';

export default function SearchBar({handleSearch,suggestion}: SearchBarContainPropsType) {
    
    return (
        <LI>
            <div className="w-100">
                <div className="Typeahead Typeahead--twitterUsers">
                    <div className="u-posRelative d-flex">
                        <SvgIcon className='search-bg svg-color me-2' iconId='fill-search' />
                        <Input onChange={handleSearch} className="demo-input py-0 Typeahead-input form-control-plaintext w-100" type="text" placeholder="Search Dunzo .." />
                    </div>
                    <SearchResult suggestion={suggestion}/>
                </div>
            </div>
        </LI>
    )
}
