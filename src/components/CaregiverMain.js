import React, { Component } from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import steve from "../images/steve.jpg";
import { connect } from "react-redux";
import "../styles/CaregiverMain.css";

class CaregiverMain extends Component {
  renderCard = index => {
    const { elderly } = this.props;

    return (
      <Card onClick={() => this.props.history.push("/caregiver/steve")}>
        <Image src={steve} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{elderly[index].name}</Card.Header>
          <Card.Meta>
            <span className="date">
              {elderly[index].checkedIn ? "Checked In" : "Not checked in"}
            </span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            22 Friends
          </a>
        </Card.Content>
      </Card>
    );
  };

  render() {
    return (
      <div>
        <Card.Group>
          {this.renderCard("one")}
          {this.renderCard("two")}
          {this.renderCard("three")}
        </Card.Group>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { elderly: state.elderly };
};

export default connect(mapStateToProps)(CaregiverMain);
