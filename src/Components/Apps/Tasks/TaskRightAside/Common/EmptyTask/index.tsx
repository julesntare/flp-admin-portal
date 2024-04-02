import React from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'
import { H3 } from '../../../../../../AbstractElements'
import { Href, Print } from '../../../../../../Utils/Constants'
import { Printer } from 'react-feather'
import { EmptyTaskProp } from '../../../../../../Types/TasksType'

export default function EmptyTask({title}: EmptyTaskProp) {
  return (
    <Card className='mb-0'>
        <CardHeader className='d-flex'>
          <H3 className='mb-0'>{title}</H3>
          <a href={Href}>
            <Printer className='me-2' />{Print}
          </a>
        </CardHeader>
        <CardBody>
          <div className='details-bookmark text-center'>
              <span>{'No Task Due Today.'}</span>
          </div>
        </CardBody>
    </Card>
  )
}
