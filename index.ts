import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "API Worked" });
});

const port = process.env.PORT  || 3000;

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
