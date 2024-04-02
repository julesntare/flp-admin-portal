import React from 'react'
import { Image } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'

export default function InvoiceSign() {
    return (
        <td>
            <Image src={dynamicImage(`email-template/invoice-1/sign.png`)} alt="sign" />
            <span style={{ display: "block", background: "rgba(82, 82, 108, 0.3)", height: 1, width: 200, padding: 0, }} />
            <span style={{ color: "rgba(82, 82, 108, 0.8)" }}>{'Authorized Sign'}</span>
        </td>
    )
}
