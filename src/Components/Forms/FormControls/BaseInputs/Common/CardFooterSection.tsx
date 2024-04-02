import React from 'react'
import { CardFooter, Col } from 'reactstrap'
import { Btn } from '../../../../../AbstractElements'
import { Cancel, SubmitButton } from '../../../../../Utils/Constants'

export default function CardFooterSection() {
    
    return (
        <CardFooter className='text-end'>
            <Col sm={9} className="offset-sm-3">
                <Btn color="primary" className="me-3" type="submit">
                    {SubmitButton}
                </Btn>
                <Btn color="light" type="reset">
                    {Cancel}
                </Btn>
            </Col>
        </CardFooter>
    )
}
