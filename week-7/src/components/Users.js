import React from "react";
import { useEffect, useState } from "react";

function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3500/fetch")
      .then((resp) => resp.json())
      .then(
        (res) => {
          setData(res);
          // console.log(res);
        },
        [data]
      );
  });

  const responses = data.map((x) => {
    return (
      <div class="card col-md-3 p-2   text-center  ">
        <div class="card-body" className="box">
          <img src={x.image} class="card-img-top" />
          <h5 class="card-title"> Name: {x.name}</h5>
          <p class="card-text">Age: {x.age}</p>
          <p class="card-text">Address: {x.address}</p>

          <a href="#" class="btn btn-primary">
            Details
          </a>
        </div>
      </div>
    );
  });

  return (
    <div class="row grid gap-3">
      <h4 class="bg-dark text-light text-center ">
        {" "}
        Data Fetched Using an Api{" "}
      </h4>
      {responses}
    </div>
  );
}

export default Users;
