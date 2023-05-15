import React from "react";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <div class="col-md-6">
        <div class="h-100 p-5 text-bg-dark rounded-3">
          <h2>This is Home Component</h2>
          <p>
            Swap the background-color utility and add a `.text-*` color utility
            to mix up the jumbotron look. Then, mix and match with additional
            component themes and more.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
