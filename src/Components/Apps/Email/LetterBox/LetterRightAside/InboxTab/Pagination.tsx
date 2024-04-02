import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { RootState } from '../../../../../../redux-toolkit/store'
import { setPage } from '../../../../../../redux-toolkit/reducers/LetterBoxReducer'
import { Href } from '../../../../../../Utils/Constants'

export default function MailPagination() {
    const { page } = useSelector((state: RootState) => state.email)
    const dispatch = useDispatch()
    const handlePagination = (value: boolean) => {
        dispatch(setPage(value))
    }
    return (
        <Pagination className="mail-pagination">
            <PaginationItem >
                <PaginationLink href={Href} previous />
            </PaginationItem>
            <PaginationItem active={!page ? true : false} onClick={() => handlePagination(false)}>
                <PaginationLink href={Href}>1</PaginationLink>
            </PaginationItem>
            <PaginationItem active={page ? true : false} onClick={() => handlePagination(true)}>
                <PaginationLink href={Href}>2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href={Href} next />
            </PaginationItem>
        </Pagination>
    );
};
