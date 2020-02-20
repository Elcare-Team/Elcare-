import React, { Component } from "react";
import {
  Button,
  Container,
  Icon,
  Modal,
  Input,
  Form,
  Message
} from "semantic-ui-react";
import { connect } from "react-redux";
import { checkIn } from "../actions";
import { formatDistance } from "date-fns";
import { Link } from "react-router-dom";
import "../styles/ElderlyMain.css";

class ElderlyMain extends Component {
  state = {
    open: false,
    one: "",
    oneset: false,
    two: "",
    three: "",
    four: ""
  };

  close = () => {
    this.setState({ open: false });
  };

  openModal = () => {
    this.setState({ open: true });
  };

  handleSubmit = (index, event) => {
    event.preventDefault();
    this.setState({ [index]: "", [`${index}set`]: true });
    setTimeout(() => {
      this.setState({ [`${index}set`]: false });
    }, 3000);
  };

  handleChange = (index, event) => {
    this.setState({ [index]: event.target.value });
  };

  renderModal = () => {
    return (
      <div>
        <Modal
          style={{ position: "absolute" }}
          open={this.state.open}
          onClose={this.close}
        >
          <Modal.Header>Settings</Modal.Header>
          <Modal.Content>{this.renderModalInfo()}</Modal.Content>
          <Modal.Actions>
            <Button
              floated="left"
              color="red"
              onClick={() => {
                if (
                  window.confirm(
                    "Are you sure you want to delete all your currently saved changes?"
                  )
                )
                  this.close();
              }}
            >
              Cancel
            </Button>
            <Button primary onClick={this.close}>
              <Icon name="remove" /> Close
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  };

  renderModalInfo = () => {
    return (
      <Modal.Description>
        {this.state["oneset"] ? (
          <Message
            success
            header="Sucessfully Changed Emergency Contact Number"
          />
        ) : (
          <p></p>
        )}
        Change Emergency Contact Number{" "}
        <Form onSubmit={this.handleSubmit.bind(this, "one")}>
          <Input
            value={this.state["one"]}
            onChange={this.handleChange.bind(this, "one")}
            action={{
              color: "green",
              labelPosition: "right",
              icon: "copy",
              content: "Save"
            }}
          />
        </Form>
      </Modal.Description>
    );
  };

  onCheckIn = index => {
    this.props.checkIn(index);
    this.forceUpdate();
  };

  renderCheckIn = () => {
    const { elderly } = this.props;
    if (!elderly["one"].checkedIn) {
      return (
        <div className="checkin">
          <h1>Would you like to check in?</h1>
          <Button
            onClick={() => this.onCheckIn("one")}
            basic
            color="green"
            size="massive"
          >
            Check In
          </Button>
        </div>
      );
    }

    return (
      <div className="checkin">
        <h2>You have checked in!</h2>
        <p>
          Last check in:{" "}
          {formatDistance(elderly["one"].lastCheckedIn, new Date())}{" "}
        </p>
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.renderModal()}
        <Link to="/">
          <Button
            size="huge"
            style={{ float: "left" }}
            icon
            labelPosition="left"
          >
            Go Back
            <Icon name="left arrow" />
          </Button>
        </Link>
        <Button
          size="huge"
          style={{ float: "right" }}
          icon
          labelPosition="right"
          onClick={() => this.openModal()}
        >
          Settings
          <Icon name="setting" />
        </Button>
        <br />
        <br />
        <br />
        <Container textAlign="center">{this.renderCheckIn()}</Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { elderly: state.elderly };
};

export default connect(mapStateToProps, { checkIn })(ElderlyMain);
