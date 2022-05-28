import { Request, Response } from "express"

const express = require('express')
const cors = require('cors')
const input = require('prompt-sync')()
const sqlite3 = require('sqlite3')
const { default: axios } = require('axios')

const app = express()
const PORT = process.env.PORT || 8080

// connecting the SQLite DB
const db = new sqlite3.Database('cred.db')

let chains = new Map()

app.get("/", (req: Request, res: Response) => {
    res.status(200).send("Service is Running")
})

// register the node


// add new blocks


// verify new block before adding to the blockchain


// calculate distance using geolocation


app.listen(PORT, () => {
    console.log(`Listening on 8080`)
})