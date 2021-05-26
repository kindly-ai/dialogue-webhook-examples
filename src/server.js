import express from "express";

import triggerByHour from "./examples/triggerByHour.js";

const app = express();

app.get("/trigger-by-hour", triggerByHour);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
