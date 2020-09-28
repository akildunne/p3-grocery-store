const db = require("../db/connection");
const Product = require("../models/product");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const products = [
    {
      product: "Banana ",
      imgURL: "https://bit.ly/32FdRU2",
      imgURL2: "",
      imgURL3: "",
      imgURL4: "",
      description: " Best bananas",
      price: "0.75/lb",
    },
    {
      product: "Pink Lady Apple",
      imgURL: "https://bit.ly/32FdRU2",
      imgURL2: "",
      imgURL3: "",
      imgURL4: "",
      description: " An apple a day keeps the doctor away ",
      price: "1.00/lb",
    },
    {
      product: "Avocado",
      imgURL: "https://bit.ly/32FdRU2",
      imgURL2: "",
      imgURL3: "",
      imgURL4: "",
      description: " Yummy ",
      price: "1.00/lb",
    },
    {
      product: "Cream Cheese",
      imgURL: "https://bit.ly/32FdRU2",
      imgURL2: "",
      imgURL3: "",
      imgURL4: "",
      description: " Best cheese out there ",
      price: "2.00",
    },
    {
      product: "White Chocolate ",
      imgURL: "https://bit.ly/32FdRU2",
      imgURL2: "",
      imgURL3: "",
      imgURL4: "",
      description: "Sweet delight",
      price: "3.50/lb",
    },
    {
      product: "Graham Crackers ",
      imgURL: "https://bit.ly/32FdRU2",
      imgURL2: "",
      imgURL3: "",
      imgURL4: "",
      description: "Yummy Crackers",
      price: "4.00",
    },

    {
      product: "Hotdogs",
      imgURL: "https://bit.ly/32FdRU2",
      imgURL2: "",
      imgURL3: "",
      imgURL4: "",
      description:
        "It's official! Hot dogs are sandwiches. And they are a staple for your summer BBQ festivities.",
      price: "5.00",
    },
    {
      product: "Ketchup",
      imgURL: "https://bit.ly/32FdRU2",
      imgURL2: "",
      imgURL3: "",
      imgURL4: "",
      description: "Who doesn't love ketchup? ",
      price: "5.00",
    },
    {
      product: "Rasberries ",
      imgURL: "https://bit.ly/32FdRU2",
      imgURL2: "",
      imgURL3: "",
      imgURL4: "",
      description: "Yummy in my tummy",
      price: "5.50",
    },
    {
      product: "Whole Milk ",
      imgURL: "https://bit.ly/32FdRU2",
      imgURL2: "",
      imgURL3: "",
      imgURL4: "",
      description: "Calcium",
      price: "6.50",
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
