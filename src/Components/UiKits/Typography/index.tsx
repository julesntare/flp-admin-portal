import { Fragment } from 'react'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { TypographyTitle, UiKits } from '../../../Utils/Constants'
import { Container, Row } from 'reactstrap'
import Headings from './Headings'
import ColoredHeadings from './ColoredHeadings'
import FontWeight from './FontWeight'
import Listing from './Listing'
import InlineTextElements from './InlineTextElements'
import TextColor from './TextColor'
import BlockQuotesCard from './BlockQuotes'
import DisplayHeading from './DisplayHeading'

export default function TypographyContainer() {
  return (
    <Fragment>
         <Breadcrumbs pageTitle={TypographyTitle} parent={UiKits} title={TypographyTitle} />
         <Container fluid>
                <Row>
                    <Headings/>
                    <ColoredHeadings/>
                    <FontWeight/>
                    <Listing/>
                    <DisplayHeading/>
                    <InlineTextElements/>
                    <TextColor/>
                    <BlockQuotesCard/>
                </Row>
            </Container>
    </Fragment>
  )
}
