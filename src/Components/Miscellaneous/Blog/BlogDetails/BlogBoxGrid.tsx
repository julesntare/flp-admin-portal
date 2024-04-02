import React from "react";
import { blogBoxGridData } from "../../../../Data/MiscellaneousData/BlogData";
import { Card, Col } from "reactstrap";
import { H4, Image, LI, UL } from "../../../../AbstractElements";
import { ByAdmin, Hits } from "../../../../Utils/Constants";
import { dynamicImage } from "../../../../Utils";

export default function BlogBoxGrid() {
  return (
    <>
      {blogBoxGridData.map((item) => (
        <Col md={6} xl={3} className="box-col-3" key={item.id}>
          <Card>
            <div className="blog-box blog-grid text-center">
              <Image
                className="img-fluid top-radius-blog"
                src={dynamicImage(`blog/blog-${item.image}`)}
                alt=""
              />
              <div className="blog-details-main">
                <UL className="simple-list flex-row blog-social justify-content-center">
                  <LI>
                    {item.date} {"April 2023"}
                  </LI>
                  <LI>{ByAdmin}</LI>
                  <LI>
                    {"0"} {Hits}
                  </LI>
                </UL>
                <hr />
                <H4 className="blog-bottom-details">{item.text}</H4>
              </div>
            </div>
          </Card>
        </Col>
      ))}
    </>
  );
}
