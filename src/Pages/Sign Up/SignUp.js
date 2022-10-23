import React from 'react';
import './SignUp.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const firstName = form.first.value;
    const lastName = form.last.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirm.value;
    console.log(firstName, lastName, email, password, confirmPassword);
  };

  return (
    <div className="pt-5">
      <Form
        onSubmit={handleSubmit}
        className="w-50 mx-auto d-flex flex-column pt-5 shadow p-4 rounded"
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First Name </Form.Label>
          <Form.Control type="text" name="first" placeholder="First Name " />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Last Name </Form.Label>
          <Form.Control type="text" name="last" placeholder="Last Name" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email </Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirm"
            placeholder="Confirm Password"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button className="d-block w-25" variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;