const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.send("thank you for calling me........YAY!");
});

app.listen(4200, () => console.log("listening on port 4200"));
