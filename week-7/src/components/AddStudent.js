import React from "react";
import { useState } from "react";

var isEdit = -1;

function AddStudent() {
  const [students, SetStudents] = useState(["nitish", "abc"]);
  const [studenttemp, setStudent] = useState();

  let formattedoutput = students.map((stu, i) => {
    return (
      <li>
        {stu}

        <button
          onClick={() => {
            console.log(stu);
            setStudent(stu);
            isEdit = i;
          }}
        >
          Edit
        </button>

        <button
          onClick={() => {
            students.splice(i, 1);
            setStudent([...studenttemp]);
          }}
        >
          Delete
        </button>
      </li>
    );
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "40vh",
        flexDirection: "column",
      }}
    >
      <form>
        <table>
          <tr>Student Name:</tr>
          <tr>
            <input
              type="text"
              value={studenttemp}
              onChange={(e) => {
                setStudent(e.target.value);
              }}
            ></input>
          </tr>

          <tr>
            <input
              type="submit"
              value="Add Students"
              onClick={(e) => {
                if (isEdit > -1) {
                  students[isEdit] = studenttemp;
                  isEdit = -1;
                } else {
                  SetStudents([...students, studenttemp]);
                }
                setStudent("");
                e.preventDefault();
              }}
            ></input>
          </tr>
        </table>
      </form>
      <ol>{formattedoutput}</ol>
    </div>
  );
}

export default AddStudent;
