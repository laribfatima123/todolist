import React from 'react';
import { Divider,Row,Col } from 'antd';
const Dividerclass = (props)=> {
  const style = {
    background:'blue',
    padding:'5px',
    color:'white'
  };
  const styleColor = {
    background:'red',
    padding:'5px',
    color:'white'
  };
    return (
        <div>
{/* <Row justify="center" align="middle" container mx-auto>
  <Col>
  <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
  </Col>
   
    <Divider />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider dashed />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
  
    </Row>
================================
============================

=============================
========================
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider>Text</Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider orientation="left">Left Text</Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider orientation="right" type="vertical">Right Text</Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>




    =======================================

 
    Text
    <Divider type="vertical" style={{backgroundColor:"red"}}/>
    <a href="#">Link</a>
    <Divider type="vertical" style={{backgroundColor:"green"}} />
    <a href="#">Link</a> */}
 
 




    <Row>
      <Col span={8} style={style}>col-8</Col>
      <Col span={8} offset={8} style={style}>
        col-8
      </Col>
    </Row>
======================
=================================
=================================
===================================
=====================================
  <Row>
    <Col span={18} push={6} style={style}>
      col-18 col-push-6
    </Col>
    <Col span={6} pull={18} style={styleColor}>
      col-6 col-pull-18
    </Col>
  </Row>,


        </div>
    );
}

export default Dividerclass;