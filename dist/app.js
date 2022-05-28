"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const cors = require('cors');
const input = require('prompt-sync')();
const sqlite3 = require('sqlite3');
const { default: axios } = require('axios');
const app = express();
// connecting the SQLite DB
const db = new sqlite3.Database('cred.db');
app.get("/", (req, res) => {
    res.status(200).send("Service is Running");
});
// register the node
app.post("/register", (req, res) => {
    console.log(req.headers.host);
    res.send(200);
});
// add new blocks
// verify new block before adding to the blockchain
// calculate distance using geolocation
app.listen(8080, "192.168.29.92", () => {
    console.log(`Listening on 8080`);
});
//# sourceMappingURL=app.js.map