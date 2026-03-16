import express from "express";

const app = express();
const port = 3000;

const logger = (req, res, next) => {
  console.log("Request Method:",req.method);
  console.log("Request URL:", req.url);
  console.log("Request Code:",req.statusCode);
  
  
  next();
};

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
  console.log(req.statusCode);
  
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
