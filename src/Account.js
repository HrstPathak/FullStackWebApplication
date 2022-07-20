import React, { useEffect, useState } from "react";
import "./Account.css";
import { Form, Row, Col, Button, Modal, InputGroup } from "react-bootstrap";
import { FcBusinessman, FcBusinesswoman } from "react-icons/fc";
import { useStateValue } from "./StateProvider";
import { RiEdit2Line } from "react-icons/ri";
import { db } from "./firebase";
import { FaMobileAlt, FaRegAddressCard } from "react-icons/fa";
import { MdAlternateEmail, MdLocationCity } from "react-icons/md";
import { GiModernCity } from "react-icons/gi";
import { BsPinMap } from "react-icons/bs";
import firebase from "firebase";

function Account() {
  const [{ user }] = useStateValue();
  const [show, setShow] = useState(false);
  const [userData, setuserData] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState("");
  const [Pno, setPno] = useState("");
  const [Add, setAdd] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [Zip, setZip] = useState("");
  const [Gender, setGender] = useState("");
  const [Age, setAge] = useState("");

  const [validated, setValidated] = useState(false);

  const updateDetail = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      console.log(user.uid);
      db.collection("users")
        .doc(user?.uid)
        .collection("userData")
        .doc(user?.uid)
        .update({
          Name: { name },
          Age: { Age },
          Gender: { Gender },
          PhoneNumber: { Pno },
          Address: { Add },
          City: { City },
          State: { State },
          Zip: { Zip },
        });
      setValidated(true);
      handleClose();
    }
  };

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("userData")
        .onSnapshot((snapshot) =>
          setuserData(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setuserData([]);
    }
  }, [user]);

  return (
    <>
      {userData?.map((user) => (
        <div className="account">
          <Form>
            <div className="update-div">
              <Button
                title="Update-detail"
                variant="success"
                className="update-div"
                onClick={handleShow}
              >
                <RiEdit2Line />
              </Button>
            </div>
            <Form.Label className="account-header">
              <div className="header-icon">
                {user.data.Gender.Gender == "Male" ? (
                  <FcBusinessman />
                ) : (
                  <FcBusinesswoman />
                )}
              </div>
              <div>{user.data.Name.name}</div>
            </Form.Label>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>
                  <MdAlternateEmail />
                  Email
                </Form.Label>
                <InputGroup>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control
                    type="email"
                    value={user.data.Email.email}
                    disabled
                    placeholder="Email Here"
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>
                  <FaMobileAlt />
                  Phone
                </Form.Label>
                <InputGroup>
                  <InputGroup.Text id="inputGroupPrepend">+91</InputGroup.Text>
                  <Form.Control
                    type="tel"
                    value={user.data.PhoneNumber.Pno}
                    disabled
                    placeholder="Password"
                  />
                </InputGroup>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>
                <FaRegAddressCard />
                Full Address
              </Form.Label>
              <Form.Control
                disabled
                value={user.data.Address.Add}
                placeholder="1234 Main St"
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>
                  <MdLocationCity />
                  City
                </Form.Label>
                <Form.Control
                  value={user.data.City.City}
                  disabled
                  placeholder="District"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>
                  <GiModernCity />
                  State
                </Form.Label>
                <Form.Control
                  value={user.data.State.State}
                  disabled
                  placeholder="State"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>
                  <BsPinMap />
                  Pin
                </Form.Label>
                <Form.Control value={user.data.Zip.Zip} disabled />
              </Form.Group>
            </Row>
          </Form>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Update Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form
                noValidate
                validated
                onSubmit={updateDetail}
                className="update-form"
              >
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      required
                      type="Name"
                      placeholder="Enter Name"
                      autoComplete="on"
                      defaultValue={user.data.Name.name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    {/* <Form.Control.Feedback type="invalid">
                    Please provide a valid Name.
                  </Form.Control.Feedback> */}
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPhoneNumber">
                    <Form.Label>Phone Number </Form.Label>
                    <InputGroup>
                      <InputGroup.Text id="inputGroupPrepend">
                        +91
                      </InputGroup.Text>
                      <Form.Control
                        required
                        type="tel"
                        placeholder="phone Number"
                        defaultValue={user.data.PhoneNumber.Pno}
                        onChange={(e) => setPno(e.target.value)}
                        pattern="[0-9]{10}"
                      />
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Gender</Form.Label>
                    <Form.Select
                      defaultValue={user.data.Gender.Gender}
                      required
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridAge">
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                      required
                      defaultValue={user.data.Age.Age}
                      onChange={(e) => setAge(e.target.value)}
                      placeholder="..."
                      pattern="[0-9]{2}"
                    />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Full Address</Form.Label>
                  <Form.Control
                    required
                    placeholder="1234 Main St"
                    defaultValue={user.data.Address.Add}
                    onChange={(e) => setAdd(e.target.value)}
                  />
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      required
                      defaultValue={user.data.City.City}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Nainital.."
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Select
                      defaultValue={user.data.State.State}
                      required
                      onChange={(e) => setState(e.target.value)}
                      pattern="[0-9]{3}-[0-9]{3}"
                      placeholder="choose"
                    >
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Andaman and Nicobar Islands">
                        Andaman and Nicobar Islands
                      </option>
                      <option value="Arunachal Pradesh">
                        Arunachal Pradesh
                      </option>
                      <option value="Assam">Assam</option>
                      <option value="Bihar">Bihar</option>
                      <option value="Chandigarh">Chandigarh</option>
                      <option value="Chhattisgarh">Chhattisgarh</option>
                      <option value="Dadar and Nagar Haveli">
                        Dadar and Nagar Haveli
                      </option>
                      <option value="Daman and Diu">Daman and Diu</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Lakshadweep">Lakshadweep</option>
                      <option value="Puducherry">Puducherry</option>
                      <option value="Goa">Goa</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Haryana">Haryana</option>
                      <option value="Himachal Pradesh">Himachal Pradesh</option>
                      <option value="Jammu and Kashmir">
                        Jammu and Kashmir
                      </option>
                      <option value="Jharkhand">Jharkhand</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Madhya Pradesh">Madhya Pradesh</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Manipur">Manipur</option>
                      <option value="Meghalaya">Meghalaya</option>
                      <option value="Mizoram">Mizoram</option>
                      <option value="Nagaland">Nagaland</option>
                      <option value="Odisha">Odisha</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Sikkim">Sikkim</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Tripura">Tripura</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Uttarakhand">Uttarakhand</option>
                      <option value="West Bengal">West Bengal</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control
                      required
                      defaultValue={user.data.Zip.Zip}
                      onChange={(e) => setZip(e.target.value)}
                      placeholder="263136..."
                    />
                  </Form.Group>
                </Row>

                <Modal.Footer>
                  <Button variant="success" type="submit">
                    Submit
                  </Button>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Form>
            </Modal.Body>
          </Modal>
        </div>
      ))}
    </>
  );
}

export default Account;
