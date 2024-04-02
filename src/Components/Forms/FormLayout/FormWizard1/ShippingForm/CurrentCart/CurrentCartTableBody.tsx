import React from 'react'
import { H3, Image, P } from '../../../../../../AbstractElements';
import { currentCartTableBodyData } from '../../../../../../Data/Forms/FormLayoutData';
import { dynamicImage } from '../../../../../../Utils';

export default function CurrentCartTableBody() {
    return (
        <tbody>
            {currentCartTableBodyData.map((data, index) => (
                <tr key={index}>
                    <td>
                        <Image src={dynamicImage(data.imagePath)} alt="t-shirt" />
                    </td>
                    <td>
                        <div>
                            <H3>{data.productName}</H3>
                            <span>{data.productSum}</span>
                        </div>
                    </td>
                    <td>
                        <P>{data.price}</P>
                    </td>
                </tr>
            ))}
        </tbody>
    );
}
