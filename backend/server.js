import express from "express";

import app from "./app.js";

app.listen(process.env.PORT, () => {
  console.log(
    `The server is running on http://localhost:${process.env.PORT} 🚀🚀🚀`
  );
});
