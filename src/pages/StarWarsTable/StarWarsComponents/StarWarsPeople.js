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
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/?page=1")
      .then((data) => {
        setPeople(data.data.results);
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
            <TableCell>Height</TableCell>
            <TableCell>Mass</TableCell>
            <TableCell>Hair color</TableCell>
            <TableCell>Skin color</TableCell>
            <TableCell>Eye color</TableCell>
            <TableCell>Birthday</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Homeworld</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {people.map((people) => {
            return (
              <TableRow
                key={people.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
                className="table-data"
              >
                <TableCell>{people.name}</TableCell>
                <TableCell>{people.height}</TableCell>
                <TableCell>{people.mass}</TableCell>
                <TableCell>{people.hair_color}</TableCell>
                <TableCell>{people.skin_color}</TableCell>
                <TableCell>{people.eye_color}</TableCell>
                <TableCell>{people.birth_year}</TableCell>
                <TableCell>{people.gender}</TableCell>
                <TableCell>
                  <a href={people.homeworld}>тяп</a>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StarWarsPlanets;
