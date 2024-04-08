import React from "react";
import { Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import {
  DescriptionLabel,
  Discard,
  DropzoneText,
  FindMoreLink,
  Save,
  SiteContentTitle,
  Title,
  Type,
  UploadBackgroundImage,
} from "../../Utils/Constants";
import { postEditRadios } from "../../Data/MiscellaneousData/BlogData";
import SimpleMdeReact from "react-simplemde-editor";
import Breadcrumbs from "../../CommonElements/Breadcrumbs";
import ContentsTable from "../../Components/Tables/DataTables/APIDataTables/ContentsTable";
import Dropzone, { IFileWithMeta } from "react-dropzone-uploader";
import { Btn, H4 } from "../../AbstractElements";

export default function SiteContentsPage() {
  const getUploadParams = () => {
    return { url: "https://httpbin.org/post" };
  };

  const handleFileSubmit = (
    successFiles: IFileWithMeta[],
    allFiles: IFileWithMeta[]
  ): void => {
    allFiles.forEach((f) => f.remove());
  };

  return (
    <div className="page-body">
      <Breadcrumbs
        pageTitle={SiteContentTitle}
        parent={SiteContentTitle}
        title={SiteContentTitle}
      />
      <Container fluid>
        <Row>
          <Col sm={12}>
            <Form className="needs-validation" noValidate>
              <Row>
                <Col sm={12}>
                  <FormGroup>
                    <Label>{Title}:</Label>
                    <Input type="text" placeholder="Section Title" />
                  </FormGroup>
                  <div className="email-wrapper">
                    <div className="theme-form">
                      <FormGroup>
                        <Label>{DescriptionLabel}:</Label>
                        <SimpleMdeReact
                          id="editor_container"
                          value=""
                          options={{ autofocus: true, spellChecker: false }}
                        />
                      </FormGroup>
                    </div>
                  </div>
                  <FormGroup>
                    <Label>{FindMoreLink}:</Label>
                    <Input type="url" placeholder="Paste Your Link" />
                  </FormGroup>
                  <FormGroup>
                    <Label>{UploadBackgroundImage}: </Label>
                    <Dropzone
                      getUploadParams={getUploadParams}
                      onSubmit={handleFileSubmit}
                      inputContent={
                        <div
                          className="m-0 dz-message needsclick text-center"
                          key={1}
                        >
                          <i className="icon-cloud-up"></i>
                          <H4 className="mb-0">{DropzoneText}</H4>
                        </div>
                      }
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>{Type}: </Label>
                    <FormGroup className="me-1 d-flex flex-row">
                      {postEditRadios.map((item) => (
                        <div className="m-checkbox-inline" key={item.id}>
                          <Label htmlFor={`edo-ani${item.id}`}>
                            <Input
                              className="radio_animated"
                              id={`edo-ani${item.id}`}
                              type="radio"
                              name="rdo-ani"
                              defaultChecked={item.check === "checked"}
                            />
                            {item.text}
                          </Label>
                        </div>
                      ))}
                    </FormGroup>
                  </FormGroup>

                  <div className="btn-showcase text-end">
                    <Btn color="primary">{Save}</Btn>
                    <Btn color="light">{Discard}</Btn>
                  </div>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>

        {/* add separator */}
        <hr />

        <Row>
          <Col sm={12}>
            <ContentsTable title="Contents List" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
