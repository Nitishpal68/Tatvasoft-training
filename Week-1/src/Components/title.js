import React from "react";
import List from "./List";
import "./titlestyle.css";
//Simple JSX and props passing in title
//Rendering list data in form of table
//Adding CSS in title page

function Title({ name, title, description, id }) {
  // return (
  //   <div>
  //     Hello world I ' m {name}
  //     <br></br>
  //     Title : {title}
  //     <br></br>
  //     Description : {description}
  //   </div>
  // );

  // key cannot be accessed so used id props

  return (
    // <>
    //   <table border={1}>
    //     <tr>
    //       <td className="table-id">{id}</td>
    //       {/* <td>{key}</td> */}
    //       <td>{title}</td>
    //       <td>{description}</td>
    //     </tr>
    //   </table>

    // </>
    <>
      <label>--Title--</label>
      <p className="title">This is a title page</p>
      <label>--Description--</label>
      <p className="description">
        Heaven is under our feet as well as over our heads
      </p>
    </>
  );
}

export default Title;
