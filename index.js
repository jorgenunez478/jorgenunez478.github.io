import app from "./src/app.js";
import { PORT } from "./src/config.js";
import { connectDB } from "./src/db.js";

async function main() {
  try {
    await connectDB();
    app.listen(PORT);
    app.get('/', function(req, res) {
        res.send("soy un back");
    });
    console.log(`Listening on port http://localhost:${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV}`)
  } catch (error) {
    console.error(error);
  }
}

main();
