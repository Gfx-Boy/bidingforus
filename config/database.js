const mongoose = require("mongoose");

exports.connect = () => {
  const uri = "mongodb+srv://vishal922002:admin123@vishalproject.cfmca.mongodb.net/?retryWrites=true&w=majority&appName=vishalproject"; // Replace with your MongoDB URI

  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    authSource: 'admin', // Specifies the database for authentication
  });

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function () {
    console.log("connected to MongoDB");
  });
};
