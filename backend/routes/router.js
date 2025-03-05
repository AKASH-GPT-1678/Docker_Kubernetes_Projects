import { Router } from "express";
import express from 'express'
// import Register from "../functions/Register.js";
// import { Register } from "../functions/Register.js";
import { Register } from '../functions/Register.js';
const router = express.Router();





router.post("/register" , Register)

export default router