import React from "react";
import "./Home.css";
import {
  Carousel,
  Card,
  Button,
  Image,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaStore } from "react-icons/fa";
function Home() {
  const navigate = useNavigate();
  const storeNavigation = () => {
    navigate("/store");
  };
  return (
    <div className="home">
      <div className="home_container">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100 home_bannerImage"
              src="https://cdn.pixabay.com/photo/2015/04/10/17/03/pots-716579__340.jpg"
              alt="Second slide"
            />

            <Carousel.Caption className="carousel_content">
              <p>You Get what You See...</p>
              <h1>SUCCULENT HUB</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 home_bannerImage"
              src="https://cdn.pixabay.com/photo/2022/03/23/12/34/juicy-7087154__340.jpg"
              alt="Third slide"
            />
            <Carousel.Caption className="carousel_content">
              <h3>😄Best among all...</h3>
              <p>
                We Grow The best quality Succulents and provide the best
                service...
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 home_bannerImage"
              src="https://cdn.pixabay.com/photo/2020/05/05/07/06/sukulent-5131760__340.jpg"
              alt="Fourth slide"
            />
            <Carousel.Caption className="carousel_content">
              <h3>Crazy Deals</h3>
              <p>you will get plant at great Deals and Offer</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="store-div">
        <span>Visit The STORE</span>
        <span>
          <Button onClick={storeNavigation} variant="success">
            Store <FaStore />{" "}
          </Button>
        </span>
      </div>
      <div className="outer-container-1">
        <div className="inner-container-1">
          <Image
            fluid
            src="https://cdn.pixabay.com/photo/2020/09/02/15/55/plant-5538710__340.jpg"
          />
        </div>
        <div className="inner-container-2">
          <p>You find the best deal & best Succulents here...</p>
        </div>
      </div>
      <div className="outer-container-2">
        <Container>
          <Row>
            <Col>
              <div className="inner-container-3">
                <Image
                  fluid
                  src="https://cdn.pixabay.com/photo/2022/07/15/09/48/houseleek-7322813__340.jpg"
                />
              </div>
            </Col>
            <Col>
              <div className="inner-container-3">
                <Image
                  fluid
                  src="https://cdn.pixabay.com/photo/2020/03/21/09/02/echeveria-pulvinata-ruby-4953050__340.jpg"
                />
              </div>
            </Col>
          </Row>
          <Row>
            <div className="view-button-div">
              <Button onClick={storeNavigation} variant="warning">
                View More
              </Button>
            </div>
          </Row>
          <Row>
            <div>
              <Image
                fluid
                src="https://cdn.pixabay.com/photo/2020/09/03/13/52/stone-lotus-5541320__340.jpg"
              />
            </div>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <div>
                <Image
                  fluid
                  src="https://cdn.pixabay.com/photo/2016/08/15/10/06/plant-1594943__340.jpg"
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div>
                <Image
                  fluid
                  src="https://cdn.pixabay.com/photo/2015/08/19/02/03/the-fleshy-895402__340.jpg"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="outer-container-4">
        <Image
          fluid
          src="https://cdn.pixabay.com/photo/2017/10/30/09/58/sale-2901922__340.png"
        />
      </div>
      <div className="offer-section-1">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.pixabay.com/photo/2022/06/05/02/35/succulents-7243149__340.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Echevaria Elegans</h3>
              <p>Buy 2 Get 1 free.....</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.pixabay.com/photo/2016/07/03/01/15/a-fleshy-plant-1494125__340.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Echevaria Harmsii</h3>
              <p>50% OFF</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.pixabay.com/photo/2019/10/19/13/28/cacti-4561411__340.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Mammillaria Prolifera 🌵Cactus</h3>
              <p>25% OFF on the purchase of 2...</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.pixabay.com/photo/2021/11/19/02/01/plant-6807877__340.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Echevaria Elegans</h3>
              <p>Buy 2 & get one free...</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="offer-section-2">
        <div className="offer-section-2-header">
          OFFER of the Day!!! 25% Off
        </div>
        <Container className="p-4">
          <Row className="mb-4">
            <Col>
              <Image
                fluid
                src="https://cdn.pixabay.com/photo/2021/01/20/18/40/houseleek-5935246__340.jpg"
              />
            </Col>
            <Col>
              <Image
                className="mb-4"
                fluid
                src="https://cdn.pixabay.com/photo/2015/03/08/14/53/cacti-664262__340.jpg"
              />
              <Image
                fluid
                src="https://cdn.pixabay.com/photo/2017/06/15/23/53/ring-2407280__340.jpg"
              />
            </Col>
            <Col>
              <Image
                fluid
                src="https://cdn.pixabay.com/photo/2015/11/07/11/20/succulent-1031033__340.jpg"
              />
            </Col>
          </Row>

          <Row className="mb-4">
            <Col>
              <Image
                fluid
                src="https://cdn.pixabay.com/photo/2018/02/28/21/09/nature-3189094__340.jpg"
              />
            </Col>
            <Col>
              <Image
                fluid
                src="https://cdn.pixabay.com/photo/2016/05/17/09/05/cactus-1397679__340.jpg"
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Image
                fluid
                src="https://cdn.pixabay.com/photo/2020/08/30/13/33/flower-5529609__340.jpg"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="outer-container-4">
        <Image
          fluid
          src="https://cdn.pixabay.com/photo/2017/03/31/15/34/cactus-2191647__340.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
