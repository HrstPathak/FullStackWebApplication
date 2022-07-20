import React, { useEffect, useState } from "react";
import Product from "./Product";
import "./Store.css";
import firebase from "firebase";
import { FaStore } from "react-icons/fa";
import { db } from "./firebase";

function Store() {
  const [userProduct, setProductData] = useState([]);
  useEffect(() => {
    db.collection("product")
      // .orderBy("created", "desc")
      .onSnapshot((snapshot) =>
        setProductData(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="store_div">
      <div className="wave-image">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#212529"
            fillOpacity="1"
            d="M0,64L48,96C96,128,192,192,288,202.7C384,213,480,171,576,128C672,85,768,43,864,42.7C960,43,1056,85,1152,101.3C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="store_heading">
        <span className="store_inner_heading">
          <span>
            <FaStore className="store_icon" />
          </span>
          STORE
        </span>
      </div>
      <div className="outer-div">
        {userProduct?.map((Pro) => (
          <Product
            className="inner-div"
            unique={Pro.id}
            id={Pro.data.Id}
            title={Pro.data.Title}
            price={Pro.data.Price}
            image={Pro.data.Image}
            rating={Pro.data.Rating}
          />
        ))}
        {/* <Product
          className="inner-div"
          id="1"
          title="Chocolate "
          price={50}
          image="https://wallpapersmug.com/download/1366x768/e99e2b/close-up-echeveria-succulent-plant.jpg"
          rating={4}
        />
         */}
      </div>
    </div>
  );
}

export default Store;
