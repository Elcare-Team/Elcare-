import React from "react";
import {
  Input,
  Select,
  Icon,
  Message,
  Button,
  Form,
  Grid,
  Segment
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../styles/SignUp.css";
const relationships = [
  { key: "c", text: "Family", value: "family" },
  { key: "f", text: "Friend", value: "friend" },
  { key: "o", text: "Other", value: "other" }
];

const handleSubmit = () => {
  var ask = window.confirm("Are you sure you want to submit?");
  if (ask) {
    window.alert("Accounts created!");

    window.location.href = "/";
  }
};

const SignUp = () => (
  <div>
    <Link to="/">
      <Button size="huge" style={{ float: "left" }} icon labelPosition="left">
        Back
        <Icon name="angle left" />
      </Button>
    </Link>
    <div className="headers">
      <h2> Sign Up For Elcare!</h2>
      <h4 id="heckyes" class="ui dividing header">
        An app designed to help you check in on your elderly family members! You
        sign up yourself and your loved one. All you have to do is give them
        their login information.
      </h4>
    </div>
    <Form onSubmit={handleSubmit} className="hi">
      <h3> Your Information</h3>
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
      </Form.Group>
      <label for="phone">Phone Number (ex. 1234567890)</label>
      <input
        type="number"
        required
        label="Phone Number"
        placeholder="XXXXXXXXXX"
        type="tel"
        id="phone"
        className="help"
      />
      <label for="email">Email (Your login email)</label>
      <input
        control={Input}
        type="email"
        id="emails"
        className="help"
        label="Email"
        required
        placeholder="oldperson@gmail.com"
      ></input>
      <label for="pw">Password (Must be 8 characters) </label>
      <input
        control={Input}
        type="password"
        pattern=".{8,}"
        className="help"
        id="pw"
        label="Password"
        required
        placeholder="*************"
      ></input>
      <p className="pw">Must be 8 characters</p>
      <h3> Your Loved One's Information</h3>
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
      </Form.Group>
      <label for="phone">Phone Number (ex. 1234567890)</label>
      <input
        type="number"
        required
        label="Phone Number"
        placeholder="XXXXXXXXXX"
        type="tel"
        id="phone"
        className="help"
      />
      <label for="email">Email (Their login email) </label>
      <input
        control={Input}
        type="email"
        id="emails"
        label="Email"
        required
        placeholder="oldperson@gmail.com"
      ></input>
      <label for="pw">Password (Must be 8 characters) </label>
      <input
        control={Input}
        type="password"
        className="help"
        pattern=".{8,}"
        id="pw"
        label="Password"
        required
        placeholder="*************"
      ></input>
      <label for="rel">Relationship to You</label>
      <Form.Field
        className="help"
        control={Select}
        id="rel"
        options={relationships}
        required
        placeholder="Relationship"
        search
        searchInput={{ id: "form-select-control-gender" }}
      />
      <Button className="modal-button">Save</Button>
    </Form>
  </div>
);

export default SignUp;
