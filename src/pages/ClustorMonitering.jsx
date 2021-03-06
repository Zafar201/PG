import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Chart from "react-google-charts";
import Navbar from "../components/Navbar";

function getRandomNumber() {
  return Math.random() * 100;
}

export function getData() {
  return [
    ["Label", "Value"],
    ["", getRandomNumber()],
    // ["CPU", getRandomNumber()],
    // ["Network", getRandomNumber()],
  ];
}

export const options = {
  width: '100%',
  height: 320,
  redFrom: 90,
  redTo: 100,
  yellowFrom: 75,
  yellowTo: 90,
  minorTicks: 5,
};

function ClustorMonitering() {
  const [data, setData] = useState(getData);

  useEffect(() => {
    const id = setInterval(() => {
      setData(getData());
    }, 3000);

    return () => {
      clearInterval(id);
    };
  });

  return (
    <div>
      {/* <section class="blue section">
        <h1>Clustor monitoring</h1>
        <p>A website is like a road. The more curves it has the more interesting it is.</p>
        <div class="curve"></div>
      </section> */}
      <Navbar/>

      <Container className="clust-2">
        <Row>
          <h2>Number of nodes</h2>
          <center>
            <h3>2</h3>
          </center>
        </Row>

        <Row className="clust-3">
          <Col>
            <h4> Node 1</h4>
            <center>
            <Chart
              chartType="Gauge"
              width="100%"
              height="500px"
              data={data}
              options={options}
            />
            </center>
          </Col>
          <Col>
            <h4> Node 2</h4>
            <center>
            <Chart
              chartType="Gauge"
              width="100%"
              height="500px"
              data={data}
              options={options}
            />
            </center>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ClustorMonitering;
