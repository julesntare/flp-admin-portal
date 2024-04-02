import React from 'react'
import CommonTypeahead from '../Common/CommonTypeahead'
import { BasicTypeaheadTitle, BloodhoundTitle, CustomTemplatesTitle, MultipleSectionsHeadersTitle, PrefetchTitle, RTLSupportTitle, RemoteTypeaheadTitle, ScrollableDropdownMenuTitle } from '../../../../../Utils/Constants'
import { basicTypeaheadSubTitle, bloodHoundSubTitle, customTemplateSubTitle, multipleSelectionSubTitle, prefetchSubTitle, rTlSupportSubTitle, remoteTypeaheadSubTitle, scrollableDropdownSubTitle } from '../../../../../Data/Forms/FormWidgetsData'
import { countryList, movieList, multipleWithHeadersData, oscarWinnersMovieList, statesOfUSA } from '../../../../../Data/Forms/FormWidgetsData/TypeaheadData'
import MultipleSectionsWithHeaders from './MultipleSectionsWithHeaders'

export default function AllTypeaheadLists() {

    return (
        <>
            <CommonTypeahead id='basic' title={BasicTypeaheadTitle} subTitle={basicTypeaheadSubTitle} options={statesOfUSA} placeholder="States of USA" divId="the-basics" />
            <CommonTypeahead id='prefetch' title={PrefetchTitle} subTitle={prefetchSubTitle} options={countryList} placeholder="Countries" divId="prefetch" />
            <CommonTypeahead id='blood' title={BloodhoundTitle} subTitle={bloodHoundSubTitle} options={statesOfUSA} placeholder="States of USA" divId="bloodhound" />
            <CommonTypeahead id='remote' title={RemoteTypeaheadTitle} subTitle={remoteTypeaheadSubTitle} options={movieList} placeholder="Choose Option" divId="remote" />
            <CommonTypeahead id='custom' title={CustomTemplatesTitle} subTitle={customTemplateSubTitle} options={oscarWinnersMovieList} placeholder="Oscar winners" divId="custom-templates" />
            <MultipleSectionsWithHeaders />
            <CommonTypeahead id='scroll' title={ScrollableDropdownMenuTitle} subTitle={scrollableDropdownSubTitle} options={countryList} placeholder="Countries" divId="scrollable-dropdown-menu" />
            <CommonTypeahead id='rtl' title={RTLSupportTitle} subTitle={rTlSupportSubTitle} options={countryList} className='d-flex justify-content-end' placeholder="Countries" divId="rtl-support" />
        </>
    )
}
