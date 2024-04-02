import React from 'react'
import { CardBody } from 'reactstrap'
import { H5, H6, LI, UL } from '../../../../../AbstractElements'
import FolderListItem from './FolderListItem'
import { quickAccessData } from '../../../../../Data/AppsData/FileManagerData'
import { FileManagerBodyProps } from '../../../../../Types/FileManagerType'

export default function FileManagerBody({ myFile, fileList }: FileManagerBodyProps) {
    return (
        <CardBody className="file-manager">
            <H5>{'Quick Access'}</H5>
            <UL className="simple-list files quick-file flex-row">{
                quickAccessData.map((item) => (
                    <LI key={item.id}>
                        <div className="quick-box"><i className={`fa fa-${item.quickClass}`}></i></div>
                        <H6>{item.quickTitle}</H6>
                    </LI>
                ))
            }</UL>
            <H5 className="mt-4">{'Folders'}</H5>
            <UL className="simple-list folder flex-row">
                {myFile.map((item) => (
                    <FolderListItem key={item.id} item={item} />
                ))}
            </UL>
            <H5 className="mt-4">{'Files'}</H5>
            <UL className="simple-list files-content flex-row">{fileList}</UL>
        </CardBody>
    )
}
