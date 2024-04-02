import React, { useState } from 'react'
import { Card, CardBody, CardHeader, Col, Collapse, Input } from 'reactstrap';
import CheckboxLists from './CheckboxLists';
import { Btn, H5 } from '../../../../../../AbstractElements';
import { Filter, FindCourse } from '../../../../../../Utils/Constants';
import { ChevronDown, ChevronUp } from 'react-feather';
import FeatherIconCom from '../../../../../../Utils/CommonComponents/CommonIcons/FeatherIconCom';

export default function FindCourseCard() {
  const [isFilter, setIsFilter] = useState(true);
  const toggle = () => { setIsFilter(!isFilter); }
  return (
    <Col xl={12}>
      <Card>
        <CardHeader>
          <H5 className='mb-0'>
            <Btn color='transparent' className='btn-link d-flex align-items-center gap-2 justify-content-between' onClick={toggle}>{FindCourse}
              {isFilter ? <ChevronDown /> : <ChevronUp />}
            </Btn>
          </H5>
        </CardHeader>
        <Collapse isOpen={isFilter}>
          <CardBody className='filter-cards-view animate-chk'>
            <div className='job-filter'>
              <div className='faq-form'>
                <Input type='text' placeholder='Search..' />
                <FeatherIconCom className='search-icon' iconName='Search'/>
              </div>
            </div>
            <CheckboxLists />
            <Btn color='primary' className='text-center'>{Filter}</Btn>
          </CardBody>
        </Collapse>
      </Card>
    </Col>
  );
};
