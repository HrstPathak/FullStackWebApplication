import React, { useState } from "react";
import "./LoginPage.css";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import {
  MdGrass,
  MdEmail,
  MdAlternateEmail,
  MdOutlineDriveFileRenameOutline,
} from "react-icons/md";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { Button, Modal, Form, Col, Row, Toast, Alert } from "react-bootstrap";
import firebase from "firebase";
import { auth, db } from "./firebase.js";
function LoginPage() {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  // user sign in
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  // create user
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          navigate("/createUser");
          const user = firebase.auth().currentUser;
          user.updateProfile({
            displayName: name,
          });
        }
      })
      .catch((error) => alert(error.message));
  };

  // googleSign
  const googleSign = () => {
    var google_provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(google_provider)
      .then((re) => {
        // console.log(re);
        navigate("/createUser");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="inner_header_div_">
        <div>
          <img
            alt="logo here"
            src="https://cdn.pixabay.com/photo/2016/06/09/18/36/logo-1446293__340.png"
            className="d-inline-block align-top img"
          />
        </div>

        <div>
          <Link to="/">
            <span className="Header_name_div_">
              Succulent
              <span className="Header_name_inner_div_">
                HUB
                <MdGrass />
              </span>
            </span>
          </Link>
        </div>
      </div>

      <div className="LoginPage">
        <div className="LoginPage_header">SIGN IN</div>
        <div className="LoginPage_content">
          <div onClick={googleSign} className="sign_div_1 google">
            <div>
              <FcGoogle className="icon" />
            </div>
            <div>
              Sign up with <strong>GOOGLE</strong>
            </div>
          </div>
          <div
            onClick={() =>
              alert(
                "This is under Construction,you can try other Login methods"
              )
            }
            className="sign_div_1 facebook"
          >
            <div>
              <FaFacebookF className="icon fbicon" />
            </div>
            <div>
              Sign up with <strong>FACEBOOK</strong>
            </div>
          </div>
          <div
            onClick={() =>
              alert(
                "This is under Construction,you can try other Login methods"
              )
            }
            className="sign_div_1 github"
          >
            <div>
              <FaGithub className="icon giticon" />
            </div>
            <div>
              Sign up with <strong>GITHUB</strong>
            </div>
          </div>
          {/* email */}
          <div onClick={handleShow} className="sign_div_1 email">
            <div>
              <MdEmail className="icon emailicon" />
            </div>
            <div>
              Sign up with <strong>EMAIL</strong>
            </div>
          </div>
          {/* create user */}
          <div onClick={handleShow1} className="create-div">
            Create Your Account
          </div>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Sign in</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>
                    <MdAlternateEmail /> Email address
                  </Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>
                    <RiLockPasswordLine /> Password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                  <Form.Text className="text-muted">
                    Suggest a strong Password for Yourself.
                  </Form.Text>
                </Form.Group>

                <Button onClick={signIn} variant="success" type="submit">
                  Sign In
                </Button>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={show1} onHide={handleClose1}>
            <Modal.Header closeButton>
              <Modal.Title>Create Your Account</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Text className="text-muted">
                  We welcomes you, Register here & start your journey
                </Form.Text>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formBasicName">
                    <Form.Label>
                      <MdOutlineDriveFileRenameOutline /> Full Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Full Name"
                    />
                  </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>
                    <MdAlternateEmail /> Email address
                  </Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>
                    <RiLockPasswordLine /> Password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                  <Form.Text className="text-muted">
                    Suggest a strong Password for Yourself.
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    checked
                    label="Agree to term and condition"
                  />
                </Form.Group>
                <Button onClick={register} variant="success" type="submit">
                  Create
                </Button>
                <Button
                  variant="secondary"
                  className="m-3"
                  onClick={handleClose1}
                >
                  Close
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
