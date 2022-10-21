import React, { useState } from "react";
import { getById } from "../utils/firebase";
import Table from "./Table";
import Loader from "./Loader";

const Results = () => {
  const [id, setId] = useState("");
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState(null);

  const handleSubmit = async () => {
    setLoader(true);
    getById(id)
      .then((d) => {
        setData(d);
        setLoader(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      className="container"
      style={{ marginTop: "20px", marginBottom: "100px" }}
    >
      <div className="row m hide-print">
        <input
          type="text"
          placeholder="Your Id containing '17-05-'"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="waves-effect waves-light light-blue darken-1 btn-large"
        >
          <i className="material-icons left">search</i>Search
        </button>
      </div>
      {loader ? <Loader /> : data && <Table data={data} />}
    </div>
  );
};

export default Results;
