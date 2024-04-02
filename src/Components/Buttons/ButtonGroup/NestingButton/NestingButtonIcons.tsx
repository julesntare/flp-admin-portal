import React from 'react'
import { ButtonGroup } from 'reactstrap'
import { Btn } from '../../../../AbstractElements'
import { nestingIconData } from '../../../../Data/ButtonsData/GroupButtonData'

export default function NestingButtonIcons() {
    
    return (
        <>
            {nestingIconData.map((list) => (
                <div className='m-b-30' key={list.id}>
                    <ButtonGroup>
                        {list.child.map((item) => (
                            <Btn color={item.color} size={item.size ? item.size : ''} key={item.id}><i className={`fa ${item.iconClass}`}></i></Btn>
                        ))}
                    </ButtonGroup>
                </div>
            ))}
        </>
    )
}
