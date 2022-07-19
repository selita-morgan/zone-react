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
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/planets/")
      .then((data) => {
        setPlanets(data.data.results);
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
            <TableCell>Rotation period</TableCell>
            <TableCell>Orbital period</TableCell>
            <TableCell>Diameter</TableCell>
            <TableCell>Climate</TableCell>
            <TableCell>Gravity</TableCell>
            <TableCell>Terrain</TableCell>
            <TableCell>Surface water</TableCell>
            <TableCell>Population</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {planets.map((planets) => {
            return (
              <TableRow
                key={planets.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
                className="table-data"
              >
                <TableCell>{planets.name}</TableCell>
                <TableCell>{planets.rotation_period}</TableCell>
                <TableCell>{planets.orbital_period}</TableCell>
                <TableCell>{planets.diameter}</TableCell>
                <TableCell>{planets.climate}</TableCell>
                <TableCell>{planets.gravity}</TableCell>
                <TableCell>{planets.terrain}</TableCell>
                <TableCell>{planets.surface_water}</TableCell>
                <TableCell>{planets.population}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StarWarsPlanets;
