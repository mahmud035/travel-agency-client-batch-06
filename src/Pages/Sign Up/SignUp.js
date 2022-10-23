import React, { useContext } from 'react';
import './SignUp.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook, BsGithub } from 'react-icons/bs';

const SignUp = () => {
  const { createUser, googleSignIn } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const firstName = form.first.value;
    const lastName = form.last.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirm.value;
    console.log(firstName, lastName, email, password, confirmPassword);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success('Account Created Successfully');
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success('Account Created Successfully');
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
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
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirm"
            placeholder="Confirm Password"
            required
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

      <p className="text-center pt-2">
        <small>
          Already have an account? <Link to="/login">Login</Link>
        </small>
      </p>

      <div className="text-center ">Or</div>
      <div className="text-center pt-2">
        <ButtonGroup vertical>
          <Button
            onClick={handleGoogleSignIn}
            className="mb-3 rounded ps-0"
            variant="outline-primary"
          >
            <FcGoogle size={20} className="me-3 mb-1 " />
            <span>Continue with Google</span>
          </Button>
          <Button className="mb-3 rounded ps-3" variant="outline-info">
            <BsFacebook size={20} className="me-3 mb-1" />
            <span>Continue with Facebook</span>
          </Button>
          <Button className=" rounded ps-0" variant="outline-dark">
            <BsGithub size={20} className="me-3 mb-1" />
            <span>Continue with Github</span>
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default SignUp;
