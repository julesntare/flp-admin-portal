import React, { useState } from 'react'
import { Input, InputGroup, InputGroupText } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { Search } from 'react-feather';
import { searchMember } from '../../../../../redux-toolkit/reducers/ChatReducer';

export default function SearchList() {
    const [searchKeyword, setSearchKeyword] = useState("");
    const dispatch = useDispatch();
    const handleSearchKeyword = (keyword: string) => {
        setSearchKeyword(keyword);
        dispatch(searchMember(keyword));
    };
    return (
        <div className="left-sidebar-chat">
            <InputGroup>
                <InputGroupText>
                    <Search className="search-icon text-gray" />
                </InputGroupText>
                <Input type="text" placeholder="Search here.." defaultValue={searchKeyword} onChange={(e) => handleSearchKeyword(e.target.value)} />
            </InputGroup>
        </div>
    )
}
