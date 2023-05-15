import React, { useEffect, useState } from "react";

function Books() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/books/")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return setBooks(res);
      });
  }, []);

  const output = books.map((b) => {
    return (
      <>
        <div class="col-md-3">
          <div
            class="card  text-center d-flex justify-content-center align-items-center  min-vh-50"
            style={{ width: "18rem" }}
          >
            <div class="card-body">
              <img class="card-img-top" src={b.BookImage} />

              <h5 class="card-title">{b.Bookname}</h5>
              <p class="card-text">{b.BookDescription}</p>
              <a
                href="#"
                class="align-self-end btn btn-primary btn btn-warning"
                style={{ marginTop: "auto" }}
              >
                Add to cart
              </a>
            </div>
          </div>
          &nbsp;
        </div>
      </>
    );
  });

  return (
    <>
      <div class="bg-dark text-white d-flex justify-content-center">
        <h3>Books section</h3>
      </div>
      <div class="row">{output}</div>
    </>
  );
}

export default Books;
