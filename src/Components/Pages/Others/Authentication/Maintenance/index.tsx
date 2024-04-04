import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import { Btn, H2, H4, LI, UL } from "../../../../../AbstractElements";
import { BackToHomePage, MAINTENANCE, SubContent, ThankYouPatience } from "../../../../../Utils/Constants";

export default function Maintenance() {
  return (
  <div className="page-wrapper">
    <div className="error-wrapper maintenance-bg">
      <Container>
        <UL className="simple-list maintenance-icons">
          <LI><i className="fa fa-cog"></i></LI>
          <LI><i className="fa fa-cog"></i></LI>
          <LI><i className="fa fa-cog"></i></LI>
        </UL>
        <div className="maintenance-heading">
          <H2 className="headline">{MAINTENANCE}</H2>
        </div>
        <H4 className="sub-content">{SubContent}<br/>{ThankYouPatience}</H4>
        <Link to={`${process.env.PUBLIC_URL}/dashboard`}>
            <Btn color='primary-gradien' size='lg' className="text-light">{BackToHomePage}</Btn>
        </Link>
      </Container>
    </div>
  </div>
  )
}