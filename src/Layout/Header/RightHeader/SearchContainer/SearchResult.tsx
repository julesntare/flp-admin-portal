import React from 'react';
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Emptysearch } from '../../../../Utils/Constants'

export default function SearchResult({ suggestion }: any) {
    return (
        <Fragment>
            <div className={`Typeahead-menu custom-scrollbar ${suggestion.length > 0 ? "is-open" : ""}`} id="search-outer">
                <div className="header-search-suggestion custom-scrollbar">
                    {suggestion.map((item: any, i: number) => (
                        <div className="ProfileCard u-cf" key={i}>
                            <div className="ProfileCard-details">
                                <div className="ProfileCard-realName">
                                    <Link className="realname  w-100 d-flex justify-content-start gap-2" to={item.url}>
                                        {item.title}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="Typeahead-menu empty-menu">
                <div className="tt-dataset tt-dataset-0">
                    <div className="EmptyMessage">{Emptysearch}</div>
                </div>
            </div>
        </Fragment>
    )
}
