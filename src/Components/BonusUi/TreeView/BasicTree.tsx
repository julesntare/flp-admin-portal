import React from 'react'
import TreeView, { flattenTree } from 'react-accessible-treeview';
import { Card, CardBody, Col } from 'reactstrap';
import CommonCardHeader from '../../../Utils/CommonComponents/CommonCardHeader';
import { basicTreeSubTitle, simpleTreeviewData } from '../../../Data/BonusUiData/TreeViewData';
import { BasicTreeTitle } from '../../../Utils/Constants';
import { ArrowIcon, CheckBoxIcon } from './Common/ArrowIcon';

const data = flattenTree(simpleTreeviewData);

export default function BasicTree() {
    return (
        <Col sm={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={BasicTreeTitle} subTitle={basicTreeSubTitle} />
                <CardBody>
                    <TreeView
                        data={data}
                        aria-label="Checkbox tree"
                        multiSelect
                        propagateSelect
                        propagateSelectUpwards
                        togglableSelect
                        nodeRenderer={({
                            element,
                            isBranch,
                            isExpanded,
                            isSelected,
                            isHalfSelected,
                            getNodeProps,
                            level,
                            handleSelect,
                            handleExpand,
                        }) => {
                            return (
                                <div
                                    {...getNodeProps({ onClick: handleExpand })}
                                    style={{ marginLeft: 40 * (level - 1),}}
                                >
                                    {isBranch && <ArrowIcon isOpen={isExpanded} />}
                                    <CheckBoxIcon
                                        className="checkbox-icon"
                                        onClick={(e: React.MouseEvent<HTMLElement>) => {
                                            handleSelect(e);
                                            e.stopPropagation();
                                        }}
                                        variant={
                                            isHalfSelected ? "some" : isSelected ? "all" : "none"
                                        }
                                    />
                                    <span className="name ms-2">{element.name}</span>
                                </div>
                            );
                        }}
                    />
                </CardBody>
            </Card>
        </Col>
    )
}
