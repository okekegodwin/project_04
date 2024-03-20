const express = require("express");

const authorRouter = express.Router();

authorRouter.get("/", (req, res) => {
	res.json({ message: "Author / route" });
});

authorRouter.get("/:authorId", (req, res) => {
	res.json({ name: "Harry potter", pages: 760 });
});

authorRouter.post("/", (req, res) => {
	res.json({ message: "Post author route" });
});

authorRouter.put("/", (req, res) => {
	res.json({ message: "Put author route" });
});

authorRouter.delete("/:authorId", (req, res) => {
	res.json({ message: "Delete author route" });
});

module.exports = authorRouter;