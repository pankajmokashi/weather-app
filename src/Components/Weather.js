import React, { useState } from "react";
import Header from "./Header";
import Content from "./Content";

function Weather() {
  let [data, setData] = useState({});
  console.log("data", data);
  return (
    <div className="container">
      <Header handleClick={setData} />
      {data.name && <Content data={data}/>}
    </div>
  );
}

export default Weather;
