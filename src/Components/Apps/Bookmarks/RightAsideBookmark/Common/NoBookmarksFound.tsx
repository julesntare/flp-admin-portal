import React from 'react'
import { Col } from 'reactstrap'
import { NoBookmarksFoundText } from '../../../../../Utils/Constants'

export default function NoBookmarksFound() {
    return (
        <Col xl={12}>
            <div className="no-favourite">
                <span>{NoBookmarksFoundText}</span>
            </div>
        </Col>
    )
}
