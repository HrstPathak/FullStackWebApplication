import React, { useEffect } from "react";
import firebase from "firebase";
import { auth, db } from "./firebase.js";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";
function CreateUser() {
  const [{ user }] = useStateValue();
  const navigate = useNavigate();
  const displayName = user?.displayName;
  const email = user?.email;
  const phone = user?.phoneNumber;
  console.log(user.uid);
  useEffect(() => {
    if (
      db
        .collection("users")
        .doc(user?.uid)
        .collection("userData")
        .doc(user.uid) == null
    ) {
      db.collection("users")
        .doc(user?.uid)
        .collection("userData")
        .doc(user.uid)
        .set({
          Name: displayName ? { displayName } : "NOT PROVIDED",
          Age: "NOT PROVIDED",
          Email: email ? { email } : "NOT PROVIDED",
          Gender: "NOT PROVIDED",
          PhoneNumber: phone ? { phone } : "NOT PROVIDED",
          Address: "NOT PROVIDED",
          City: "NOT PROVIDED",
          State: "NOT PROVIDED",
          Zip: "NOT PROVIDED",
        });
    }
    navigate("/");
  }, []);

  return <div>Redirecting you to the /home of the webapp...</div>;
}

export default CreateUser;
