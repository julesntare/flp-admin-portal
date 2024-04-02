import React from 'react'
import { Image } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'

export default function CommonInvoiceSign() {
    return (
        <td>
            <Image src={dynamicImage(`email-template/invoice-3/sign.png`)} alt="sign" />
            <span style={{ color: "var(--theme-default)", display: "block", fontSize: 18, fontWeight: 600 }} >Laurine T. Ebbert</span>
            <span style={{ display: "block", fontSize: 14, paddingTop: 5 }}>( Designer )</span>
        </td>
    )
}
