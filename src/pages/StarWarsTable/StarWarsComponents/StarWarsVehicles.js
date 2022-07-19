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

const StarWarsPlanets = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/vehicles/")
      .then((data) => {
        setVehicles(data.data.results);
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
            <TableCell>Max speed</TableCell>
            <TableCell>Crew</TableCell>
            <TableCell>Consumables</TableCell>
            <TableCell>Class</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {vehicles.map((vehicles) => {
            return (
              <TableRow
                key={vehicles.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
                className="table-data"
                auto
              >
                <TableCell>{vehicles.name}</TableCell>
                <TableCell>{vehicles.model}</TableCell>
                <TableCell>{vehicles.manufacturer}</TableCell>
                <TableCell>{vehicles.cost_in_credits}</TableCell>
                <TableCell>{vehicles.max_atmosphering_speed}</TableCell>
                <TableCell>{vehicles.crew}</TableCell>
                <TableCell>{vehicles.consumables}</TableCell>
                <TableCell>{vehicles.vehicle_class}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StarWarsPlanets;
