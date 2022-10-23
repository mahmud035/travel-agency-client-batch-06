import React, { useContext } from 'react';
import './Login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const { logIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || '/';

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        toast.success('Login Successfully');
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  return (
    <div className="pt-5 container ">
      <Form
        onSubmit={handleSubmit}
        className="w-50 mx-auto d-flex flex-column pt-5 shadow p-4 rounded"
      >
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

        <Button className="d-block w-25" variant="primary" type="submit">
          Login
        </Button>
      </Form>

      <p className="text-center pt-2">
        <small>
          Don't have an account? <Link to="/sign-up">Create an account</Link>
        </small>
      </p>
    </div>
  );
};

export default Login;
