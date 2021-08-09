import React from 'react';
import { Row, Col } from 'antd';
const  Design=(props)=> {
  return (
    <div>
  <Row justify="center" gutter ={12,12} className="container mx-auto">
    <Col xs={12} sm={12} gutter={12}  style={{backgroundColor:"red",padding:"5px"}}>
      col-18 col-push-6
    </Col>
    <Col xs={12} sm={12}  style={{backgroundColor:"yellow",padding:"5px"}}>
      col-6 col-pull-18
    </Col>
  </Row>

    </div>
  );
}

export default Design;