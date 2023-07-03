import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://lucasp:123@cluster0.uc23oqw.mongodb.net/alura-node"
);

let db = mongoose.connection;

export default db;
