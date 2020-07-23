import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Row, Col } from 'reactstrap';
import datas from '../data';

export default class Products extends Component {
    render() {
        return (
            <div>
                <h2>สินค้า</h2>
                <Row>
                    {datas.products.map(pd =>
                        <Col sm="3">
                            <Card>
                                <CardImg src={pd.image} />
                                <CardBody>
                                    <CardTitle>{pd.name}</CardTitle>
                                    <CardSubtitle>ราคา{pd.price}บาท</CardSubtitle>
                                    <CardTitle>จำนวน{pd.numStock}</CardTitle>
                                    <CardText>รายละเอียดสินค้า</CardText>
                                    <Button color="warning">กดซื้อไปเลยสิ~!</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    )
                    }
                </Row>
            </div>
        )
    }
}
