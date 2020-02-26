// import React, { Component } from "react";
// import { Container, Button } from "semantic-ui-react";
// import { Link } from "react-router-dom";
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

import React from 'react'
import { Button, Form, Grid, Segment } from 'semantic-ui-react'

const LoginForm = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Form size='large'>
        <Segment className="border" stacked>
          <h1>Elcare</h1>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
)

export default LoginForm
// <Header as='h2' color='teal' textAlign='center'>
//    Elcare
// </Header>
