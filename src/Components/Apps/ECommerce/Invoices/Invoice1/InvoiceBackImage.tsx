import React from 'react'
import { Image } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'

export default function InvoiceBackImage() {
    return (
        <td>
            <Image className="banner-image w-100" src={dynamicImage(`email-template/invoice-1/1.png`)} alt="background" />
        </td>
    )
}
