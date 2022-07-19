import React, { useState, useEffect, Component } from "react";
import "./StarWarsPage.scss";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import axios from "axios";
import StarWarsStarships from "./StarWarsComponents/StarWarsStarships";
import StarWarsPlanets from "./StarWarsComponents/StarWarsPlanets";
import StarWarsPeople from "./StarWarsComponents/StarWarsPeople";
import StarWarsFilms from "./StarWarsComponents/StarWarsFilms";
import StarWarsSpecies from "./StarWarsComponents/StarWarsSpecies";
import StarWarsVehicles from "./StarWarsComponents/StarWarsVehicles";
import StarWarsTest from "./StarWarsComponents/StarWarsTest";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const StarWarsPage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="lol">
      <div className="starwars-page">
        <p className="starwars-page-text__title">
          Have you watched <br />
          Star Wars?
        </p>
        <p className="starwars-page-text__subtitle">
          All information below is obtained from
          <br />
          the open API - https://swapi.dev/
        </p>
        <div className="starwars-page-button">
          <a href="#TryItNow">Try it now!</a>
        </div>
      </div>
      <div className="starwars-page__our-team">
        <p id="TryItNow" className="starwars-page__our-team-text__title">
          The Star Wars API
        </p>
        <p className="starwars-page__our-team-text__subtitle">
          All the Star Wars data you've ever wanted:
          <br />
          Planets, Spaceships, Vehicles, People, Films and Species
        </p>
      </div>

      <Box className="starwars-page__tabs">
        <Box sx={{ borderBottom: 1, borderColor: "white" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab sx={{ color: "white" }} label="Starships" {...a11yProps(0)} />
            <Tab sx={{ color: "white" }} label="Planets" {...a11yProps(1)} />
            <Tab sx={{ color: "white" }} label="People" {...a11yProps(2)} />
            <Tab sx={{ color: "white" }} label="Films " {...a11yProps(3)} />
            <Tab sx={{ color: "white" }} label="Species" {...a11yProps(4)} />
            <Tab sx={{ color: "white" }} label="Vehicles" {...a11yProps(5)} />
            <Tab sx={{ color: "white" }} label="Test" {...a11yProps(6)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <StarWarsStarships />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <StarWarsPlanets />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <StarWarsPeople />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <StarWarsFilms />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <StarWarsSpecies />
        </TabPanel>
        <TabPanel value={value} index={5}>
          <StarWarsVehicles />
        </TabPanel>
        <TabPanel value={value} index={6}>
          <StarWarsTest />
        </TabPanel>
      </Box>
    </div>
  );
};

export default StarWarsPage;
