require("dotenv").config();
const express = require("express");
const app = express();

let dbConnect = require("./dbConnect");

app.use(express.json());

let userRoutes = require("./routes/users");
let postRoutes = require("./routes/posts");
let commentRoutes = require("./routes/comments");
let likeRoutes = require("./routes/likes");

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likeRoutes);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my MySQL application." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
