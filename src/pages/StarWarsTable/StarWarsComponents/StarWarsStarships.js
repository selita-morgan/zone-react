import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

const StarWarsStarships = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/starships/")
      .then((data) => {
        setStarships(data.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <TableContainer sx={{ width: "1000px", margin: "auto" }}>
      <Table aria-label="simple table ">
        <TableHead className="table-data">
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Model</TableCell>
            <TableCell>Manufacturer</TableCell>
            <TableCell>Cost</TableCell>
            <TableCell>Max Speed</TableCell>
            <TableCell>Consumables</TableCell>
            <TableCell>Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {starships.map((starships) => {
            return (
              <TableRow
                key={starships.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
                className="table-data"
              >
                <TableCell>{starships.name}</TableCell>
                <TableCell>{starships.model}</TableCell>
                <TableCell>{starships.manufacturer}</TableCell>
                <TableCell>{starships.cost_in_credits}</TableCell>
                <TableCell>{starships.max_atmosphering_speed}</TableCell>
                <TableCell>{starships.consumables}</TableCell>
                <TableCell>{starships.hyperdrive_rating}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StarWarsStarships;
