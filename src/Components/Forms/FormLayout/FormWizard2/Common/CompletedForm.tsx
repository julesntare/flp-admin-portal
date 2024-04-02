import React from 'react'
import { H6, Image } from '../../../../../AbstractElements'
import { SuccessfullyCompleted } from '../../../../../Utils/Constants'
import { dynamicImage } from '../../../../../Utils'

export default function CompletedForm() {
    return (
        <div className="form-completed">
            <Image src={dynamicImage(`gif/dashboard-8/successful.gif`)} alt="successful" />
            <H6>{SuccessfullyCompleted}</H6>
        </div>
    )
}
