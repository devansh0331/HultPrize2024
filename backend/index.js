const express = require("express");
const mongoose = require("mongoose");
const app = express();

const cors = require("cors");
app.use(cors());
// Parse JSON bodies
app.use(express.json());

const mongoURL =
  "mongodb+srv://hultprizebitd24:Kl8ZBZUY8F2TE4z5@hultprize24db.j0cm54g.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

//USER SCHEMA
const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  semester: {
    type: String,
    required: true,
  },
  domain: {
    type: String,
    required: true,
  },

  que1: {
    type: String,
    required: true,
  },
  que2: {
    type: String,
    required: true,
  },
  que3: {
    type: String,
    required: true,
  },
  que4: {
    type: String,
  },
  taskLink: {
    type: String,
    required: true,
  },
});

const Registrations = mongoose.model("associates2024", userSchema);

app.post("/registrations", async (req, res) => {
  try {
    const {
      fname,
      lname,
      email,
      contactNumber,
      branch,
      semester,
      domain,
      que1,
      que2,
      que3,
      que4,
      taskLink,
    } = req.body;

    const user = new Registrations({
      fname,
      lname,
      email,
      contactNumber,
      branch,
      semester,
      domain,
      que1,
      que2,
      que3,
      que4,
      taskLink,
    });
    console.log(user);
    await user.save();
    res.json({ msg: "Submitted Successfully", status: 200 });
  } catch (error) {
    console.error("Error creating user:", error);
    res.json({ msg: "An error occurred while creating the user", status: 500 });
  }
});

app.get("/getAssociates", async (req, res) => {
  const data = await Registrations.find();
  console.log(data);
  res.send(data);
});

app.listen(5000, (req, res) => {
  console.log("Serving on Port 5000");
});
