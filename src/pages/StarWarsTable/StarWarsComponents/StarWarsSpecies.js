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
  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/species/")
      .then((data) => {
        setFilms(data.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <TableContainer sx={{ width: "1300px", margin: "auto" }}>
      <Table aria-label="simple table ">
        <TableHead className="table-data">
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Classification</TableCell>
            <TableCell>Designation</TableCell>
            <TableCell>Average height</TableCell>
            <TableCell>Skin colors</TableCell>
            <TableCell>Hair colors</TableCell>
            <TableCell>Eye colors</TableCell>
            <TableCell>Average lifespan</TableCell>
            <TableCell>Homeworld</TableCell>
            <TableCell>Language</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {films.map((films) => {
            return (
              <TableRow
                key={films.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
                className="table-data"
              >
                <TableCell>{films.name}</TableCell>
                <TableCell>{films.classification}</TableCell>
                <TableCell>{films.designation}</TableCell>
                <TableCell>{films.average_height}</TableCell>
                <TableCell>{films.skin_colors}</TableCell>
                <TableCell>{films.hair_colors}</TableCell>
                <TableCell>{films.eye_colors}</TableCell>
                <TableCell>{films.average_lifespan}</TableCell>
                <TableCell>
                  <a href={films.homeworld}>Link</a>
                </TableCell>
                <TableCell>{films.language}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StarWarsPlanets;
