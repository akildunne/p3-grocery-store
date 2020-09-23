const db = require("../db/connection");
const Product = require("../models/product");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const products = [
    {
      product: "Hotdogs",
      imgURL:
        "https://bit.ly/32FdRU2",
      description:
        "It's official! Hot dogs are sandwiches. And they are a staple for your summer BBQ festivities.",
      price: "$5.00",
      review: "Five stars"
    },
  ];

  await Product.insertMany(products);
  console.log("Created products!");
};
const run = async () => {
  await main();
  db.close();
};

run();
