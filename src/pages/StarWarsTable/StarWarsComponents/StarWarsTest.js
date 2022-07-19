import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

const columns = [
  { field: "id", headerName: "ID" },
  { field: "title", headerName: "Title", width: 300 },
  { field: "body", headerName: "Body", width: 600 },
];

const StarWarsTest = () => {
  var resultSet;

  for (let i = 1; i < 3; i++) {
    axios
      .get("https://swapi.dev/api/people/?page=1")
      .then((res) => {
        resultSet = res.data.results;

        // FIRST LOG, inside axios function
        console.log(resultSet);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div style={{ height: 700, width: 800 }}>
      <DataGrid rows={resultSet} columns={columns} pageSize={11} />
    </div>
  );
};

export default StarWarsTest;
