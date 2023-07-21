import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const ViewUser = () => {
  const [existing_user, set_existing_user] = useState({});
  const { id } = useParams("id");

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const getUser = await axios.get(`http://localhost:8080/user/show/${id}`);
    //console.log(getUser.data)
    set_existing_user(getUser.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 rounded p-4 mt-2 shadow border-3">
          <div className="card">
            <div className="card-header"><h5>User Profile</h5></div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Username : {existing_user.username}</li>
              <li className="list-group-item">First Name: {existing_user.firstName}</li>
              <li className="list-group-item">Last Name : {existing_user.lastName}</li>
              <li className="list-group-item">Email : {existing_user.email}</li>
            </ul>
          </div>
          <Link to={"/"} className="btn btn-outline-danger px-4 mt-4">Back</Link>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
