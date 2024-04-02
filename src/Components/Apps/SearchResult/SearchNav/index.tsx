import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import { SearchNavProps } from '../../../../Types/SearchResultType'
import { Href } from '../../../../Utils/Constants'
import { searchNavData } from '../../../../Data/AppsData/SearchResultData'

export default function SearchNav({ activeTab, setActiveTab }: SearchNavProps) {
    return (
        <div className="text-center">
            <Nav className="search-list" tabs>
                {searchNavData.map((nav) => (
                    <NavItem key={nav.id} className={nav.itemClass ? nav.itemClass : ''}>
                        <NavLink href={Href} className={`${nav.linkClass ? nav.linkClass : ''} ${activeTab === nav.id ? 'active' : ''}`} onClick={() => setActiveTab(nav.id)}>
                            <i className={`icon-${nav.icon}`}></i>{nav.text}
                        </NavLink>
                    </NavItem>
                ))}
            </Nav>
        </div>
    )
}
