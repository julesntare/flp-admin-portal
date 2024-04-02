import React from 'react'
import { Database } from 'react-feather'
import { Btn, LI, P, ProgressBar, UL } from '../../../../AbstractElements'
import { StorageText } from '../../../../Utils/Constants'

export default function Storage() {
    return (
        <UL className="simple-list">
            <LI>
                <Btn color="primary" outline>
                    <Database /> {StorageText}
                </Btn>
                <div className="m-t-15">
                    <ProgressBar className="sm-progress-bar mb-3" color="primary" value={25} />
                    <P>{"25 GB of 100 GB used"}</P>
                </div>
            </LI>
        </UL>
    )
}
