import React from 'react'
import { Col, Row } from 'reactstrap';
import { H5, H6 } from '../../../AbstractElements';
import { flagIconData } from '../../../Data/IconsData/FlagIconsData';
import { AbbreviationIconType } from '../../../Types/IconsType';

export default function FlagIconBody({ getIconTag }: AbbreviationIconType) {

    return (
        <Row className='icon-lists flag-icons'>
            {flagIconData.map((icon, i) => (
                <Col xs={12} sm={6} xl={4} key={i} onClick={() => getIconTag(icon)}>
                    <div className='d-flex'>
                        <i className={`flag-icon fi fi-${icon.abbreviation}`}></i>
                        <div className="flex-grow-1 align-self-center">
                            <H5>{icon.abbreviation}</H5>
                            <H6 className='mt-0'>{icon.name}</H6>
                        </div>
                    </div>
                </Col>
            ))}
        </Row>
    )
}
