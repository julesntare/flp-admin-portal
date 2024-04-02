import React, { useEffect, useState } from 'react'
import { TabContent, TabPane } from 'reactstrap'
import { SearchTabContentProp, TabDataItems } from '../../../../Types/SearchResultType'
import AllTab from './AllTab'
import ImageTab from './ImageTab'
import VideoTab from './VideoTab'
import axios from 'axios'
import { SearchResultApi } from '../../../../api'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../../redux-toolkit/store'
import { fetchSearchData } from '../../../../redux-toolkit/reducers/SearchResultReducer'

export default function SearchTabContent({ activeTab }: SearchTabContentProp) {
    const { allResult } = useSelector((state: RootState) => state.searchResult);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => { dispatch(fetchSearchData()); }, []);
    return (
        <TabContent activeTab={activeTab}>
            <TabPane className='search-links' tabId={1}>
                <AllTab allResult={allResult} />
            </TabPane>
            <TabPane tabId={2}>
                <ImageTab />
            </TabPane>
            <TabPane tabId={3}>
                <VideoTab allResult={allResult} />
            </TabPane>
        </TabContent>
    )
}
