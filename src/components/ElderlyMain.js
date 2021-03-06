import React, { Component } from "react";
import {
  Button,
  Container,
  Icon,
  Modal,
  Input,
  Form,
  Message,
  Select
} from "semantic-ui-react";
import { connect } from "react-redux";
import { checkIn } from "../actions";
import { formatDistance } from "date-fns";
import { Link } from "react-router-dom";
import GoogleMap from "./GoogleMap";
import "../styles/ElderlyMain.css";
const relationships = [
  { key: "c", text: "Family", value: "family" },
  { key: "f", text: "Friend", value: "friend" },
  { key: "o", text: "Other", value: "other" }
];
class ElderlyMain extends Component {
  state = {
    open: false,
    one: "",
    oneset: false,
    firstName: "",
    lastName: "",
    relationship: " ",
    email: "",
    phoneNumber: ""
  };

  close = () => {
    this.setState({ open: false });
  };

  openModal = () => {
    this.setState({ open: true });
  };

  handleSubmit = (index, event) => {
    if (isNaN(this.state.phoneNumber)) {
      console.log("error");
    }
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
        <Modal className="modal" open={this.state.open} onClose={this.close}>
          <Modal.Header className="settings">
            View Emergency Contact
          </Modal.Header>
          <Modal.Content>
            <div className="Emergency">
              <h2>Name</h2>
              <body>Paul</body>
              <h2>Phone Number</h2>
              <body>646-544-4312</body>
              <h2>Email Address</h2>
              <body>paul@elcare.com</body>
            </div>
          </Modal.Content>
          <Modal.Actions>
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
          <Message success header="Sucessfully Added An Emergency Contact " />
        ) : (
          <p className="add-contact">Add Emergency Contact</p>
        )}{" "}
        <Form onSubmit={this.handleSubmit.bind(this, "one")}>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              required
              label="First name"
              placeholder="First name"
            />
            <Form.Field
              control={Input}
              label="Last name"
              required
              placeholder="Last name"
            />
            <Form.Field
              control={Select}
              options={relationships}
              required
              label={{
                children: "Relationship",
                htmlFor: "form-select-control-gender"
              }}
              placeholder="Relationship"
              search
              searchInput={{ id: "form-select-control-gender" }}
            />
          </Form.Group>
          <label for="email">Email</label>
          <input
            control={Input}
            type="email"
            id="emails"
            label="Email"
            required
            placeholder="oldperson@gmail.com"
          ></input>
          <label for="phone">Phone Number (ex. 1234567890)</label>
          <input
            type="number"
            required
            label="Phone Number"
            placeholder="XXXXXXXXXX"
            type="tel"
            id="phone"
          />
          <Button
            value={this.state["one"]}
            onClick={this.handleChange.bind(this, "one")}
            className="modal-button"
          >
            Save
          </Button>
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
        <div>
          <GoogleMap width="725px" height="450px" zoom={13} />
        </div>
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
            className="heythere"
          >
            Log Out
            <Icon name="angle left" />
          </Button>
        </Link>
        <Button
          className="heythere"
          button
          size="huge"
          style={{ float: "right" }}
          onClick={() => this.openModal()}
        >
          View Emergency Contact
        </Button>
        <br />
        <Container className="container" textAlign="center">{this.renderCheckIn()}</Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { elderly: state.elderly };
};

export default connect(
  mapStateToProps,
  { checkIn }
)(ElderlyMain);
