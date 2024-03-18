import { app } from "./app.js";
import { connectDB } from "./data/database.js";

connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server is Working on port:${process.env.port} in ${process.env.NODE_ENV} Mode`);
});
