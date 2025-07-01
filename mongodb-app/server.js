const express = require("express");
const app = express();
let dbConnect = require("./dbConnect");

require("dotenv").config();
app.use(express.json());

let userRoutes = require("./routes/userRoutes");
let postRoutes = require("./routes/postRoutes");
let likeRoutes = require("./routes/likeRoutes");
let commentRoutes = require("./routes/commentRoutes");
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/likes", likeRoutes);
app.use("/api/comments", commentRoutes);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my MongoDB application." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
