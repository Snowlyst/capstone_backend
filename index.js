const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();

const corsOptions = {
  origin: process.env.CORS_OPTIONS,
};

const db = require("./db/models/index");
const {user,user_role,user_personal_detail}=db;

const UsersController = require("./controllers/usersController.js");
const usersController = new UsersController(user, user_role,user_personal_detail);
const UsersRouter = require("./routers/usersRouter");
const usersRouter = new UsersRouter(usersController);

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", usersRouter.routes());


app.listen(PORT, () => {
  console.log(`Express App listening on port ${PORT}`);
});
