const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const AddressSchema = new mongoose.Schema({
  flat: String,
  area: String,
  category: String,
  lat: Number,
  lng: Number,
  address: String,
});
const Address = mongoose.model("Address", AddressSchema);

mongoose.connect("mongodb://localhost:27017/addresses", { useNewUrlParser: true });

app.get("/addresses", async (req, res) => res.json(await Address.find()));
app.post("/addresses", async (req, res) => res.json(await Address.create(req.body)));
app.delete("/addresses/:id", async (req, res) => res.json(await Address.findByIdAndDelete(req.params.id)));

app.listen(5000, () => console.log("Server running on port 5000"));
