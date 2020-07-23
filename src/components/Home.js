import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import Slides from './Slides'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h2>หน้าหลัก</h2>
                <h2> ยินดีต้อนรับเข้าสู้เว็บไซต์</h2>
                <Button color="primary">กดเลยสิ!</Button>
                <hr />
                <Slides/>
                <Jumbotron>
                    <h1 className="display-3">สวัสดีจ่ะ!!</h1>
                    <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-2" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p className="lead">
                        <Button color="primary">Learn More</Button>
                    </p>
                </Jumbotron>
            </div>
        )
    }
}
