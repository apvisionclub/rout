import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>This is Home</h1>
      <Link to="/Live">
        <h1>react home</h1>
      </Link>
    </div>
  );
}
export default Home;
