import React from 'react'
import { H6, LI, P } from '../../../../../AbstractElements'
import { FileFolderItemProp } from '../../../../../Types/FileManagerType'

export default function FileListItem({ item }: FileFolderItemProp) {
    return (
        <LI className="folder-box d-flex align-items-center">
            <div className="d-flex align-items-center files-list">
                <div className="flex-shrink-0 file-left">
                    <i className={`f-22 fa fa-${item.icon}`}></i>
                </div>
                <div className="flex-grow-1 ms-3">
                    <H6>{item.name}</H6>
                    <P>{item.modify}, {item.size}</P>
                </div>
            </div>
        </LI>
    )
}
