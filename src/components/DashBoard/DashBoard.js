import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const DashBoard = () => {
  const [rechart, setRechart] = useState([]);
  // Load Chart's Data:
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setRechart(data));
  }, []);
  return (
    <Container className="mx-auto my-5">
      <Row xs={1} md={2} className="g-4 p-0">
        <Col className="p-0  mb-4">
          <Card className="p-0 border-0">
            <ResponsiveContainer width={"95%"} height={400}>
              <LineChart width={300} height={300} data={rechart}>
                <Line stroke="#0d6efd" type="monotone" dataKey={"sell"}></Line>
                <CartesianGrid
                  stroke="navy"
                  strokeDasharray="2 2"
                ></CartesianGrid>
                <XAxis dataKey={"month"}></XAxis>
                <YAxis></YAxis>

                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </Card>
          <p className="fw-bold">Monthly Sell</p>
        </Col>
        <Col className="p-0  mb-4">
          <Card className="p-0 border-0">
            <ResponsiveContainer width={"95%"} height={400}>
              <AreaChart width={300} height={300} data={rechart}>
                <XAxis dataKey={"month"}></XAxis>
                <CartesianGrid stroke="#0d6efd" strokeDasharray="3 3" />
                <YAxis />
                <Tooltip />
                <Area
                  type="stepAfter"
                  dataKey="investment"
                  stackId="1"
                  stroke="#0d6efd"
                  fill="skyBlue"
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stackId="1"
                  stroke="#5bc0de"
                  fill="aquamarine"
                />
              </AreaChart>
            </ResponsiveContainer>
          </Card>
          <p className="fw-bold">Investment VS Revenue</p>
        </Col>
        <Col className="p-0  mb-4">
          <Card className="p-0 border-0 ">
            <ResponsiveContainer width={"95%"} height={400}>
              <PieChart width={300} height={300}>
                <Pie
                  data={rechart}
                  dataKey={"revenue"}
                  nameKey={"month"}
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  fill="#0d6efd"
                />
                <Pie
                  data={rechart}
                  dataKey={"investment"}
                  nameKey={"month"}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={90}
                  fill="#5bc0de"
                  label
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>
          <p className="fw-bold">Monthly Investment And Revenue</p>
        </Col>
      </Row>
    </Container>
  );
};

export default DashBoard;
