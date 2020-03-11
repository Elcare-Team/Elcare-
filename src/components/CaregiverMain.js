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
import { formatDistance } from "date-fns";
import { Bar, Line, Pie } from "react-chartjs-2";
import GoogleMap from "./GoogleMap";

class CaregiverMain extends Component {
  render() {
    const { elderly } = this.props;
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
            1,
            1,
            1,
            3,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
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
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
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
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
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
            1,
            1,
            1,
            2,
            1,
            1,
            1,
            0,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            0,
            0,
            0
          ]
        }
      ]
    };

    const defaultProps = {
      displayTitle: true,
      displayLegend: true,
      legendPosition: "right"
    };
    let margins = "0px";
    let margins2 = "0px";
    console.log(this.props);
    if (this.props.elderly["one"].checkedIn) {
      margins = "305px";
      margins2 = "10px";
    }
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
                <p className="small-message">
                  Check in on your loved ones below
                </p>
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
                  <div className="date" style={{ marginBottom: margins2 }}>
                    {elderly["one"].checkedIn
                      ? `Checked in ${formatDistance(
                          elderly["one"].lastCheckedIn,
                          new Date()
                        )} ago`
                      : "Not checked in for today"}
                  </div>
                </Card.Meta>
                <Card.Meta>
                  {elderly["one"].checkedIn ? (
                    <div>
                      <GoogleMap zoom={12} width="260px" height="300px" />
                    </div>
                  ) : (
                    <p></p>
                  )}
                </Card.Meta>
                <Card.Meta style={{ marginBottom: margins }}>
                  <p></p>
                </Card.Meta>
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
  }
}

const mapStateToProps = state => {
  return { elderly: state.elderly };
};

export default connect(mapStateToProps)(CaregiverMain);
