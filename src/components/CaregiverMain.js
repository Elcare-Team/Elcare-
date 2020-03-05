import React, { Component } from "react";
import {
  Header,
  Message,
  Button,
  Grid,
  Card,
  Image,
  Icon
} from "semantic-ui-react";
import steve from "../images/steve.jpg";
import { connect } from "react-redux";
import "../styles/CaregiverMain.css";
import Plot from "react-plotly.js";
import { Link } from "react-router-dom";
import { Bar, Line, Pie } from "react-chartjs-2";

const CaregiverMain = () => {
  const hello = {
    labels: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31
    ],
    datasets: [
      {
        label: "December 2019",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "#00D084",
        borderColor: "#00D084",
        borderWidth: 2,
        data: [
          1,
          2,
          1,
          4,
          3,
          2,
          1,
          2,
          2,
          3,
          2,
          1,
          2,
          3,
          1,
          0,
          1,
          1,
          2,
          0,
          2,
          3,
          2,
          4,
          0,
          3,
          2,
          1
        ]
      },
      {
        label: "January 2020",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "#0693E3",
        borderColor: "#0693E3",
        borderWidth: 2,
        data: [
          0,
          0,
          0,
          2,
          2,
          2,
          1,
          2,
          1,
          2,
          3,
          1,
          0,
          1,
          1,
          2,
          0,
          2,
          3,
          2,
          3,
          0,
          4,
          3,
          3,
          2,
          1,
          1
        ]
      },
      {
        label: "February 2020",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "#EB144C",
        borderColor: "#EB144C",
        borderWidth: 2,
        data: [
          2,
          2,
          1,
          1,
          1,
          2,
          0,
          3,
          2,
          1,
          1,
          1,
          1,
          0,
          1,
          1,
          3,
          0,
          2,
          3,
          2,
          4,
          0,
          2,
          3
        ]
      },
      {
        label: "March 2020",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "#FF6900",
        borderColor: "#FF6900",
        borderWidth: 2,
        data: [
          2,
          2,
          3,
          2,
          1,
          6,
          5,
          0,
          1,
          1,
          2,
          1,
          1,
          0,
          2,
          1,
          2,
          2,
          2,
          3,
          2,
          4,
          0,
          2,
          3
        ]
      }
    ]
  };

  const defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right"
  };

  return (
    <div>
      <Link to="/">
        <Button className="log-but" size="huge" icon labelPosition="left">
          Log Out
          <Icon name="angle left" />
        </Button>
      </Link>
      <div className="yup">
        <Grid className="me">
          <Grid.Row>
            <Grid.Column>
              <Header className="paul" as="h1">
                Hello, Paul!
              </Header>
              <p className="small-message">Check in on your loved ones below</p>
              <Grid.Column>
                <Header as="h1" dividing></Header>
              </Grid.Column>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <div className="steve">
          <Card className="elderly-person">
            <Image src={steve} wrapped ui={false} />
            <Card.Content>
              <Card.Header className="graph-title">Steve Smith</Card.Header>
              <Card.Meta className="steve-info">
                <div className="date">"Last Check In: 3:02pm EST</div>
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <div>
                <Icon name="user" />
                This is where Steve last checked in!
              </div>
            </Card.Content>
          </Card>
          <Card className="graph">
            <Card.Content>
              <Card.Header className="graph-title">
                Steve's Check In Records
              </Card.Header>
              <Card.Meta>
                <Line
                  data={hello}
                  options={{
                    title: {
                      display: true,
                      text: "Steve's Check-In Records ",
                      fontSize: 20
                    },
                    legend: {
                      display: defaultProps.displayLegend,
                      position: defaultProps.legendPosition
                    },
                    responsive: true,
                    maintainAspectRatio: true,
                    scales: {
                      yAxes: [
                        {
                          ticks: {
                            stepSize: 1
                          },
                          scaleLabel: {
                            display: true,
                            labelString: "Number of Check Ins",
                            fontSize: 12
                          }
                        }
                      ],
                      xAxes: [
                        {
                          scaleLabel: {
                            display: true,
                            labelString: "Date of the Month",
                            fontSize: 12
                          }
                        }
                      ]
                    }
                  }}
                />
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <div>
                <Icon name="calendar outline" />
                Click and unclick on the different months to see Steve's check
                in records!
              </div>
            </Card.Content>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CaregiverMain;
