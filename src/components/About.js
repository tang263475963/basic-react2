import React, { Component } from 'react'
import data from '../data';
import {
    Row, Col, Card, CardImg, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

export default class About extends Component {
    render() {
        return (
            <div>
                <h4>เกี่ยวกับเรา</h4>
                {
                    data.products.map(product =>
                        <div>
                            <Row>
                                <Col md={3}>
                                    <Card>
                                        <CardImg src={product.image} />
                                        <CardBody>
                                            <CardTitle>{product.name}</CardTitle>
                                            <CardSubtitle>{product.brand}</CardSubtitle>
                                            <CardSubtitle>{product.price}</CardSubtitle>
                                            <CardSubtitle>{product.rating}</CardSubtitle>
                                            <CardSubtitle>{product.numStock}</CardSubtitle>
                                            <CardSubtitle>{product.numReview}</CardSubtitle>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    )
                }
            </div>
        )
    }
}
