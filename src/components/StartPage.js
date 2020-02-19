import React, { Component } from "react";
import { Container, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

class StartPage extends Component {
  nextPage = type => {};

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Elcare</h1>
        <Link to="/caregiver">
          <Button size="massive" basic>
            Caregiver
          </Button>
        </Link>
        <Link to="/elderly">
          <Button size="massive" basic>
            Loved One
          </Button>
        </Link>
      </div>
    );
  }
}

export default StartPage;
