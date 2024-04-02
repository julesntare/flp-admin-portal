import React, { FormEvent } from 'react'
import { Col, Form, Input } from 'reactstrap'
import { H3, Image } from '../../../AbstractElements'
import { knowledgebaseSearchText } from '../../../Utils/Constants'
import { Search } from 'react-feather'
import { dynamicImage } from '../../../Utils'

export default function KnowledgeSearch() {
    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    return (
        <Col xs={12}>
            <div className="knowledgebase-bg">
                <Image className="bg-img-cover bg-center" src={dynamicImage(`knowledgebase/bg_1.jpg`)} alt="looginpage" />
            </div>
            <div className="knowledgebase-search">
                <div>
                    <H3>{knowledgebaseSearchText}</H3>
                    <Form className="form-inline" onSubmit={handleSearch}>
                        <div className="w-100"><Search />
                            <Input className="w-100" type="text" placeholder="Type question here" plaintext />
                        </div>
                    </Form>
                </div>
            </div>
        </Col>
    )
}
