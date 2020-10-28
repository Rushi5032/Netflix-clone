import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import HeaderContainer from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";

export default function SignIn() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = password === "" || email === "";
  const handleSignIn = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmail("");
        setPassword("");
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignIn} method="POST">
            <Form.Input
              placeholder="Enter your E-mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Form.Input
              type="password"
              autoComplete="off"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Form.Submit
              disabled={isInvalid}
              type="submit"
              data-testid="sign-in"
            >
              Sign In
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign Up Now</Form.Link>
          </Form.Text>
          <Form.SmallText>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.SmallText>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
