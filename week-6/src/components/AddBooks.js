import React, { useState } from "react";
var isEdit = -1;
function AddBooks() {
  const [books, setBooks] = useState([
    {
      bookTitle: "Doglapan",
      bookPrice: 250,
      bookAuthor: "Ashneer Grover",
      bookDesc: "Describes the real truth of  startups",
    },
  ]);
  const [data, setData] = useState({});

  const formattedoutput = books.map((book, i) => {
    return (
      <tbody class="p-4">
        <tr>
          <td>{book.bookTitle}</td>
          <td>{book.bookAuthor}</td>
          <td>&#8377;{book.bookPrice}</td>
          <td>{book.bookDesc}</td>
          <td>
            <button
              type="button"
              class="btn btn-warning"
              onClick={() => {
                //   console.log(book);

                setData({
                  ...data,
                  bookTitle: books[i].bookTitle,
                  bookPrice: books[i].bookPrice,
                  bookDesc: books[i].bookDesc,
                  bookAuthor: books[i].bookAuthor,
                });
                isEdit = i;
              }}
            >
              Edit
            </button>
          </td>
          <td>
            <button
              class="btn btn-danger"
              onClick={() => {
                books.splice(i, 1);
                setBooks([...books]);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    );
  });

  return (
    <>
      <div class="d-flex flex-column justify-content-center  align-items-center text-center ">
        <form class="col-md-5">
          <div class="form-group">
            <label class="font-weight-bold">Book Title:</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputName"
              aria-describedby="NameHelp"
              placeholder="Enter Book  Name"
              value={data.bookTitle}
              onChange={(e) => {
                setData({ ...data, bookTitle: e.target.value });
              }}
            />
          </div>
          <div class="form-group">
            <label class="font-weight-bold"> Author:</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputName"
              aria-describedby="NameHelp"
              placeholder="Enter Author Name"
              value={data.bookAuthor}
              onChange={(e) => {
                setData({ ...data, bookAuthor: e.target.value });
              }}
            />
          </div>
          <div class="form-group">
            <label class="font-weight-bold">Book Price:</label>
            <input
              type="number"
              class="form-control"
              placeholder="Enter Book Price"
              value={data.bookPrice}
              onChange={(e) => {
                setData({ ...data, bookPrice: e.target.value });
              }}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Book Description:</label>
            <textarea
              type="text"
              class="form-control"
              id="exampleInputPhone"
              placeholder="Book Description"
              value={data.bookDesc}
              onChange={(e) => {
                setData({ ...data, bookDesc: e.target.value });
              }}
            />
          </div>
          <br></br>
          <button
            type="submit"
            class="text-center btn btn-primary "
            onClick={(e) => {
              if (isEdit > -1) {
                books[isEdit] = data;
                isEdit = -1;
              } else {
                setBooks([...books, data]);
              }
              setData({
                ...data,
                bookTitle: "",
                bookPrice: "",
                bookDesc: "",
                bookAuthor: "",
              });

              e.preventDefault();
            }}
          >
            Add Book
          </button>
        </form>
      </div>
      <br></br>
      <hr></hr>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Book Name</th>
            <th scope="col">Author</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        {formattedoutput}
      </table>
    </>
  );
}

export default AddBooks;
