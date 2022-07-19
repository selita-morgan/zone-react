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
      .get("https://swapi.dev/api/films/")
      .then((data) => {
        setFilms(data.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <TableContainer sx={{ width: "1400px", margin: "auto" }}>
      <Table aria-label="simple table ">
        <TableHead className="table-data">
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Episode Id</TableCell>
            <TableCell>Opening Crawl</TableCell>
            <TableCell>Director</TableCell>
            <TableCell>Producer</TableCell>
            <TableCell>Release date</TableCell>
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
                <TableCell>{films.title}</TableCell>
                <TableCell>{films.episode_id}</TableCell>
                <TableCell>{films.opening_crawl}</TableCell>
                <TableCell>{films.director}</TableCell>
                <TableCell>{films.producer}</TableCell>
                <TableCell>{films.release_date}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StarWarsPlanets;
