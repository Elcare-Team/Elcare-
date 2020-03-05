// import { Container, Button } from "semantic-ui-react";
import React from "react";
import { Button, Form, Grid, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../styles/StartPage.css";
//
// class StartPage extends Component {
//   nextPage = type => {};
//
//   render() {
//     return (
//       <div className="start" style={{ textAlign: "center" }}>
//         <h1>Elcare</h1>
//         <Link to="/caregiver">
//           <Button size="massive" basic>
//             Caregiver
//           </Button>
//         </Link>
//         <Link to="/elderly">
//           <Button size="massive" basic>
//             Loved One
//           </Button>
//         </Link>
//       </div>
//     );
//   }
// }
//
// export default StartPage;
let email = "email";
let password = "password";

function getpath() {
  if (email === "admin" && password === " ") {
    return "/caregiver";
  }
  if (email === "paul@elcare.com" && password === "caregiver") {
    return "/caregiver";
  }
  if (email === "stevesmith@elcare.com" && password === "elderly") {
    return "/elderly";
  }
}

function emailchange(e) {
  email = e.target.value;
}

function passwordchange(e) {
  password = e.target.value;
}

const LoginForm = () => (
  <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Form size="large">
        <Segment className="border" stacked>
          <h1>Elcare</h1>
          <Form.Input
            className="email"
            fluid
            icon="user"
            iconPosition="left"
            placeholder="E-mail address"
            onChange={emailchange}
            required
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
            onChange={passwordchange}
          />
          <Link to={getpath}>
            <Button className="login" fluid size="large" textAlign="right">
              Login
            </Button>
          </Link>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
);

// Button.addEventListener("click", nextPage);
// // console.log('.email')
//
// const nextPage = () => {
//   console.log('.email')
// }

export default LoginForm;
// <Header as='h2' color='teal' textAlign='center'>
//    Elcare
// </Header>
