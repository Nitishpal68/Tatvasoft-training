import React, { useState } from "react";

var isEdit = -1;
function AddStudentp() {
  const [student, setStudent] = useState([
    {
      studentName: "Nitish Pal",
      studentEmail: "nitishpal99@gmail.com",
    },
  ]);
  const [data, setData] = useState({});

  let formattedoutput = student.map((stu, i) => {
    return (
      <>
        <tr>
          <td> {stu.studentName}</td>
          <td> {stu.studentEmail}</td>
          <td>
            <button
              onClick={() => {
                student.splice(i, 1);
                setStudent([...student]);
                // console.log(stu);
              }}
            >
              Delete
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                console.log(stu);
                setData({
                  ...data,
                  studentName: student[i].studentName,
                  studentEmail: student[i].studentEmail,
                });
                isEdit = i;
              }}
            >
              Edit
            </button>
          </td>
        </tr>
      </>
    );
  });

  return (
    <div>
      <form>
        <table>
          <tr>
            <td>
              Enter student Name:
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
                type="text"
                value={data.studentEmail}
                onChange={(e) => {
                  setData({ ...data, studentEmail: e.target.value });
                }}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="button"
                value="Add students"
                onClick={() => {
                  if (isEdit > -1) {
                    student[isEdit] = data;
                    isEdit = -1;
                  } else setStudent([...student, data]);

                  setData({ ...data, studentName: "", studentEmail: "" });
                }}
              />{" "}
            </td>
          </tr>
        </table>
      </form>
      <table border="1">{formattedoutput}</table>
    </div>
  );
}

export default AddStudentp;
