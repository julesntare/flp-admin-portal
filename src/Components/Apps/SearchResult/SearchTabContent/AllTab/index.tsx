import React from 'react'
import { Row } from 'reactstrap'
import PixelstarpSearch from './PixelstarpSearch';
import { SearchResultInitialState } from '../../../../../Types/SearchResultType';
import BlogBox from './BlogBox';
import Pagination from '../Common/PaginationCard';

export default function AllTab({allResult}: SearchResultInitialState) {
    
    return (
        <Row>
            <PixelstarpSearch allResult={allResult} />
            <BlogBox allResult={allResult} />
            <Pagination />
        </Row>
    )
}
