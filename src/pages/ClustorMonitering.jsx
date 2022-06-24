import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function ClustorMonitering() {
  return (
    <div>

    <section class="blue">
 
      <h1>Clustor monitoring</h1>
      {/* <p>A website is like a road. The more curves it has the more interesting it is.</p> */}
      <div class="curve"></div>
      

    </section>

    <Container className='clust-2'>
        <Row>
            <h2>Number of nodes</h2>
         <center><h3>5</h3></center>   
        </Row>

        <Row className='clust-3'>
            <Col>
              <h4> node1</h4>
            </Col> 
            <Col>
            <h4> node2</h4>
            </Col> 
        </Row>
    </Container>
    
    </div>
  )
}

export default ClustorMonitering