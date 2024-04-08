import React from "react";
import { Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import {
  DescriptionLabel,
  Discard,
  DropzoneText,
  SlidesTitle,
  Title,
  Upload,
  UploadSlides,
} from "../../Utils/Constants";
import SimpleMdeReact from "react-simplemde-editor";
import Breadcrumbs from "../../CommonElements/Breadcrumbs";
import ContentsTable from "../../Components/Tables/DataTables/APIDataTables/ContentsTable";
import Dropzone, { IFileWithMeta } from "react-dropzone-uploader";
import { Btn, H4 } from "../../AbstractElements";

export default function SlidesPage() {
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
        pageTitle={SlidesTitle}
        parent={SlidesTitle}
        title={SlidesTitle}
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
                    <Label>{UploadSlides}: </Label>
                    <Dropzone
                      getUploadParams={getUploadParams}
                      onSubmit={handleFileSubmit}
                      multiple={true}
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

                  <div className="btn-showcase text-end">
                    <Btn color="primary">{Upload}</Btn>
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
