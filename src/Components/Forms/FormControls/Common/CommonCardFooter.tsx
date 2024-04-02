import React from 'react'
import { CardFooter } from 'reactstrap';
import { Btn } from '../../../../AbstractElements';
import { Cancel, Submit } from '../../../../Utils/Constants';
import { CommonCardFooterProps } from '../../../../Types/FormType';

export default function CommonCardFooter({ footerClass = '',color1,btn2Class = '',btn1Class = '',color2, }:CommonCardFooterProps) {
    
    return (
        <CardFooter className={footerClass}>
            <Btn color={color1} className={`m-r-15 ${btn1Class}`}>{Submit}</Btn>
            <Btn color={color2} className={btn2Class}>{Cancel}</Btn>
        </CardFooter>
    );
}
