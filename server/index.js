const express = require("express");
const app = express();
require("dotenv").config({ path: "../.env" });
const axios = require("axios");
const igdb = require("igdb-api-node").default;
const client = igdb(process.env.VUE_APP_API_KEY);

const test = async () => {};

test();

app.get("/", async (req, res) => {
  try {
    const response = await client.fields("name").request("/games"); // execute the query and return a response object

    res.send(response.data);
  } catch (error) {
    console.log(error);
  }
});

app.listen(3000, () => {
  console.log("Server is running on PORT 3000");
});
