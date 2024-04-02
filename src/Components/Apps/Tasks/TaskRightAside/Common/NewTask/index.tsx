import React, { useRef } from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap';
import { EmptyTaskProp } from '../../../../../../Types/TasksType';
import { useReactToPrint } from 'react-to-print';
import { H3 } from '../../../../../../AbstractElements';
import { Href, Print } from '../../../../../../Utils/Constants';
import { Printer } from 'react-feather';
import NewTaskTable from './NewTaskTable';

export default function NewTask({title}: EmptyTaskProp) {
  const componentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <Card className="mb-0">
      <CardHeader className="d-flex">
        <H3 className="mb-0">{title}</H3>
        <a href={Href} onClick={handlePrint}><Printer className='me-2' />{Print}</a>
      </CardHeader>
      <CardBody className="p-0" >
        <NewTaskTable componentRef={componentRef} />
      </CardBody>
    </Card>
  )
}
