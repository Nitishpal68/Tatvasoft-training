import React from "react";
import Title from "./title";

function List() {
  var details = [
    {
      id: 1,
      title: "Title page: ",
      description: "This is a home page",
    },
    {
      id: 2,
      title: "Contact: ",
      description: "This is  contact page",
    },
    {
      id: 3,
      title: "About us: ",
      description: "This is a about page",
    },
  ];

  var formattedoutput = details.map((x, index) => {
    return (
      <Title
        key={index}
        id={x.id}
        title={x.title}
        description={x.description}
      ></Title>
    );
  });

  return <div>{formattedoutput}</div>;
}

export default List;
