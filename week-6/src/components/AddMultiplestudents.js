import React, { useState } from "react";
var isEdit = -1;
function AddMultiplestudents() {
  const [students, setStudent] = useState([
    {
      studentName: "Nitish Pal",
      studentEmail: "nitishpal99@gmail.com",
      studentPhone: "9409537103",
    },
  ]);
  const [data, setData] = useState({});
  const formattedoutput = students.map((stu, i) => {
    return (
      <>
        <tbody class="p-4">
          <tr>
            <th scope="row">{i}</th>
            <td>{stu.studentName}</td>
            <td>{stu.studentEmail}</td>
            <td>{stu.studentPhone}</td>
            <td>
              <button
                onClick={() => {
                  // console.log(stu);

                  setData({
                    ...data,
                    studentName: students[i].studentName,
                    studentEmail: students[i].studentEmail,
                    studentPhone: students[i].studentPhone,
                  });
                  isEdit = i;
                }}
              >
                Edit
              </button>
              &nbsp;
              <button
                onClick={() => {
                  students.splice(i, 1);
                  setStudent([...students]);
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </>
    );
  });
  return (
    <div class="d-flex flex-column justify-content-center  align-items-center ">
      <form class="col-md-5">
        <div class="form-group">
          <label>Name:</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputName"
            aria-describedby="NameHelp"
            placeholder="Enter Name"
            value={data.studentName}
            onChange={(e) => {
              setData({ ...data, studentName: e.target.value });
            }}
          />
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail"
            aria-describedby="EmailHelp"
            placeholder="Enter Email"
            value={data.studentEmail}
            onChange={(e) => {
              setData({ ...data, studentEmail: e.target.value });
            }}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Phone:</label>
          <input
            type="number"
            class="form-control"
            id="exampleInputPhone"
            placeholder="Phone"
            value={data.studentPhone}
            onChange={(e) => {
              setData({ ...data, studentPhone: e.target.value });
            }}
          />
        </div>
        <br></br>
        <button
          type="submit"
          class="btn btn-primary"
          onClick={(e) => {
            if (isEdit > -1) {
              students[isEdit] = data;
              isEdit = -1;
            } else {
              setStudent([...students, data]);
            }
            setData({
              ...data,
              studentName: "",
              studentEmail: "",
              studentPhone: "",
            });

            e.preventDefault();
          }}
        >
          Submit
        </button>
      </form>
      {/* </form>
      <form
        
      >
        <table>
          <tr>
            <td>
              Enter Student Name:
              <input
                type="text"
                value={data.studentName}
                onChange={(e) => {
                  setData({ ...data, studentName: e.target.value });
                }}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              Enter Student Email:
              <input
                type="email"
                value={data.studentEmail}
                onChange={(e) => {
                  setData({ ...data, studentEmail: e.target.value });
                }}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              Enter Mobile number
              <input
                type="number"
                value={data.studentPhone}
                onChange={(e) => {
                  setData({ ...data, studentPhone: e.target.value });
                }}
              ></input>
            </td>
          </tr>
          <tr>
            <input
              style={{ alignContent: "center" }}
              type="submit"
              value="Save Data"
              onClick={(e) => {
                if (isEdit > -1) {
                  students[isEdit] = data;
                } else setStudent([...students, data]);
                setData({ ...data, studentName: "", studentEmail: "" });
                e.preventDefault();
              }}
            ></input>
          </tr>
        </table>
      </form> */}

      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">E-mail</th>
            <th scope="col">Phone</th>
            <th>Buttons</th>
          </tr>
        </thead>
        {formattedoutput}
      </table>
    </div>
  );
}

export default AddMultiplestudents;
