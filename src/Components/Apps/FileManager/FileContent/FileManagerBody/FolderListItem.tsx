import React from 'react'
import { H6, LI, P } from '../../../../../AbstractElements'
import { FileFolderItemProp } from '../../../../../Types/FileManagerType'

export default function FolderListItem({ item }: FileFolderItemProp) {
    return (
        <LI className="folder-box">
            <div className="d-block">
                <i className={`f-44 fa fa-${item.folderClass} txt-warning`}></i>
                <i className="fa fa-ellipsis-v me-0 f-14 ellips"></i>
                <div className="mt-3">
                    <H6>{item.title}</H6>
                    <P>{item.folderFiles}
                        <span className="pull-right">
                            <i className="fa fa-clock-o"></i>{item.folderTime}
                        </span>
                    </P>
                </div>
            </div>
        </LI>
    )
}
