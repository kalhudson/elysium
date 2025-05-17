const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
//app.use("/api/products", require("./routes/productRoutes"));
//app.use("/api/cart", require("./routes/cartRoutes"));

// // Demo data route for hackathon
// app.get("/api/seed", async (req, res) => {
//   try {
//     const Product = require("./models/productModel");

//     // Clear existing products
//     await Product.deleteMany({});

//     // Add demo products
//     const demoProducts = [
//       {
//         name: "Stylish Sunglasses",
//         description: "Trendy sunglasses with UV protection",
//         price: 1299,
//         originalPrice: 1999,
//         images: ["/assets/demo-products/sunglasses.jpg"],
//         category: "accessories",
//         tags: ["fashion", "summer", "eyewear"],
//         rating: 4.5,
//         reviews: 128,
//         inStock: true,
//         arEnabled: true,
//         arAssets: {
//           type: "glasses",
//           modelPath: "/assets/ar-models/glasses/sunglasses.png",
//         },
//       },
//       {
//         name: "Wireless Headphones",
//         description: "Premium noise-cancelling wireless headphones",
//         price: 8999,
//         originalPrice: 12999,
//         images: ["/assets/demo-products/headphones.jpg"],
//         category: "electronics",
//         tags: ["audio", "wireless", "gadgets"],
//         rating: 4.8,
//         reviews: 356,
//         inStock: true,
//       },
//       {
//         name: "Smart Watch",
//         description: "Fitness tracker with heart rate monitoring",
//         price: 4999,
//         originalPrice: 5999,
//         images: ["/assets/demo-products/smartwatch.jpg"],
//         category: "electronics",
//         tags: ["wearable", "fitness", "gadgets"],
//         rating: 4.3,
//         reviews: 89,
//         inStock: true,
//       },
//       {
//         name: "Vintage Hat",
//         description: "Classic vintage-style hat",
//         price: 899,
//         originalPrice: 1299,
//         images: ["/assets/demo-products/hat.jpg"],
//         category: "accessories",
//         tags: ["fashion", "vintage", "headwear"],
//         rating: 4.1,
//         reviews: 42,
//         inStock: true,
//         arEnabled: true,
//         arAssets: {
//           type: "hat",
//           modelPath: "/assets/ar-models/hats/vintage-hat.png",
//         },
//       },
//     ];

//     await Product.insertMany(demoProducts);

//     res.json({ message: "Demo data added successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Server Error", error: error.message });
//   }
// });

// Basic route
app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
