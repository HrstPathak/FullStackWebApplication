import React, { useEffect, useState } from "react";
import "./Header.css";
import { Nav, Navbar, Container, Offcanvas } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { MdGrass, MdOutlineSettings } from "react-icons/md";
import { FaCartPlus, FaHome, FaUserAlt, FaStore } from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";
import { useStateValue } from "./StateProvider";
import { IoTrailSignOutline } from "react-icons/io5";
import { auth, db } from "./firebase";
function Header() {
  const navigate = useNavigate();
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuth = () => {
    if (user) {
      auth.signOut();
      // alert("LOG-OUT Successfully...");
      navigate("/login");
    }
  };
  const [userData, setuserData] = useState([]);
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
    }
  }, [user]);
  return (
    <div className="outer-header">
      {[false].map((expand) => (
        <Navbar
          collapseOnSelect
          key={expand}
          expand={expand}
          fixed="top"
          bg="dark"
          variant="dark"
        >
          <Container className="m-0 mw-100">
            <Navbar.Brand>
              <div className="header">
                <Link to="/">
                  <div className="inner_header_div">
                    <div>
                      <img
                        alt=""
                        src="https://cdn.pixabay.com/photo/2016/06/09/18/36/logo-1446293__340.png"
                        width="20"
                        height="30"
                        className="d-inline-block align-top"
                      />
                    </div>
                    <div>
                      <span className="Header_name_div">
                        Succulent
                        <span className="Header_name_inner_div">
                          HUB
                          <MdGrass />
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="header_right_div">
                  <Link
                    className="navLink-displaying right_header_content"
                    to="/account"
                  >
                    <FaUserAlt />
                    Account
                  </Link>
                  <Link
                    className="navLink-displaying right_header_content"
                    to="/store"
                  >
                    <FaStore />
                    Store
                  </Link>
                  <Link
                    className="navLink-displaying right_header_content"
                    to="/orders"
                  >
                    <BsBoxSeam />
                    Orders
                  </Link>
                  <div className="cart_div right_header_content">
                    <span className="inner_header_div_2_span">
                      <Link to="/checkout">
                        <FaCartPlus />
                        <span className="counter">{basket?.length}</span>
                      </Link>
                    </span>
                  </div>
                </div>
                <span>
                  <Navbar.Toggle
                    aria-controls={`offcanvasNavbar-expand-${expand}`}
                    className="offcanvas_button"
                  />
                  <Navbar.Offcanvas
                    bg="dark"
                    variant="lg"
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                  >
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title
                        id={`offcanvasNavbarLabel-expand-${expand}`}
                      >
                        <Link to="/">
                          <div className=" inner_header_div">
                            <img
                              alt=""
                              src="https://cdn.pixabay.com/photo/2016/06/09/18/36/logo-1446293__340.png"
                              width="20"
                              height="30"
                              className="d-inline-block align-top"
                            />{" "}
                            <span className="Header_name_div">
                              Succulent
                              <span className="Header_name_inner_div">
                                HUB
                                <MdGrass />
                              </span>
                            </span>
                          </div>
                        </Link>
                        {userData?.map((user) => (
                          <div>
                            <FaUserAlt />
                            {user ? user.data.Name.name : "User"}
                          </div>
                        ))}
                      </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <Nav className="justify-content-space flex-grow-1 pe-3">
                        <Link className="canvas_link" to="/">
                          <FaHome />
                          Home
                        </Link>
                        <Link
                          // aria-label="close"
                          className="canvas_link "
                          to="/store"
                        >
                          <FaStore />
                          Store
                        </Link>
                        <Link className="canvas_link" to="/orders">
                          <BsBoxSeam />
                          Orders
                        </Link>
                        <Link className="canvas_link" to="/account">
                          <MdOutlineSettings />
                          Your Account
                        </Link>
                        <Link className="canvas_link" to={!user && "/login"}>
                          <div onClick={handleAuth}>
                            <IoTrailSignOutline />
                            {user ? "Sign-Out" : "Sign In"}
                          </div>
                        </Link>
                      </Nav>
                    </Offcanvas.Body>
                  </Navbar.Offcanvas>
                </span>
              </div>
            </Navbar.Brand>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}
export default Header;
