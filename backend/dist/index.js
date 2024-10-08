"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_routes_1 = __importDefault(require("./api/auth/auth.routes"));
const users_routes_1 = __importDefault(require("./api/users/users.routes"));
const dotenv = __importStar(require("dotenv"));
// import cors from "cors";
dotenv.config();
const app = (0, express_1.default)();
// app.use(cors)
const PORT = process.env.PORT || 4000;
app.use(express_1.default.json());
app.use("/users", users_routes_1.default);
app.use("/auth", auth_routes_1.default);
app.listen(PORT, () => console.log(`Yayyy server running on port ${PORT} :0`));
// import express from "express";
// const PrismaClient = require("@prisma/client");
// const prisma = new PrismaClient.PrismaClient();
// const app = express();
// app.use(express.json());
// app.use((req, res, next) => {
//   res.setHeader(`Access-Control-Allow-Origin`, `*`);
//   res.setHeader(`Access-Control-Allow-Methods`, `GET, POST, PUT, DELETE`);
//   res.setHeader(`Access-Control-Allow-Headers`, `Content-Type`);
//   next();
// });
// app.get("/test", (req, res) => {
//   try {
//     res.status(200).json({ message: "API is working" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
// //get all users
// app.get("/users", async (req, res) => {
//   try {
//     const users = await prisma.user.findMany();
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
// //get single user with id
// app.get("/users/:id", async (req, res) => {
//   try {
//     const user = await prisma.user.findUnique({
//       where: {
//         id: Number(req.params.id),
//       },
//     });
//     res.status(200).json(user);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
// //create user
// app.post("/users", async (req, res) => {
//   try {
//     const user = await prisma.user.create({
//       data: {
//         name: req.body.name,
//         email: req.body.email,
//       },
//     });
//     res.status(201).json(user);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
// //update an existing user
// app.put("/users/:id", async (req, res) => {
//   try {
//     const user = await prisma.user.update({
//       where: {
//         id: Number(req.params.id),
//       },
//       data: {
//         name: req.body.name,
//         email: req.body.email,
//       },
//     });
//     res.status(200).json(user);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
// //delete user
// app.delete("/user/:id", async (req, res) => {
//   try {
//     const user = await prisma.user.delete({
//       where: {
//         id: Number(req.params.id),
//       },
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
// //start the server
// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => console.log(`Yayyy server running on port ${PORT} :0`));
