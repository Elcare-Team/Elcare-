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

class CaregiverMain extends Component {
  renderCard = index => {
    const { elderly } = this.props;
    return (
      <div>
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
              <Card.Header className="graph-title">
                {elderly[index].name}
              </Card.Header>
              <Card.Meta className="steve-info">
                <div className="date">
                  {elderly[index].checkedIn
                    ? "Checked In"
                    : "Last Check In: 3:02pm EST "}
                </div>
                <Card.Meta className="steve-info">
                  <div>
                    <Icon name="building outline icon" /> Doctors Appt. March
                    18th
                  </div>
                </Card.Meta>
                <Card.Meta className="steve-info">
                  <div>
                    <Icon name="sticky note outline icon" />
                    Son's Birthday Tomorrow
                  </div>
                </Card.Meta>
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <div>
                <Icon name="user" />2 Caregivers
              </div>
            </Card.Content>
          </Card>
          <Card className="graph">
            <Card.Content>
              <Card.Header className="graph-title">
                Steve's February Check In Records
              </Card.Header>
              <Card.Meta>
                <Plot
                  data={[
                    {
                      y: [2, 2, 3, 2, 1, 2, 3, 1, 0, 1, 1, 2, 0, 2, 3, 2, 4, 0],
                      x: [
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
                        27
                      ],
                      type: "scatter",
                      mode: "lines+markers",
                      marker: { color: "red" }
                    }
                  ]}
                  layout={
                    ({
                      width: 1000,
                      height: 100,
                      title: "Steve Smith Febuary Check-In Summary"
                    },
                    {
                      yaxis: {
                        title: {
                          text: "# of Check-Ins ",
                          font: {
                            size: 20,
                            color: "#7f7f7f"
                          }
                        }
                      },
                      xaxis: {
                        title: {
                          text: "Date in February ",
                          font: {
                            size: 20,
                            color: "#7f7f7f"
                          }
                        }
                      }
                    })
                  }
                />
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <div>
                <Icon name="calendar outline" />
                2020 Febuary
              </div>
            </Card.Content>
          </Card>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="caregiver">
        <Card.Group>{this.renderCard("one")}</Card.Group>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { elderly: state.elderly };
};

export default connect(mapStateToProps)(CaregiverMain);
