"use strict";

const express = require("express");
const app = express();

const dogRoutes = require("./routes/dogRoutes");
const cachedDogRoutes = require("./routes/cachedDogRoutes");

app.use(express.json());

app.use("/api/dogs", dogRoutes);
app.use("/api/cached-dogs", cachedDogRoutes);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to the Dog CEO API app!" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
