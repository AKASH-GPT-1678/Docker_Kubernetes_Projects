import express from "express";
import jwt from 'jsonwebtoken'

const generatetoken = (payload) => {
    const secretKey = 'vijayram'
    const options = {
        expiresIn : '2h'
    }

    const token = jwt.sign(payload, secretKey, options);
    return token;
  };
  








export default generatetoken